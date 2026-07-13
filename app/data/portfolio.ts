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
  tags: string[];
  body: string;
  period: string;
  role: string;
  highlights: string[];
  githubUrl?: string;
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
    websiteUrl: "https://www.tedxkasetsartu.com/",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "diffusion-watermarking-research",
    title: "64-bit Diffusion Watermarking Research",
    label: "Machine learning research",
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
    slug: "futureskill-learning-platform-integrations",
    title: "FutureSkill Learning Platform Integrations",
    label: "Frontend platform work",
    tags: ["Next.js", "TypeScript", "NextAuth.js", "Tailwind CSS", "Line LIFF"],
    body: "Frontend platform improvements for a B2C learning system, including external integrations and UI stability fixes.",
    period: "Apr 2025 - Aug 2025",
    role: "Front-End Developer Intern",
    githubUrl: "https://github.com/nammeyyy/todo-nextjs",
    highlights: [
      "Implemented external integrations including affiliate links and course application flows.",
      "Fixed UI component bugs and improved platform stability for the B2C learning product.",
      "Collaborated with senior developers to debug and optimize frontend performance.",
    ],
  },
  {
    slug: "sopet-mobile-features",
    title: "SOPet Mobile App Features",
    label: "React Native mobile features",
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
    tags: ["PHP", "MySQL", "JavaScript", "Figma"],
    body: "Order, manufacturing, promotion, product categorization, and cart flows for an academic ecommerce system.",
    period: "Jun 2024 - Oct 2024",
    role: "Full-Stack Developer",
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
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Contact", href: "/#contact" },
];

export const topNavLinks: NavLink[] = [
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Contact", href: "/#contact" },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
