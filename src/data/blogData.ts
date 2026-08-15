export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-most-automation-projects-stall",
    title: "Why most automation projects stall before production",
    category: "Strategy",
    date: "Jul 2026",
    readTime: "6 min read",
    excerpt: "Most automation initiatives die in a proof-of-concept. Here's the pattern we see across every failed rollout.",
    body: [
      "Automation projects rarely fail because the technology doesn't work. They fail because the handoff between prototype and production was never planned for.",
      "A workflow demo running on sample data looks convincing. The gap shows up the moment real edge cases, real system latency, and real organizational approval chains enter the picture.",
      "The fix isn't more impressive demos — it's designing the escalation path, the audit trail, and the rollback plan before the first line of automation code is written.",
    ],
  },
  {
    slug: "designing-agent-guardrails",
    title: "Designing guardrails for autonomous agents",
    category: "Engineering",
    date: "Jul 2026",
    readTime: "8 min read",
    excerpt: "Confidence thresholds, escalation triggers, and rollback plans — the three guardrails every production agent needs.",
    body: [
      "An agent without guardrails isn't autonomous, it's unsupervised. The difference matters most in the moments a workflow hits something it hasn't seen before.",
      "We design every agent with a confidence threshold: below it, the agent stops and asks. Above it, the agent acts and logs the decision for review.",
      "Rollback plans are the guardrail most teams skip. Every agent action that touches a system of record needs a defined, tested way to undo it.",
    ],
  },
  {
    slug: "roi-of-agent-fleets",
    title: "How to actually calculate the ROI of an agent fleet",
    category: "Strategy",
    date: "Jun 2026",
    readTime: "5 min read",
    excerpt: "Most ROI calculations for automation are guesswork. Here's the framework we use with every client before deployment.",
    body: [
      "The most common mistake in ROI modeling is counting hours saved without counting the hours spent maintaining the system that saved them.",
      "We start every engagement by measuring the actual time spent on a workflow today, not an estimate — shadowing the team for a week before proposing anything.",
      "The real ROI signal isn't hours saved in month one, it's whether the recovered time gets reinvested into higher-value work or simply disappears.",
    ],
  },
  {
    slug: "voice-agents-latency",
    title: "The latency threshold that makes or breaks a voice agent",
    category: "Engineering",
    date: "Jun 2026",
    readTime: "7 min read",
    excerpt: "Callers can feel the difference between 400ms and 1200ms. Here's how we tune for sub-second response.",
    body: [
      "Voice is unforgiving in a way that chat isn't — a delay that would go unnoticed in text messaging feels like dead air on a call.",
      "We treat sub-second response as a hard requirement, not an optimization target, because callers hang up or start talking over the agent past that threshold.",
      "Getting there means trimming every stage of the pipeline: speech recognition, reasoning, and speech synthesis all have to run in parallel wherever possible.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
