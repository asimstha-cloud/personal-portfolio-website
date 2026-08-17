import {
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  FileSearch,
  Globe2,
  LineChart,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const siteConfig = {
  name: "Asim Shrestha",
  title: "AI Marketing Expert & Consultant",
  email: "asimstha.000@gmail.com",
  phones: ["9707299872", "9713556867"],
  location: "Ranibari, Kathmandu, Nepal",
  url: "https://asimshrestha.com",
  description:
    "AI-powered marketing strategy, SEO, ads, automation, analytics, and consulting for ambitious businesses.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "AI Marketing Strategy",
    slug: "ai-marketing-strategy",
    icon: BrainCircuit,
    summary:
      "A practical growth roadmap that blends audience insight, AI tools, channels, and measurable priorities.",
    description:
      "Build a marketing operating system around the right customers, offers, channels, and automation opportunities. The strategy is designed to clarify what matters, remove guesswork, and turn AI into a repeatable business advantage.",
    benefits: [
      "Clear positioning and channel priorities",
      "AI-assisted research and campaign planning",
      "Smarter resource allocation",
      "A measurable 90-day execution roadmap",
    ],
    process: [
      "Audit your current marketing and customer journey",
      "Identify audience segments, offers, and growth constraints",
      "Map AI tools and workflows to practical use cases",
      "Deliver a prioritized strategy and action plan",
    ],
    results:
      "A focused marketing blueprint your team can execute with confidence, fewer wasted experiments, and better visibility into what drives growth.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    icon: Search,
    summary:
      "Technical, on-page, and content improvements built to increase qualified organic visibility.",
    description:
      "Improve discoverability with a full SEO approach covering site structure, keyword intent, technical health, content opportunities, and search performance tracking.",
    benefits: [
      "Better ranking potential for priority terms",
      "Improved crawlability and page experience",
      "Keyword-led content direction",
      "Cleaner reporting for organic growth",
    ],
    process: [
      "Run technical and content audits",
      "Research search intent and keyword opportunities",
      "Optimize pages, metadata, internal links, and content gaps",
      "Track rankings, traffic, and conversion quality",
    ],
    results:
      "Stronger search foundations, more relevant organic traffic, and a scalable plan for long-term content growth.",
    accent: "from-indigo-500 to-blue-400",
  },
  {
    title: "Local SEO",
    slug: "local-seo",
    icon: Building2,
    summary:
      "Location-focused optimization for businesses that want to win nearby search demand.",
    description:
      "Strengthen your local presence across search results, map packs, directories, reviews, and location-specific content so nearby customers can find and trust you.",
    benefits: [
      "Improved local search visibility",
      "Better location and service relevance",
      "Consistent business information",
      "More trust signals from reviews and listings",
    ],
    process: [
      "Audit local rankings, competitors, and citations",
      "Optimize location pages and service content",
      "Clean up directory consistency",
      "Create review and reputation workflows",
    ],
    results:
      "A stronger local footprint that helps convert nearby intent into calls, visits, and inquiries.",
    accent: "from-cyan-500 to-teal-400",
  },
  {
    title: "Google Business Profile Optimization",
    slug: "google-business-profile-optimization",
    icon: Globe2,
    summary:
      "A polished, conversion-focused Google presence for stronger map visibility and customer trust.",
    description:
      "Turn your Google Business Profile into a reliable acquisition channel with accurate information, compelling services, strong visuals, review systems, and ongoing optimization.",
    benefits: [
      "Better map-pack relevance",
      "Higher trust with complete profile details",
      "More calls, direction requests, and website visits",
      "A repeatable update and review plan",
    ],
    process: [
      "Review profile completeness and category fit",
      "Optimize services, descriptions, photos, and posts",
      "Set up review response guidance",
      "Monitor actions and local search signals",
    ],
    results:
      "A professional Google presence that helps customers choose you at the moment they are ready to act.",
    accent: "from-sky-500 to-blue-500",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: Share2,
    summary:
      "Consistent, insight-led social systems that build authority and turn attention into demand.",
    description:
      "Create a brand-aligned social presence with content pillars, creative direction, publishing systems, and performance feedback loops across the right platforms.",
    benefits: [
      "Clear content pillars and posting rhythm",
      "Stronger brand authority",
      "More efficient content production",
      "Audience insights for future campaigns",
    ],
    process: [
      "Audit current profiles and content performance",
      "Define audience, tone, and content pillars",
      "Plan posts, creative formats, and distribution",
      "Review performance and refine monthly",
    ],
    results:
      "A sharper social presence with stronger consistency, better engagement, and content that supports business goals.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Meta Ads",
    slug: "meta-ads",
    icon: Target,
    summary:
      "Campaigns for Facebook and Instagram built around creative testing, audience quality, and ROI.",
    description:
      "Plan, launch, and optimize Meta ad campaigns with a performance structure covering offers, creative, audiences, tracking, and disciplined testing.",
    benefits: [
      "Structured campaign setup",
      "Creative and audience testing",
      "Lead and conversion tracking",
      "Clear spend and performance decisions",
    ],
    process: [
      "Clarify goals, offers, and target audiences",
      "Build campaign architecture and creative tests",
      "Launch with clean tracking and budgets",
      "Optimize based on performance signals",
    ],
    results:
      "More controlled ad performance with clearer learning cycles, stronger creative insights, and better budget confidence.",
    accent: "from-blue-600 to-violet-500",
  },
  {
    title: "Google Ads",
    slug: "google-ads",
    icon: MousePointerClick,
    summary:
      "Search and intent-led paid campaigns designed to capture demand and improve conversion quality.",
    description:
      "Reach high-intent customers through Google Ads campaigns grounded in keyword intent, landing page alignment, tracking hygiene, and regular optimization.",
    benefits: [
      "More qualified paid traffic",
      "Cleaner keyword and match-type structure",
      "Improved conversion tracking",
      "Reduced waste from irrelevant clicks",
    ],
    process: [
      "Research keywords, competitors, and offer fit",
      "Build campaigns, ad groups, copy, and extensions",
      "Align landing pages and tracking",
      "Optimize bids, search terms, and budget allocation",
    ],
    results:
      "A paid search engine that captures existing demand and gives you clearer insight into acquisition costs.",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    icon: PenLine,
    summary:
      "Strategic content systems for authority, organic growth, lead nurturing, and brand trust.",
    description:
      "Plan and produce content that answers real buyer questions, supports SEO, strengthens expertise, and moves prospects from awareness to action.",
    benefits: [
      "Content mapped to customer intent",
      "Better brand authority and trust",
      "Reusable assets across channels",
      "SEO and lead-nurturing alignment",
    ],
    process: [
      "Build topic clusters and content priorities",
      "Plan briefs, formats, and distribution",
      "Create or optimize core content assets",
      "Measure traffic, engagement, and conversions",
    ],
    results:
      "A content engine that compounds over time and supports both organic discovery and sales conversations.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    icon: Workflow,
    summary:
      "Practical workflow automation for faster marketing operations and better team focus.",
    description:
      "Identify repetitive marketing tasks and turn them into reliable AI-assisted workflows across research, content, reporting, lead handling, and internal operations.",
    benefits: [
      "Less manual work in recurring tasks",
      "Faster campaign and content execution",
      "More consistent internal processes",
      "Better data flow between tools",
    ],
    process: [
      "Map current workflows and bottlenecks",
      "Prioritize automation use cases by impact and risk",
      "Design prompts, handoffs, and tool connections",
      "Document and refine the workflow",
    ],
    results:
      "Lean, practical automations that save time while keeping human review and brand quality in the loop.",
    accent: "from-teal-500 to-cyan-500",
  },
  {
    title: "Marketing Consultation",
    slug: "marketing-consultation",
    icon: MessageSquareText,
    summary:
      "Focused expert guidance for strategy, campaigns, funnels, content, ads, and AI adoption.",
    description:
      "Get a senior perspective on your marketing decisions, whether you need a one-time strategy session, campaign review, or ongoing advisory support.",
    benefits: [
      "Clear next steps without heavy retainers",
      "Objective review of campaigns and funnels",
      "Faster decision-making",
      "Guidance tailored to your current resources",
    ],
    process: [
      "Collect goals, context, and current assets",
      "Review key blockers and opportunities",
      "Host a focused consultation session",
      "Share priorities, recommendations, and next steps",
    ],
    results:
      "Practical clarity you can act on immediately, with recommendations matched to your goals and capacity.",
    accent: "from-slate-700 to-blue-500",
  },
  {
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    icon: BarChart3,
    summary:
      "Decision-ready dashboards and reporting that connect marketing activity to business outcomes.",
    description:
      "Create reliable reporting for traffic, leads, campaigns, channels, and conversions so marketing decisions are based on evidence instead of scattered numbers.",
    benefits: [
      "Cleaner performance visibility",
      "Better campaign and channel decisions",
      "Tracking aligned to real goals",
      "Simple reporting for stakeholders",
    ],
    process: [
      "Audit current analytics and conversion setup",
      "Define KPIs and reporting needs",
      "Build dashboards and recurring reports",
      "Review insights and optimization actions",
    ],
    results:
      "Reporting that makes performance easy to understand and turns data into practical action.",
    accent: "from-blue-500 to-emerald-400",
  },
  {
    title: "Website Strategy",
    slug: "website-strategy",
    icon: FileSearch,
    summary:
      "Conversion-focused website direction that aligns messaging, UX, SEO, and marketing goals.",
    description:
      "Improve how your website communicates value, guides visitors, supports SEO, and converts attention into qualified inquiries.",
    benefits: [
      "Clearer messaging and page hierarchy",
      "Improved conversion pathways",
      "SEO-ready site structure",
      "Better alignment between website and campaigns",
    ],
    process: [
      "Audit UX, messaging, SEO, and conversion flow",
      "Identify friction points and content gaps",
      "Create page and CTA recommendations",
      "Prioritize improvements by impact",
    ],
    results:
      "A website strategy that helps visitors understand, trust, and contact you with less friction.",
    accent: "from-indigo-500 to-cyan-500",
  },
];

