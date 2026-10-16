export const projects = [
  {
    id: 'private-chat',
    number: '01',
    title: 'Private Chat App',
    subtitle: 'Zero-Knowledge Ephemeral Messaging',
    category: 'Privacy & WebSockets',
    description: 'An end-to-end encrypted room messaging system with ephemeral channels, WebSockets, Cloudflare Workers backend, and a production Capacitor Android mobile APK build.',
    architecture: [
      'Client-side room key negotiation (Zero-Knowledge)',
      'Sub-50ms duplex WebSockets via Cloudflare Workers & Durable Objects',
      'Native Android APK generation through Capacitor & Vite',
      'Zero message logs or persistent telemetry on disk'
    ],
    tags: ['Astro', 'TypeScript', 'WebSockets', 'Cloudflare Workers', 'Capacitor', 'Tailwind CSS'],
    liveUrl: 'https://github.com/abhishekraaj07/private-chat-app',
    githubUrl: 'https://github.com/abhishekraaj07/private-chat-app',
    stats: { metric: '< 30ms', label: 'Duplex Latency' },
    status: 'Production Grade'
  },
  {
    id: 'spotify-player',
    number: '02',
    title: 'Spotify Web Audio Engine',
    subtitle: 'High-Fidelity Audio Streaming & Queue Architecture',
    category: 'Audio Streaming & UI/UX',
    description: 'Custom Spotify client workstation featuring hierarchical playlist folder grouping, live queue reordering, and a responsive pitch-black Web Audio visualizer.',
    architecture: [
      'Custom Web Audio API buffer management & gapless transitions',
      'Nested folder & master mega-playlist aggregator logic',
      'Stateful playback queue with drag-and-drop reordering',
      'Optimized 60 FPS visualizer with zero CPU throttling'
    ],
    tags: ['JavaScript ESNext', 'Web Audio API', 'State Architecture', 'Tailwind CSS', 'Canvas'],
    liveUrl: 'https://github.com/abhishekraaj07',
    githubUrl: 'https://github.com/abhishekraaj07',
    stats: { metric: '60 FPS', label: 'Audio Rendering' },
    status: 'Live Audio Pipeline'
  },
  {
    id: 'youtube-engine',
    number: '03',
    title: 'YouTube Stream Pipeline',
    subtitle: 'Automated Media Slicing & Transcoding Daemon',
    category: 'Backend & Media Systems',
    description: 'High-speed media extraction and automated transcode pipeline daemon built in Python. Features queue scheduling, format multiplexing, and robust retry backoff mechanisms.',
    architecture: [
      'Asynchronous task workers with priority queue scheduling',
      'Lossless FFmpeg audio/video stream muxing & demuxing',
      'Exponential backoff and anti-rate-limit jitter algorithms',
      'Headless CLI daemon interface with real-time progress events'
    ],
    tags: ['Python 3.12', 'yt-dlp', 'FFmpeg', 'AsyncIO', 'Stream Pipelines'],
    liveUrl: 'https://github.com/abhishekraaj07',
    githubUrl: 'https://github.com/abhishekraaj07',
    stats: { metric: 'Multi-Format', label: 'Lossless Transcoding' },
    status: 'CLI Daemon'
  },
  {
    id: 'nexus-java',
    number: '04',
    title: 'Nexus Java Engine',
    subtitle: 'High-Throughput Concurrent Event System',
    category: 'Enterprise Concurrency',
    description: 'High-performance concurrent event dispatch engine built on Java 21 HotSpot. Optimized for thread pool orchestration, immutable message pipelines, and sub-millisecond dispatch.',
    architecture: [
      'Lock-free concurrent queues and memory-mapped state buffers',
      'Virtual threads (Java Project Loom) for concurrent client scale',
      'Strict domain-driven OOP boundaries with zero reflection overhead',
      'Micro-benchmarked with JMH for predictable p99 latency'
    ],
    tags: ['Java 21', 'Virtual Threads', 'Concurrency', 'Event Dispatch', 'JMH Benchmarks'],
    liveUrl: 'https://github.com/abhishekraaj07',
    githubUrl: 'https://github.com/abhishekraaj07',
    stats: { metric: '< 1ms', label: 'p99 Event Dispatch' },
    status: 'High Concurrency'
  },
  {
    id: 'mirofish-swarm',
    number: '05',
    title: 'MiroFish Swarm Simulation',
    subtitle: 'Multi-Agent Emergence & Physics Engine',
    category: 'Simulation & WebGL',
    description: 'Interactive multi-agent behavioral simulator exploring emergent algorithms, dynamic flocking vectors, spatial hashing, and real-time interactive physics in canvas.',
    architecture: [
      'Reynolds Boids algorithm with flocking, separation, and cohesion',
      'Spatial partitioning grid for O(N log N) collision queries',
      'Interactive force attractors responding to cursor trajectory',
      'Frame-budgeted canvas renderer with sub-pixel interpolation'
    ],
    tags: ['Canvas 2D', 'Agent Swarms', 'Emergence Physics', 'Spatial Hashing', 'Vector Math'],
    liveUrl: 'https://github.com/abhishekraaj07',
    githubUrl: 'https://github.com/abhishekraaj07',
    stats: { metric: '2000+', label: 'Active Agent Entities' },
    status: 'Interactive Engine'
  },
  {
    id: 'open-dots-hub',
    number: '06',
    title: 'Workstation Automation Hub',
    subtitle: 'Developer Micro-Tools & OS Daemons',
    category: 'DevOps & Tooling',
    description: 'Modular workstation automation environment and developer micro-tool orchestrator with background cron scheduling and persistent configuration management.',
    architecture: [
      'PowerShell & Python daemons for persistent background tasks',
      'SQLite-backed local catalog for file indexing and metadata',
      'Cross-platform CLI wrappers for automated workstation workflows',
      'Config drift detection and automated environment provisioning'
    ],
    tags: ['PowerShell', 'Python', 'Node.js', 'SQLite', 'OS Automation'],
    liveUrl: 'https://github.com/abhishekraaj07',
    githubUrl: 'https://github.com/abhishekraaj07',
    stats: { metric: '100% Local', label: 'Zero Cloud Dependency' },
    status: 'Workstation OS'
  }
];
