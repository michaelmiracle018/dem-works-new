// Portfolio data for GreenPixel Studios

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: "ecommerce" | "business" | "landing" | "webapp";
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  link?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "luxe-boutique",
    title: "Luxe Boutique",
    client: "Luxe Fashion Co.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    description: "A premium fashion e-commerce platform with seamless shopping experience and integrated payment solutions.",
    challenge: "The client needed a high-end e-commerce solution that could handle their growing inventory while providing a luxury shopping experience that matched their brand.",
    solution: "We built a custom e-commerce platform with advanced filtering, wishlist functionality, and a streamlined checkout process. The design emphasizes visual storytelling with large product images and elegant typography.",
    results: [
      "150% increase in online sales",
      "40% reduction in cart abandonment",
      "3x improvement in mobile conversions"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    testimonial: {
      quote: "GreenPixel transformed our online presence. The new site has exceeded all our expectations and our customers love the shopping experience.",
      author: "Sarah Mitchell",
      role: "CEO, Luxe Fashion Co."
    }
  },
  {
    id: "techflow-solutions",
    title: "TechFlow Solutions",
    client: "TechFlow Inc.",
    category: "business",
    categoryLabel: "Business Website",
    description: "A modern corporate website for a B2B SaaS company, featuring dynamic content and lead generation tools.",
    challenge: "TechFlow needed a website that could effectively communicate their complex software solutions while generating qualified leads.",
    solution: "We created a content-rich website with interactive product demos, case study sections, and an integrated CRM for lead management. The design balances professionalism with modern aesthetics.",
    results: [
      "200% increase in lead generation",
      "85% improvement in time on site",
      "50% reduction in bounce rate"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HubSpot"],
    testimonial: {
      quote: "The team at GreenPixel understood our vision from day one. They delivered a website that truly represents our brand and drives results.",
      author: "Michael Chen",
      role: "Marketing Director, TechFlow Inc."
    }
  },
  {
    id: "fresh-harvest",
    title: "Fresh Harvest",
    client: "Fresh Harvest Farms",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    description: "An organic food delivery platform with subscription management and local farm integration.",
    challenge: "The client wanted to connect local farms with consumers through a subscription-based delivery service with flexible ordering options.",
    solution: "We developed a custom e-commerce platform with subscription management, delivery scheduling, and a farm partner portal. The design emphasizes freshness and sustainability.",
    results: [
      "5,000+ subscribers in first 6 months",
      "95% customer retention rate",
      "Partnership with 50+ local farms"
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Supabase", "Stripe", "React Native"],
    testimonial: {
      quote: "GreenPixel brought our farm-to-table vision to life. The platform is beautiful, functional, and our customers love it.",
      author: "Emma Rodriguez",
      role: "Founder, Fresh Harvest Farms"
    }
  },
  {
    id: "startup-launch",
    title: "LaunchPad Pro",
    client: "Various Startups",
    category: "landing",
    categoryLabel: "Landing Page",
    description: "High-converting landing pages for startup product launches with A/B testing and analytics integration.",
    challenge: "Multiple startup clients needed quick-turnaround landing pages that could effectively communicate their value proposition and convert visitors.",
    solution: "We created a modular landing page system that allows for rapid deployment while maintaining high design standards. Each page is optimized for conversions with strategic CTAs.",
    results: [
      "Average 12% conversion rate",
      "40% faster deployment",
      "A/B testing increased conversions by 35%"
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    technologies: ["React", "Framer Motion", "Google Analytics", "Hotjar"]
  },
  {
    id: "wellness-hub",
    title: "Wellness Hub",
    client: "MindBody Wellness",
    category: "webapp",
    categoryLabel: "Web Application",
    description: "A comprehensive wellness platform with booking, class management, and member portals.",
    challenge: "The wellness center needed a unified platform to manage class bookings, memberships, and instructor schedules across multiple locations.",
    solution: "We built a full-featured web application with real-time booking, payment processing, and a mobile-responsive member portal. Instructors can manage their schedules independently.",
    results: [
      "60% reduction in booking errors",
      "30% increase in class attendance",
      "Automated scheduling saved 20 hours/week"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    testimonial: {
      quote: "The booking system has transformed how we operate. Everything is seamless now – from scheduling to payments.",
      author: "Lisa Park",
      role: "Operations Manager, MindBody Wellness"
    }
  },
  {
    id: "urban-architecture",
    title: "Urban Architecture",
    client: "Urban Design Studio",
    category: "business",
    categoryLabel: "Business Website",
    description: "A stunning portfolio website for an architecture firm, showcasing their projects with immersive galleries.",
    challenge: "The architecture firm wanted a website that could showcase their projects as effectively as their physical portfolio books.",
    solution: "We designed an immersive portfolio experience with high-resolution image galleries, project filters, and smooth animations that highlight the firm's attention to detail.",
    results: [
      "300% increase in portfolio views",
      "45% more project inquiries",
      "Featured in design publications"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    technologies: ["React", "GSAP", "Cloudinary", "Sanity CMS"]
  }
];

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "business", label: "Business" },
  { value: "landing", label: "Landing Pages" },
  { value: "webapp", label: "Web Apps" },
];
