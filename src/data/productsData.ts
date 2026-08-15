export interface FeatureModule {
  title: string;
  description: string;
  icon: string;
}

export interface PerformanceStat {
  value: string;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  icon: string;
  summary: string;
  features: FeatureModule[];
  stats: PerformanceStat[];
  integrations: string[];
  relatedService?: string;
}

export const productsData: Product[] = [
  {
    slug: "contentflow",
    name: "ContentFlow",
    category: "Content Operations",
    tagline: "One input, a week of on-brand content across every channel.",
    icon: "FileText",
    summary:
      "ContentFlow ingests raw source material — recordings, docs, briefs — and produces platform-ready posts, articles, and clips in your brand voice, with a review queue before anything publishes.",
    features: [
      { title: "Voice Calibration", description: "Trained on your existing content so every output sounds like you wrote it.", icon: "Mic" },
      { title: "Multi-Format Output", description: "One input becomes blog posts, social copy, clips, and newsletter drafts.", icon: "Layers" },
      { title: "Review Queue", description: "Nothing publishes without a human approval step, editable inline.", icon: "CheckSquare" },
      { title: "Performance Loop", description: "Tracks what performs and feeds it back into future drafts.", icon: "BarChart3" },
    ],
    stats: [
      { value: "12x", label: "content pieces per source asset" },
      { value: "90%", label: "less time on repurposing" },
      { value: "1 day", label: "source to published" },
    ],
    integrations: ["WordPress", "LinkedIn", "Instagram", "Mailchimp", "YouTube"],
    relatedService: "content-creation-repurposing",
  },
  {
    slug: "hragent",
    name: "HRAgent",
    category: "People Operations",
    tagline: "Screens, schedules, and onboards — so recruiters focus on people.",
    icon: "Users",
    summary:
      "HRAgent handles the repetitive layers of hiring and onboarding: shortlisting resumes against role criteria, coordinating interview calendars, and tracking every onboarding step to completion.",
    features: [
      { title: "Criteria-Based Screening", description: "Shortlists applicants against role-specific criteria your team defines.", icon: "ListChecks" },
      { title: "Auto-Scheduling", description: "Books interviews directly against interviewer availability, no email tag.", icon: "CalendarCheck" },
      { title: "Onboarding Tracker", description: "Nudges new hires and managers through every onboarding step.", icon: "ClipboardList" },
      { title: "Candidate Q&A", description: "Answers candidate questions about role, process, and timeline instantly.", icon: "MessageSquare" },
    ],
    stats: [
      { value: "75%", label: "less screening time" },
      { value: "4x", label: "faster scheduling" },
      { value: "100%", label: "onboarding completion rate" },
    ],
    integrations: ["Greenhouse", "Lever", "Google Calendar", "Slack", "BambooHR"],
    relatedService: "hr-recruitment-ai",
  },
  {
    slug: "linkebuddy",
    name: "LinkeBuddy",
    category: "Social Growth",
    tagline: "Your LinkedIn presence, run by an agent that never misses a day.",
    icon: "Share2",
    summary:
      "LinkeBuddy drafts posts, engages with your target audience's content, and manages your outreach inbox on LinkedIn — building your presence consistently without you opening the app.",
    features: [
      { title: "Post Drafting", description: "Generates on-brand posts from your ideas, notes, or existing content.", icon: "PenLine" },
      { title: "Smart Engagement", description: "Comments and engages meaningfully with your target audience's posts.", icon: "ThumbsUp" },
      { title: "Connection Outreach", description: "Sends personalized connection notes based on shared context.", icon: "UserPlus" },
      { title: "Inbox Triage", description: "Sorts and drafts replies to inbound LinkedIn messages.", icon: "Inbox" },
    ],
    stats: [
      { value: "5x", label: "more consistent posting cadence" },
      { value: "3.2x", label: "profile visit growth" },
      { value: "0hrs", label: "manual time required daily" },
    ],
    integrations: ["LinkedIn", "Google Sheets", "Slack", "Notion"],
    relatedService: "social-media-growth",
  },
  {
    slug: "outreachai",
    name: "OutreachAI",
    category: "Sales Development",
    tagline: "Researched, personalized outbound at a scale no SDR team can match.",
    icon: "Mail",
    summary:
      "OutreachAI researches each prospect, writes a genuinely personalized opener, manages sending across a warmed inbox pool, and routes every reply to the right rep instantly.",
    features: [
      { title: "Prospect Research", description: "Pulls signal from public sources to write a relevant opening line per prospect.", icon: "Search" },
      { title: "Deliverability Engine", description: "Rotates sending inboxes and monitors domain health automatically.", icon: "ShieldCheck" },
      { title: "Reply Classification", description: "Sorts replies into interested, objection, or not-now, routed instantly.", icon: "Filter" },
      { title: "Sequence Testing", description: "Continuously tests subject lines and messaging for reply rate.", icon: "FlaskConical" },
    ],
    stats: [
      { value: "9x", label: "more personalized emails per rep" },
      { value: "2.8x", label: "avg. reply rate lift" },
      { value: "99%+", label: "inbox placement maintained" },
    ],
    integrations: ["Salesforce", "HubSpot", "Gmail", "Outlook", "LinkedIn Sales Navigator"],
    relatedService: "cold-outreach-email",
  },
  {
    slug: "realtor",
    name: "Realtor",
    category: "Real Estate",
    tagline: "Every listing inquiry answered, qualified, and booked in seconds.",
    icon: "Home",
    summary:
      "Realtor connects to your MLS feed and listing site to respond to inquiries instantly, pre-qualify buyers on budget and timeline, and book showings directly against agent calendars.",
    features: [
      { title: "Live Listing Sync", description: "Always answers with current inventory, pricing, and availability.", icon: "RefreshCw" },
      { title: "Buyer Pre-Qualification", description: "Asks budget, timeline, and financing questions before agent handoff.", icon: "ClipboardCheck" },
      { title: "Showing Scheduler", description: "Books showings directly against each agent's live calendar.", icon: "CalendarCheck" },
      { title: "Lead Nurture", description: "Keeps not-ready buyers warm with relevant new listings.", icon: "HeartHandshake" },
    ],
    stats: [
      { value: "<1min", label: "avg. inquiry response time" },
      { value: "58%", label: "more showings booked per listing" },
      { value: "3x", label: "faster buyer qualification" },
    ],
    integrations: ["Zillow", "MLS Feeds", "Google Calendar", "DocuSign"],
    relatedService: "ai-realtors",
  },
  {
    slug: "leadactivation",
    name: "LeadActivation",
    category: "Revenue Operations",
    tagline: "Every inbound lead engaged within seconds, across every channel.",
    icon: "Zap",
    summary:
      "LeadActivation sits across your web forms, phone lines, and chat to engage every new lead immediately, qualify intent, and either book a meeting or route into a nurture sequence.",
    features: [
      { title: "Instant Engagement", description: "Engages new leads within seconds of form, call, or chat submission.", icon: "Timer" },
      { title: "Cross-Channel Consistency", description: "Same qualification standard across web, phone, and chat.", icon: "GitMerge" },
      { title: "Calendar Booking", description: "Books qualified leads directly against rep availability.", icon: "CalendarCheck" },
      { title: "Nurture Handoff", description: "Routes not-yet-ready leads into ongoing nurture automatically.", icon: "GitBranch" },
    ],
    stats: [
      { value: "<60sec", label: "time to first contact" },
      { value: "2.5x", label: "more meetings booked" },
      { value: "0", label: "leads left untouched" },
    ],
    integrations: ["Salesforce", "HubSpot", "Twilio", "Calendly", "Slack"],
    relatedService: "ai-lead-activation",
  },
  {
    slug: "ai-gym-assistant",
    name: "AI Gym Assistant",
    category: "Fitness & Wellness",
    tagline: "Member check-ins, class bookings, and retention follow-ups, automated.",
    icon: "Dumbbell",
    summary:
      "AI Gym Assistant handles member inquiries, class and PT bookings, and at-risk member re-engagement — so front-desk staff spend time coaching, not answering the same five questions.",
    features: [
      { title: "Class Booking", description: "Books and reschedules class or trainer slots via chat or SMS.", icon: "CalendarCheck" },
      { title: "Membership Q&A", description: "Answers billing, freeze, and policy questions instantly.", icon: "MessageSquare" },
      { title: "Churn-Risk Outreach", description: "Flags members with dropping attendance and sends re-engagement offers.", icon: "AlertTriangle" },
      { title: "New Member Onboarding", description: "Walks new sign-ups through their first-week plan automatically.", icon: "Rocket" },
    ],
    stats: [
      { value: "62%", label: "fewer front-desk phone interruptions" },
      { value: "27%", label: "reduction in member churn" },
      { value: "24/7", label: "booking availability" },
    ],
    integrations: ["Mindbody", "Glofox", "Twilio", "Stripe"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}
