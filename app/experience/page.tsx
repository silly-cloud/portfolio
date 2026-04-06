import { Download, Briefcase } from "lucide-react";

const stats = [
  { value: "2+",    label: "Years Experience" },
  { value: "99.5%", label: "Uptime Maintained" },
  { value: "40%",   label: "Debugging Time Reduced" },
  { value: "250+",  label: "Defects Triaged" },
];

const roles = [
  {
    company: "Capermint Technologies",
    dates: "Nov 2025 – Present",
    title: "DevOps Engineer",
    bullets: [
      "Engineered CI/CD pipelines using Jenkins and GitHub Actions, automating build, test, and deployment workflows",
      "Provisioned and managed AWS infrastructure with Terraform — reproducible, version-controlled, cost-optimized",
      "Containerized microservices with Docker and orchestrated deployments on Kubernetes",
      "Collaborated with leadership to design a globally scalable SaaS platform",
    ],
  },
  {
    company: "Exeter Finance Canada",
    dates: "May 2025 – Oct 2025",
    title: "IT Operations Engineer",
    bullets: [
      "Administered Active Directory for 200+ employees — user accounts and group policies",
      "Configured and maintained network infrastructure for on-site and remote users",
      "Resolved 30+ daily help desk tickets, consistently meeting SLA targets",
    ],
  },
  {
    company: "Apple Canada",
    dates: "May 2024 – Apr 2025",
    title: "IT Support Analyst",
    bullets: [
      "Triaged production incidents across Operations, Sales, and Logistics in global tier-two support queue",
      "Coordinated with global teams for upgrades and compliance changes during major product launches",
      "Achieved 99.5% availability for reporting and analytics platforms",
    ],
  },
  {
    company: "WEBSTERS",
    dates: "Nov 2023 – Apr 2024",
    title: "DevOps Engineer – Intern",
    bullets: [
      "Investigated 250+ software defects in embedded automotive systems; root cause identified in 90% of cases",
      "Built Python and Bash scripts for automated log parsing, reducing manual debugging by 40%",
      "Integrated Jira with CI/CD pipelines, reducing average resolution time by 25%",
    ],
  },
];

const certs = [
  { name: "AWS Certified Cloud Practitioner",        issuer: "Amazon Web Services", date: "Mar 2024" },
  { name: "AWS Cloud Quest: Cloud Practitioner",     issuer: "Amazon Web Services", date: "Mar 2024" },
];

const certGoals = [
  "AWS Solutions Architect – Associate",
  "HashiCorp Terraform Associate",
  "CKA",
];

const skillGroups = [
  { label: "Cloud & IaC",                skills: ["AWS", "Terraform", "Ansible", "Chef"] },
  { label: "CI/CD & GitOps",             skills: ["Jenkins", "GitHub Actions", "ArgoCD", "Helm", "SonarQube", "Trivy"] },
  { label: "Containers & Orchestration", skills: ["Docker", "Kubernetes", "EKS"] },
  { label: "Monitoring & Observability", skills: ["Prometheus", "Grafana", "Loki", "Datadog"] },
  { label: "Languages & Scripting",      skills: ["Python", "Bash", "Linux", "SQL"] },
  { label: "Databases",                  skills: ["MySQL", "PostgreSQL", "MongoDB"] },
];

export default function ExperiencePage() {
  return (
    <div className="flex-1 overflow-y-auto p-6 max-md:p-4 space-y-8">

      {/* 1. Page header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 text-term-green font-bold text-[15px]">
            <Briefcase size={15} className="shrink-0" />
            ~/work-experience
          </h1>
          <p className="text-term-muted text-[12px] mt-1">
            // Building scalable infrastructure, one pipeline at a time
          </p>
        </div>
        <a
          href="/Viram_Shah_Resume.pdf"
          download
          className="flex items-center gap-1.5 px-3 py-1.5 border border-term-border text-term-muted hover:text-term-green hover:border-term-green rounded-full text-[12px] transition-colors whitespace-nowrap shrink-0"
        >
          <Download size={12} />
          résumé.pdf
        </a>
      </div>

      {/* 2. Stats bar */}
      <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="border border-term-border bg-term-navbg rounded-md p-3 text-center"
          >
            <div className="text-term-green text-[22px] font-bold leading-none">{value}</div>
            <div className="text-term-muted text-[11px] mt-1.5 leading-tight">{label}</div>
          </div>
        ))}
      </div>

      {/* 3. Experience timeline */}
      <div className="space-y-3">
        {roles.map((role) => (
          <div
            key={role.company}
            className="flex rounded-md border border-term-border bg-term-navbg overflow-hidden"
          >
            <div className="w-[3px] bg-term-green shrink-0" />
            <div className="flex-1 p-4">
              <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1">
                <span className="text-term-white text-[13px] font-semibold">{role.company}</span>
                <span className="text-term-muted text-[11px] whitespace-nowrap">{role.dates}</span>
              </div>
              <div className="text-term-green text-[12px] mb-2">{role.title}</div>
              <ul className="space-y-1">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[12px] text-term-muted">
                    <span className="text-term-dim shrink-0 mt-px">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Certifications */}
      <div className="space-y-3">
        <h2 className="text-term-green text-[13px] font-semibold">~/certifications</h2>
        <div className="space-y-2">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center justify-between gap-3 flex-wrap border border-term-border bg-term-navbg rounded-md px-4 py-3"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-term-white text-[12px]">{cert.name}</span>
                <span className="text-term-muted text-[11px]">— {cert.issuer}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-term-muted text-[11px]">{cert.date}</span>
                <span className="px-2 py-0.5 rounded-full bg-term-green/10 border border-term-green/30 text-term-green text-[10px]">
                  achieved
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-term-muted text-[11px]">in progress:</span>
          {certGoals.map((g) => (
            <span
              key={g}
              className="px-2 py-0.5 rounded-full border border-term-border text-term-muted text-[11px]"
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Skills grid */}
      <div className="space-y-3">
        <h2 className="text-term-green text-[13px] font-semibold">~/skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillGroups.map(({ label, skills }) => (
            <div key={label}>
              <div className="text-term-muted text-[11px] mb-2">{label}</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded border border-term-border bg-term-navbg text-term-green text-[11px]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
