// ============================================================================
// RESUME DATA — single source of truth
// Every fact below is taken directly from Sakshi Gupta's resume.
// Do not add achievements, employers, or technologies that aren't in it.
// ============================================================================

export const personal = {
  name: "Sakshi Gupta",
  title: "Electronics & Communication Engineer",
  taglineRoles: [
    "Networking Enthusiast",
    "Industrial Automation",
    "Embedded Systems Builder",
    "Cybersecurity Intern",
  ],
  location: "Kanpur, Uttar Pradesh, India",
  phone: "+91 8127061616",
  email: "sakshigupta2033@gmail.com",
  github: "https://github.com/03-sakshi",
  githubHandle: "github.com/03-sakshi",
  linkedin: "https://linkedin.com/in/sakshi-gupta03",
  linkedinHandle: "linkedin.com/in/sakshi-gupta03",
  resumeFile: "/resume/Sakshi_Gupta_Resume.pdf",
  summary:
    "Final-year Electronics & Communication Engineering student who works across the stack of physical systems — from Ladder Logic on a PLC panel to VLAN routing tables to Arduino sensor arrays. Comfortable in a server rack, a control cabinet, or a Python notebook.",
  objective:
    "Seeking an entry-level engineering role where I can apply my hands-on experience in networking, industrial automation, and embedded systems to build reliable, real-world systems — while continuing to grow across hardware, software, and infrastructure.",
} as const;

export const education = [
  {
    id: "btech",
    degree: "B.Tech — Electronics and Communication Engineering",
    institution: "Banasthali Vidyapith",
    location: "Jaipur, Rajasthan",
    duration: "2022 – 2026",
    cgpa: "7.68",
    cgpaScale: "10",
  },
] as const;

export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  skills: { name: string; level: number }[];
};

// level = relative proficiency signal for the progress bar (0-100),
// derived from depth/frequency of use described in the resume.
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    description: "Core programming languages",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 78 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    description: "Routing, switching & security fundamentals",
    skills: [
      { name: "CCNA", level: 75 },
      { name: "TCP/IP", level: 80 },
      { name: "VLAN", level: 78 },
      { name: "Subnetting", level: 78 },
      { name: "Routing (RIP, OSPF)", level: 72 },
      { name: "DHCP", level: 75 },
      { name: "DNS", level: 75 },
      { name: "ACL", level: 70 },
      { name: "Cisco Packet Tracer", level: 82 },
    ],
  },
  {
    id: "automation",
    label: "Industrial Automation",
    description: "Control systems & plant-floor engineering",
    skills: [
      { name: "PLC Programming (Ladder Logic)", level: 78 },
      { name: "SCADA", level: 70 },
      { name: "Industrial Sensors", level: 72 },
      { name: "Wiring & Troubleshooting", level: 75 },
    ],
  },
  {
    id: "embedded",
    label: "Embedded & Electronics",
    description: "Hardware, sensing & chip-level design",
    skills: [
      { name: "Arduino", level: 85 },
      { name: "IoT", level: 80 },
      { name: "VLSI (Semiconductor Design)", level: 65 },
      { name: "Digital Electronics", level: 75 },
    ],
  },
  {
    id: "os",
    label: "Operating Systems",
    description: "Server & shell environments",
    skills: [
      { name: "Windows Server", level: 70 },
      { name: "Linux (Ubuntu / CentOS)", level: 75 },
      { name: "Shell Scripting", level: 68 },
    ],
  },
];

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "bajaj",
    company: "Bajaj Engineering Skills Training",
    role: "Automation Engineer",
    duration: "Jan 2026 – May 2026",
    location: "Jaipur",
    points: [
      "Contributed to industrial automation projects by developing PLC programs using Ladder Logic and supporting system integration activities.",
      "Performed sensor integration, electrical wiring, and troubleshooting while monitoring process performance through a SCADA interface.",
      "Gained hands-on exposure to semiconductor fabrication processes, strengthening knowledge of industrial automation, manufacturing workflows, and process control.",
      "Integrated industrial sensors, performed electrical wiring, and assisted in system troubleshooting to ensure smooth operations.",
      "Monitored automation processes through a basic SCADA interface for real-time supervision.",
    ],
  },
  {
    id: "prontastic",
    company: "Prontastic IT Services Pvt. Ltd.",
    role: "Cybersecurity Intern",
    duration: "Feb 2024 – Jan 2025",
    location: "Jaipur",
    points: [
      "Configured and monitored routers and switches using Cisco Packet Tracer (VLAN, IP addressing, subnetting).",
      "Implemented basic routing protocols (RIP, OSPF) and performed network troubleshooting using ping and traceroute.",
      "Applied network security concepts including ACL configuration and basic firewall management.",
      "Worked with core network services including DHCP and DNS.",
    ],
  },
];

