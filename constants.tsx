import React from 'react';
import { Project, Experience, Skill } from './types';
import { 
  Terminal, 
  Shield, 
  Search, 
  Cpu, 
  Lock, 
  Network, 
  FileCode,
  Bug,
  Smartphone,
  Layers
} from 'lucide-react';

export const HERO_DATA = {
  name: "D.V.S. SAAKETH",
  role: "CYBERSECURITY INTERN // B.TECH CSE STUDENT",
  tagline: "SECURE_CONNECTION_ESTABLISHED",
  description: "A highly motivated and disciplined cybersecurity intern with hands-on experience in protocol analysis, phishing detection, and system-level troubleshooting.",
};

export const ABOUT_TEXT = `
  root@saaketh:~$ cat objective.txt

  A highly motivated and disciplined cybersecurity intern with hands-on experience in protocol analysis, phishing detection, and system-level troubleshooting.

  Seeking to contribute meaningfully to Elevate Labs' mission with a strong ethical foundation, rapid adaptability, and a passion for secure systems. Ready to take ownership of impactful projects—no interview needed.
`;

export const EDUCATION = {
  degree: "Bachelor of Technology in Computer Science",
  school: "GD Goenka University, Haryana",
  year: "Expected Graduation: 2028"
};

export const CURRENT_ROLE = {
  title: "Intern @ Elevate Labs",
  focus: "Network Security"
};

// Based on "TECHNICAL_ARSENAL" from PDF and Resume Skills
export const SKILLS: Skill[] = [
  { name: 'WireShark', icon: <Network className="w-5 h-5" />, level: 90, category: 'tools' },
  { name: 'Bash / Shell', icon: <Terminal className="w-5 h-5" />, level: 85, category: 'frontend' },
  { name: 'Python Automation', icon: <FileCode className="w-5 h-5" />, level: 80, category: 'backend' },
  { name: 'Linux/Win/Android', icon: <Smartphone className="w-5 h-5" />, level: 85, category: 'tools' },
  { name: 'OpenVAS', icon: <Shield className="w-5 h-5" />, level: 75, category: 'tools' },
  { name: 'Nessus', icon: <Search className="w-5 h-5" />, level: 70, category: 'tools' },
  { name: 'Burp Suite', icon: <Bug className="w-5 h-5" />, level: 75, category: 'tools' },
  { name: 'Phishing Detection', icon: <Lock className="w-5 h-5" />, level: 80, category: 'tools' },
  { name: 'Reverse Engineering', icon: <Cpu className="w-5 h-5" />, level: 65, category: 'backend' },
];

// Full Resume Experience for ChatBot context
export const EXPERIENCE_DETAILS: Experience[] = [
  {
    id: 1,
    role: "Cybersecurity Intern",
    company: "Elevate Labs",
    period: "2025 – Present",
    description: "Executed Wireshark traffic capture and protocol analysis in Linux VBox. Documented findings in reproducible markdown format for GitHub sharing. Developed password strength audit Bash script with cross-platform compatibility. Practiced ethical boundaries in phishing analysis and email header inspection. Compared vulnerability scanners (OpenVAS, Nessus, Burp Suite) for lab efficiency."
  }
];

// Based on "OPERATIONS_LOG" from PDF
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Quantum_Phishing_Sandbox",
    description: "A sandbox environment designed to simulate and analyze quantum-resistant phishing techniques. Focused on automation, reverse engineering, and secure protocol validation. Will be published with universal setup instructions.",
    tags: ["Automation", "Reverse Engineering", "Phishing Analysis"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Saaketh-max",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Bash_Security_Auditor",
    description: "Developed a cross-platform Bash script to audit password strength and check system compliance. Ensures robust security postures across Linux environments.",
    tags: ["Bash", "Shell Scripting", "Linux", "Security Audit"],
    imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Saaketh-max",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Packet_Inspector",
    description: "Comprehensive traffic capture and protocol analysis workflow using Wireshark. Documented findings in reproducible markdown for open-source sharing.",
    tags: ["Wireshark", "Packet Analysis", "TCP/IP", "Markdown"],
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Saaketh-max",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Vuln_Scan_Lab",
    description: "Comparative analysis environment for vulnerability scanners including OpenVAS, Nessus, and Burp Suite to optimize lab efficiency.",
    tags: ["OpenVAS", "Nessus", "Burp Suite", "Vulnerability Scanning"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Saaketh-max",
    liveUrl: "#"
  }
];

export const CONTACT_INFO = {
    phone: "9347590448",
    email: "saisaaketh21@gmail.com",
    github: "Saaketh-max",
    linkedin: "D.V.S. Saaketh",
    linkedinUrl: "https://linkedin.com/in/d-v-s-saaketh"
};

// Extra resume details for ChatBot
export const RESUME_EXTRA = {
  strengths: [
    "Resilient learner with a growth mindset",
    "Tactical, flag-focused troubleshooting approach",
    "Passion for reproducibility and public sharing",
    "Strong ethical boundaries in security research",
    "Thrives on challenge and correction"
  ],
  otherSkills: [
    "Linux, Windows, Android system navigation & scripting",
    "Binary logic analysis",
    "Embedded systems troubleshooting",
    "Markdown documentation",
    "GitHub repository management",
    "Vulnerability scanning",
    "Tool comparison",
    "Ethical lab practice"
  ]
};