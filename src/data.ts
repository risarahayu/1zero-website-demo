import { NavLink, ProductItem, PortfolioItem, TestimonialItem, WorkflowStep, TeamMemberCall } from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

export const clientLogos = [
  { name: "BWT", logoImg: "/Partner logo white/BWT.png" },
  { name: "DARE", logoImg: "/Partner logo white/DARE.png" },
  { name: "Ferrum", logoImg: "/Partner logo white/Ferrum.png" },
  { name: "PWC", logoImg: "/Partner logo white/PWC.png" },
  { name: "UNHCR", logoImg: "/Partner logo white/UNHCR.png" },
  { name: "Energaia", logoImg: "/Partner logo white/energaia.png" },
  { name: "PLC", logoImg: "/Partner logo white/plc-logo-scaled.png" },
];

export const products: ProductItem[] = [
  {
    id: "prod-devpod",
    title: "DevPod",
    description: "Instant high-performance developer workspaces. Pre-configured, containerized environments designed to eliminate onboarding bottlenecks & accelerate deployment.",
    linkText: "Read DevPod",
    href: "#devpod"
  },
  {
    id: "prod-geo",
    title: "GEO",
    description: "Our proprietary growth system custom-engineered to optimize user conversions, map dropoffs, and scale traffic streams to maximize product revenue.",
    linkText: "Explore GEO",
    href: "#geo"
  },
  {
    id: "prod-nextgen",
    title: "NextGen Platform",
    description: "Cloud-native infrastructure serving auto-scaling microservices, built-in system telemetry, and self-healing cluster algorithms to secure 99.99% uptime.",
    linkText: "Explore Platform",
    href: "#nextgen"
  },
  {
    id: "prod-FCTO",
    title: "FCTO",
    description: "Enterprise-ready consultancies and systems auditing to align architectural compliance, audit cloud spend, and reinforce security defenses.",
    linkText: "Read FCTO",
    href: "#fcto"
  }
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
    quote: "Since partnering with 1ZERO, our active pipeline latency plummeted by 42%. The structural integrity of their systems is world-class, matched only by their incredible attention to design details."
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
    quote: "What set 1ZERO apart was direct communication. We worked side-by-side with principal developers with zero agency overhead. The result was a highly scalable, gorgeous, responsive system."
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    number: "Discovery",
    title: "Discovery & Audio",
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
    title: "We solve strong problems.",
    descr: "With rugged, bulletproof codebases, clear schemas, and interactive layouts aligned to concrete daily operations."
  },
  {
    title: "We scale with your team.",
    descr: "A custom-fit system engineered for high concurrency, low latency, and zero licensing overhead lock-in."
  },
  {
    title: "Direct Engineering Access.",
    descr: "No account managers in the middle. You exchange ideas and review iterations directly with elite builders."
  },
  {
    title: "Real-world impact first.",
    descr: "We care deeply about visual layout balance and actual practical metrics, never bloated vanity metrics."
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
