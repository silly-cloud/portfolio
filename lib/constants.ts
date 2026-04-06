export const ALL_CMDS = [
  "help",
  "about",
  "whoami",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "services",
  "socials",
  "contact",
  "github",
  "linkedin",
  "resume",
  "theme",
  "clear",
  "neofetch",
  "fortune",
  "cowsay",
  "ls",
  "date",
  "pwd",
  "sudo",
  "exit",
  "blog",
  "blogs",
  "goto",
  "goto home",
  "goto experience",
  "goto projects",
  "goto blog",
  "goto gallery",
  "goto terminal",
];

export const ASCII_VIRAM = `██╗   ██╗██╗██████╗  █████╗ ███╗   ███╗
██║   ██║██║██╔══██╗██╔══██╗████╗ ████║
██║   ██║██║██████╔╝███████║██╔████╔██║
╚██╗ ██╔╝██║██╔══██╗██╔══██║██║╚██╔╝██║
 ╚████╔╝ ██║██║  ██║██║  ██║██║ ╚═╝ ██║
  ╚═══╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝`;

export const ASCII_SHAH = `███████╗██╗  ██╗ █████╗ ██╗  ██╗
██╔════╝██║  ██║██╔══██╗██║  ██║
███████╗███████║███████║███████║
╚════██║██╔══██║██╔══██║██╔══██║
███████║██║  ██║██║  ██║██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`;

export interface SkillEntry    { name: string; pct: number }
export interface SkillCategory { name: string; skills: SkillEntry[] }

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    name: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (EC2, EKS, Lambda, S3)", pct: 100 },
      { name: "Terraform / IaC",            pct: 100 },
      { name: "Docker / Containers",         pct: 100 },
      { name: "Kubernetes / EKS",            pct: 95  },
      { name: "CDK / CloudFormation",        pct: 90  },
      { name: "Route53 / CloudFront",        pct: 85  },
    ],
  },
  {
    name: "CI/CD & Automation",
    skills: [
      { name: "Jenkins",                    pct: 100 },
      { name: "GitLab CI / GitHub Actions", pct: 90  },
      { name: "ArgoCD / GitOps",            pct: 90  },
      { name: "Ansible",                    pct: 85  },
    ],
  },
  {
    name: "Monitoring & Observability",
    skills: [
      { name: "Prometheus / Grafana", pct: 100 },
      { name: "CloudWatch",           pct: 90  },
      { name: "ELK Stack",            pct: 80  },
    ],
  },
  {
    name: "Programming & Development",
    skills: [
      { name: "Bash / Shell Scripting",  pct: 100 },
      { name: "Python",                  pct: 95  },
      { name: "JavaScript / TypeScript", pct: 90  },
      { name: "React / Next.js",         pct: 80  },
      { name: "Helm Charts",             pct: 90  },
    ],
  },
  {
    name: "Databases & APIs",
    skills: [
      { name: "PostgreSQL / MySQL", pct: 80  },
      { name: "REST APIs",          pct: 90  },
      { name: "Git / GitHub",       pct: 100 },
    ],
  },
];

export interface CertAchieved {
  name: string;
  continuation?: string;
  issuer: string;
  date: string;
}
export interface CertsData {
  achieved: CertAchieved[];
  goals: string[];
  learning: string[];
}
export const CERTS_DATA: CertsData = {
  achieved: [
    { name: "AWS Certified Cloud Practitioner",    issuer: "AWS",      date: "Mar 2024" },
    { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS",      date: "Mar 2024" },
    { name: "AWS Educate: Compute, Storage,",      issuer: "AWS",      date: "Mar 2024", continuation: "Databases & Security" },
    { name: "Application Security in DevSecOps",   issuer: "LinkedIn", date: "Mar 2024" },
    { name: "Learning Bash Scripting",             issuer: "LinkedIn", date: "Mar 2024" },
  ],
  goals: [
    "AWS Certified Solutions Architect \u2013 Associate (SAA-C03)",
    "AWS Certified Developer \u2013 Associate",
    "AWS Certified DevOps Engineer \u2013 Professional",
    "HashiCorp Certified: Terraform Associate",
    "Certified Kubernetes Administrator (CKA)",
    "Docker Certified Associate (DCA)",
  ],
  learning: [
    "Hands-on with AWS, Kubernetes & IaC in production",
    "Building CI/CD pipelines with Jenkins, GitHub Actions",
    "Exploring DevSecOps & cloud-native security practices",
  ],
};

export interface ServiceEntry {
  icon: string;
  title: string;
  body: string[];
}
export const SERVICES_DATA: ServiceEntry[] = [
  {
    icon: "☁",
    title: "Cloud Architecture",
    body: [
      "Design and implement scalable AWS infrastructure using",
      "Terraform, CDK, and CloudFormation with best practices",
      "for security and cost optimization.",
    ],
  },
  {
    icon: "⎈",
    title: "Kubernetes & Containers",
    body: [
      "Build and manage production Kubernetes platforms on EKS",
      "with Helm, ArgoCD, and GitOps-driven deployments for",
      "multi-tenant workloads.",
    ],
  },
  {
    icon: "⑂",
    title: "CI/CD Pipelines",
    body: [
      "Architect zero-downtime deployment pipelines with Jenkins,",
      "Tekton, GitLab CI, and GitHub Actions \u2014 from code commit",
      "to production.",
    ],
  },
  {
    icon: "🛡",
    title: "Site Reliability Engineering",
    body: [
      "Implement SLOs, error budgets, and incident response",
      "processes that keep systems running at 99.9%+ availability.",
    ],
  },
  {
    icon: "📊",
    title: "Observability & Monitoring",
    body: [
      "Deploy end-to-end observability stacks with Prometheus,",
      "Grafana, Splunk, and CloudWatch for full-stack visibility.",
    ],
  },
  {
    icon: "⚙",
    title: "Infrastructure Automation",
    body: [
      "Automate everything with Ansible, Python, and Bash \u2014 from",
      "server provisioning to configuration management at scale.",
    ],
  },
];

export interface SocialEntry {
  icon: string;
  label: string;
  href: string;
}
export const SOCIALS_DATA: SocialEntry[] = [
  { icon: "🐙", label: "GitHub",   href: "https://github.com/silly-cloud" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/viramshah03/" },
  { icon: "📧", label: "Email",    href: "mailto:viramshah003@gmail.com" },
];
