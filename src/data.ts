import { NavLink, ProductItem, PortfolioItem, TestimonialItem, WorkflowStep, TeamMemberCall } from "./types";
import React from "react";
import { MousePointerClick, SearchX, EyeOff, Activity, Timer, Wrench, TrendingDown, Layout, Rocket, Network, ShieldCheck, Sparkles, Blocks, Cpu, UserPlus, Gauge, Compass, Boxes, ShieldAlert, Split, FileText, FileSearch, Users, Eye, BookOpen } from "lucide-react";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

export const clientLogos = [
  { name: "BWT", logoImg: import.meta.env.BASE_URL + "Partner logo white/BWT.png" },
  { name: "DARE", logoImg: import.meta.env.BASE_URL + "Partner logo white/DARE.png" },
  { name: "Ferrum", logoImg: import.meta.env.BASE_URL + "Partner logo white/Ferrum.png" },
  { name: "PWC", logoImg: import.meta.env.BASE_URL + "Partner logo white/PWC.png" },
  { name: "UNHCR", logoImg: import.meta.env.BASE_URL + "Partner logo white/UNHCR.png" },
  { name: "Energaia", logoImg: import.meta.env.BASE_URL + "Partner logo white/energaia.png" },
  { name: "PLC", logoImg: import.meta.env.BASE_URL + "Partner logo white/plc-logo-scaled.png" },
];

