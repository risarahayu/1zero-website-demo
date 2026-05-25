export interface NavLink {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  linkText: string;
  href: string;
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
