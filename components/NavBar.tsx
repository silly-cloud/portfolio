"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Grid2x2, FileText, Images, Terminal } from "lucide-react";

const tabs = [
  { label: "home ~", href: "/", icon: Home },
  { label: "exp", href: "/experience", icon: Briefcase },
  { label: "proj", href: "/projects", icon: Grid2x2 },
  { label: "blog", href: "/blog", icon: FileText },
  { label: "gallery", href: "/gallery", icon: Images },
  { label: "term", href: "/term", icon: Terminal },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isPwsh, setIsPwsh] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (localStorage.getItem("shell-theme") === "pwsh") {
      document.documentElement.classList.add("pwsh");
      setIsPwsh(true);
    }

    const observer = new MutationObserver(() => {
      setIsPwsh(document.documentElement.classList.contains("pwsh"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle("pwsh");
    const active = document.documentElement.classList.contains("pwsh");
    localStorage.setItem("shell-theme", active ? "pwsh" : "bash");
  }

  return (
    <nav className="flex items-center h-11 px-5 bg-term-navbg border-b border-term-border shrink-0 gap-2.5 text-[13px] max-md:px-2.5 max-md:gap-1.5">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
        <Image src="/avatar.jpg" alt="Viram Shah" width={32} height={32} className="w-full h-full object-cover" />
      </div>

      {/* Identity */}
      <span className="text-term-muted whitespace-nowrap hidden md:inline">
        <span className="text-term-green">❯</span> viram{" "}
        <span className="text-term-dim">@</span> portfolio{" "}
        <span className="text-term-green animate-blink">_</span>
      </span>

      {/* Tabs */}
      <div className="flex items-center gap-1 ml-2 max-md:ml-0">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
                active
                  ? "bg-term-green/15 text-term-green"
                  : "text-term-muted hover:text-term-white hover:bg-term-white/5"
              }`}
            >
              <tab.icon size={14} className="shrink-0" />
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-2 text-term-muted whitespace-nowrap">
        <button
          onClick={toggleTheme}
          className={`hidden md:inline border-0 px-2 py-0.5 rounded-md text-xs cursor-pointer transition-colors ${
            isPwsh
              ? "bg-term-yellow/15 text-term-yellow hover:bg-term-yellow/25"
              : "bg-term-green/15 text-term-green hover:bg-term-green/25"
          }`}
        >
          {isPwsh ? "PS> pwsh" : "$ bash"}
        </button>
        <span className="text-term-dim hidden md:inline">&middot;</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-term-green animate-pulse-dot inline-block" />
          <span className="text-term-green text-xs">online</span>
        </span>
      </div>
    </nav>
  );
}
