export const projects = [
  {
    id: 'private-chat-app',
    number: '01',
    title: 'Private Chat App',
    subtitle: 'Zero-Knowledge E2EE Real-Time Messaging',
    category: 'TypeScript & Cloudflare',
    language: 'TypeScript',
    stars: 1,
    description: 'Zero-knowledge end-to-end encrypted chat application built with TypeScript, WebSockets, and Cloudflare Durable Objects. Features ephemeral 1x media, disappearing messages, and zero telemetry.',
    architecture: [
      'Client-side cryptographic key generation & zero-knowledge room handshake',
      'Sub-30ms duplex WebSockets powered by Cloudflare Durable Objects',
      'Ephemeral 1x media self-destruct mechanism with zero server persistence',
      'Capacitor build pipeline for Android mobile APK distribution'
    ],
    tags: ['TypeScript', 'Astro', 'WebSockets', 'Cloudflare Workers', 'Capacitor', 'Tailwind CSS'],
    liveUrl: 'https://github.com/abhishekraaj07/private-chat-app',
    githubUrl: 'https://github.com/abhishekraaj07/private-chat-app',
    stats: { metric: '< 30ms', label: 'Duplex Latency' },
    status: 'Production Grade'
  },
  {
    id: 'abhi-mock-test',
    number: '02',
    title: 'ABHI Mock Test Platform',
    subtitle: 'AI-Powered Competitive Exam Engine',
    category: 'Full-Stack & EdTech',
    language: 'TypeScript',
    stars: 1,
    description: 'AI-powered competitive exam and test assessment platform featuring live mock tests, automated performance analytics, percentile rankings, and AI-driven study guidance.',
    architecture: [
      'Adaptive testing algorithm dynamically adjusting question difficulty',
      'Granular performance analytics engine evaluating speed, accuracy, and topic weakness',
      'High-throughput test submission queue handling concurrent exam takers',
      'Automated leaderboard computation with real-time rank projection'
    ],
    tags: ['TypeScript', 'React 18', 'Tailwind CSS', 'AI Analytics', 'PostgreSQL'],
    liveUrl: 'https://github.com/abhishekraaj07/ABHI-MOCK-TEST',
    githubUrl: 'https://github.com/abhishekraaj07/ABHI-MOCK-TEST',
    stats: { metric: 'Realtime', label: 'Percentile Rank Engine' },
    status: 'Live Platform'
  },
  {
    id: 'vortex-youtube-shorts',
    number: '03',
    title: 'Vortex Shorts Engine',
    subtitle: 'Autonomous AI Video Production System',
    category: 'Python & AI Pipelines',
    language: 'Python',
    stars: 1,
    description: 'Autonomous YouTube Shorts & Video Production Engine achieving 80%+ audience retention. Integrates Microsoft Neural Voices, automated ASS kinetic typography, and YouTube 2026 AI Policy compliance.',
    architecture: [
      'Automated script generation, scene pacing, and hook optimization',
      'Microsoft Neural TTS voiceover synthesis with natural cadence inflection',
      'Programmatic ASS dynamic word-by-word subtitle styling and animation',
      'Headless FFmpeg video rendering pipeline with GPU hardware acceleration'
    ],
    tags: ['Python 3.12', 'FFmpeg', 'Microsoft Neural TTS', 'Kinetic Typography', 'AsyncIO'],
    liveUrl: 'https://github.com/abhishekraaj07/VORTEX-YOUTUBE-SHORTS',
    githubUrl: 'https://github.com/abhishekraaj07/VORTEX-YOUTUBE-SHORTS',
    stats: { metric: '80%+', label: 'Audience Retention' },
    status: 'Autonomous Engine'
  },
  {
    id: 'nexus-java',
    number: '04',
    title: 'NEXUS Java Stack',
    subtitle: 'Spring Boot Backend + Native Android App',
    category: 'Java & Mobile Architecture',
    language: 'Java',
    stars: 0,
    description: 'Full Java stack messaging ecosystem featuring a robust Spring Boot backend architecture paired with a pure native Android Java client application.',
    architecture: [
      'Spring Boot reactive REST and WebSocket duplex communication layer',
      'Native Android Java client with background push sync and local caching',
      'Multi-threaded worker pool utilizing modern Java 21 concurrency',
      'Strict domain-driven OOP architecture with clean dependency injection'
    ],
    tags: ['Java 21', 'Spring Boot', 'Android SDK', 'WebSockets', 'OOP Architecture'],
    liveUrl: 'https://github.com/abhishekraaj07/NEXUS-JAVA',
    githubUrl: 'https://github.com/abhishekraaj07/NEXUS-JAVA',
    stats: { metric: 'Full-Stack', label: 'Spring Boot + Native Android' },
    status: 'High Concurrency'
  },
  {
    id: 'zarvis-ai',
    number: '05',
    title: 'ZARVIS AI Assistant',
    subtitle: 'Autonomous Agent & Voice System',
    category: 'Python & Agentic AI',
    language: 'Python',
    stars: 1,
    description: 'Autonomous intelligent assistant built in Python. Capable of natural speech understanding, task automation, background workstation operations, and dynamic agentic tooling.',
    architecture: [
      'Natural language intent classification and multi-step tool routing',
      'Hands-free speech recognition paired with low-latency TTS synthesis',
      'Local workstation automation hooks (application control, media management)',
      'Extensible skill plugin architecture for autonomous workflow expansion'
    ],
    tags: ['Python 3.12', 'Speech Recognition', 'AI Agents', 'Automation', 'TTS Engine'],
    liveUrl: 'https://github.com/abhishekraaj07/ZARVIS',
    githubUrl: 'https://github.com/abhishekraaj07/ZARVIS',
    stats: { metric: 'Voice & Agent', label: 'Local Automation' },
    status: 'Active Agent'
  },
  {
    id: 'ccsu-pyq-solver',
    number: '06',
    title: 'CCSU BCA PYQ Master Portal',
    subtitle: 'Exam Portal & Academic Knowledge Base',
    category: 'Python & Education',
    language: 'Python',
    stars: 0,
    description: 'Comprehensive solved previous year questions web portal & master question bank for CCSU BCA covering DBMS, Java Programming, Computer Networks, and Numerical Methods.',
    architecture: [
      'Structured database of categorized academic questions and verified solutions',
      'Search and indexing pipeline for instant formula and concept lookup',
      'Lightweight server engine optimized for high concurrent student exam traffic',
      'Clean accessible layout optimized for mobile study and PDF export'
    ],
    tags: ['Python', 'Web Portal', 'DBMS', 'Java', 'Knowledge Base'],
    liveUrl: 'https://github.com/abhishekraaj07/ccsu-bca-5sem-pyq-solver',
    githubUrl: 'https://github.com/abhishekraaj07/ccsu-bca-5sem-pyq-solver',
    stats: { metric: '4 Core Subjects', label: 'Master Question Bank' },
    status: 'Live Portal'
  },
  {
    id: 'reel-flow',
    number: '07',
    title: 'Reel-Flow Downloader',
    subtitle: 'High-Speed Instagram Media Stream Engine',
    category: 'TypeScript & Media Streams',
    language: 'TypeScript',
    stars: 0,
    description: 'High-performance Instagram media & reel extraction stream tool. Built for rapid URL parsing, direct media CDN resolution, and seamless multi-quality downloads.',
    architecture: [
      'Direct Instagram GraphQL & CDN endpoint resolution with header spoofing',
      'Stream piping enabling instantaneous playback without waiting for full download',
      'Rate-limit mitigation and session cookie rotation mechanism',
      'Type-safe response schema validation with Zod'
    ],
    tags: ['TypeScript', 'Media Extraction', 'Node.js', 'Stream Pipelines', 'REST APIs'],
    liveUrl: 'https://github.com/abhishekraaj07/reel-flow',
    githubUrl: 'https://github.com/abhishekraaj07/reel-flow',
    stats: { metric: 'Direct Stream', label: 'High-Speed CDN Pipe' },
    status: 'Utility Engine'
  },
  {
    id: 'bank-management-system',
    number: '08',
    title: 'Bank Management System',
    subtitle: 'Core Banking Ledger & Transaction Engine',
    category: 'Java & Database Systems',
    language: 'Java',
    stars: 0,
    description: 'Enterprise banking ledger system featuring secure customer account management, transaction logging, fund transfers, and balance reconciliation.',
    architecture: [
      'ACID compliant database transactions preventing double-spend and balance drift',
      'Role-based access control (RBAC) separating teller and customer actions',
      'Strict object-oriented model with comprehensive validation rules',
      'Robust SQL schema design with indexed ledger audit trails'
    ],
    tags: ['Java', 'JDBC', 'MySQL', 'OOP Design', 'ACID Transactions'],
    liveUrl: 'https://github.com/abhishekraaj07/bank-management-system',
    githubUrl: 'https://github.com/abhishekraaj07/bank-management-system',
    stats: { metric: 'ACID Compliant', label: 'Secure Banking Ledger' },
    status: 'Enterprise Java'
  }
];
