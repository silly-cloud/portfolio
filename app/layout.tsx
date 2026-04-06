import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import StatusBar from "@/components/StatusBar";
import { TerminalProvider } from "@/lib/TerminalContext";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "viram @ portfolio",
  description: "Viram Shah — DevOps Engineer. Terminal-style portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="flex items-center justify-center h-screen bg-term-bg font-mono text-term-white text-[13px] leading-[1.6]">
        <TerminalProvider>
          <div className="flex flex-col w-full max-w-5xl h-[96vh] border border-term-border rounded-lg overflow-hidden">
            <NavBar />
            <main className="flex-1 flex flex-col overflow-hidden">
              {children}
            </main>
            <StatusBar />
          </div>
        </TerminalProvider>
      </body>
    </html>
  );
}
