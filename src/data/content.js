// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Sourced from KaranSurana_Resume.pdf (2026) + previous site.
// ─────────────────────────────────────────────────────────────

export const identity = {
  name: 'Karan Surana',
  role: 'Software Engineer',
  location: 'Sydney, Australia',
  email: 'karansurana23@gmail.com',
  phone: '+61 448 074 273',
  phoneHref: 'tel:+61448074273',
  avatar: '/assets/images/my-avatar.png',
  resumeUrl: '/KaranSurana_Resume.pdf',
  profile: [
    'Experienced Software Engineer with ~3 years of hands-on experience building scalable, production-grade web applications. Adept at system design and architecture, translating complex requirements into clean, maintainable, and scalable technical solutions.',
    'A big part of my day-to-day is bridging business and engineering: taking vague, high-level asks from the C-suite and translating them into concrete functional and non-functional requirements, designing the system architecture, and building the code that ships — owning the journey from boardroom sentence to production product.',
  ],
}

export const socials = {
  github: 'https://github.com/KaranSurana',
  linkedin: 'https://www.linkedin.com/in/karan-surana-1025b0153/',
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years of experience' },
  { value: 700, suffix: '+', label: 'Students mentored at UNSW' },
  { value: 25, suffix: '+', label: 'Report types shipped' },
  { value: 90, suffix: '%', label: 'Write-time cut with AI' },
]

export const marqueeTech = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'AWS', 'Docker',
  'Kubernetes', 'Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'Python',
  'Java', 'Claude Code', 'OpenClaw', 'Git', 'CI/CD',
]

export const services = [
  {
    icon: 'monitor',
    title: 'Front End Development',
    text: 'Crafting visually stunning, highly interactive interfaces with a relentless focus on user experience.',
  },
  {
    icon: 'server',
    title: 'Back End Development',
    text: 'Building robust, scalable server-side systems that power production web platforms.',
  },
  {
    icon: 'brain',
    title: 'Machine Learning',
    text: 'Creating ML models that analyse complex data patterns and turn them into actionable insight.',
  },
  {
    icon: 'network',
    title: 'System Design & Architecture',
    text: 'Translating complex requirements into clean, maintainable, and scalable technical solutions.',
  },
]

export const education = {
  school: 'UNSW Sydney',
  degree: 'Masters in Information Technology',
  detail: 'Major: Artificial Intelligence · WAM: Distinction',
  period: 'Sep 2022 — Sep 2024',
}

export const experience = [
  {
    company: 'youXpowered',
    role: 'Mid-Level Software Engineer',
    period: 'Jan 2025 — Present',
    location: 'Sydney, Australia',
    bullets: [
      'Architected and led a team of 8 in the development of youXinsights — an enterprise-grade, in-house analytics and visualization platform that replaced Power BI, serving 10+ organisations.',
      'Collaborated with stakeholders to transform business requirements into intuitive, dynamic reports and dashboards tailored to company-specific workflows.',
      'Engineered real-time data visualization infrastructure with 60-second refresh intervals, implementing advanced cross-filtering and interactive dashboards across 25+ report types.',
      'Solely owned the complete lifecycle — design, development, deployment, and support — of youXapply, matching customers with lenders and significantly enhancing loan conversions.',
      'Acted as the primary troubleshooter for all product-related issues, handling bug fixes, performance optimizations, and feature rollouts.',
      'Architected an AI-based microservice that auto-generates lender notes for brokers, transforming raw application data into concise narratives and reducing manual write time by 90%.',
    ],
    stack: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js', 'AWS'],
  },
  {
    company: 'UNSW Sydney',
    role: 'Academic Tutor',
    period: 'Feb 2024 — Present',
    location: 'Sydney, Australia',
    bullets: [
      'Facilitated tutorials for a cohort of 100 students, simplifying complex web development concepts.',
      'Supervised help sessions for over 700 students, addressing queries in frontend web programming.',
      'Assessed and graded assignments and reviewed project reports for more than 250 students.',
    ],
    stack: ['React', 'JavaScript', 'TypeScript', 'Node.js'],
  },
  {
    company: 'Tutehub',
    role: 'Software Developer',
    period: 'Aug 2023 — Jan 2024',
    location: 'Sydney, Australia',
    bullets: [
      'Automated data retrieval processes using Python Selenium scripts, streamlining workflows and improving efficiency.',
      'Developed a scalable, responsive frontend for the PTE exam simulation platform using React, enhancing user engagement.',
      'Built the platform backend with Spring Boot, integrating seamlessly with the database to store and manage retrieved data.',
      'Conducted extensive testing to ensure reliability and high performance across the platform.',
    ],
    stack: ['Python', 'Java', 'JavaScript', 'React'],
  },
  {
    company: 'Gida Technologies',
    role: 'Full Stack Developer',
    period: 'Jan 2021 — Aug 2022',
    location: 'India',
    bullets: [
      'Improved backend development and API integrations for the Antara project, reducing API response time and computational overhead by 60%.',
      'Optimized frontend API calls, reducing frontend response time by 40% and improving page-load and interaction speeds.',
      'Implemented the complete inventory management system — backend architecture, database indexing, and query optimization.',
      'Implemented Redis caching mechanisms to reduce server load and response times.',
      'Integrated multi-threaded API endpoints for parallel processing of large-scale customer orders, improving system performance by 30%.',
      'Conducted performance testing with k6, identifying and eliminating critical performance bottlenecks.',
    ],
    stack: ['TypeScript', 'React', 'Kafka', 'AWS', 'Redis', 'Zoho', 'Shopify', 'PostgreSQL'],
  },
]

