// Blog data for GreenPixel Studios

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "web-design-trends-2024",
    title: "Web Design Trends That Will Dominate 2024",
    excerpt: "From AI-powered personalization to immersive 3D experiences, discover the trends shaping the future of web design.",
    content: `The web design landscape is constantly evolving, and 2024 promises to bring some exciting changes. Here are the trends we're most excited about:

## 1. AI-Powered Personalization

Websites are becoming smarter, using AI to deliver personalized experiences based on user behavior, preferences, and context. This goes beyond simple recommendations – we're talking about dynamic content, adaptive layouts, and predictive navigation.

## 2. Immersive 3D Experiences

With WebGL and Three.js becoming more accessible, we're seeing more websites incorporate 3D elements. From product configurators to interactive storytelling, 3D is no longer just for gaming websites.

## 3. Sustainable Web Design

As awareness of digital carbon footprints grows, more designers are prioritizing performance and efficiency. This means lighter pages, optimized images, and thoughtful use of resources.

## 4. Micro-Interactions

Small, delightful animations that respond to user actions are becoming more sophisticated. These micro-interactions make websites feel more alive and responsive.

## 5. Bold Typography

Typography is taking center stage, with designers using custom fonts and creative layouts to make text itself a design element.`,
    author: {
      name: "Alex Thompson",
      role: "Lead Designer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    category: "Design",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Design", "Trends", "UI/UX"]
  },
  {
    id: "choosing-right-tech-stack",
    title: "How to Choose the Right Tech Stack for Your Project",
    excerpt: "A comprehensive guide to selecting technologies that align with your project goals, team expertise, and scalability needs.",
    content: `Choosing the right technology stack is one of the most critical decisions in any web development project. Here's our framework for making this decision:

## Consider Your Project Requirements

Start by understanding what your project needs to accomplish. An e-commerce platform has different requirements than a content-heavy blog or a real-time application.

## Evaluate Team Expertise

The best technology is one your team can use effectively. Consider the learning curve and whether you have the expertise in-house.

## Think About Scalability

Will your project need to handle thousands or millions of users? Some technologies are better suited for scale than others.

## Factor in Time to Market

If you need to launch quickly, consider technologies with strong ecosystems and ready-made solutions.

## Our Recommendations

For most projects, we recommend:
- **Frontend**: React or Next.js for complex applications, or simpler solutions for content sites
- **Backend**: Node.js for JavaScript teams, or proven solutions like Django/Rails
- **Database**: PostgreSQL for relational data, MongoDB for flexible schemas`,
    author: {
      name: "Jordan Lee",
      role: "Senior Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    category: "Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["Development", "Technology", "Strategy"]
  },
  {
    id: "ux-principles-conversions",
    title: "5 UX Principles That Actually Increase Conversions",
    excerpt: "Learn the user experience fundamentals that turn visitors into customers, backed by data and real-world examples.",
    content: `Great UX isn't just about making things look pretty – it's about creating experiences that guide users toward their goals (and yours). Here are five principles we apply in every project:

## 1. Reduce Cognitive Load

The easier your site is to understand, the more likely users are to convert. Use clear language, consistent patterns, and progressive disclosure.

## 2. Create Clear Visual Hierarchy

Guide users' eyes to what matters most. Use size, color, and spacing to prioritize information and actions.

## 3. Build Trust Through Design

Professional design signals credibility. Include social proof, security badges, and clear contact information.

## 4. Optimize for Speed

Every second of load time costs you conversions. Prioritize performance in every design decision.

## 5. Design for Mobile First

With over 50% of web traffic on mobile, your mobile experience can make or break your conversion rates.`,
    author: {
      name: "Sam Rivera",
      role: "UX Strategist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    category: "UX",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["UX", "Conversion", "Strategy"]
  },
  {
    id: "small-business-website-guide",
    title: "The Complete Guide to Building a Small Business Website",
    excerpt: "Everything you need to know about creating an effective online presence for your small business, from planning to launch.",
    content: `A website is essential for any small business today. Here's our complete guide to getting it right:

## Define Your Goals

Before anything else, clarify what you want your website to achieve. Lead generation? Sales? Brand awareness? Your goals will shape every decision.

## Know Your Audience

Understanding who you're trying to reach helps you create content and design that resonates. Create user personas and keep them in mind throughout the process.

## Plan Your Content

Content is king. Plan your pages, write compelling copy, and gather high-quality images before you start building.

## Choose the Right Platform

From WordPress to custom solutions, there's an option for every budget and need. Consider your technical skills and growth plans.

## Invest in Professional Design

Your website is often the first impression customers have of your business. Professional design pays for itself in credibility and conversions.`,
    author: {
      name: "Alex Thompson",
      role: "Lead Designer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    category: "Business",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["Business", "Strategy", "Guide"]
  },
  {
    id: "ecommerce-optimization-tips",
    title: "10 E-commerce Optimization Tips to Boost Your Sales",
    excerpt: "Practical strategies to improve your online store's performance and increase revenue, from product pages to checkout.",
    content: `Running an e-commerce store? Here are ten proven strategies to boost your sales:

## 1. Optimize Product Images

High-quality images from multiple angles, with zoom functionality, can significantly increase conversions.

## 2. Write Compelling Descriptions

Focus on benefits, not just features. Tell customers how the product will improve their lives.

## 3. Simplify Checkout

Every extra step in checkout costs you sales. Offer guest checkout, auto-fill forms, and multiple payment options.

## 4. Add Social Proof

Reviews, ratings, and testimonials build trust and reduce purchase anxiety.

## 5. Create Urgency

Limited-time offers and low stock indicators encourage immediate action.

## 6-10. Advanced Strategies

- Implement abandoned cart recovery
- Personalize product recommendations
- Optimize site speed
- Offer free shipping thresholds
- Use retargeting campaigns`,
    author: {
      name: "Jordan Lee",
      role: "Senior Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    date: "2023-12-20",
    readTime: "8 min read",
    tags: ["E-commerce", "Optimization", "Sales"]
  },
  {
    id: "responsive-design-best-practices",
    title: "Responsive Design Best Practices for Modern Websites",
    excerpt: "Master the art of creating websites that look and work great on every device, from mobile phones to large desktop monitors.",
    content: `Responsive design is no longer optional – it's essential. Here's how to do it right:

## Mobile-First Approach

Start designing for the smallest screen, then enhance for larger ones. This ensures a solid foundation for all devices.

## Flexible Grids

Use relative units (%, rem, em) instead of fixed pixels. CSS Grid and Flexbox make this easier than ever.

## Responsive Images

Serve appropriately sized images for each device. Use srcset and modern image formats for optimal performance.

## Touch-Friendly Design

Buttons and links should be easily tappable. Aim for at least 44x44 pixels for touch targets.

## Test on Real Devices

Emulators are helpful, but nothing beats testing on actual devices to catch issues.`,
    author: {
      name: "Sam Rivera",
      role: "UX Strategist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    category: "Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    date: "2023-12-15",
    readTime: "6 min read",
    tags: ["Design", "Responsive", "Mobile"]
  }
];

export const blogCategories = [
  "All",
  "Design",
  "Development",
  "UX",
  "Business",
  "E-commerce"
];