export const products: ProductItem[] = [
  {
    id: "geo",
    service: "Generative Engine Optimization",
    description:
      "Your visibility layer in the AI-search era. We help your existing website get discovered, understood, and recommended by AI systems.",
    fileEng: `${import.meta.env.BASE_URL}/Products Sheet/Eng/GEO Product Sheet - Eng.pdf`,
    fileIndo: `${import.meta.env.BASE_URL}/Products Sheet/Indo/GEO Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "Your website gets traffic, but it doesn't turn into meaningful results",
        icon: MousePointerClick
      },
      {
        text: "AI systems rarely surface your content",
        icon: SearchX
      },
      {
        text: "People don’t immediately understand your value",
        icon: EyeOff
      },
      {
        text: "Visibility feels unstable",
        icon: Activity
      },
    ],

    futureState: [
      "Be consistently discovered in AI-generated answers",
      "Attract high-intent visitors",
      "Make your value instantly clear",
      "Build durable visibility beyond SEO",
    ],

    imageProblem: "./illustration/undraw_website_27ju 1.svg",
    imageSolution: "./illustration/geo-solution.png",
    href: "#geo",
    cta: "Explore GEO",
    problemTitle: "Growth & Visibility",

    mood: {
      bg: "from-blue-950 via-black to-black",
      glow: "rgba(59,130,246,0.25)",
      accent: "rgb(59,130,246)",
    },
  },

  {
    id: "nextgen",
    service: "NextGen Platforms",
    description:
      "A modern cloud-native foundation built to scale performance, UX, and system reliability.",
    fileEng: `${import.meta.env.BASE_URL}/Products Sheet/Eng/NextGen Platforms Product Sheet - Eng.pdf`,
    fileIndo: `${import.meta.env.BASE_URL}/Products Sheet/Indo/NextGen Platforms Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "Website features is getting slower",
        // Ikon timer merepresentasikan waktu tunggu atau kelambatan
        icon: Timer
      },
      {
        text: "System becomes harder to maintain",
        // Ikon kunci pas (wrench) merepresentasikan perbaikan dan maintenance
        icon: Wrench
      },
      {
        text: "Performance degrades as users grow",
        // Ikon grafik menurun merepresentasikan performa yang drop
        icon: TrendingDown
      },
      {
        text: "UI consistency breaks over time",
        // Ikon layout merepresentasikan struktur UI/desain
        icon: Layout
      },
    ],

    futureState: [
      "Ship features faster",
      "Maintain scalable architecture",
      "Keep performance stable at scale",
      "Improve product experience consistency",
    ],

    imageProblem: "/illustrations/nextgen-problem.png",
    imageSolution: "/illustrations/nextgen-solution.png",
    href: "#nextgen",
    cta: "Explore NextGen",
    problemTitle: "System Performance",

    mood: {
      bg: "from-brunswick-green-600 via-black to-black",
      glow: "rgba(16,185,129,0.25)",
      accent: "rgb(16,185,129)",
    },
  },

  {
    id: "devpod",
    service: "DevPod",
    description:
      "Instant, consistent development environments for teams that need speed and stability.",
    fileEng: `${import.meta.env.BASE_URL}/Products Sheet/Eng/DevPod Product Sheet - Eng.pdf`,
    fileIndo: `${import.meta.env.BASE_URL}/Products Sheet/Indo/DevPod Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "Environment setup slows developers down",
        // Ikon Blocks (balok) merepresentasikan environment/container (seperti Docker) yang sedang disusun
        icon: Blocks
      },
      {
        text: "Machines behave inconsistently",
        // Ikon Cpu atau mesin merepresentasikan hardware/sistem lokal yang tidak stabil
        icon: Cpu
      },
      {
        text: "Onboarding takes too long",
        // Ikon UserPlus merepresentasikan proses penambahan/onboarding anggota tim baru
        icon: UserPlus
      },
      {
        text: "Team velocity is unpredictable",
        // Ikon Gauge (speedometer) merepresentasikan kecepatan atau velocity tim yang fluktuatif
        icon: Gauge
      },
    ],

    futureState: [
      "Instant developer onboarding",
      "Identical environments everywhere",
      "No setup friction",
      "Consistent engineering speed",
    ],

    imageProblem: "/illustrations/devpod-problem.png",
    imageSolution: "/illustrations/devpod-solution.png",
    href: "#devpod",
    cta: "Explore DevPod",
    problemTitle: "Developer Experience",

    mood: {
      bg: "from-purple-950 via-black to-black",
      glow: "rgba(168,85,247,0.25)",
      accent: "rgb(168,85,247)",
    },
  },

  {
    id: "fcto",
    service: "fCTO",
    description:
      "Strategic technical leadership for architecture, security, and long-term system governance.",
    fileEng: `${import.meta.env.BASE_URL}/Products Sheet/Eng/fCTO Product Sheet - Eng.pdf`,
    fileIndo: `${import.meta.env.BASE_URL}/Products Sheet/Indo/fCTO Product Sheet - Indo.pdf`,
    symptoms: [
      {
        text: "Decisions are reactive instead of strategic",
        // Ikon Compass (kompas) merepresentasikan arah atau strategi yang hilang
        icon: Compass
      },
      {
        text: "No clear architecture ownership",
        // Ikon Boxes (tumpukan kotak) merepresentasikan arsitektur atau struktur sistem yang tidak ada pemilik pastinya
        icon: Boxes
      },
      {
        text: "Security and cost are not actively managed",
        // Ikon ShieldAlert (perisai peringatan) sangat pas untuk risiko keamanan dan kebocoran biaya
        icon: ShieldAlert
      },
      {
        text: "Teams lack alignment",
        // Ikon Split (panah berpisah) merepresentasikan tim yang berjalan ke arah yang berbeda atau tidak sejalan
        icon: Split
      },
    ],

    futureState: [
      "Clear technical direction",
      "Aligned architecture strategy",
      "Better governance and control",
      "Scalable engineering organization",
    ],

    imageProblem: "/illustrations/fcto-problem.png",
    imageSolution: "/illustrations/fcto-solution.png",
    href: "#fcto",
    cta: "Read fCTO",
    problemTitle: "Strategic Direction",

    mood: {
      bg: "from-red-950 via-black to-black",
      glow: "rgba(239,68,68,0.25)",
      accent: "rgb(239,68,68)",
    },
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
    linkText: "Read More"
  },
  {
    id: "port-animax",
    title: "Animax Pathology Portal",
    subtitle: "Enterprise Diagnostics Lab Network",
    description: "Custom portal integrating automated laboratory apparatus diagnostics with secure patient report deliveries, reducing turnaround delays by 65%.",
    badge: "Case Study 02",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop",
    tags: ["HL7 Standards", "Next.js", "Security Vault", "D3 Analytics"],
    linkText: "Read More"
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

export const workflowSteps: WorkflowStep[] = [
  {
    number: "Discovery",
    title: "Discovery",
    subtext: "We dissect first, map out exactly what happens behind your screens, identify logical bottlenecks, and plan architecture for your exact users.",
    bullet1: "Comprehensive System Mapping",
    bullet2: "Stakeholder & Operator Audits"
  },
  {
    number: "Blueprint",
    title: "Blueprint Design",
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

export const whyUsPoints = [
  {
    title: "We don't bring one-size-fits-all answers.",
    // descr: "We don't bring one-size-fits-all answers."
  },
  {
    title: "We listen, adapt, and co-design alongside your team to make sure what we build fits your reality.",
    // descr: "A custom-fit system engineered for high concurrency, low latency, and zero licensing overhead lock-in."
  },
  {
    title: "When you work with 1zero, you collaborate directly with the people designing and building your system.",
    // descr: "No account managers in the middle. You exchange ideas and review iterations directly with elite builders."
  },
  {
    title: "We care about what works in practice, not what looks good in a slide deck.",
    // descr: "We care deeply about visual layout balance and actual practical metrics, never bloated vanity metrics."
  }
];

export const teamMembers: TeamMemberCall[] = [
  {
    id: "tm-1",
    name: "Andi Gunawan",
    role: "Lead Systems Engineer",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
    isMuted: false,
    isLocal: false
  },
  {
    id: "tm-2",
    name: "Jane Cooper",
    role: "Principal Product Designer",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    isMuted: true,
    isLocal: false
  },
  {
    id: "tm-3",
    name: "Arthur Pendelton",
    role: "Senior Full-Stack Engineer",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    isMuted: false,
    isLocal: false
  },
  {
    id: "tm-4",
    name: "Sarah Lin",
    role: "DevOps Architect",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    isMuted: false,
    isLocal: true
  }
];

export const casesList = [
  {
    id: "case-01",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    title: "30-Min Workout app",
    desc: "Connecting community athletic activity with real-time active GPS groups."
  },
  {
    id: "case-02",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    title: "Fitness Center Portal",
    desc: "Modernizing multi-branch attendance and biometric entry software."
  }
];

export const customProjects = [
  {
    id: "impact",
    title: "Impact Portal",
    subtitle: "Enterprise Data Dashboard",
    description: "A curated selection of modern art pieces from various contemporary artists.",
    bgClass: "bg-[#112240] border-blue-500/10",
    mockupType: "impact",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/4Ocean.jpg`,
    service: "Devpod",
    url: `${import.meta.env.BASE_URL}Portfolio pdf/Impact Dashboard.pdf`
  },
  {
    id: "baliteak",
    title: "Baliteak Redesign Website",
    description: "A portfolio showcasing stunning custom teakwood designs and artisanal furniture catalog.",
    bgClass: "bg-[#45301F] border-amber-500/10",
    mockupType: "baliteak",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/Baliteak.jpg`,
    service: "NextGen Platform",
    url: `${import.meta.env.BASE_URL}Portfolio pdf/Bali Teak Redesign Website.pdf`
  },
  {
    id: "TDD",
    title: "The Donor Dashboard Landing Page",
    description: "Healthcare portal integrating real-time translating, audio diagnosis, and clinical records.",
    bgClass: "bg-[#092218] border-brunswick-green-500/10",
    mockupType: "tdd",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/TDD.jpg`,
    service: "Devpod",
    url: "https://www.tirtamurninusantara.org/front?open=true"
  },
  {
    id: "phoenix",
    title: "PT Phoenix Website",
    description: "Professional company website built for PT Phoenix, featuring a modern design system and seamless user experience.",
    bgClass: "bg-[#16122d] border-purple-500/10",
    mockupType: "phoenix",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/PT Phoenix.jpg`,
    service: "Devpod",
    url: "https://www.phoenixjaya.com/"
  },
  {
    id: "blackstump",
    title: "Blackstump Technologies Website Replatform",
    description: "Full website replatform for Blackstump Technologies — modernizing architecture, design system, and digital presence from the ground up.",
    bgClass: "bg-[#0d1a0d] border-brunswick-green-500/10",
    mockupType: "blackstump",
    imageUrl: `${import.meta.env.BASE_URL}portofolio image/BST.jpg`,
    service: "NextGen Platform",
    url: `${import.meta.env.BASE_URL}Portfolio pdf/Black Stump.pdf`
  }
];

export const benefits = [
  {
    title: "Meeting Summaries",
    description:
      "Clear documentation after every discussion, decision, and planning session.",
    icon: FileText,
    style: {
      top: "10%",
      left: "12%",
    },
  },
  {
    title: "Transparent Proposals",
    description:
      "Know exactly what we're building, why it matters, and what success looks like.",
    icon: FileSearch,
    style: {
      top: "18%",
      right: "10%",
    },
  },
  {
    title: "Strategic Direction",
    description:
      "Recommendations backed by experience, not guesswork.",
    icon: Compass,
    style: {
      top: "5%",
      left: "55%",
    },
  },
  {
    title: "Dedicated Experts",
    description:
      "Work directly with people who understand both business and technology.",
    icon: Users,
    style: {
      top: "60%",
      left: "8%",
    },
  },
  {
    title: "Project Visibility",
    description:
      "Stay informed with clear progress and next-step communication.",
    icon: Eye,
    style: {
      top: "55%",
      right: "5%",
    },
  },
  {
    title: "Documentation",
    description:
      "Knowledge stays with your team, not locked inside a project.",
    icon: BookOpen,
    style: {
      bottom: "15%",
      left: "20%",
    },
  },
  {
    title: "Scalable Foundations",
    description:
      "Built to support future growth without constant rebuilding.",
    icon: Blocks,
    style: {
      bottom: "5%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },

];