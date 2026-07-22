export type ExperienceItem = {
  role: string;
  org: string;
  date: string;
  body: string;
  websiteUrl?: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  tags: string[];
  body: string;
  period: string;
  role: string;
  highlights: string[];
  githubUrl?: string;
  presentationUrl?: string;
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "React Native",
  "Tailwind CSS",
  "Django",
  "Node.js",
  "Firebase",
  "PyTorch",
  "Unity",
  "Flutter",
  "MongoDB",
];

export const experiences: ExperienceItem[] = [
  {
    role: "Machine Learning Intern",
    org: "Tamkang University, Taiwan",
    date: "Oct 2025 - Jan 2026",
    body: "Researched 64-bit watermark embedding with DDPM/DDIM diffusion models, trained Embedder and Extractor networks in PyTorch, and reached 98.07% validation bit accuracy.",
  },
  {
    role: "Front-End Developer Intern",
    org: "FutureSkill",
    date: "Apr 2025 - Aug 2025",
    body: "Built integrations for affiliate links and course applications, fixed UI component issues, and improved frontend stability across a B2C learning platform.",
    websiteUrl: "https://futureskill.co",
  },
  {
    role: "Front-End Mobile Developer",
    org: "SOPet Co., Ltd.",
    date: "Jan 2025 - Apr 2025",
    body: "Developed React Native features, secured delete flows with confirmation modals, repaired push notifications, and added camera posting support.",
    websiteUrl: "https://vetso.co/",
  },
  {
    role: "IT Director",
    org: "TEDxKasetsartU Salon 2025",
    date: "Sep 2024 - Dec 2024",
    body: "Led a ticket booking and registration system with automated email notifications for attendee management.",
    websiteUrl: "https://www.tedxkasetsartu.com/moments-in-time",
  },
  {
    role: "Front-End Developer",
    org: "TEDxKasetsartU 2024",
    date: "Aug 2023 - Mar 2024",
    body: "Developed the frontend for a ticket booking web application, collaborated with the backend team on the full event workflow, and implemented automated confirmation emails with Apps Script.",
    websiteUrl: "https://www.tedxkasetsartu.com/morning-glory",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "diffusion-watermarking-research",
    title: "64-bit Diffusion Watermarking Research",
    label: "Machine learning research",
    image: "/projects/diffusion-watermarking.png",
    imageAlt: "Abstract diffusion network embedding a binary watermark into an image",
    tags: ["Python", "PyTorch", "DDPM", "DDIM", "Hugging Face"],
    body: "Watermark embedding research using diffusion models with Embedder and Extractor neural networks for robust bit recovery.",
    period: "Oct 2025 - Jan 2026",
    role: "Machine Learning Intern",
    highlights: [
      "Researched and developed 64-bit watermark embedding using DDPM and DDIM diffusion models.",
      "Trained Embedder and Extractor networks with PyTorch and AdamW optimizer.",
      "Reached 98.07% validation bit accuracy and improved inference efficiency with deterministic sampling.",
    ],
  },
  {
    slug: "sopet-mobile-features",
    title: "SOPet Mobile App Features",
    label: "React Native mobile features",
    image: "/projects/sopet-mobile.png",
    imageAlt: "Pet social mobile application with camera and notification features",
    tags: ["React Native", "TypeScript", "Firebase Authentication", "MongoDB", "Expo"],
    body: "Mobile feature development for pet-focused user-generated content flows, real-time updates, and safer destructive actions.",
    period: "Jan 2025 - Apr 2025",
    role: "Front-End Mobile Developer",
    highlights: [
      "Developed mobile features with React Native and TypeScript.",
      "Implemented a secure delete flow with a confirmation modal to prevent accidental data loss.",
      "Resolved push notification issues and added camera functionality for user-generated content posting.",
    ],
  },
  {
    slug: "furniture-retail-website",
    title: "Furniture Retail Website",
    label: "Full-stack ecommerce",
    image: "/projects/furniture-retail.png",
    imageAlt: "Furniture ecommerce storefront connected to an order and manufacturing workflow",
    tags: ["PHP", "MySQL", "JavaScript", "Figma"],
    body: "Order, manufacturing, promotion, product categorization, and cart flows for an academic ecommerce system.",
    period: "Jun 2024 - Oct 2024",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/nammeyyy/sa_project",
    presentationUrl: "/projects/Chainarong_futurniture_sa_project.pdf",
    highlights: [
      "Built ecommerce flows for product browsing, categorization, promotions, cart, and order handling.",
      "Supported manufacturing-related order features for a furniture retail workflow.",
      "Designed UI flows in Figma and collaborated in an Agile academic team.",
    ],
  },
  {
    slug: "e-commerce-fashion-mobile-app",
    title: "E-Commerce Fashion Mobile App",
    label: "Mobile product discovery",
    image: "/projects/fashion-mobile.png",
    imageAlt: "Fashion discovery mobile application with clothing cards and social profiles",
    tags: ["Flutter", "Dart", "Firebase"],
    body: "Fashion browsing, recommendations, profiles, posts, authentication, Firestore, and cloud storage integration.",
    period: "Dec 2024 - Mar 2025",
    role: "Mobile Developer",
    githubUrl: "https://github.com/nammeyyy/fashion-app",
    highlights: [
      "Developed mobile screens for browsing fashion products and recommendations.",
      "Integrated Firebase Authentication, Firestore, and Cloud Storage.",
      "Implemented user profiles, posts, and product interaction features.",
    ],
  },
  {
    slug: "ar-racing-game",
    title: "AR Racing Game",
    label: "XR gameplay prototype",
    image: "/projects/ar-racing.png",
    imageAlt: "Augmented reality racing car moving around a tracked tabletop circuit",
    tags: ["Unity", "C#", "Vuforia", "Blender"],
    body: "Interactive AR racing with object tracking, scoring, movement controls, and optimized 3D assets.",
    period: "Jul 2023 - Oct 2023",
    role: "XR Developer",
    highlights: [
      "Created interactive AR gameplay using real-world object tracking.",
      "Implemented scoring and movement controls for the racing experience.",
      "Optimized 3D assets in Unity and Blender for smoother performance.",
    ],
  },
  {
    slug: "tedxkasetsartu-salon-registration-system",
    title: "TEDxKasetsartU Salon Registration System",
    label: "Event registration system",
    image: "/projects/tedx-registration.png",
    imageAlt: "Digital event registration system with ticket, attendee, and email workflow",
    tags: ["Django", "Python", "Tailwind CSS", "JavaScript"],
    body: "Ticket booking and registration system for TEDxKasetsartU Salon 2025 with attendee management and automated notifications.",
    period: "Sep 2024 - Dec 2024",
    role: "IT Director",
    highlights: [
      "Led development of a ticket booking system with automated email notifications.",
      "Designed a registration system to manage attendee data efficiently.",
      "Coordinated IT delivery for event operations and attendee workflows.",
    ],
  },
  {
    slug: "tedxkasetsartu-ticket-booking-web-app",
    title: "TEDxKasetsartU Ticket Booking Web App",
    label: "Event booking web app",
    image: "/projects/tedx-booking.png",
    imageAlt: "Event ticket booking interface with confirmation and check-in flow",
    tags: ["Next.js", "Python", "Tailwind CSS", "JavaScript", "Apps Script"],
    body: "Ticket booking UI and automated confirmation email workflow for TEDxKasetsartU 2024.",
    period: "Aug 2023 - Mar 2024",
    role: "Front-End Developer",
    githubUrl: "https://github.com/nammeyyy/Ticket-Web",
    highlights: [
      "Developed the frontend UI for a ticket booking web application.",
      "Collaborated with the backend team to deliver a full-stack event solution.",
      "Implemented automated email confirmation using Apps Script.",
    ],
  },
];

export const sideNavLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/Nutpawee_CV.pdf", external: true },
  { label: "Contact", href: "/#contact" },
];

export const topNavLinks: NavLink[] = [
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Resume", href: "/Nutpawee_CV.pdf", external: true },
  { label: "Contact", href: "/#contact" },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