export type ProjectItem = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string | null;
};

export const projects: ProjectItem[] = [
  {
    id: "spy-robot",
    name: "Spy Robot with 5G AI Integration",
    shortName: "Spy Robot",
    description:
      "An autonomous spy robot built on Arduino, combining 5G communication with AI-based decision-making for real-time surveillance. Designed as a modular platform suited to border security, industrial inspection, and search-and-rescue scenarios.",
    features: [
      "Real-time surveillance over a 5G communication link",
      "AI-based decision-making for autonomous operation",
      "Ultrasonic, flame, and proximity sensors for obstacle detection and threat monitoring",
      "Modular architecture for border security, industrial inspection & search-and-rescue",
    ],
    tech: ["Arduino", "5G Communication", "AI Decision-Making", "Ultrasonic Sensors", "Embedded C"],
    github: "https://github.com/03-sakshi",
    demo: null,
  },
  {
    id: "water-pipeline",
    name: "Smart Underground Water Pipeline Monitoring System",
    shortName: "Water Pipeline Monitoring",
    description:
      "A Digital Twin–based monitoring system, built in Python, that simulates and tracks the real-time condition of underground water pipelines. AI/ML models detect leakage and contamination early, enabling predictive maintenance and reducing operational downtime.",
    features: [
      "Digital Twin simulation of underground pipeline conditions",
      "AI/ML-based early detection of leakage and contamination",
      "Real-time monitoring dashboard for pipeline health",
      "Fault localization to pinpoint affected pipeline sections",
    ],
    tech: ["Python", "AI/ML", "Digital Twin", "Real-time Dashboard"],
    github: "https://github.com/03-sakshi",
    demo: null,
  },
  {
    id: "traffic-management",
    name: "Smart Traffic Management System using AI & IoT",
    shortName: "Smart Traffic Management",
    description:
      "An AI-powered traffic management system that optimizes signal flow and reduces congestion at intersections, using computer vision for live vehicle detection and an adaptive control algorithm for signal timing.",
    features: [
      "Real-time vehicle detection, counting & classification via live camera feeds",
      "Computer vision pipeline using OpenCV and YOLO",
      "Adaptive traffic-signal control based on live traffic density",
      "Monitoring dashboard for traffic statistics and data-driven decisions",
    ],
    tech: ["Python", "OpenCV", "YOLO", "IoT", "Computer Vision"],
    github: "https://github.com/03-sakshi",
    demo: null,
  },
];

export type CertificationItem = {
  id: string;
  title: string;
  provider: string;
  duration: string;
  description: string;
};

export const certifications: CertificationItem[] = [
  {
    id: "ccna",
    title: "CCNA — Networking Fundamentals",
    provider: "Cisco Networking Track",
    duration: "Coursework",
    description:
      "Studied core networking concepts underlying the CCNA curriculum — TCP/IP, VLANs, subnetting, routing protocols (RIP, OSPF), ACLs — applied hands-on using Cisco Packet Tracer.",
  },
  {
    id: "bajaj-training",
    title: "Automation Engineer Training Program",
    provider: "Bajaj Engineering Skills Training",
    duration: "Jan 2026 – May 2026",
    description:
      "Structured, hands-on training in PLC Ladder Logic programming, SCADA supervision, industrial sensor integration, and semiconductor fabrication fundamentals.",
  },
  {
    id: "cyber-training",
    title: "Cybersecurity & Network Operations",
    provider: "Prontastic IT Services Pvt. Ltd.",
    duration: "Feb 2024 – Jan 2025",
    description:
      "On-the-job training in router/switch configuration, routing protocol implementation, network troubleshooting, and firewall/ACL fundamentals.",
  },
];

export const stats = [
  { id: "cgpa", label: "CGPA", value: 7.68, suffix: "/10" },
  { id: "projects", label: "Projects Built", value: projects.length, suffix: "+" },
  { id: "internships", label: "Internships", value: experience.length, suffix: "" },
  { id: "domains", label: "Technical Domains", value: skillCategories.length, suffix: "" },
] as const;
