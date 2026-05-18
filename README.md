DEPLOYED LINK -  https://v0-remix-of-fork-of-vercel-ai-proj-chi.vercel.app/ 
DEPLOYED LINK - https://ai.studio/apps/96e513b7-5e12-4fb2-b604-9d761e8c10c3?fullscreenApplet=true
---
VR STORE- https://v0.dev/chat/fork-of-vercel-ai-project-F8XVgQQB8Jo?b=b_GSQ55wSQorn&f=1#qWdEqz19r0WToTnzo4zCM6zRSEIAdvyO
---
YOUTUBE VIDEO - https://youtu.be/LHUvUEHrERg?si=mpT66vjKKZPkA6Z5

---
Images- https://drive.google.com/drive/folders/1fwXgu02CFtwEhOEYKt6xMd4_Yt_85JCh?usp=sharing
---
OPAL- https://opal.google/edit/1evXz2IwjVV7jkxi_pDsr5WDRLAy2ANB_
---
USER TESTING - https://docs.google.com/document/d/1Rr-y2QQachEOi89LafJazKhOkbIBZSNy/edit?usp=sharing&ouid=110889454979848548595&rtpof=true&sd=true
---
Smart Dynamic Pricing Engine - Demo Guide
🚀 Complete System Demonstration
This guide walks you through the complete Smart Dynamic Pricing Engine system, showcasing all integrated components and their real-time capabilities.
----
📋 System Components
1. Pathway Framework
Real-time data stream processing
Live inventory monitoring
Automated data pipeline management
2. Live Inventory Feed
Real-time product data ingestion
Inventory level tracking
Expiry date monitoring
3. Vector Store Integration
Product similarity search
Semantic product matching
Advanced analytics capabilities
4. Real-time Pricing Model
Q-learning based optimization
Dynamic discount calculation
Revenue and waste reduction forecasting
5. Live Dashboard API
Real-time metrics aggregation
Alert management system
Performance tracking
6. Real-time UI Updates
WebSocket-based live updates
Interactive dashboard overlay
Live alerts ticker
🎯 Running the Demo
Option 1: Complete System Demo
```bash

---
PATHWAY INTEGRATION

## ore Integration Points:

*1. Python Backend Streaming:*

- scripts/streaming_pipeline.py - Main Pathway streaming pipeline that processes CSV inventory data in real-time
- scripts/pricing_engine.py - Live pricing engine that integrates with Pathway streams to recalculate prices dynamically


*2. TypeScript Client Integration:*

- lib/pathway-client.ts - WebSocket client for connecting to Pathway streams with real-time product updates
- lib/live-data-manager.ts - Manages live data subscriptions and handles reconnection logic


*3. API Integration:*

- app/api/products/live/route.ts - Serves live product data from Pathway streams
- app/api/realtime-pricing/route.ts - Provides real-time pricing updates


*4. Documentation & Implementation:*

- docs/pathway-implementation-guide.ts - Complete 8-step implementation guide
- README_DEMO.md - Demo instructions including Pathway setup


The integration creates a complete real-time data pipeline: CSV inventory data flows through Pathway's streaming engine, triggers dynamic pricing calculations, and pushes updates to the frontend via WebSocket connections. The system automatically handles reconnections and provides fallback mechanisms when live data isn't available.

