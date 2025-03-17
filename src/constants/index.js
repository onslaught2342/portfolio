import {
  wordpress_logo,
  cybersecurity_logo,
  encryption_logo,
  backend_logo,
  ethical_hacker_logo,
  code_logo,
  blog_logo,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lock_logo,
  server_logo,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cybersecurity Enthusiast",
    icon: cybersecurity_logo,
  },
  {
    title: "Encryption Algorithm Developer",
    icon: encryption_logo,
  },
  {
    title: "WordPress Manager",
    icon: wordpress_logo,
  },
  {
    title: "Backend & Systems Engineer",
    icon: backend_logo,
  },
  {
    title: "Ethical Hacker",
    icon: ethical_hacker_logo,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: code_logo,
  },
  {
    title: "Tech Blogger",
    icon: blog_logo,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cybersecurity Enthusiast & Ethical Hacker",
    company_name: "Independent",
    icon: lock_logo, // Replace with actual icon
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Implementing enterprise-grade security solutions, including IAM, VPNs, and encryption tools.",
      "Conducting penetration testing and vulnerability assessments for personal and academic projects.",
      "Building secure password managers and experimenting with cryptographic algorithms.",
      "Exploring ethical hacking methodologies and participating in CTF challenges.",
    ],
  },
  {
    title: "Full-Stack Developer & Automation Engineer",
    company_name: "Freelance",
    icon: code_logo, // Replace with actual icon
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Developing web applications using React.js, Next.js, and TailwindCSS for personal and client projects.",
      "Creating backend solutions with Python (Flask/Django) and Node.js.",
      "Building and optimizing Dockerized applications for deployment.",
      "Automating workflows using Bash, PowerShell, and Python scripts.",
    ],
  },
  {
    title: "System Administrator & DevOps Learner",
    company_name: "Self-Hosted Projects",
    icon: server_logo, // Replace with actual icon
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Managing self-hosted services like VPNs, mail servers, and file servers with disaster recovery strategies.",
      "Deploying and maintaining Linux-based environments, including WSL and cloud instances.",
      "Exploring CI/CD pipelines and container orchestration (Docker, Kubernetes).",
      "Enhancing enterprise security with zero-trust principles and encrypted storage solutions.",
    ],
  },
  {
    title: "Content Creator & Blogger",
    company_name: "Onslaught2342 Blog",
    icon: blog_logo, // Replace with actual icon
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Writing technical blog posts on cybersecurity, DevOps, and programming.",
      "Building a minimalistic blog using Hugo and Obsidian for efficient content management.",
      "Sharing insights on cryptography, security best practices, and ethical hacking techniques.",
      "Engaging with the tech community through GitHub and open-source contributions.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
// export { services, technologies, experiences, testimonials, projects };
