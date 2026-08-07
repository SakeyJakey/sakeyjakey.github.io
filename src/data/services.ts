export interface ServiceSection {
  title: string;
  description?: string;
  image?: string;
  items?: string[];
  link?: {
    url: string;
    label: string;
  };
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  cardImage: string;
  bannerImage: string;
  iconName: string;
  featuredHome?: boolean;
  homeDescription?: string;
  sections: ServiceSection[];
}

export const servicesData: Service[] = [
  {
    slug: "passive-fire-protection",
    title: "Passive Fire Protection",
    shortDescription: "Providing audit readiness support, fire door & fire stopping surveying, and fire compartmentation evaluations.",
    cardImage: "/img/services-pfp.jpg",
    bannerImage: "/img/pfp-banner.png",
    iconName: "ShieldAlert",
    featuredHome: true,
    homeDescription: "Providing audit readiness support, fire door & fire stopping surveying.",
    sections: [
      {
        title: "Fire Risk Assessments",
        description: "A comprehensive fire risk assessment supports meeting compliance requirements and is critical to defining your fire prevention strategy. We offer a thorough survey to evaluate any potential fire hazards and a full report. Assessments are carried out by our fully qualified and competent fire risk assessors.",
        image: "/img/pfp-side1.jpeg"
      },
      {
        title: "Fire Compartmentation Surveys",
        description: "This survey involves a comprehensive review covering areas such as condition, efficacy, product use and compatibility, and provision of a fire compartment report including rectification and improvement recommendations.",
        image: "/img/pfp-side4.jpg"
      },
      {
        title: "Audit Preparation Services",
        description: "Our certificated experts will support your third-party audit readiness for fire door installation, maintenance, and fire stopping schemes. Services include workshops, training, and desktop reviews.",
        image: "/img/pfp-side3.jpg"
      }
    ]
  },
  {
    slug: "sustainability",
    title: "Sustainability & Net Zero",
    shortDescription: "Supporting you with your decarbonisation journey to achieve net zero through custom strategies, reviews, and workshops.",
    cardImage: "/img/services-sustainability.jpg",
    bannerImage: "/img/sustainability-banner.jpg",
    iconName: "Leaf",
    featuredHome: true,
    homeDescription: "Supporting you with your decarbonisation journey to achieve net zero.",
    sections: [
      {
        title: "Sustainability Strategy & Implementation",
        description: "Our experts can support you in developing your environmental and sustainability roadmap and embedding it within your business operations.",
        items: [
          "Environmental and sustainability roadmap development",
          "ESG strategy integration and best practice advice",
          "Tailored training and workshops focused on sustainability awareness"
        ]
      },
      {
        title: "Net Zero & Energy Efficiency",
        description: "We provide thorough energy usage assessments to identify how your business can improve energy efficiency and lower overall operating costs.",
        items: [
          "Energy usage assessments to optimize energy efficiency",
          "Development of renewable energy sourcing strategies",
          "Recommendations for energy-efficient equipment procurement"
        ]
      }
    ]
  },
  {
    slug: "sheq",
    title: "Safety, Health, Environment & Quality (SHEQ)",
    shortDescription: "Managing all of your SHEQ compliance requirements with risk assessments, ISO implementation, policies, and site audits.",
    cardImage: "/img/services-sheq.jpg",
    bannerImage: "/img/sheq-banner.jpg",
    iconName: "CheckCircle2",
    featuredHome: true,
    homeDescription: "Managing all of your SHEQ compliance requirements.",
    sections: [
      {
        title: "Health & Safety Management",
        description: "Comprehensive health and safety consultancy to ensure full compliance and workplace safety.",
        items: [
          "Policy drafting, development, and ongoing review",
          "3R (Review, Report, Recommend) assessment of Emergency Preparedness & Response",
          "Fire Safety reviews, fire risk assessment reviews, and 3R assessments of site fire safety"
        ]
      },
      {
        title: "Environment & Quality Systems",
        description: "Supporting your management system standard requirements and internal audit programs.",
        items: [
          "ISO 9001:2015 & ISO 14001 implementation, audit readiness, and inter-audit compliance",
          "Management of internal audit programs including conducting internal audits",
          "Comprehensive 3R programme assessment and actionable recommendations"
        ]
      }
    ]
  },
  {
    slug: "procurement",
    title: "Procurement & Sourcing",
    shortDescription: "Offering sourcing advice, contract review services, supply base review, and tender/bid writing services.",
    cardImage: "/img/services-procurement.jpg",
    bannerImage: "/img/procurement-banner.jpg",
    iconName: "ShoppingBag",
    featuredHome: false,
    sections: [
      {
        title: "Supply Base Review",
        description: "We offer a range of analytical services to support you in delivering best value from your supply base. All services involve our comprehensive 3R approach of Review, Report, and Recommendation.",
        items: [
          "Supply base segmentation analysis",
          "Supply base mapping and strategic review of your supply chain",
          "Vendor performance and value optimization reviews"
        ]
      },
      {
        title: "Responsible Sourcing & Tender Writing",
        description: "Our Responsible Sourcing consultancy covers developing and implementing sustainable procurement within your business practices, alongside award and bid writing.",
        items: [
          "Policy development, implementation, and staff training",
          "Bid writing and award submission services",
          "Contract review and supply base rationalisation"
        ]
      }
    ]
  }
];
