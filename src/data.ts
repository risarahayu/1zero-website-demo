import { NavLink, ProductItem, PortfolioItem, TestimonialItem, WorkflowStep, TeamMemberCall } from "./types";
import React from "react";
import { MousePointerClick, SearchX, EyeOff, Activity, Timer, Wrench, TrendingDown, Layout, Rocket, Network, ShieldCheck, Sparkles, Blocks, Cpu, UserPlus, Gauge, Compass, Boxes, ShieldAlert, Split, FileText, FileSearch, Users, Eye, BookOpen, Search, Layers, RefreshCw, Server } from "lucide-react";
import { Icon } from "@iconify/react";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

export const clientLogos = [
  { name: "BWT", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/BWT.png" },
  { name: "4Ocean", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/4Ocean.png" },
  { name: "DARE", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/DARE.png" },
  { name: "Ferrum", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/Ferrum.png" },
  { name: "UNHCR", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/UNHCR.png" },
  { name: "Energaia", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/energaia.png" },
  { name: "PWC", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/PWC.png" },
  { name: "IGCN", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/igcn.png" },
  { name: "PLC", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/PLC.png" },
  { name: "TDD", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/TDD.png" },
  { name: "Adaluma", logoImg: import.meta.env.BASE_URL + "Partner Logo Color/Adaluma.png" },



];

export const products: ProductItem[] = [
  {
    id: "geo",
    service: "Generative Engine Optimization",
    description:
      "Your visibility layer in the AI-search era. We ensure your platform gets discovered, understood, and recommended by modern AI engines.",
    fileEng: `/Products Sheet/Eng/GEO Product Sheet - Eng.pdf`,
    fileIndo: `/Products Sheet/Indo/GEO Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "You get traffic, but it doesn't convert to real impact",
        icon: MousePointerClick
      },
      {
        text: "AI systems and LLMs completely ignore your content",
        icon: SearchX
      },
      {
        text: "Users don’t immediately grasp your core value",
        icon: EyeOff
      },
      {
        text: "Search visibility is volatile and unpredictable",
        icon: Activity
      },
    ],

    futureState: [
      "Consistently surface in AI-generated answers",
      "Attract high-intent, mission-aligned visitors",
      "Make your value proposition instantly clear",
      "Build resilient visibility that survives algorithm updates",
    ],

    imageProblem: "./illustration/undraw_website_27ju 1.svg",
    imageSolution: "./illustration/geo-solution.png",
    href: "/Products Sheet/Eng/GEO Product Sheet - Eng.pdf",
    cta: "See GEO in Action",
    problemTitle: "Growth & Visibility",


  },

  {
    id: "nextgen",
    service: "NextGen Platforms",
    description:
      "A resilient, cloud-native foundation built to scale your operations without fighting legacy codebase constraints.",
    fileEng: `/Products Sheet/Eng/NextGen Platforms Product Sheet - Eng.pdf`,
    fileIndo: `/Products Sheet/Indo/NextGen Platforms Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "Core features are slowing down under load",
        icon: Timer
      },
      {
        text: "The system is becoming a nightmare to maintain",
        icon: Wrench
      },
      {
        text: "Performance crashes during user traffic spikes",
        icon: TrendingDown
      },
      {
        text: "UI and UX consistency breaks with every update",
        icon: Layout
      },
    ],

    futureState: [
      "Ship new features without breaking existing ones",
      "Maintain a clean, scalable architectural baseline",
      "Keep performance lightning-fast at any scale",
      "Ensure a flawless, consistent product experience",
    ],

    imageProblem: "/illustrations/nextgen-problem.png",
    imageSolution: "/illustrations/nextgen-solution.png",
    href: "/Products Sheet/Eng/NextGen Platforms Product Sheet - Eng.pdf",
    cta: "Review NextGen Architecture",
    problemTitle: "System Performance",
  },

  {
    id: "devpods",
    service: "DevPods",
    description:
      "Instant, identical development environments so your team can focus on shipping code, not fixing local setups.",
    fileEng: `/Products Sheet/Eng/DevPod Product Sheet - Eng.pdf`,
    fileIndo: `/Products Sheet/Indo/DevPod Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "Local environment setups block developer momentum",
        icon: Blocks
      },
      {
        text: "The classic 'it works on my machine' paradox",
        icon: Cpu
      },
      {
        text: "Onboarding new engineers takes weeks, not days",
        icon: UserPlus
      },
      {
        text: "Team velocity and sprint deliveries are unpredictable",
        icon: Gauge
      },
    ],

    futureState: [
      "Onboard developers instantly with one click",
      "Guarantee identical environments across the team",
      "Eliminate local setup friction and dependencies",
      "Maintain a rapid, consistent engineering velocity",
    ],

    imageProblem: "/illustrations/devpod-problem.png",
    imageSolution: "/illustrations/devpod-solution.png",
    href: "/Products Sheet/Eng/DevPod Product Sheet - Eng.pdf",
    cta: "Deploy with DevPod",
    problemTitle: "Developer Experience",
  },

  {
    id: "fcto",
    service: "fCTO",
    description:
      "Strategic technical leadership to eliminate tech debt, secure your architecture, and make your mission investable.",
    fileEng: `/Products Sheet/Eng/fCTO Product Sheet - Eng.pdf`,
    fileIndo: `/Products Sheet/Indo/fCTO Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "Engineering decisions are reactive, not strategic",
        icon: Compass
      },
      {
        text: "No clear ownership over system architecture",
        icon: Boxes
      },
      {
        text: "Security protocols and cloud costs are ignored",
        icon: ShieldAlert
      },
      {
        text: "Development teams lack alignment with business goals",
        icon: Split
      },
    ],

    futureState: [
      "Establish a clear, long-term technical roadmap",
      "Align architecture directly with mission milestones",
      "Implement strict governance and cost controls",
      "Build a scalable, highly-investable engineering org",
    ],

    imageProblem: "/illustrations/fcto-problem.png",
    imageSolution: "/illustrations/fcto-solution.png",
    href: "/Products Sheet/Eng/fCTO Product Sheet - Eng.pdf",
    cta: "Explore Fractional Leadership",
    problemTitle: "Strategic Direction",

  },
];


export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-lingua",
    title: "LinguaMinds Portal",
    subtitle: "Healthcare Telemedicine & Translation Platform",
    description: "A secure patient portal with dynamic real-time medical translation, high-concurrency video consultations, and integrated health documentation sharing.",
    badge: "Case Study 01",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    tags: ["Telehealth", "WebRTC", "AI Translation", "React"],
    linkText: "Read Case Study"
  },
  {
    id: "port-animax",
    title: "Animax Pathology Portal",
    subtitle: "Enterprise Diagnostics Lab Network",
    description: "Custom portal integrating automated laboratory apparatus diagnostics with secure patient report deliveries, reducing turnaround delays by 65%.",
    badge: "Case Study 02",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop",
    tags: ["HL7 Standards", "Next.js", "Security Vault", "D3 Analytics"],
    linkText: "Read Case Study"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "test-01",
    name: "Herman Yudantara",
    role: "CEO & Co-Founder",
    company: "BWT Logistics",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "Since partnering with 1zero, our active pipeline latency plummeted by 42%. The structural integrity of their systems is world-class, matched only by their incredible attention to design details."
  },
  {
    id: "test-02",
    name: "Hermawan Susilo",
    role: "VP of Engineering",
    company: "Sinar Agritech",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    quote: "Their team did not just build what we asked for—they challenged our flawed assumptions, re-architectured our query scaling, and delivered an elegant dashboard that our operators love."
  },
  {
    id: "test-03",
    name: "Hermina Purwanti",
    role: "Director of Product",
    company: "EduVibe Asia",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "What set 1zero apart was direct communication. We worked side-by-side with principal developers with zero agency overhead. The result was a highly scalable, gorgeous, responsive system."
  }
];

/* export const workflowSteps: WorkflowStep[] = [
  {
    number: "Roadmap",
    title: "Roadmap Workshop",
    subtext: "We dissect first, map out exactly what happens behind your screens, identify logical bottlenecks, and plan architecture for your exact users.",
    bullet1: "Comprehensive System Mapping",
    bullet2: "Stakeholder & Operator Audits"
  },
  {
    number: "Plan to Build",
    title: "Plan First, Build Next",
    subtext: "We spec out high-fidelity prototypes, state charts, database entity models, and API boundaries. You see and approve exactly how data flows.",
    bullet1: "Scalable Schema Blueprints",
    bullet2: "Interactive Web Interfaces"
  },
  {
    number: "Build and Enable",
    title: "Build and Enable",
    subtext: "We build your platform with optimized pipelines, write strict type-safe code, deploy inside redundant clouds, and train your staff for full autonomy.",
    bullet1: "Production-Grade Engineering",
    bullet2: "Hands-on Technical Handovers"
  }
];
 */
export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "System Audit & AI Discovery",
    subtext: "We analyze your current stack to uncover performance bottlenecks and identify high-impact areas where AI integration and data automation can 10x your operational efficiency.",
    bullet1: "Deep-Dive Stack & Latency Analysis",
    bullet2: "AI & Automation Viability Audits",
    icon: "bx:search"
  },
  {
    number: "02",
    title: "The 1zero Blueprint",
    subtext: "Before writing a line of code, we design scalable data schemas, strict API contracts, and high-fidelity prototypes. You approve the exact architectural flow upfront.",
    bullet1: "Cloud-Native Architecture Schemas",
    bullet2: "Interactive UX & API Mapping",
    icon: "clarity:design-line"
  },
  {
    number: "03",
    title: "Agile & AI-Assisted Build",
    subtext: "We execute with pristine, type-safe code using AI-accelerated workflows. Continuous integration ensures you review testable, production-ready increments every sprint.",
    bullet1: "Type-Safe, Modular Codebases",
    bullet2: "Sprint-Based Transparent Deliveries",
    icon: "carbon:loop"
  },
  {
    number: "04",
    title: "Deploy & Empower",
    subtext: "We launch your platform on auto-scaling infrastructure and conduct rigorous technical handovers. Your team gains total system autonomy with zero vendor lock-in.",
    bullet1: "Zero-Downtime CI/CD Pipelines",
    bullet2: "Complete Technical Handovers",
    icon: "carbon:development"
  }
];
export const whyUsPoints = [
  {
    title: "We don't bring one-size-fits-all answers.",
  },
  {
    title: "We listen, adapt, and co-design alongside your team to make sure what we build fits your reality.",
  },
  {
    title: "When you work with 1zero, you collaborate directly with the people designing and building your system.",
  },
  {
    title: "We care about what works in practice, not what looks good in a slide deck.",
  }
];

export const customProjects = [
  {
    id: "impact",
    title: "4Ocean - Impact Portal",
    subtitle: "Enterprise Digitization",
    description: "Pulling almost 50mil pounds of plastic from the ocean MANAGED MANUALLY! 1zero built a new digital infrastructure for Truth and Traceability.",
    bgClass: "bg-[#112240] border-blue-500/10",
    mockupType: "impact",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/4Ocean.jpg`,
    service: "DevPod"
  },
  {
    id: "baliteak",
    title: "BaliTeak - E-Commerce Replatform",
    description: "Bali-to-Canada exporter of fine craftmanship, starting their digital journey. A modern, high-speed digital portfolio showcasing custom teakwood designs and artisanal furniture catalogs.",
    bgClass: "bg-[#45301F] border-amber-500/10",
    mockupType: "baliteak",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/Baliteak.jpg`,
    service: "NextGen Platform",
    url: `${import.meta.env.BASE_URL}Portfolio pdf/Bali Teak Redesign Website.pdf`
  },
  {
    id: "TDD",
    title: "The Donor Dashboard",
    description: "A highly secure healthcare portal integrating real-time translation, audio diagnostics, and clinical records.",
    bgClass: "bg-[#092218] border-emerald-500/10",
    mockupType: "tdd",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/TDD.jpg`,
    service: "DevPod",
  },
  {
    id: "phoenix",
    title: "PT Phoenix - Corporate Architecture",
    description: "An experienced organization ramping up Import/Export support in global trade, 1zero established their world-class digital footprint. A robust platforming for PT Phoenix, featuring a modern headless design system and seamless user experience.",
    bgClass: "bg-[#16122d] border-purple-500/10",
    mockupType: "phoenix",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/PT Phoenix.jpg`,
    service: "DevPod",
  },
  {
    id: "blackstump",
    title: "BlackStump Technologies - Modernization",
    description: "An amazing Australian company, providing container-based Solar and Coldchain solutions to replace Dirty Diesel. Full architectural replatforming—modernizing their backend infrastructure, design system, and global digital presence.",
    bgClass: "bg-[#0d1a0d] border-brunswick-green-500/10",
    mockupType: "blackstump",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/BST.jpg`,
    service: "DevPod",
  }
];

export const benefits = [
  {
    title: "Actionable Summaries",
    description:
      "Clear, actionable documentation after every technical discussion and planning session.",
    icon: FileText,
    style: {
      top: "10%",
      left: "12%",
    },
  },
  {
    title: "Transparent Proposals",
    description:
      "Know exactly what infrastructure we're building, why it matters, and what scalability looks like.",
    icon: FileSearch,
    style: {
      top: "18%",
      right: "10%",
    },
  },
  {
    title: "Strategic Direction",
    description:
      "Architectural recommendations backed by four decades of real-world experience, not guesswork.",
    icon: Compass,
    style: {
      top: "5%",
      left: "55%",
    },
  },
  {
    title: "Direct Specialists",
    description:
      "Collaborate directly with the engineers building your system, cutting out agency middle-men.",
    icon: Users,
    style: {
      top: "60%",
      left: "8%",
    },
  },
  {
    title: "Radical Visibility",
    description:
      "Stay fully informed with open repositories, clear progress tracking, and direct communication channels.",
    icon: Eye,
    style: {
      top: "55%",
      right: "5%",
    },
  },
  {
    title: "Clean Handovers",
    description:
      "Knowledge stays with your team, avoiding vendor lock-in through meticulous documentation.",
    icon: BookOpen,
    style: {
      bottom: "15%",
      left: "20%",
    },
  },
  {
    title: "Resilient Foundations",
    description:
      "Systems engineered to support massive future growth without the need for constant rebuilding.",
    icon: Blocks,
    style: {
      bottom: "5%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
];