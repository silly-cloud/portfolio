import type { CommandOutput } from "./types";
import { SKILLS_MATRIX, CERTS_DATA, SERVICES_DATA, SOCIALS_DATA } from "./constants";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export { esc };

export const commands: Record<string, () => CommandOutput[]> = {
  help: () => {
    const BF = "font-family:ui-monospace,'Cascadia Mono','Cascadia Code',Menlo,Consolas,'Courier New',monospace";
    return [
      { html: "" },
      { html: `<span style="${BF}"><span class="cc">╔═══════════════════════════════════════════════════════════════╗</span></span>` },
      { html: `<span style="${BF}"><span class="cc">║</span><span class="cw">                      AVAILABLE COMMANDS                       </span><span class="cc">║</span></span>` },
      { html: `<span style="${BF}"><span class="cc">╚═══════════════════════════════════════════════════════════════╝</span></span>` },
      { html: "" },
      { html: '<span class="cg"> Commands</span>' },
      { html: '<span class="cd"> ──────────────────────────────────────────────────────────────</span>' },
      { html: '<span class="cw">  about          </span><span class="cd">→  </span><span class="cm">Who I am &amp; what I do</span>' },
      { html: '<span class="cw">  skills         </span><span class="cd">→  </span><span class="cm">Technical skills breakdown</span>' },
      { html: '<span class="cw">  experience     </span><span class="cd">→  </span><span class="cm">Work history</span>' },
      { html: '<span class="cw">  projects       </span><span class="cd">→  </span><span class="cm">Key projects &amp; tech stack</span>' },
      { html: '<span class="cw">  certifications </span><span class="cd">→  </span><span class="cm">Certs earned &amp; in progress</span>' },
      { html: '<span class="cw">  services       </span><span class="cd">→  </span><span class="cm">What I offer</span>' },
      { html: '<span class="cw">  socials        </span><span class="cd">→  </span><span class="cm">Social media links</span>' },
      { html: '<span class="cw">  contact        </span><span class="cd">→  </span><span class="cm">Get in touch</span>' },
      { html: '<span class="cw">  resume         </span><span class="cd">→  </span><span class="cm">Résumé snapshot</span>' },
      { html: '<span class="cw">  blogs          </span><span class="cd">→  </span><span class="cm">Latest blog posts</span>' },
      { html: '<span class="cw">  goto &lt;page&gt;    </span><span class="cd">→  </span><span class="cm">Navigate to a page</span>' },
      { html: '<span class="cw">  theme          </span><span class="cd">→  </span><span class="cm">Toggle bash ↔ pwsh theme</span>' },
      { html: '<span class="cw">  clear          </span><span class="cd">→  </span><span class="cm">Clear terminal  (Ctrl+L)</span>' },
      { html: "" },
      { html: '<span class="cm"> Easter eggs</span>' },
      { html: '<span class="cd"> ──────────────────────────────────────────────────────────────</span>' },
      { html: '<span class="cp">  neofetch  fortune  cowsay  ls  date  pwd  sudo  exit</span>' },
      { html: "" },
    ].map((l) => ({ ...l, delay: 14 }));
  },

  about: () =>
    [
      { html: "" },
      { html: '<span class="cc">  about</span>' },
      {
        html: '<span class="cd">  ──────────────────────────────────────────────────────</span>',
      },
      {
        html: "<span class=\"cw\">  Hey there! 👋  I'm Viram Shah — DevOps Engineer.</span>",
      },
      { html: "" },
      {
        html: '<span class="cm">  I build reliable, scalable cloud-native systems. My</span>',
      },
      {
        html: '<span class="cm">  journey started in IT operations and evolved into full</span>',
      },
      {
        html: '<span class="cm">  DevOps — automating pipelines, provisioning AWS infra</span>',
      },
      {
        html: '<span class="cm">  with Terraform, and orchestrating K8s workloads.</span>',
      },
      { html: "" },
      {
        html: '<span class="cg">  "Great infrastructure is invisible — it just works."</span>',
      },
      { html: "" },
      { html: '<span class="cy">  Expertise</span>' },
      {
        html: '<span class="cw">  ▸ CI/CD         </span><span class="cm">Jenkins · GitHub Actions · ArgoCD</span>',
      },
      {
        html: '<span class="cw">  ▸ Cloud &amp; IaC   </span><span class="cm">AWS · Terraform · Ansible</span>',
      },
      {
        html: '<span class="cw">  ▸ Containers    </span><span class="cm">Docker · Kubernetes · EKS</span>',
      },
      {
        html: '<span class="cw">  ▸ Observability </span><span class="cm">Prometheus · Grafana · Loki · Datadog</span>',
      },
      { html: "" },
      {
        html: '<span class="cg2">  Currently:</span><span class="cw"> DevOps Engineer @ Capermint Technologies</span>',
      },
      {
        html: '<span class="cm">  open to remote</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 18 })),

  whoami: () =>
    [
      { html: "" },
      { html: '<span class="cg">  Viram Shah</span>' },
      {
        html: '<span class="cd">  ────────────────────────────────</span>',
      },
      {
        html: '<span class="cm">  title    </span><span class="cw">DevOps Engineer</span>',
      },
      {
        html: '<span class="cm">  shell    </span><span class="cw">zsh 5.9</span>',
      },
      {
        html: '<span class="cm">  host     </span><span class="cw">silly-cloud.portfolio</span>',
      },
      {
        html: '<span class="cm">  uptime   </span><span class="cw">3+ years in DevOps / Cloud</span>',
      },
      {
        html: '<span class="cm">  status   </span><span class="cg">● open to opportunities</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 20 })),

  skills: () => {
    const BAR = 20;
    const PAD = 28;
    // Force a system font that includes box-drawing characters (U+2500–U+257F).
    // JetBrains Mono (Google Fonts, Latin subset) does not include these glyphs,
    // causing fallback to a font with different advance widths → misaligned pipes.
    const BF = "font-family:ui-monospace,'Cascadia Mono','Cascadia Code',Menlo,Consolas,'Courier New',monospace";
    const out: CommandOutput[] = [
      { html: "" },
      { html: `<span style="${BF}"><span class="cc">╔═══════════════════════════════════════════════════════════════╗</span></span>` },
      { html: `<span style="${BF}"><span class="cc">║</span><span class="cw">                    TECHNICAL SKILLS MATRIX                    </span><span class="cc">║</span></span>` },
      { html: `<span style="${BF}"><span class="cc">╚═══════════════════════════════════════════════════════════════╝</span></span>` },
    ];
    for (const cat of SKILLS_MATRIX) {
      out.push({ html: "" });
      out.push({ html: `<span class="cy">  ${cat.name}</span>` });
      out.push({ html: '<span class="cd">  ──────────────────────────────────────────────────────────────</span>' });
      for (const s of cat.skills) {
        const filled = Math.round(s.pct / 5);
        const name   = s.name.padEnd(PAD);
        const bar    = "█".repeat(filled);
        const empty  = "░".repeat(BAR - filled);
        const pct    = `${s.pct}%`.padStart(4);
        out.push({
          html: `<span class="cw">  ${name}</span><span class="cg">${bar}</span><span class="cd">${empty}</span><span class="cm">  ${pct}</span>`,
        });
      }
    }
    out.push({ html: "" });
    return out.map((l) => ({ ...l, delay: 14 }));
  },

  experience: () =>
    [
      { html: "" },
      { html: '<span class="cp">  experience</span>' },
      {
        html: '<span class="cd">  ──────────────────────────────────────────────────────</span>',
      },
      { html: "" },
      {
        html: '<span class="cg">  DevOps Engineer</span><span class="cm">                      Nov 2025 – Present</span>',
      },
      {
        html: '<span class="cc">  Capermint Technologies</span>',
      },
      {
        html: '<span class="cm">  ▸ CI/CD pipelines — Jenkins &amp; GitHub Actions</span>',
      },
      {
        html: '<span class="cm">  ▸ AWS infra provisioned with Terraform (IaC)</span>',
      },
      {
        html: '<span class="cm">  ▸ Microservices containerized; orchestrated on K8s/EKS</span>',
      },
      {
        html: '<span class="cm">  ▸ Co-designed globally scalable SaaS platform</span>',
      },
      { html: "" },
      {
        html: '<span class="cg">  IT Operations Engineer</span><span class="cm">               May 2025 – Oct 2025</span>',
      },
      {
        html: '<span class="cc">  Exeter Finance</span>',
      },
      {
        html: '<span class="cm">  ▸ Active Directory for 200+ employees</span>',
      },
      {
        html: '<span class="cm">  ▸ Endpoint deployment Windows/macOS; 30+ daily tickets</span>',
      },
      { html: "" },
      {
        html: '<span class="cg">  IT Support Analyst</span><span class="cm">                  May 2024 – Apr 2025</span>',
      },
      {
        html: '<span class="cc">  Apple Canada</span><span class="cm"> · On-site</span>',
      },
      {
        html: '<span class="cm">  ▸ Production incidents across Ops, Sales, Logistics</span>',
      },
      {
        html: '<span class="cm">  ▸ 99.5% platform availability for analytics systems</span>',
      },
      { html: "" },
      {
        html: '<span class="cg">  DevOps Engineer – Intern</span><span class="cm">             Nov 2023 – Apr 2024</span>',
      },
      {
        html: '<span class="cc">  WEBSTERS</span>',
      },
      {
        html: '<span class="cm">  ▸ 250+ defects triaged; 90% root-cause identification</span>',
      },
      {
        html: '<span class="cm">  ▸ Python/Shell scripts → -40% debug effort</span>',
      },
      {
        html: '<span class="cm">  ▸ Jenkins pipelines for multi-branch firmware CI</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 16 })),

  projects: () =>
    [
      { html: "" },
      { html: '<span class="cg2">  projects</span>' },
      {
        html: '<span class="cd">  ──────────────────────────────────────────────────────</span>',
      },
      { html: "" },
      {
        html: '<span class="cy">  [1] End-to-End CI/CD — Netflix Clone</span>',
      },
      {
        html: '<span class="cm">  Jenkins → Docker → SonarQube → Trivy → Helm → ArgoCD → K8s</span>',
      },
      {
        html: '<span class="cm">  Prometheus + Grafana monitoring; DevSecOps gates enforced.</span>',
      },
      {
        html: '<span class="cd">  Jenkins · Docker · Helm · ArgoCD · Prometheus · Grafana · Trivy</span>',
      },
      { html: "" },
      {
        html: '<span class="cy">  [2] Cloud Native Monitoring App on EKS</span>',
      },
      {
        html: '<span class="cm">  Python/Flask app for CPU &amp; RAM metrics. Docker → AWS EKS + HPA.</span>',
      },
      {
        html: '<span class="cd">  Python · Flask · Docker · AWS EKS · Kubernetes</span>',
      },
      { html: "" },
      {
        html: '<span class="cy">  [3] Log Monitoring &amp; Memory Profiling Toolkit</span>',
      },
      {
        html: '<span class="cm">  Bash toolkit for Linux server CPU/memory/network tracking.</span>',
      },
      {
        html: '<span class="cm">  Datadog API alerts + failover simulation scripts.</span>',
      },
      {
        html: '<span class="cd">  Bash · Datadog APIs · Linux</span>',
      },
      { html: "" },
      {
        html: '<span class="cm">  → </span><a href="https://github.com/silly-cloud" target="_blank" rel="noopener">github.com/silly-cloud</a>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 16 })),

  education: () =>
    [
      { html: "" },
      { html: '<span class="cc">  education</span>' },
      {
        html: '<span class="cd">  ──────────────────────────────────────────────────────</span>',
      },
      { html: "" },
      {
        html: '<span class="cw">  Postgraduate Diploma — Cloud Data Management</span>',
      },
      {
        html: '<span class="cc">  Conestoga College</span><span class="cm"> · 2023–2024</span>',
      },
      { html: "" },
      {
        html: '<span class="cw">  Diploma — Computer Engineering</span>',
      },
      {
        html: '<span class="cc">  Govt. Polytechnic Ahmedabad</span><span class="cm"> · 2019–2022</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 20 })),

  certifications: () => {
    const BF = "font-family:ui-monospace,'Cascadia Mono','Cascadia Code',Menlo,Consolas,'Courier New',monospace";
    const LINE_W = 60;
    const out: CommandOutput[] = [
      { html: "" },
      { html: `<span style="${BF}"><span class="cc">╔═══════════════════════════════════════════════════════════════╗</span></span>` },
      { html: `<span style="${BF}"><span class="cc">║</span><span class="cw">                   CERTIFICATIONS &amp; LEARNING                   </span><span class="cc">║</span></span>` },
      { html: `<span style="${BF}"><span class="cc">╚═══════════════════════════════════════════════════════════════╝</span></span>` },
      { html: "" },
      { html: '<span class="cy">  🏆 Achieved Certifications</span>' },
      { html: '<span class="cd">  ──────────────────────────────────────────────────────────────</span>' },
    ];
    for (const c of CERTS_DATA.achieved) {
      const badge  = `[${c.issuer}]`;
      const suffix = `${badge} · ${c.date}`;
      const nameW  = LINE_W - 4 - suffix.length;
      const name   = c.name.padEnd(nameW);
      out.push({
        html: `<span class="cg">  ► </span><span class="cw">${name}</span><span class="cy">${badge}</span><span class="cd"> · </span><span class="cm">${c.date}</span>`,
      });
      if (c.continuation) {
        out.push({ html: `<span class="cw">    ${esc(c.continuation)}</span>` });
      }
    }
    out.push({ html: "" });
    out.push({ html: '<span class="cy">  🎯 Certification Goals</span>' });
    out.push({ html: '<span class="cd">  ──────────────────────────────────────────────────────────────</span>' });
    for (const g of CERTS_DATA.goals) {
      out.push({ html: `<span class="cg">  ► </span><span class="cm">${esc(g)}</span>` });
    }
    out.push({ html: "" });
    out.push({ html: '<span class="cy">  📚 Continuous Learning</span>' });
    out.push({ html: '<span class="cd">  ──────────────────────────────────────────────────────────────</span>' });
    for (const l of CERTS_DATA.learning) {
      out.push({ html: `<span class="cg">  ► </span><span class="cm">${esc(l)}</span>` });
    }
    out.push({ html: "" });
    return out.map((l) => ({ ...l, delay: 16 }));
  },

  services: () => {
    const BF = "font-family:ui-monospace,'Cascadia Mono','Cascadia Code',Menlo,Consolas,'Courier New',monospace";
    const out: CommandOutput[] = [
      { html: "" },
      { html: `<span style="${BF}"><span class="cc">╔═══════════════════════════════════════════════════════════════╗</span></span>` },
      { html: `<span style="${BF}"><span class="cc">║</span><span class="cw">                           WHAT I DO                           </span><span class="cc">║</span></span>` },
      { html: `<span style="${BF}"><span class="cc">╚═══════════════════════════════════════════════════════════════╝</span></span>` },
    ];
    for (const s of SERVICES_DATA) {
      out.push({ html: "" });
      out.push({ html: `<span class="cg"> ${s.icon}  </span><span class="cw">${esc(s.title)}</span>` });
      for (const line of s.body) {
        out.push({ html: `<span class="cm">    ${esc(line)}</span>` });
      }
    }
    out.push({ html: "" });
    return out.map((l) => ({ ...l, delay: 16 }));
  },

  socials: () => {
    const BF = "font-family:ui-monospace,'Cascadia Mono','Cascadia Code',Menlo,Consolas,'Courier New',monospace";
    const PAD = 10; // label column: max("LinkedIn"=8) + 2
    const out: CommandOutput[] = [
      { html: "" },
      { html: `<span style="${BF}"><span class="cc">╔═══════════════════════════════════════════════════════════════╗</span></span>` },
      { html: `<span style="${BF}"><span class="cc">║</span><span class="cw">                         SOCIAL LINKS                          </span><span class="cc">║</span></span>` },
      { html: `<span style="${BF}"><span class="cc">╚═══════════════════════════════════════════════════════════════╝</span></span>` },
      { html: "" },
    ];
    for (const s of SOCIALS_DATA) {
      const label   = s.label.padEnd(PAD);
      const display = s.href.startsWith("mailto:") ? s.href.slice(7) : s.href;
      const tag     = s.href.startsWith("mailto:")
        ? `<a href="${s.href}">${display}</a>`
        : `<a href="${s.href}" target="_blank" rel="noopener">${display}</a>`;
      out.push({
        html: `<span class="cg">  ${s.icon}  </span><span class="cw">${label}</span><span class="cd">→  </span>${tag}`,
      });
    }
    out.push({ html: "" });
    return out.map((l) => ({ ...l, delay: 20 }));
  },

  contact: () =>
    [
      { html: "" },
      { html: '<span class="cg">  contact</span>' },
      {
        html: '<span class="cd">  ──────────────────────────────────────────────────────</span>',
      },
      { html: "" },
      {
        html: '<span class="cm">  email    </span><a href="mailto:viramshah003@gmail.com">viramshah003@gmail.com</a>',
      },
      {
        html: '<span class="cm">  phone    </span><span class="cw">+1 (519) 781-3955  ·  +91 92653 89966</span>',
      },
      {
        html: '<span class="cm">  linkedin </span><a href="https://linkedin.com/in/viramshah03" target="_blank" rel="noopener">linkedin.com/in/viramshah03</a>',
      },
      {
        html: '<span class="cm">  github   </span><a href="https://github.com/silly-cloud" target="_blank" rel="noopener">github.com/silly-cloud</a>',
      },
      { html: "" },
      {
        html: '<span class="cm">  Open to DevOps / Cloud / Platform Engineering roles.</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 20 })),

  github: () =>
    [
      { html: "" },
      {
        html: '<span class="cm">  opening </span><a href="https://github.com/silly-cloud" target="_blank" rel="noopener">github.com/silly-cloud</a><span class="cm"> ↗</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 18 })),

  linkedin: () =>
    [
      { html: "" },
      {
        html: '<span class="cm">  opening </span><a href="https://linkedin.com/in/viramshah03" target="_blank" rel="noopener">linkedin.com/in/viramshah03</a><span class="cm"> ↗</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 18 })),

  theme: () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("pwsh");
      const active = document.documentElement.classList.contains("pwsh");
      localStorage.setItem("shell-theme", active ? "pwsh" : "bash");
      return [
        { html: "" },
        { html: `<span class="cg">  theme → ${active ? "PS&gt; pwsh" : "$ bash"}</span>` },
        { html: "" },
      ].map((l) => ({ ...l, delay: 16 }));
    }
    return [];
  },

  resume: () => {
    const BF = "font-family:ui-monospace,'Cascadia Mono','Cascadia Code',Menlo,Consolas,'Courier New',monospace";
    return [
      { html: "" },
      { html: `<span style="${BF}"><span class="cc">╔═══════════════════════════════════════════════════════════════╗</span></span>` },
      { html: `<span style="${BF}"><span class="cc">║</span><span class="cw">                            RESUME                             </span><span class="cc">║</span></span>` },
      { html: `<span style="${BF}"><span class="cc">╚═══════════════════════════════════════════════════════════════╝</span></span>` },
      { html: "" },
      { html: '<span class="cm">  📄  Click the link below to download my résumé:</span>' },
      { html: "" },
      { html: '<span class="cw">  Download  </span><span class="cd">→  </span><a href="/Viram_Shah_Resume.pdf" download="Viram_Shah_Resume.pdf">Viram_Shah_Resume.pdf</a>' },
      { html: '<span class="cw">  LinkedIn  </span><span class="cd">→  </span><a href="https://www.linkedin.com/in/viramshah03/" target="_blank" rel="noopener">linkedin.com/in/viramshah03</a>' },
      { html: "" },
    ].map((l) => ({ ...l, delay: 16 }));
  },

  blog: () =>
    [
      { html: "" },
      {
        html: '<span class="cm">  blog/ — coming soon</span>',
      },
      {
        html: '<span class="cd">  Writing about DevOps, cloud, and things I break in prod.</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 18 })),

  blogs: () => {
    const BF = "font-family:ui-monospace,'Cascadia Mono','Cascadia Code',Menlo,Consolas,'Courier New',monospace";
    return [
      { html: "" },
      { html: `<span style="${BF}"><span class="cc">╔═══════════════════════════════════════════════════════════════╗</span></span>` },
      { html: `<span style="${BF}"><span class="cc">║</span><span class="cw">                       LATEST BLOG POSTS                       </span><span class="cc">║</span></span>` },
      { html: `<span style="${BF}"><span class="cc">╚═══════════════════════════════════════════════════════════════╝</span></span>` },
      { html: "" },
      { html: '<span class="cm">  📝  Blog posts loading from /blog ...</span>' },
      { html: "" },
      { html: '<span class="cg">  tip:</span><span class="cm"> type </span><span class="cw">goto blog</span><span class="cm"> to visit the full blog page</span>' },
      { html: "" },
    ].map((l) => ({ ...l, delay: 16 }));
  },

  neofetch: () => {
    const time = new Date().toLocaleTimeString();
    return [
      { html: "" },
      { html: '<span class="cg">  viram@silly-cloud</span>' },
      {
        html: '<span class="cd">  ──────────────────────────────────</span>',
      },
      {
        html: '<span class="cm">  OS       </span><span class="cw">ViramOS (Debian DevOps Edition)</span>',
      },
      {
        html: '<span class="cm">  Kernel   </span><span class="cw">experience-3.0-lts</span>',
      },
      {
        html: '<span class="cm">  Shell    </span><span class="cw">zsh 5.9</span>',
      },
      {
        html: '<span class="cm">  Uptime   </span><span class="cw">3+ years in DevOps / Cloud</span>',
      },
      {
        html: `<span class="cm">  Time     </span><span class="cw">${time}</span>`,
      },
      {
        html: '<span class="cm">  Memory   </span><span class="cw">Unlimited ambition / Finite RAM</span>',
      },
      { html: "" },
      {
        html: '<span class="cc">  AWS GCP K8s Docker Terraform Ansible Helm ArgoCD</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 16 }));
  },

  fortune: () => {
    const quotes = [
      "\"Infrastructure as code is not just a practice — it's a philosophy.\"",
      '"The best monitoring is the kind you never have to look at."',
      "\"You don't fix the pipeline on Friday. Write tests on Monday.\"",
      '"A good CI/CD system is a love letter to future-you."',
      '"Kubernetes: just Linux with more YAML and more feelings."',
      '"Ship early, monitor everything, iterate fast."',
      "\"git commit -m 'fix' — the language of 3am deployments.\"",
      '"Observability is not optional. Neither is coffee."',
    ];
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    return [
      { html: "" },
      {
        html: `<span class="cy">  ${q.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`,
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 18 }));
  },

  cowsay: () =>
    [
      { html: "" },
      {
        html: '<span class="cg">   _________________________________________</span>',
      },
      {
        html: '<span class="cg">  &lt; Automate everything. Then automate that. &gt;</span>',
      },
      {
        html: '<span class="cg">   -----------------------------------------</span>',
      },
      {
        html: '<span class="cg">          \\   ^__^</span>',
      },
      {
        html: '<span class="cg">           \\  (oo)\\_______</span>',
      },
      {
        html: '<span class="cg">              (__)\\       )\\/\\</span>',
      },
      {
        html: '<span class="cg">                  ||----w |</span>',
      },
      {
        html: '<span class="cg">                  ||     ||</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 16 })),

  ls: () =>
    [
      { html: "" },
      {
        html: '<span class="cc">  about.txt    </span>  <span class="cc">skills.conf    </span>  <span class="cw">experience.log</span>',
      },
      {
        html: '<span class="cw">  projects.md  </span>  <span class="cw">education.txt  </span>  <span class="cg">certifications.sh</span>',
      },
      {
        html: '<span class="cr">  contact.gpg  </span>  <span class="cp">resume.pdf</span>',
      },
      { html: "" },
      {
        html: '<span class="cd">  tip: type the filename without the extension</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 14 })),

  date: () => {
    const d = new Date();
    return [
      { html: "" },
      {
        html: `<span class="cw">  ${d.toDateString()}  ${d.toLocaleTimeString()}</span>`,
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 10 }));
  },

  pwd: () =>
    [
      { html: "" },
      {
        html: '<span class="cw">  /home/visitor/silly-cloud-portfolio</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 10 })),

  sudo: () =>
    [
      { html: "" },
      {
        html: '<span class="cy">  [sudo] password for visitor: </span>',
      },
      { html: '<span class="cr">  Sorry, try again.</span>' },
      {
        html: '<span class="cy">  [sudo] password for visitor: </span>',
      },
      { html: '<span class="cr">  Sorry, try again.</span>' },
      {
        html: '<span class="cr">  sudo: 3 incorrect password attempts</span>',
      },
      { html: "" },
      {
        html: '<span class="cm">  😄  Nice try. No root access here.</span>',
      },
      { html: "" },
    ].map((l, i) => ({ ...l, delay: i * 190 })),

  exit: () =>
    [
      { html: "" },
      {
        html: '<span class="cy">  "You can check out any time you like,</span>',
      },
      {
        html: '<span class="cy">   but you can never leave..." — Hotel California</span>',
      },
      { html: "" },
      {
        html: '<span class="cg">  Thanks for visiting! Type "contact" to get in touch.</span>',
      },
      { html: "" },
    ].map((l) => ({ ...l, delay: 20 })),
};

/** Commands that open a URL after rendering */
export const URL_COMMANDS: Record<string, string> = {
  github: "https://github.com/silly-cloud",
  linkedin: "https://linkedin.com/in/viramshah03",
};