export const skillGroups = [
  {
    icon: 'monitor',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: 'server',
    title: 'Backend',
    skills: ['Next.js', 'Node.js', 'Express.js', 'RESTful APIs'],
  },
  {
    icon: 'cloud',
    title: 'DevOps & Tools',
    skills: ['AWS (EC2, S3, Lambda, Amplify)', 'Docker', 'Kubernetes', 'Kafka', 'CI/CD', 'Git', 'Jira', 'Confluence'],
  },
  {
    icon: 'database',
    title: 'Data & Quality',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Data Structures & Algorithms', 'Unit & Integration Testing'],
  },
  {
    icon: 'sparkles',
    title: 'AI & Agentic Tools',
    skills: [
      'Claude Code',
      'OpenClaw',
      'LLM API Integration',
      'Prompt Engineering',
      'AI-powered Microservices',
      'Agentic Workflows',
    ],
  },
]

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'api', label: 'RESTful API' },
]

export const projects = [
  {
    id: 'vr-lab',
    title: 'VR Lab Booking System',
    tagline: 'Official workstation booking platform for UNSW’s VR Lab.',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: '/assets/images/project-4.png',
    live: 'http://unswvrlab.tech',
    github: null,
    featured: true,
    bullets: [
      'Full-stack web application that transformed the booking process for advanced computational workstations in the VR Lab.',
      'Secure user authentication and dynamic booking management — reserve, view, and manage bookings effortlessly.',
      'Seamless integration between frontend, backend, and database systems for robust, efficient performance.',
      'Intuitive interfaces with real-time updates increased utilisation and accessibility of lab resources.',
      'Reduced booking conflicts and wait times by 45% through more efficient resource allocation.',
    ],
  },
  {
    id: 'asset-finance',
    title: 'Asset Finance Management Platform',
    tagline: 'MERN single-page app for managing loan finance applications.',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: '/assets/images/asset-finance.svg',
    live: 'https://d12gtgoagbp5j.cloudfront.net/',
    github: null,
    featured: true,
    bullets: [
      'Single-page application for creating, updating, and managing finance applications for loans, built on the MERN stack.',
      'Responsive, scalable frontend capturing detailed financial data.',
      'RESTful API with Node.js and Express, integrated with a MongoDB serverless cluster.',
      'Logging, monitoring, and CI/CD pipelines for seamless deployments and error tracking.',
      'Deployed on AWS with serverless functions for efficient backend operations.',
    ],
  },
  {
    id: 'xenoai',
    title: 'XenoAI',
    tagline: 'Voice-authenticated UPI payments powered by ML.',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    image: '/assets/images/project-8.jpg',
    live: null,
    github: socials.github,
    featured: false,
    bullets: [
      'Identifies authorised users by voice and, upon validation, facilitates payments through the Unified Payments Interface (UPI).',
      'Streamlines the payment flow, making transactions quick and efficient.',
      'Supports multiple payment methods, including Google Pay and Paytm.',
      'Uses Librosa and NumPy to extract and compare voice features.',
    ],
  },
  {
    id: 'circleup',
    title: 'CircleUp',
    tagline: 'Full-stack social media platform.',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: '/assets/images/circleup.png',
    live: null,
    github: socials.github,
    featured: false,
    bullets: [
      'Designed and implemented a full-stack social media application.',
      'User authentication, messaging, photo & video posts, comments, likes, and follows.',
      'Built with React, Node.js, and Redis for robust, scalable performance.',
    ],
  },
  {
    id: 'marketxchange',
    title: 'MarketXchange',
    tagline: 'Online marketplace with real-time bidding.',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: '/assets/images/project-2.png',
    live: null,
    github: socials.github,
    featured: false,
    bullets: [
      'Engaging online marketplace with real-time bidding and secure payment processing.',
      'Advanced user analytics to personalise product suggestions.',
      'Responsive design for a seamless experience across devices.',
    ],
  },
  {
    id: 'airbrb',
    title: 'Airbrb',
    tagline: 'Airbnb-style stays platform.',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: '/assets/images/project-3.jpg',
    live: null,
    github: 'https://github.com/KaranSurana/AirBrb',
    featured: false,
    bullets: [
      'Full-stack application inspired by Airbnb.',
      'Property listings, bookings, and user reviews.',
    ],
  },
  {
    id: 'slackr',
    title: 'Slackr',
    tagline: 'Real-time team messaging, Slack-style.',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: '/assets/images/slackr.jpg',
    live: null,
    github: 'https://github.com/KaranSurana/Slackr',
    featured: false,
    bullets: [
      'Full-stack application based on Slack.',
      'Real-time messaging, channels, and user management.',
    ],
  },
  {
    id: 'decentropedia',
    title: 'Decentropedia',
    tagline: 'A decentralised Wikipedia on the blockchain.',
    category: 'blockchain',
    categoryLabel: 'Blockchain',
    image: '/assets/images/project-9.png',
    live: null,
    github: 'https://github.com/KaranSurana/Decentropedia',
    featured: false,
    bullets: [
      'Decentralised version of Wikipedia.',
      'Built on blockchain technology to guarantee transparency and immutability.',
    ],
  },
  {
    id: 'issue-tracker',
    title: 'Issue Tracker',
    tagline: 'Cross-project issue tracking, GitHub-style.',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    image: '/assets/images/project-6.png',
    live: null,
    github: 'https://github.com/KaranSurana/IssueTracker',
    featured: false,
    bullets: [
      'Tracks issues across multiple projects with efficient filtering and sorting.',
      'Create, delete, assign, and categorise issues end-to-end.',
    ],
  },
  {
    id: 'ecommerce-api',
    title: 'EcommerceAPI',
    tagline: 'Production REST API for an active e-commerce site.',
    category: 'api',
    categoryLabel: 'RESTful API',
    image: '/assets/images/project-1.jpg',
    live: null,
    github: 'https://github.com/KaranSurana/EcommerceAPI',
    featured: false,
    bullets: [
      'RESTful API with numerous endpoints powering data communication for an active e-commerce website.',
      'Secure authentication and real-time inventory management.',
    ],
  },
]

export const testimonials = [
  {
    name: 'Ayush Shukla',
    affiliation: 'Manager · Gida Technologies',
    avatar: '/assets/images/avatar-4.png',
    text: 'As his manager, I was consistently impressed by his ability to significantly enhance both backend and frontend performance, reducing API response times by up to 60%. His expertise in implementing efficient architectures and optimizing systems was instrumental in the success of our projects.',
  },
  {
    name: 'Ali Darejeh',
    affiliation: 'UNSW Sydney',
    avatar: '/assets/images/avatar-1.png',
    text: 'Karan showcased exceptional initiative and technical proficiency by rapidly developing a new computer booking system for the VR Lab when the existing platform failed. His quick action and effective solution were highly valued by students and faculty.',
  },
  {
    name: 'Limin Deng',
    affiliation: 'Tutehub',
    avatar: '/assets/images/avatar-2.png',
    text: 'Karan demonstrated exceptional problem-solving skills during his tenure at Tutehub. His work automating data retrieval, crafting a pivotal feature for our Java-based software, and optimizing data flow to our website played a crucial role in elevating our projects and client satisfaction.',
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
