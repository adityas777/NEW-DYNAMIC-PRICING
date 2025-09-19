import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// RAG knowledge base for pricing and inventory management
const knowledgeBase = {
  pricing_strategies: [
    "Dynamic pricing based on expiry dates: Products with 1-2 days to expiry should receive 20-30% discounts",
    "Stock-based pricing: High inventory levels (>100 units) warrant 5-10% additional discounts",
    "Turnover rate optimization: Slow-moving products (turnover <0.2) need aggressive pricing",
    "Category-specific strategies: Perishables require more aggressive discounting than shelf-stable items",
    "Regional pricing: Consider local market conditions and seasonal factors",
  ],
  inventory_management: [
    "Reorder points should be set at 30% of average stock levels",
    "Fast-moving items (turnover >0.6) need higher safety stock",
    "Seasonal adjustments: Increase stock 20-30% during peak seasons",
    "Supplier lead times affect optimal reorder quantities",
    "ABC analysis: Focus on high-value, high-turnover items",
  ],
  waste_reduction: [
    "First-in-first-out (FIFO) rotation reduces spoilage by 15-25%",
    "Dynamic pricing can reduce waste by up to 40% for perishables",
    "Staff training on proper storage extends product life by 10-20%",
    "Temperature monitoring prevents 30% of cold chain losses",
    "Donation programs for near-expiry items provide tax benefits",
  ],
  business_metrics: [
    "Gross margin should be maintained above 25% even with discounts",
    "Inventory turnover ratio target: 8-12 times per year for perishables",
    "Waste percentage should be below 5% of total inventory value",
    "Customer satisfaction correlates with product freshness scores",
    "Revenue optimization balances margin and volume",
  ],
}

function findRelevantContext(query: string): string[] {
  const queryLower = query.toLowerCase()
  const relevantInfo: string[] = []

  // Search through knowledge base
  Object.entries(knowledgeBase).forEach(([category, items]) => {
    items.forEach((item) => {
      const itemLower = item.toLowerCase()
      // Simple keyword matching
      if (queryLower.includes("pricing") || queryLower.includes("price") || queryLower.includes("discount")) {
        if (category === "pricing_strategies") relevantInfo.push(item)
      }
      if (queryLower.includes("inventory") || queryLower.includes("stock") || queryLower.includes("reorder")) {
        if (category === "inventory_management") relevantInfo.push(item)
      }
      if (queryLower.includes("waste") || queryLower.includes("spoilage") || queryLower.includes("expiry")) {
        if (category === "waste_reduction") relevantInfo.push(item)
      }
      if (queryLower.includes("metric") || queryLower.includes("performance") || queryLower.includes("kpi")) {
        if (category === "business_metrics") relevantInfo.push(item)
      }

      // Keyword matching within content
      const keywords = queryLower.split(" ")
      keywords.forEach((keyword) => {
        if (keyword.length > 3 && itemLower.includes(keyword)) {
          if (!relevantInfo.includes(item)) {
            relevantInfo.push(item)
          }
        }
      })
    })
  })

  return relevantInfo.slice(0, 5) // Limit to top 5 most relevant
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Find relevant context from knowledge base
    const relevantContext = findRelevantContext(message)

    // Construct system prompt with RAG context
    const systemPrompt = `You are an AI assistant specialized in retail pricing optimization and inventory management. You help users make data-driven decisions about pricing, inventory, and waste reduction.

${
  relevantContext.length > 0
    ? `
Relevant knowledge base information:
${relevantContext.map((item, index) => `${index + 1}. ${item}`).join("\n")}
`
    : ""
}

Guidelines:
- Provide specific, actionable advice based on retail best practices
- Use data-driven insights when possible
- Consider both profitability and waste reduction
- Explain the reasoning behind your recommendations
- If you don't have specific information, acknowledge limitations and suggest general best practices

Answer the user's question about pricing, inventory management, or related retail operations.`

    // Generate response using Groq
    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"),
      system: systemPrompt,
      prompt: message,
      maxTokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({
      response: text,
      sources: relevantContext.length > 0 ? relevantContext : null,
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        error: "Failed to generate response",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
