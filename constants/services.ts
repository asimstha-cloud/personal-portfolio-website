import {
  AreaChart,
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  FileText,
  Globe2,
  Handshake,
  MapPinned,
  Megaphone,
  MousePointer2,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  process: string[];
  results: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    summary: "A practical growth roadmap that blends customer insight, AI tools, and clear execution.",
    description:
      "Build a marketing operating system that uses AI where it improves speed, quality, targeting, and decision-making.",
    benefits: ["Sharper positioning", "Faster campaign planning", "Better channel prioritization"],
    process: ["Audit current marketing", "Map AI opportunities", "Build a 90-day growth plan"],
    results: ["Clear strategy", "Efficient execution", "Measurable growth priorities"],
    icon: BrainCircuit,
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    summary: "Technical, on-page, and content SEO designed to increase qualified organic traffic.",
    description:
      "Improve discoverability with clean site structure, intent-led content, keyword targeting, and technical hygiene.",
    benefits: ["Higher search visibility", "Stronger content structure", "Improved site quality"],
    process: ["Research keywords", "Fix technical issues", "Optimize pages and content"],
    results: ["More organic traffic", "Better rankings", "Higher quality leads"],
    icon: Search,
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    summary: "Local search growth for Kathmandu businesses and service providers.",
    description:
      "Make your business easier to find for nearby customers through location pages, citations, and local signals.",
    benefits: ["More local discovery", "Improved map visibility", "Trust-building signals"],
    process: ["Audit local presence", "Optimize location signals", "Track calls and directions"],
    results: ["More inquiries", "Better local rankings", "Consistent business information"],
    icon: MapPinned,
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Optimization",
    summary: "Turn your Google profile into a stronger conversion channel.",
    description:
      "Optimize categories, services, posts, reviews, photos, and conversion paths for high-intent local searches.",
    benefits: ["Better profile completeness", "More calls", "Review momentum"],
    process: ["Profile audit", "Content and service setup", "Review and post system"],
    results: ["Higher local trust", "More actions", "Cleaner customer journey"],
    icon: Building2,
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    summary: "Consistent social strategy for awareness, authority, and lead generation.",
    description:
      "Create a content rhythm that reflects your brand, educates customers, and supports campaigns.",
    benefits: ["Stronger brand presence", "Clear content pillars", "Higher engagement"],
    process: ["Plan content themes", "Create posting system", "Review and improve performance"],
    results: ["Consistent publishing", "Better audience connection", "Campaign-ready content"],
    icon: Share2,
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    summary: "Facebook and Instagram campaigns built for efficient testing and conversion.",
    description:
      "Launch structured campaigns with strong creative, audience hypotheses, and disciplined optimization.",
    benefits: ["Creative testing", "Better funnel targeting", "Performance clarity"],
    process: ["Define offers", "Build campaigns", "Optimize winners"],
    results: ["Lower wasted spend", "Stronger leads", "Repeatable ad learnings"],
    icon: Megaphone,
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    summary: "High-intent search campaigns that convert demand into leads and sales.",
    description:
      "Capture active buyers with focused keywords, landing page alignment, and conversion tracking.",
    benefits: ["Demand capture", "Precise targeting", "Clear cost controls"],
    process: ["Research intent", "Build campaigns", "Optimize search terms and bids"],
    results: ["Qualified traffic", "Lead growth", "Improved return on ad spend"],
    icon: MousePointer2,
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    summary: "Authority-building content that supports SEO, social, ads, and sales.",
    description:
      "Plan and produce useful content that answers buyer questions and moves prospects toward action.",
    benefits: ["Thought leadership", "Search-friendly topics", "Reusable campaign assets"],
    process: ["Build content strategy", "Create editorial calendar", "Measure content impact"],
    results: ["More trust", "More traffic", "Better sales enablement"],
    icon: FileText,
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    summary: "Automate repetitive marketing workflows without losing human judgment.",
    description:
      "Connect tools, prompts, and processes to reduce manual work across content, reporting, and lead handling.",
    benefits: ["Time savings", "Process consistency", "Faster reporting"],
    process: ["Map workflows", "Design automations", "Test and document handoff"],
    results: ["Reduced manual tasks", "Cleaner operations", "Faster execution"],
    icon: Bot,
  },
  {
    slug: "marketing-consultation",
    title: "Marketing Consultation",
    summary: "Focused strategic guidance for founders, teams, and growing businesses.",
    description:
      "Get practical recommendations on campaigns, positioning, analytics, funnels, and growth priorities.",
    benefits: ["Expert clarity", "Actionable recommendations", "Decision confidence"],
    process: ["Understand goals", "Review current assets", "Deliver prioritized actions"],
    results: ["Clear next steps", "Less guesswork", "Better marketing decisions"],
    icon: Handshake,
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    summary: "Make performance visible with dashboards, KPIs, and decision-ready reporting.",
    description:
      "Set up measurement that helps you understand what is working, what is wasting budget, and what to do next.",
    benefits: ["Reliable tracking", "Useful dashboards", "Cleaner KPI reviews"],
    process: ["Audit tracking", "Define KPIs", "Build reporting rhythm"],
    results: ["Better decisions", "Improved attribution", "Performance accountability"],
    icon: AreaChart,
  },
  {
    slug: "website-strategy",
    title: "Website Strategy",
    summary: "Turn your website into a clearer, faster, and more persuasive growth asset.",
    description:
      "Improve messaging, structure, conversion paths, and page priorities so your website supports business goals.",
    benefits: ["Clearer messaging", "Better user flow", "Stronger conversion intent"],
    process: ["Review website UX", "Map conversion paths", "Prioritize improvements"],
    results: ["Better engagement", "More inquiries", "A site strategy ready for execution"],
    icon: Globe2,
  },
];

export const proofPoints = [
  { label: "Strategy-first", value: "90-day plans" },
  { label: "Channels", value: "SEO + Ads + AI" },
  { label: "Reporting", value: "KPI clarity" },
  { label: "Approach", value: "Consultative" },
];

export const whyWork = [
  {
    title: "Professional approach",
    description: "Structured discovery, documented recommendations, and calm execution rhythms.",
    icon: Handshake,
  },
  {
    title: "Data-driven decisions",
    description: "Every priority connects to search intent, funnel signals, or measurable business goals.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "AI-powered marketing",
    description: "AI improves research, content workflows, reporting, and automation without replacing judgment.",
    icon: BrainCircuit,
  },
  {
    title: "Transparent communication",
    description: "Clear updates, simple dashboards, and practical next steps after every review.",
    icon: AreaChart,
  },
];
