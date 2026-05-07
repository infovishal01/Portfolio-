interface BadgeProps {
  text: string;
}

export default function Badge({
  text,
}: BadgeProps) {
  return (
    <div className="inline-block border border-green-500/30 bg-green-500/10 text-green-400 px-5 py-2 rounded-full text-sm">

      {text}

    </div>
  );
}