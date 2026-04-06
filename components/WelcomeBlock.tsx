import AsciiArt from "./AsciiArt";

export default function WelcomeBlock() {
  return (
    <div className="mb-[18px] pointer-events-none select-none">
      <AsciiArt />
      <div className="text-[13px] leading-[1.9] ml-px">
        <div className="flex items-baseline">
          <span className="text-term-dim shrink-0">|</span>
          <span className="text-term-muted pl-2">
            <span className="text-term-white font-medium">DevOps Engineer</span>
            <span className="text-term-dim mx-1.5">|</span>
            CI/CD &middot; AWS &middot; Kubernetes &middot; IaC
          </span>
        </div>
        <div className="flex items-baseline">
          <span className="text-term-dim shrink-0">|</span>
          <span className="text-term-muted pl-2">
            Capermint Technologies &middot; Ahmedabad, India
          </span>
        </div>
        <div className="flex items-baseline">
          <span className="text-term-dim shrink-0">|</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-term-dim shrink-0">|</span>
          <span className="text-term-muted pl-2">
            Type <span className="text-term-green">&apos;help&apos;</span> to
            explore &nbsp;
            <span className="text-term-green">&bull;</span>&nbsp; Type{" "}
            <span className="text-term-green">&apos;about&apos;</span> to learn
            more
          </span>
        </div>
      </div>
    </div>
  );
}
