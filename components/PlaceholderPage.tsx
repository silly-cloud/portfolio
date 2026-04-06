interface Props {
  title: string;
  subtitle?: string;
}

export default function PlaceholderPage({
  title,
  subtitle = "Coming soon.",
}: Props) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <div className="text-term-green text-lg font-bold mb-2">
          /{title}
        </div>
        <div className="text-term-muted text-sm">{subtitle}</div>
        <div className="text-term-dim text-xs mt-4">
          type <span className="text-term-green">&apos;help&apos;</span> on the
          home page to explore
        </div>
      </div>
    </div>
  );
}
