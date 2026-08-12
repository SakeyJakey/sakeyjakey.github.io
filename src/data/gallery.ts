export interface GalleryItem {
  id: string;
  type: "video" | "guide" | "article" | "service";
  title: string;
  date: string;
  mediaSrc: string;
  mediaType?: "video/mp4" | "image";
  externalLink?: string;
  linkedinLink: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "pfp-summary-video",
    type: "video",
    title: "Passive Fire Protection Summary",
    date: "10/02/2024",
    mediaSrc: "/vid/gallery-pfp.mp4",
    mediaType: "video/mp4",
    linkedinLink: "https://www.linkedin.com/posts/kulexar-consulting_passivefireprotection-firesafety-firedoors-activity-7148808568689872896-VaXD",
    description: "Watch our video summary explaining core Passive Fire Protection concepts and inspection standards."
  },
  {
    id: "fire-safety-guide-flats",
    type: "guide",
    title: "A guide to making your small block of flats safe from fire",
    date: "27/02/2024",
    mediaSrc: "/img/gallery-small-block-of-flats-thumbnail.png",
    mediaType: "image",
    externalLink: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1147631/A_guide_to_making_your_small_block_of_flats_safe_from_fire.pdf",
    linkedinLink: "https://www.linkedin.com/posts/kulexar-consulting_helpful-fire-safety-guide-activity-7167988128647897088-XoDv",
    description: "Government publication guide detailing essential fire safety rules for small multi-occupancy residential buildings."
  },
  {
    id: "fire-sustainability-article",
    type: "article",
    title: "The interesting relationship between fire safety and sustainability",
    date: "10/02/2024",
    mediaSrc: "/img/gallery-fire-sustainability.jpg",
    mediaType: "image",
    externalLink: "https://www.rockwool.com/group/advice-and-inspiration/blog/what-makes-a-building-sustainable/",
    linkedinLink: "https://www.linkedin.com/posts/kulexar-consulting_a-sustainable-building-starts-with-a-fire-activity-7161989645566738432-J0pg",
    description: "An insightful look at how effective fire stopping materials directly contribute to long-term building sustainability."
  },
  {
    id: "pfp-services-overview",
    type: "service",
    title: "Passive Fire Protection Services",
    date: "10/02/2024",
    mediaSrc: "/img/gallery-pfp-services.png",
    mediaType: "image",
    externalLink: "/services/fire-safety-consultancy",
    linkedinLink: "https://www.linkedin.com/posts/kulexar-consulting_kulexarconsulting-kulexar-kulexarfire-activity-7150608095755325440-BZu8",
    description: "Discover our full range of fire door, fire stopping, and audit readiness consultancy services."
  },
  {
    id: "fire-stopping-services-overview",
    type: "service",
    title: "Fire Stopping Services",
    date: "10/02/2024",
    mediaSrc: "/img/gallery-fire-stopping-services.png",
    mediaType: "image",
    externalLink: "/services/compartmentation-surveys",
    linkedinLink: "https://www.linkedin.com/posts/kulexar-consulting_kulexar-kulexarconsulting-kulexarfire-activity-7155910010890276864-pE7d",
    description: "Detailed surveys and technical advice covering penetration seals, compartmentation, and product compatibility."
  }
];