export const reasons = [
  {
    title: "Professional approach",
    description:
      "Clear priorities, clean execution, and strategy grounded in your business stage.",
    icon: Sparkles,
  },
  {
    title: "Data-driven decisions",
    description:
      "Campaigns and recommendations are shaped by measurable signals, not assumptions.",
    icon: LineChart,
  },
  {
    title: "AI-powered marketing",
    description:
      "Modern AI workflows are used where they improve speed, quality, and insight.",
    icon: Bot,
  },
  {
    title: "Performance focus",
    description:
      "Every plan connects activity to outcomes such as leads, visibility, revenue, or efficiency.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Transparent communication",
    description:
      "You get direct guidance, clear reporting, and practical next steps throughout the work.",
    icon: Megaphone,
  },
];

export const testimonials = [
  {
    quote:
      "Asim brought structure to our marketing and helped us understand exactly where AI could save time without reducing quality.",
    name: "Founder",
    role: "Growth-stage service business",
  },
  {
    quote:
      "The SEO and reporting recommendations were clear, practical, and easy for our team to execute.",
    name: "Managing Director",
    role: "Local business",
  },
  {
    quote:
      "Our campaigns finally had a system behind them. The strategy felt premium but very usable.",
    name: "Marketing Lead",
    role: "B2B consultancy",
  },
];

export const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "I work with service businesses, local brands, consultants, and growing companies that want smarter marketing systems powered by strategy, data, and AI.",
  },
  {
    question: "Can you help if I am just starting with AI?",
    answer:
      "Yes. The goal is practical adoption, so recommendations are matched to your tools, team, and comfort level.",
  },
  {
    question: "Do you offer one-time consultations?",
    answer:
      "Yes. You can book a focused consultation for campaign reviews, SEO direction, website strategy, or AI workflow planning.",
  },
  {
    question: "How soon can I expect results?",
    answer:
      "It depends on the service. Paid campaigns can produce insights quickly, while SEO and content typically compound over weeks and months.",
  },
];

export const budgets = [
  "Under NPR 50,000",
  "NPR 50,000 - 150,000",
  "NPR 150,000 - 300,000",
  "NPR 300,000+",
  "Not sure yet",
];
