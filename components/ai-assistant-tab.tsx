"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RAGChatbot } from "@/components/rag-chatbot"
import { Brain, MessageSquare, Lightbulb, TrendingUp } from "lucide-react"

export function AIAssistantTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Brain className="h-6 w-6 text-blue-500" />
          AI Pricing Assistant
        </h2>
        <p className="text-gray-600">
          Get intelligent recommendations for pricing, inventory management, and waste reduction
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              Pricing Strategies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs">
              Dynamic pricing based on expiry dates, stock levels, and market conditions
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-500" />
              Inventory Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs">
              Optimal reorder points, safety stock levels, and turnover optimization
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Waste Reduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xs">
              FIFO strategies, temperature monitoring, and donation programs
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Chatbot */}
      <RAGChatbot />
    </div>
  )
}
