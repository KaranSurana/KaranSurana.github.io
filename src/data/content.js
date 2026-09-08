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
  details: ['Major: Artificial Intelligence', 'WAM: Distinction'],
  period: 'Sep 2022 — Sep 2024',
}

export const certifications = [
  'AWS Certified Solutions Architect – Associate',
  'AWS Certified AI Practitioner',
  'AWS Certified Cloud Practitioner',
]

export const experience = [
  {
    company: 'youXpowered',
    role: 'Mid-Level Software Engineer',
    period: 'Jan 2025 — Present',
    location: 'Sydney, Australia',
    bullets: [
      'Architected and led a team of 8 in the development of youXinsights — an enterprise-grade, in-house analytics and visualization platform used by 20+ organisations.',
      'Built and deployed an in-house predictive Lead Scoring ML model in Python, trained on large-scale historical application datasets to score new applications accurately.',
      'Ran requirements discovery with company stakeholders, converting ambiguous asks into documented functional and non-functional requirements that drove the platform’s design and architecture.',
      'Engineered real-time data visualization infrastructure with advanced cross-filtering and interactive dashboards across 25+ report types.',
      'Solely owned the complete lifecycle — design, development, deployment, and support — of youXapply, matching customers with lenders and significantly enhancing loan conversions.',
    ],
    stack: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js', 'Python', 'AWS'],
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
      'Developed a resilient ETL pipeline in Python to efficiently migrate and transform data for downstream services.',
      'Optimized frontend API calls, reducing frontend response time by 40% and improving page-load and interaction speeds.',
      'Implemented the complete inventory management system — backend architecture, database indexing, and query optimization.',
      'Implemented Redis caching mechanisms to reduce server load and response times.',
      'Integrated multi-threaded API endpoints for parallel processing of large-scale customer orders, improving system performance by 30%.',
    ],
    stack: ['TypeScript', 'Python', 'React', 'AWS', 'Kubernetes', 'Redis', 'Zoho', 'Shopify', 'PostgreSQL'],
  },
]

export const skillGroups = [
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
  {
    icon: 'monitor',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: 'server',
    title: 'Backend',
    skills: ['Node.js', 'Next.js', 'Express.js', 'Python', 'RESTful APIs'],
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
]

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'blockchain', label: 'Blockchain' },
]

export const projects = [
  {
    id: 'lucent-ai',
    title: 'Lucent AI',
    tagline: 'Ask your database a question in plain English. Get answers, charts, and dashboards back.',
    category: 'ai',
    categoryLabel: 'AI',
    image: '/assets/images/lucent-ai.png',
    live: 'https://master.d32t1rbevjle5d.amplifyapp.com',
    github: null,
    featured: true,
    bullets: [
      'Production-grade natural-language querying platform that connects to five database engines — MongoDB, PostgreSQL, MySQL, Microsoft SQL Server, and Oracle — so non-technical users get answers, charts, and dashboards without writing a query.',
      'Architected so that no PII ever reaches a third-party AI provider.',
      'Automated data quality analyzer running seven checks, including type inconsistency, missing fields, and null values.',
      'AI-driven visualization layer that generates charts across 17 chart types.',
      'AI dashboard builder that reads the connected schemas, populates a set of charts, and learns which charts to generate from the user’s preferences.',
    ],
  },
  {
    id: 'trading-bot',
    title: 'Crypto Spot Trading Bot',
    tagline: 'Production Python/FastAPI bot trading Bybit and Binance spot markets.',
    category: 'backend',
    categoryLabel: 'Backend',
    image: '/assets/images/trading-bot.svg',
    live: null,
    github: null,
    featured: true,
    bullets: [
      'Production-grade Python/FastAPI trading bot for Bybit and Binance spot markets using CCXT, running two live strategies: trend pullback and mean reversion.',
      'Risk engine with 7 system states, a 10-gate pre-trade validation pipeline, and dual kill switches enforcing portfolio-level and per-trade safety limits.',
      'Hot-reloadable YAML configuration with audit logging, SQLite in WAL mode for trade persistence, and a reconciliation layer keeping exchange and local state consistent.',
      'Real-time OHLCV websocket feeds with regime-detection indicators (ADX, Bollinger Bands), including tracking down a candle-close event bug that locked ADX at 100.',
    ],
  },
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
    category: 'backend',
    categoryLabel: 'Backend',
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
