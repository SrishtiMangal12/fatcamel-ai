export interface OperationalMatrixRow {
  task: string;
  before: string;
  after: string;
}

export interface BlueprintStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  icon: string; // lucide-react icon name
  summary: string;
  painPoints: string[];
  matrix: OperationalMatrixRow[];
  blueprint: BlueprintStep[];
  stats: ServiceStat[];
  relatedProducts?: string[];
}

export const servicesData: Service[] = [
  {
    slug: "ai-business-automation",
    name: "AI Business Automation",
    eyebrow: "Foundation",
    tagline: "Turn multi-step manual workflows into agents that run themselves.",
    icon: "Workflow",
    summary:
      "We map your highest-friction operational workflows — the ones living in spreadsheets, inboxes, and tribal knowledge — and rebuild them as autonomous agent pipelines that execute, log, and escalate without a human in the loop.",
    painPoints: [
      "Ops teams re-keying the same data across five disconnected tools",
      "Approval chains stalling for days waiting on manual review",
      "No visibility into which workflows are actually costing the most hours",
    ],
    matrix: [
      { task: "Invoice reconciliation", before: "3 people, 6 hrs/week, manual spreadsheet cross-check", after: "1 agent, 4 min/run, auto-flags mismatches only" },
      { task: "Vendor onboarding", before: "5–7 business days across 4 departments", after: "Same-day, agent-routed approvals with audit trail" },
      { task: "Internal reporting", before: "Analyst compiles weekly deck manually", after: "Live agent-generated dashboard, always current" },
    ],
    blueprint: [
      { phase: "01", title: "Workflow Audit", description: "We shadow your team for a week to map every manual handoff and decision point in the target process.", duration: "Week 1" },
      { phase: "02", title: "Agent Architecture", description: "We design the agent graph — triggers, tools, guardrails, and human-escalation points — before writing code.", duration: "Week 2" },
      { phase: "03", title: "Build & Sandbox", description: "Agents are built against a sandboxed copy of your systems and stress-tested on historical data.", duration: "Weeks 3–4" },
      { phase: "04", title: "Shadow Mode", description: "The agent runs live in parallel with your team, flagged for review but not yet acting alone.", duration: "Week 5" },
      { phase: "05", title: "Full Deployment", description: "Agent goes live with monitoring, rollback controls, and a monthly tuning cadence.", duration: "Week 6+" },
    ],
    stats: [
      { value: "70%", label: "avg. reduction in manual task hours" },
      { value: "4.2x", label: "faster process cycle time" },
      { value: "48hr", label: "typical time to first working agent" },
    ],
  },
  {
    slug: "sales-marketing-automation",
    name: "Sales & Marketing Automation",
    eyebrow: "Revenue",
    tagline: "Agents that qualify, nurture, and hand off warm leads while your team sleeps.",
    icon: "TrendingUp",
    summary:
      "We connect agents to your CRM, ad platforms, and inbox so leads are scored, enriched, and nurtured the moment they arrive — with reps only stepping in for high-intent conversations.",
    painPoints: [
      "Leads sitting unqualified in the CRM for 48+ hours",
      "SDRs spending more time on data entry than on calls",
      "Marketing and sales data living in disconnected silos",
    ],
    matrix: [
      { task: "Lead qualification", before: "SDR manually reviews and scores each lead", after: "Agent enriches, scores, and routes in under 60 seconds" },
      { task: "Follow-up cadence", before: "Inconsistent, rep-dependent outreach", after: "Adaptive multi-touch sequences tuned per segment" },
      { task: "Campaign reporting", before: "Marketing builds a monthly attribution report by hand", after: "Agent-generated attribution refreshed daily" },
    ],
    blueprint: [
      { phase: "01", title: "Funnel Mapping", description: "We trace your funnel from first touch to closed-won to find the drop-off points agents can fix.", duration: "Week 1" },
      { phase: "02", title: "CRM & Tool Wiring", description: "Agents are connected to your CRM, ad accounts, and communication tools via secure integrations.", duration: "Week 2" },
      { phase: "03", title: "Scoring Model", description: "We train the qualification model on your closed-won and closed-lost history.", duration: "Week 3" },
      { phase: "04", title: "Live Pilot", description: "Agents run on a subset of inbound leads with reps reviewing every handoff.", duration: "Week 4" },
      { phase: "05", title: "Scale", description: "Full rollout across all lead sources with weekly performance tuning.", duration: "Week 5+" },
    ],
    stats: [
      { value: "3.1x", label: "more qualified meetings booked" },
      { value: "60sec", label: "average lead response time" },
      { value: "35%", label: "lift in pipeline conversion" },
    ],
    relatedProducts: ["outreachai", "leadactivation"],
  },
  {
    slug: "agentic-ai-solution",
    name: "Agentic AI Solutions",
    eyebrow: "Core Platform",
    tagline: "Multi-agent systems that plan, act, and self-correct across your stack.",
    icon: "Bot",
    summary:
      "For processes too complex for a single automation, we design multi-agent systems — planner, executor, and reviewer agents working together with shared memory and tool access — to handle open-ended operational work.",
    painPoints: [
      "Tasks that require judgment calls no simple script can make",
      "Existing RPA tools breaking every time a UI changes",
      "No system that can plan multi-step work, only trigger single actions",
    ],
    matrix: [
      { task: "Complex case handling", before: "Human reviews every case end-to-end", after: "Planner agent decomposes case, executor agents act, reviewer agent audits" },
      { task: "Cross-system tasks", before: "Manual copy-paste between 3+ platforms", after: "Agents call each platform's API directly, no human bridging" },
      { task: "Exception handling", before: "Escalated to a manager, resolved next day", after: "Agent attempts resolution, escalates only true edge cases" },
    ],
    blueprint: [
      { phase: "01", title: "Task Decomposition", description: "We break the target objective into sub-tasks and define which agent role owns each.", duration: "Week 1" },
      { phase: "02", title: "Memory & Tooling", description: "We build the shared memory layer and tool APIs agents will call.", duration: "Week 2–3" },
      { phase: "03", title: "Multi-Agent Testing", description: "Planner, executor, and reviewer agents are tested together against real scenarios.", duration: "Week 4" },
      { phase: "04", title: "Guardrails", description: "We add confidence thresholds and human-in-the-loop checkpoints for high-stakes actions.", duration: "Week 5" },
      { phase: "05", title: "Production Rollout", description: "System goes live with full observability into every agent decision.", duration: "Week 6+" },
    ],
    stats: [
      { value: "12+", label: "systems a single agent fleet can span" },
      { value: "92%", label: "case resolution without escalation" },
      { value: "5.8x", label: "faster complex-case turnaround" },
    ],
  },
  {
    slug: "voice-ai-agents",
    name: "Voice AI Agents",
    eyebrow: "Conversation",
    tagline: "Natural-sounding phone agents that book, qualify, and support around the clock.",
    icon: "Phone",
    summary:
      "Our voice agents handle inbound and outbound calls with low-latency, natural speech — booking appointments, answering FAQs, and qualifying callers before a human ever picks up.",
    painPoints: [
      "Front desk overwhelmed during peak call hours",
      "After-hours calls going straight to voicemail and never converting",
      "Call quality varying wildly rep to rep",
    ],
    matrix: [
      { task: "Appointment booking", before: "Receptionist manually checks calendar, calls back", after: "Voice agent books directly into calendar during the call" },
      { task: "After-hours coverage", before: "Voicemail, next-day callback", after: "Voice agent answers and resolves 24/7" },
      { task: "Call QA", before: "Spot-checked by a supervisor", after: "100% of calls transcribed, scored, and searchable" },
    ],
    blueprint: [
      { phase: "01", title: "Call Flow Design", description: "We script the agent's conversation paths, tone, and escalation triggers with your team.", duration: "Week 1" },
      { phase: "02", title: "Voice & Latency Tuning", description: "We select and tune the voice model for natural cadence and sub-second response.", duration: "Week 2" },
      { phase: "03", title: "Calendar & CRM Wiring", description: "The agent is connected to your booking system and CRM for live actions.", duration: "Week 3" },
      { phase: "04", title: "Live Call Pilot", description: "Agent handles a portion of real calls with full transcripts reviewed daily.", duration: "Week 4" },
      { phase: "05", title: "Full Line Coverage", description: "Agent takes primary or overflow call coverage across all lines.", duration: "Week 5+" },
    ],
    stats: [
      { value: "24/7", label: "call coverage, zero missed calls" },
      { value: "<800ms", label: "average agent response latency" },
      { value: "41%", label: "more bookings from after-hours calls" },
    ],
  },
  {
    slug: "ai-realtors",
    name: "AI Realtors",
    eyebrow: "Real Estate",
    tagline: "Agents that qualify buyers, schedule showings, and follow up on every listing.",
    icon: "Home",
    summary:
      "Built for brokerages and agents, our AI realtor agents respond to listing inquiries instantly, pre-qualify buyers on budget and timeline, and keep every lead warm until an agent is needed.",
    painPoints: [
      "Listing inquiries answered hours later, after the buyer has moved on",
      "Agents spending evenings on repetitive buyer Q&A instead of showings",
      "No consistent follow-up on cold leads from past listings",
    ],
    matrix: [
      { task: "Listing inquiry response", before: "Agent replies when available, often next day", after: "Agent responds within seconds, any hour" },
      { task: "Buyer pre-qualification", before: "Done on the first phone call", after: "Done via chat/voice before the agent is looped in" },
      { task: "Showing scheduling", before: "Back-and-forth texting to find a time", after: "Agent books directly against agent availability" },
    ],
    blueprint: [
      { phase: "01", title: "Listing Feed Integration", description: "We connect the agent to your MLS feed and listing site so it always has live inventory.", duration: "Week 1" },
      { phase: "02", title: "Qualification Script", description: "We define the budget, timeline, and financing questions the agent asks every buyer.", duration: "Week 2" },
      { phase: "03", title: "Showing Calendar Sync", description: "Agent is connected to each agent's calendar for direct booking.", duration: "Week 3" },
      { phase: "04", title: "Pilot on Live Listings", description: "Agent handles inquiries on a subset of active listings.", duration: "Week 4" },
      { phase: "05", title: "Brokerage-Wide Rollout", description: "Full deployment across all listings and agents.", duration: "Week 5+" },
    ],
    stats: [
      { value: "<1min", label: "average inquiry response time" },
      { value: "58%", label: "more showings booked per listing" },
      { value: "3x", label: "faster buyer qualification" },
    ],
    relatedProducts: ["realtor"],
  },
  {
    slug: "conversational-ai-chatbots",
    name: "Conversational AI Chatbots",
    eyebrow: "Support",
    tagline: "Website and app chatbots that actually resolve tickets, not just deflect them.",
    icon: "MessageSquare",
    summary:
      "We build support chatbots grounded in your documentation and past tickets, capable of resolving common issues end-to-end and escalating with full context when a human is genuinely needed.",
    painPoints: [
      "Chatbots that only link to help articles instead of solving anything",
      "Support team drowning in repetitive tier-1 tickets",
      "Customers abandoning chat when the bot loops or misunderstands",
    ],
    matrix: [
      { task: "Tier-1 ticket resolution", before: "Human agent handles every ticket", after: "Agent resolves common issues, escalates the rest with context" },
      { task: "Knowledge base upkeep", before: "Docs go stale, bot gives outdated answers", after: "Agent flags gaps in docs it can't answer from" },
      { task: "Escalation handoff", before: "Customer repeats their issue to a human", after: "Full conversation and context passed automatically" },
    ],
    blueprint: [
      { phase: "01", title: "Knowledge Grounding", description: "We ingest your docs, macros, and past resolved tickets to ground the agent's answers.", duration: "Week 1" },
      { phase: "02", title: "Resolution Flows", description: "We build action flows for your top 20 ticket categories, not just Q&A.", duration: "Week 2" },
      { phase: "03", title: "Escalation Design", description: "We define exactly when and how the agent hands off to a human with full context.", duration: "Week 3" },
      { phase: "04", title: "Pilot Deployment", description: "Chatbot goes live on a subset of traffic with human oversight.", duration: "Week 4" },
      { phase: "05", title: "Full Rollout", description: "Chatbot handles all inbound chat with continuous tuning from transcripts.", duration: "Week 5+" },
    ],
    stats: [
      { value: "68%", label: "of tickets resolved without a human" },
      { value: "-52%", label: "average first-response time" },
      { value: "4.6/5", label: "average post-chat satisfaction score" },
    ],
  },
  {
    slug: "database-reactivation",
    name: "Database Reactivation",
    eyebrow: "Revenue",
    tagline: "Agents that mine your dormant customer list for revenue you already paid to acquire.",
    icon: "Database",
    summary:
      "We deploy agents that segment your existing customer and lead database, run personalized reactivation sequences across email and SMS, and hand off any responder ready to buy.",
    painPoints: [
      "Thousands of old leads and past customers never followed up on",
      "No time or headcount to manually re-engage a stale list",
      "Generic blast campaigns getting ignored or marked as spam",
    ],
    matrix: [
      { task: "List segmentation", before: "One blast email to the entire list", after: "Agent segments by recency, value, and past behavior" },
      { task: "Re-engagement outreach", before: "Rarely attempted, no owner", after: "Agent runs personalized sequences continuously" },
      { task: "Hot lead handoff", before: "Missed replies sit in a shared inbox", after: "Agent flags and routes responders in real time" },
    ],
    blueprint: [
      { phase: "01", title: "Database Audit", description: "We analyze your existing list for segments most likely to convert.", duration: "Week 1" },
      { phase: "02", title: "Sequence Design", description: "We write and configure personalized reactivation sequences per segment.", duration: "Week 2" },
      { phase: "03", title: "Compliance Setup", description: "We configure opt-out handling and sending limits to protect deliverability.", duration: "Week 2" },
      { phase: "04", title: "Launch & Monitor", description: "Sequences go live with daily monitoring of reply and conversion rates.", duration: "Week 3" },
      { phase: "05", title: "Ongoing Optimization", description: "Agent continuously tests subject lines, timing, and offers.", duration: "Week 4+" },
    ],
    stats: [
      { value: "18%", label: "of dormant leads re-engaged on avg." },
      { value: "6.4x", label: "ROI on reactivation campaigns" },
      { value: "0", label: "additional headcount required" },
    ],
  },
  {
    slug: "social-media-growth",
    name: "Social Media Growth",
    eyebrow: "Brand",
    tagline: "Agents that plan, draft, and schedule a consistent content engine.",
    icon: "Share2",
    summary:
      "We deploy agents that turn your raw ideas, calls, and long-form content into a steady stream of on-brand posts across platforms, scheduled and analyzed automatically.",
    painPoints: [
      "Content calendar going dark for weeks at a time",
      "Marketer spending hours repurposing one piece of content per platform",
      "No consistent read on which posts actually drive results",
    ],
    matrix: [
      { task: "Content repurposing", before: "Marketer manually rewrites for each platform", after: "Agent adapts tone, length, and format per platform" },
      { task: "Posting cadence", before: "Sporadic, dependent on who has time", after: "Agent maintains a consistent daily schedule" },
      { task: "Performance review", before: "Manual export and review monthly", after: "Agent surfaces top performers and patterns weekly" },
    ],
    blueprint: [
      { phase: "01", title: "Brand Voice Calibration", description: "We train the agent on your existing content to match tone and style.", duration: "Week 1" },
      { phase: "02", title: "Content Pipeline", description: "We set up the source-to-post pipeline from raw content to scheduled posts.", duration: "Week 2" },
      { phase: "03", title: "Approval Workflow", description: "We configure a review step so your team can approve before anything goes live.", duration: "Week 2" },
      { phase: "04", title: "Launch", description: "Agent begins publishing on the agreed cadence across chosen platforms.", duration: "Week 3" },
      { phase: "05", title: "Analytics Loop", description: "Agent reports weekly on performance and adjusts content mix.", duration: "Ongoing" },
    ],
    stats: [
      { value: "5x", label: "more content published per week" },
      { value: "80%", label: "less time spent on repurposing" },
      { value: "2.3x", label: "avg. engagement lift" },
    ],
    relatedProducts: ["contentflow"],
  },
  {
    slug: "content-creation-repurposing",
    name: "Content Creation & Repurposing",
    eyebrow: "Content",
    tagline: "One recording becomes a week of blog posts, clips, and newsletters.",
    icon: "FileText",
    summary:
      "Feed the agent a podcast episode, webinar, or blog draft and it produces platform-ready derivatives — show notes, short clips, LinkedIn posts, and newsletter copy — in your voice.",
    painPoints: [
      "Long-form content created once and never repurposed",
      "Editing team backlogged on clip and caption requests",
      "Inconsistent voice across writers and formats",
    ],
    matrix: [
      { task: "Podcast to blog", before: "Writer manually transcribes and rewrites", after: "Agent transcribes, structures, and drafts the post" },
      { task: "Clip selection", before: "Editor scrubs the full recording for highlights", after: "Agent identifies and cuts the top moments automatically" },
      { task: "Newsletter drafting", before: "Written from scratch each week", after: "Agent drafts from the week's published content" },
    ],
    blueprint: [
      { phase: "01", title: "Voice Training", description: "We calibrate the agent on your past writing and brand guidelines.", duration: "Week 1" },
      { phase: "02", title: "Pipeline Build", description: "We connect source content (recordings, docs) to the repurposing pipeline.", duration: "Week 2" },
      { phase: "03", title: "Format Templates", description: "We define output templates for each channel you publish to.", duration: "Week 2" },
      { phase: "04", title: "Pilot Run", description: "Agent processes a real piece of content end-to-end for review.", duration: "Week 3" },
      { phase: "05", title: "Full Production", description: "Agent runs on every new piece of source content going forward.", duration: "Week 4+" },
    ],
    stats: [
      { value: "12x", label: "content pieces per source asset" },
      { value: "90%", label: "reduction in repurposing time" },
      { value: "1 day", label: "from recording to published derivatives" },
    ],
    relatedProducts: ["contentflow"],
  },
  {
    slug: "cold-outreach-email",
    name: "Cold Outreach & Email",
    eyebrow: "Revenue",
    tagline: "Agents that research, personalize, and send outbound at a scale no SDR team can match.",
    icon: "Mail",
    summary:
      "Our outreach agents research each prospect, write genuinely personalized opening lines, manage sending across inboxes for deliverability, and route replies to your reps instantly.",
    painPoints: [
      "SDRs spending hours researching prospects for a handful of emails a day",
      "Generic templated outreach getting marked as spam",
      "No system managing inbox health and sending limits",
    ],
    matrix: [
      { task: "Prospect research", before: "SDR spends 10–15 min per prospect", after: "Agent researches and drafts in under 30 seconds" },
      { task: "Sending infrastructure", before: "Manually managed, deliverability degrades over time", after: "Agent rotates inboxes and monitors domain health" },
      { task: "Reply triage", before: "Reps check inbox manually throughout the day", after: "Agent classifies and routes replies instantly" },
    ],
    blueprint: [
      { phase: "01", title: "ICP & List Build", description: "We define your ideal customer profile and build or clean the target list.", duration: "Week 1" },
      { phase: "02", title: "Personalization Engine", description: "We configure the research and writing agent against your value proposition.", duration: "Week 2" },
      { phase: "03", title: "Infrastructure Setup", description: "We set up sending domains, warmup, and deliverability monitoring.", duration: "Week 2" },
      { phase: "04", title: "Pilot Send", description: "Agent sends to a small segment while we monitor reply and bounce rates.", duration: "Week 3" },
      { phase: "05", title: "Scale Sending", description: "Volume ramps up gradually as deliverability metrics hold steady.", duration: "Week 4+" },
    ],
    stats: [
      { value: "9x", label: "more personalized emails sent per rep" },
      { value: "2.8x", label: "average reply rate lift" },
      { value: "99%+", label: "inbox placement maintained" },
    ],
    relatedProducts: ["outreachai"],
  },
  {
    slug: "whatsapp-ai-agents",
    name: "WhatsApp AI Agents",
    eyebrow: "Conversation",
    tagline: "Sell, support, and follow up where your customers already are.",
    icon: "MessageCircle",
    summary:
      "We deploy WhatsApp Business agents that answer product questions, take orders, send reminders, and re-engage abandoned conversations without a person watching the chat all day.",
    painPoints: [
      "WhatsApp inquiries going unanswered for hours",
      "No consistent process for order updates or reminders",
      "Sales conversations dropped when staff step away",
    ],
    matrix: [
      { task: "Product inquiries", before: "Staff replies when they notice the message", after: "Agent replies instantly with accurate product info" },
      { task: "Order status updates", before: "Customer has to ask", after: "Agent proactively sends status updates" },
      { task: "Abandoned chats", before: "Never followed up on", after: "Agent re-engages after a set window" },
    ],
    blueprint: [
      { phase: "01", title: "Business API Setup", description: "We configure your WhatsApp Business API account and verified sender.", duration: "Week 1" },
      { phase: "02", title: "Conversation Design", description: "We map the flows for inquiries, orders, and support.", duration: "Week 2" },
      { phase: "03", title: "Catalog & Order Wiring", description: "We connect the agent to your product catalog and order system.", duration: "Week 3" },
      { phase: "04", title: "Pilot", description: "Agent handles a portion of live chats with staff oversight.", duration: "Week 4" },
      { phase: "05", title: "Full Deployment", description: "Agent becomes the primary responder across the WhatsApp line.", duration: "Week 5+" },
    ],
    stats: [
      { value: "<30sec", label: "average reply time" },
      { value: "44%", label: "more orders recovered from abandoned chats" },
      { value: "24/7", label: "coverage without added staff" },
    ],
  },
  {
    slug: "ai-lead-activation",
    name: "AI Lead Activation",
    eyebrow: "Revenue",
    tagline: "Every inbound lead gets worked immediately, every time, no exceptions.",
    icon: "Zap",
    summary:
      "The moment a lead fills a form, calls, or messages, an activation agent engages them across channel, qualifies intent, and either books a meeting or nurtures until they're ready.",
    painPoints: [
      "Inbound leads waiting hours or days for a first response",
      "No consistent process across channels — web, phone, chat",
      "Leads that go cold simply because no one followed up fast enough",
    ],
    matrix: [
      { task: "First response", before: "Rep responds within a business day, if at all", after: "Agent engages within seconds of lead creation" },
      { task: "Cross-channel consistency", before: "Different follow-up quality per channel", after: "Same activation standard across web, phone, and chat" },
      { task: "Meeting booking", before: "Back-and-forth email to find a time", after: "Agent books directly against rep calendars" },
    ],
    blueprint: [
      { phase: "01", title: "Lead Source Mapping", description: "We connect every lead source — forms, calls, chat, ads — into one activation pipeline.", duration: "Week 1" },
      { phase: "02", title: "Activation Scripts", description: "We define the qualification and booking flow per lead type.", duration: "Week 2" },
      { phase: "03", title: "Calendar Integration", description: "Agent is connected to rep calendars for direct booking.", duration: "Week 2" },
      { phase: "04", title: "Pilot", description: "Agent activates a portion of new leads with rep visibility into every touch.", duration: "Week 3" },
      { phase: "05", title: "Full Activation", description: "Every new lead is activated by the agent within seconds of creation.", duration: "Week 4+" },
    ],
    stats: [
      { value: "<60sec", label: "time to first lead contact" },
      { value: "2.5x", label: "more meetings booked from same lead volume" },
      { value: "0", label: "leads left untouched" },
    ],
    relatedProducts: ["leadactivation"],
  },
  {
    slug: "hr-recruitment-ai",
    name: "HR & Recruitment AI",
    eyebrow: "People Ops",
    tagline: "Agents that screen, schedule, and onboard so your recruiters focus on people, not paperwork.",
    icon: "Users",
    summary:
      "We deploy agents across the hiring funnel — resume screening, candidate Q&A, interview scheduling, and onboarding checklists — so your HR team spends time on judgment calls, not logistics.",
    painPoints: [
      "Recruiters manually screening hundreds of resumes per role",
      "Interview scheduling turning into a week of email tag",
      "Onboarding checklists tracked in scattered spreadsheets",
    ],
    matrix: [
      { task: "Resume screening", before: "Recruiter reviews every application manually", after: "Agent shortlists against role criteria in minutes" },
      { task: "Interview scheduling", before: "Days of back-and-forth across calendars", after: "Agent books directly against interviewer availability" },
      { task: "Onboarding tracking", before: "Manual checklist, easy to miss steps", after: "Agent tracks and nudges each onboarding step automatically" },
    ],
    blueprint: [
      { phase: "01", title: "Role Criteria Definition", description: "We codify the screening criteria for your open roles with your recruiters.", duration: "Week 1" },
      { phase: "02", title: "ATS Integration", description: "Agent is connected to your applicant tracking system.", duration: "Week 2" },
      { phase: "03", title: "Scheduling Automation", description: "We wire the agent to interviewer calendars and candidate communication.", duration: "Week 2" },
      { phase: "04", title: "Pilot on Live Roles", description: "Agent screens and schedules for a subset of open roles.", duration: "Week 3" },
      { phase: "05", title: "Full Funnel Rollout", description: "Agent supports the full hiring funnel across all open roles.", duration: "Week 4+" },
    ],
    stats: [
      { value: "75%", label: "less time spent on resume screening" },
      { value: "4x", label: "faster interview scheduling" },
      { value: "100%", label: "onboarding checklist completion" },
    ],
    relatedProducts: ["hragent"],
  },
  {
    slug: "custom-ai-models",
    name: "Custom AI Models",
    eyebrow: "Deep Tech",
    tagline: "When off-the-shelf models aren't enough, we fine-tune and deploy your own.",
    icon: "Cpu",
    summary:
      "For teams with proprietary data or domain-specific requirements, we fine-tune, evaluate, and deploy custom models — with the infrastructure to serve, monitor, and retrain them over time.",
    painPoints: [
      "Generic models underperforming on domain-specific language or data",
      "No internal ML infrastructure to train or serve custom models",
      "Uncertainty about which use cases justify a custom model versus a general one",
    ],
    matrix: [
      { task: "Model selection", before: "Team guesses which off-the-shelf model to use", after: "We benchmark and recommend based on your actual data" },
      { task: "Domain accuracy", before: "Generic model misses domain-specific nuance", after: "Fine-tuned model matches your terminology and edge cases" },
      { task: "Serving infrastructure", before: "No system to deploy or monitor a custom model", after: "Managed serving with monitoring and retraining pipeline" },
    ],
    blueprint: [
      { phase: "01", title: "Data & Use Case Audit", description: "We assess your data and determine whether fine-tuning is justified over prompting.", duration: "Week 1–2" },
      { phase: "02", title: "Dataset Preparation", description: "We clean, label, and structure training data with your domain experts.", duration: "Week 3" },
      { phase: "03", title: "Fine-Tuning & Evaluation", description: "We train candidate models and evaluate against held-out benchmarks.", duration: "Week 4–5" },
      { phase: "04", title: "Deployment", description: "The winning model is deployed behind a monitored serving endpoint.", duration: "Week 6" },
      { phase: "05", title: "Monitoring & Retraining", description: "We track drift and retrain on a defined cadence.", duration: "Ongoing" },
    ],
    stats: [
      { value: "31%", label: "avg. accuracy lift vs. generic model" },
      { value: "6wk", label: "typical time to production deployment" },
      { value: "100%", label: "data stays within your infrastructure" },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}
