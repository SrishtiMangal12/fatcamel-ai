export interface Bottleneck {
  problem: string;
  solution: string;
}

export interface UseCase {
  title: string;
  description: string;
  result: string;
}

export interface Industry {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  icon: string;
  summary: string;
  bottlenecks: Bottleneck[];
  useCases: UseCase[];
  stats: { value: string; label: string }[];
}

export const industryData: Industry[] = [
  {
    slug: "banking-financial-service",
    name: "Banking & Financial Services",
    eyebrow: "Regulated & Real-Time",
    tagline: "Agents that move at compliance speed without slowing the business down.",
    icon: "Landmark",
    summary:
      "We deploy agents inside banking and financial services operations that respect audit trails, regulatory review, and data residency requirements — while cutting the manual review load on ops and compliance teams.",
    bottlenecks: [
      { problem: "KYC document review taking days per applicant", solution: "Agent pre-screens documents and flags only true exceptions for human review" },
      { problem: "Fraud alerts triaged manually, delaying response", solution: "Agent triages and prioritizes alerts by risk score in real time" },
      { problem: "Customer service reps re-explaining the same policies", solution: "Grounded agent answers policy questions instantly, escalates disputes" },
    ],
    useCases: [
      { title: "KYC Pre-Screening", description: "Agent extracts and validates applicant documents against compliance checklists before human review.", result: "68% reduction in review time" },
      { title: "Fraud Alert Triage", description: "Agent scores and routes fraud alerts, surfacing only high-confidence cases first.", result: "3.4x faster response to genuine fraud" },
      { title: "Contact Center Deflection", description: "Agent resolves account and policy questions without a human touch.", result: "45% ticket deflection" },
    ],
    stats: [
      { value: "68%", label: "faster KYC review" },
      { value: "3.4x", label: "faster fraud response" },
      { value: "45%", label: "contact center deflection" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Patient-Centered",
    tagline: "Agents that clear administrative load so clinical staff can focus on patients.",
    icon: "HeartPulse",
    summary:
      "In healthcare settings, we deploy agents strictly on administrative and operational workflows — scheduling, intake, and billing follow-up — never on clinical decision-making, always with human oversight.",
    bottlenecks: [
      { problem: "Front desk overwhelmed with scheduling calls", solution: "Voice agent handles routine scheduling and reschedules directly" },
      { problem: "Intake forms incomplete or delayed", solution: "Agent guides patients through intake before the visit" },
      { problem: "Billing follow-up consuming staff hours", solution: "Agent sends reminders and answers billing questions automatically" },
    ],
    useCases: [
      { title: "Appointment Scheduling", description: "Voice and chat agent handles new bookings, reschedules, and reminders.", result: "31% fewer no-shows" },
      { title: "Digital Intake", description: "Agent walks patients through intake forms and insurance verification before arrival.", result: "40% shorter check-in time" },
      { title: "Billing Follow-Up", description: "Agent sends payment reminders and answers common billing questions.", result: "26% faster collections" },
    ],
    stats: [
      { value: "31%", label: "fewer no-shows" },
      { value: "40%", label: "shorter check-in time" },
      { value: "26%", label: "faster collections" },
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    eyebrow: "Field & Facility",
    tagline: "Agents that keep operations data flowing between field, office, and compliance.",
    icon: "Fuel",
    summary:
      "We deploy agents that process field reports, monitor compliance documentation, and route maintenance requests — reducing the paperwork burden across upstream and downstream operations.",
    bottlenecks: [
      { problem: "Field reports manually re-entered into central systems", solution: "Agent extracts and structures field report data automatically" },
      { problem: "Compliance documentation tracked across spreadsheets", solution: "Agent monitors deadlines and flags missing documentation" },
      { problem: "Maintenance requests routed manually by dispatch", solution: "Agent triages and routes requests by urgency and location" },
    ],
    useCases: [
      { title: "Field Report Digitization", description: "Agent converts handwritten or scanned field reports into structured data.", result: "70% less manual data entry" },
      { title: "Compliance Tracking", description: "Agent monitors regulatory filing deadlines across all facilities.", result: "Zero missed compliance deadlines" },
      { title: "Maintenance Dispatch", description: "Agent triages incoming maintenance requests by urgency and routes to the right crew.", result: "2.1x faster response time" },
    ],
    stats: [
      { value: "70%", label: "less manual data entry" },
      { value: "2.1x", label: "faster maintenance response" },
      { value: "0", label: "missed compliance deadlines" },
    ],
  },
  {
    slug: "renewable",
    name: "Renewable Energy",
    eyebrow: "Growth & Grid",
    tagline: "Agents that support fast-scaling renewable operations without fast-scaling headcount.",
    icon: "Wind",
    summary:
      "We deploy agents across permitting tracking, site monitoring alerts, and customer onboarding for renewable energy operators, so growing project pipelines don't outpace operational capacity.",
    bottlenecks: [
      { problem: "Permitting status tracked manually across projects", solution: "Agent monitors and reports permitting status across the full pipeline" },
      { problem: "Site alerts triaged by whoever is available", solution: "Agent prioritizes alerts by severity and routes to the right technician" },
      { problem: "Customer onboarding process inconsistent", solution: "Agent runs a consistent onboarding sequence for every new customer" },
    ],
    useCases: [
      { title: "Permitting Pipeline Tracking", description: "Agent tracks permit status across every active project and flags delays.", result: "35% faster permit-to-construction time" },
      { title: "Site Alert Triage", description: "Agent scores incoming site alerts and routes to the right technician.", result: "2.6x faster incident response" },
      { title: "Customer Onboarding", description: "Agent runs residential and commercial customers through a consistent onboarding flow.", result: "50% shorter time-to-activation" },
    ],
    stats: [
      { value: "35%", label: "faster permit-to-construction" },
      { value: "2.6x", label: "faster incident response" },
      { value: "50%", label: "shorter time-to-activation" },
    ],
  },
  {
    slug: "media-comms",
    name: "Media & Communications",
    eyebrow: "Content at Scale",
    tagline: "Agents that keep the content engine running without burning out your team.",
    icon: "Radio",
    summary:
      "We deploy agents that repurpose long-form content, monitor brand mentions, and manage audience inquiries — helping media and comms teams maintain output without proportionally scaling headcount.",
    bottlenecks: [
      { problem: "One piece of content published once, never repurposed", solution: "Agent generates platform-specific derivatives from every asset" },
      { problem: "Brand mentions monitored manually or not at all", solution: "Agent tracks mentions and flags sentiment shifts in real time" },
      { problem: "Audience inquiries piling up in a shared inbox", solution: "Agent triages and drafts responses to common inquiries" },
    ],
    useCases: [
      { title: "Content Repurposing", description: "Agent turns long-form pieces into a full week of platform-native content.", result: "12x more content per source asset" },
      { title: "Mention Monitoring", description: "Agent tracks brand mentions across platforms and flags sentiment shifts.", result: "Real-time crisis detection" },
      { title: "Audience Inbox Management", description: "Agent triages and drafts replies to audience inquiries and comments.", result: "55% faster response time" },
    ],
    stats: [
      { value: "12x", label: "more content per asset" },
      { value: "55%", label: "faster audience response" },
      { value: "24/7", label: "mention monitoring" },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    eyebrow: "Plant Floor to Back Office",
    tagline: "Agents that keep production data, procurement, and maintenance in sync.",
    icon: "Factory",
    summary:
      "We deploy agents that process production logs, monitor supplier communications, and route maintenance requests — connecting the plant floor to procurement and planning in real time.",
    bottlenecks: [
      { problem: "Production logs manually compiled into reports", solution: "Agent aggregates logs into live production dashboards" },
      { problem: "Supplier communications tracked over email threads", solution: "Agent monitors order status and flags delays automatically" },
      { problem: "Maintenance requests logged on paper or radio", solution: "Agent captures, prioritizes, and routes requests digitally" },
    ],
    useCases: [
      { title: "Production Reporting", description: "Agent compiles shift and line data into a live dashboard for planners.", result: "Real-time production visibility" },
      { title: "Supplier Order Tracking", description: "Agent monitors supplier communications and flags at-risk deliveries.", result: "22% fewer stockouts" },
      { title: "Maintenance Request Routing", description: "Agent captures and routes maintenance requests to the right technician.", result: "2x faster resolution time" },
    ],
    stats: [
      { value: "22%", label: "fewer stockouts" },
      { value: "2x", label: "faster maintenance resolution" },
      { value: "Real-time", label: "production visibility" },
    ],
  },
  {
    slug: "power-utilities",
    name: "Power & Utilities",
    eyebrow: "Grid Operations",
    tagline: "Agents that manage outage response, customer inquiries, and field dispatch.",
    icon: "Zap",
    summary:
      "We deploy agents that triage outage reports, coordinate field crew dispatch, and manage the surge of customer inquiries during service events — reducing response time when it matters most.",
    bottlenecks: [
      { problem: "Outage reports flooding call centers during events", solution: "Voice agent handles surge volume and provides live status updates" },
      { problem: "Field dispatch coordinated manually by radio", solution: "Agent matches crews to outages by location and priority" },
      { problem: "Customers calling repeatedly for status updates", solution: "Agent proactively notifies affected customers of restoration timelines" },
    ],
    useCases: [
      { title: "Outage Call Handling", description: "Voice agent absorbs call surges during outages and logs reports automatically.", result: "5x call surge capacity" },
      { title: "Crew Dispatch Coordination", description: "Agent matches available crews to outage locations by priority.", result: "28% faster restoration time" },
      { title: "Proactive Status Updates", description: "Agent notifies affected customers automatically as restoration progresses.", result: "60% fewer inbound status calls" },
    ],
    stats: [
      { value: "5x", label: "call surge capacity" },
      { value: "28%", label: "faster restoration time" },
      { value: "60%", label: "fewer status calls" },
    ],
  },
  {
    slug: "retail-consumer",
    name: "Retail & Consumer",
    eyebrow: "Storefront to Support",
    tagline: "Agents that handle the volume of retail without the volume of headcount.",
    icon: "ShoppingBag",
    summary:
      "We deploy agents across customer support, order management, and inventory alerts for retail and consumer brands — keeping response times fast even during seasonal demand spikes.",
    bottlenecks: [
      { problem: "Support tickets spiking during sales events", solution: "Agent resolves order status and return questions instantly" },
      { problem: "Inventory issues discovered too late", solution: "Agent monitors stock levels and flags reorder points automatically" },
      { problem: "Post-purchase follow-up inconsistent", solution: "Agent runs consistent review and re-purchase sequences" },
    ],
    useCases: [
      { title: "Order & Returns Support", description: "Agent resolves order status, tracking, and return requests without a queue.", result: "70% ticket deflection" },
      { title: "Inventory Alerting", description: "Agent monitors stock levels across channels and flags reorder points.", result: "18% fewer stockouts" },
      { title: "Post-Purchase Follow-Up", description: "Agent runs review requests and re-purchase sequences automatically.", result: "24% lift in repeat purchase rate" },
    ],
    stats: [
      { value: "70%", label: "support ticket deflection" },
      { value: "18%", label: "fewer stockouts" },
      { value: "24%", label: "lift in repeat purchases" },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industryData.find((i) => i.slug === slug);
}
