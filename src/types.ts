export interface CarouselSlide {
  title: string;
  image: string;
  alt: string;
  subtitle: string;
}

export interface TrustStat {
  value: string;
  label: string;
  desc: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  type: string;
  city: string;
  serviceType: string;
  desc: string;
  capacity: string;
}

export interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export interface PlanItem {
  id: string;
  name: string;
  desc: string;
  features: string[];
  trafficType: string;
  popular?: boolean;
}
