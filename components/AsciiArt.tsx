import { ASCII_VIRAM, ASCII_SHAH } from "@/lib/constants";

export default function AsciiArt() {
  return (
    <div className="flex items-start gap-9 mb-[18px] flex-wrap">
      <pre className="text-term-green text-[13px] leading-[1.35] tracking-[2px] whitespace-pre max-md:text-[7px] max-md:tracking-[0.5px]" style={{ fontFamily: "ui-monospace, 'Cascadia Mono', 'Cascadia Code', Menlo, Consolas, 'Courier New', monospace" }}>{ASCII_VIRAM}</pre>
      <pre className="text-term-green text-[13px] leading-[1.35] tracking-[2px] whitespace-pre max-md:text-[7px] max-md:tracking-[0.5px]" style={{ fontFamily: "ui-monospace, 'Cascadia Mono', 'Cascadia Code', Menlo, Consolas, 'Courier New', monospace" }}>{ASCII_SHAH}</pre>
    </div>
  );
}
