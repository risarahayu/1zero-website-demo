export interface NavLink {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;

  service: string;

  description: string;

  // what user is experiencing (symptoms of bottleneck)
  symptoms: string[];

  // what the system unlocks after intervention
  futureState: string[];

  image: string;

  href: string;

  cta: string;

  problemTitle: string;


  // NEW: visual identity layer
  mood: {
    bg: string;
    glow: string;
    accent: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  imageUrl: string;
  tags: string[];
  linkText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  subtext: string;
  bullet1: string;
  bullet2: string;
}

export interface TeamMemberCall {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  isMuted: boolean;
  isLocal?: boolean;
}
