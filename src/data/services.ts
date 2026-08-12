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
    slug: "fire-risk-assessments",
    title: "Fire Risk Assessments",
    shortDescription: "We offer comprehensive assessments, carried out by our fully qualified, competent and insured fire risk assessors.",
    cardImage: "/img/pfp-side1.jpeg",
    bannerImage: "/img/pfp-banner.png",
    iconName: "ShieldAlert",
    featuredHome: true,
    sections: [
      {
        title: "Fire Risk Assessments",
        description: "A comprehensive fire risk assessment supports meeting compliance requirements and is critical to defining your fire prevention strategy. We offer a thorough survey to evaluate any potential fire hazards and provide a full report. Assessments are carried out by our fully qualified, competent and insured fire risk assessors.",
        image: "/img/pfp-side1.jpeg",
        items: [
          "Comprehensive evaluation of potential fire hazards and risk controls",
          "Detailed compliance report with clear, prioritised recommendations",
          "Property-wide assessment including exit routes, signage, and fire safety systems"
        ]
      }
    ]
  },
  {
    slug: "fire-safety-consultancy",
    title: "Fire Safety Consultancy Services",
    shortDescription: "We offer fire safety advice covering passive fire protection, legislation, standards & regulations, and third-party certification schemes.",
    cardImage: "/img/services-pfp.jpg",
    bannerImage: "/img/pfp-banner.png",
    iconName: "ShieldCheck",
    featuredHome: true,
    sections: [
      {
        title: "Fire Safety Consultancy Services",
        description: "We offer fire safety advice covering passive fire protection, legislation, standards & regulations, and third-party certification schemes, provided by our fully qualified, competent and insured fire safety experts.",
        image: "/img/services-pfp.jpg",
        items: [
          "Expert guidance on passive fire protection and technical compliance",
          "Interpretation of statutory regulations, standards, and building codes",
          "Advisory support for third-party accreditation and certification schemes",
          "Bespoke consultancy tailored to client operational and your project needs"
        ]
      }
    ]
  },
  {
    slug: "compartmentation-surveys",
    title: "Compartmentation Surveys",
    shortDescription: "We offer comprehensive compartmentation surveys, including full report and recommendations.",
    cardImage: "/img/pfp-side4.jpg",
    bannerImage: "/img/pfp-banner.png",
    iconName: "BrickWallFire",
    featuredHome: true,
    sections: [
      {
        title: "Compartmentation Surveys",
        description: "We offer comprehensive compartmentation surveys, including full report and recommendations, carried out by our fully qualified, competent and insured fire experts.",
        image: "/img/pfp-side4.jpg",
        items: [
          "Detailed condition and efficacy checks on fire walls, floors, and barriers",
          "Provision of full fire compartmentation report with remediation guidance",
          "Surveys carried out by fully qualified, competent and insured fire experts"
        ]
      }
    ]
  },
  {
    slug: "fire-audit-preparation",
    title: "Passive Fire Audit Preparation",
    shortDescription: "We provide support to prepare for fire door & fire stopping third-party certification scheme audits like Q-Mark & FIRAS.",
    cardImage: "/img/pfp-side3.jpg",
    bannerImage: "/img/pfp-banner.png",
    iconName: "ClipboardCheck",
    featuredHome: true,
    sections: [
      {
        title: "Passive Fire Audit Preparation",
        description: "We provide support to prepare for fire door & fire stopping third-party certification scheme audits like Q-Mark & FIRAS. Our experienced experts are here to ensure you're well-equiped to pass your audit with flying colours.",
        image: "/img/pfp-side3.jpg",
        items: [
          "Third-party audit readiness support for Q-Mark, FIRAS, and similar schemes",
          "Desktop documentation and process reviews",
          "Interactive workshops and practical team training sessions",
          "Certificated experts guiding you through every step of audit preparation"
        ]
      }
    ]
  },
  {
    slug: "qshe-compliance-management",
    title: "QSHE Compliance",
    shortDescription: "We deliver end-to-end QSHE management services, helping you ensure regulatory compliance & achieve ISO certifications.",
    cardImage: "/img/services-sheq.jpg",
    bannerImage: "/img/sheq-banner.jpg",
    iconName: "CheckCircle2",
    featuredHome: true,
    sections: [
      {
        title: "QSHE Compliance",
        description: "We deliver end-to-end QSHE management services, helping you ensure regulatory compliance, achieve ISO certifications (such as ISO 9001, 14001, and 45001), and mitigate operational risks within your business.",
        image: "/img/services-sheq.jpg",
        items: [
          "Policy drafting, development, and ongoing regulatory alignment",
          "Implementation and audit readiness for ISO 9001, ISO 14001, and ISO 45001",
          "Internal audit program management",
	  "Development of risk mitigation strategies"
        ]
      }
    ]
  },
  {
    slug: "mock-audit-services",
    title: "Mock Audit Services",
    shortDescription: "We provide mock audits to help you prepare for third-party fire door & fire stopping certifications like Q-Mark & FIRAS.",
    cardImage: "/img/services-mock.jpg",
    bannerImage: "/img/pfp-banner.png",
    iconName: "FileCheck",
    featuredHome: true,
    sections: [
      {
        title: "Mock Audit Services",
        description: "We provide mock audits to help you prepare for third-party fire door & fire stopping certifications like Q-Mark & FIRAS. Our experienced experts are here to ensure you walk into your next audit with total confidence.",
        image: "/img/pfp-side3.jpg",
        items: [
          "Realistic simulation of third-party Q-Mark & FIRAS certification audits",
          "Thorough gap analysis across office procedures and site workmanship",
          "Detailed, actionable feedback report highlighting areas for improvement",
	  "Experienced experts providing total confidence ahead of formal audits"
        ]
      }
    ]
  },
  {
    slug: "spot-check-compliance-visits",
    title: "Spot Check Compliance Visits",
    shortDescription: "We provide independent spot check visits to ensure the continued compliance of your passive fire protection projects on-site.",
    cardImage: "/img/services-spot.jpg",
    bannerImage: "/img/pfp-banner.png",
    iconName: "Search",
    featuredHome: true,
    sections: [
      {
        title: "Spot Check Compliance Visits",
        description: "We provide independent spot check visits to ensure the continued compliance of your passive fire protection projects on-site. Our fully qualified, competent and insured experts are here to support the quality assurance of your works.",
        image: "/img/pfp-side4.jpg",
        items: [
          "Independent on-site quality assurance and compliance inspections",
          "Spot checks on active fire door and fire stopping installations",
          "Immediate site feedback and structured compliance reports",
          "Supported by fully qualified, competent and insured site experts"
        ]
      }
    ]
  },
  {
    slug: "sustainability",
    title: "Sustainability",
    shortDescription: "Supporting you in improving your environmental performance and embedding sustainable practices.",
    cardImage: "/img/services-sustainability.jpg",
    bannerImage: "/img/sustainability-banner.jpg",
    iconName: "Leaf",
    featuredHome: true,
    sections: [
      {
        title: "Sustainability Strategy & Implementation",
        description: "Our experts can support you in developing your environmental and sustainability roadmap and embedding it within your business operations.",
        items: [
          "Environmental and sustainability roadmap development",
          "ESG strategy integration and best practice advice",
          "Tailored training and workshops focused on sustainability awareness"
        ]
      }
    ]
  },
  {
    slug: "energy",
    title: "Energy",
    shortDescription: "We provide thorough energy usage assessments to identify how you can improve energy efficiency and lower operational costs.",
    cardImage: "/img/services-energy.jpg",
    bannerImage: "/img/sustainability-banner.jpg",
    iconName: "Zap",
    featuredHome: true,
    sections: [
      {
        title: "Energy Efficiency",
        description: "We provide thorough energy usage assessments to identify how your business can improve energy efficiency and lower overall operating costs.",
        items: [
          "Energy usage assessments to optimize energy efficiency",
          "Development of renewable energy sourcing strategies",
          "Recommendations for energy-efficient equipment procurement"
        ]
      }
    ]
  }
];
