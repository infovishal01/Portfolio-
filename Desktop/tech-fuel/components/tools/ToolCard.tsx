interface ToolCardProps {
  name: string;
  company: string;
  emoji: string;
  desc: string;
}

export default function ToolCard({
  name,
  company,
  emoji,
  desc,
}: ToolCardProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-6 hover:border-green-500 hover:-translate-y-1 transition duration-300">

      {/* Emoji */}
      <div className="text-5xl mb-5">

        {emoji}

      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-white">

        {name}

      </h3>

      {/* Company */}
      <p className="text-green-500 text-sm mt-2">

        {company}

      </p>

      {/* Description */}
      <p className="text-zinc-400 text-sm mt-5 leading-relaxed">

        {desc}

      </p>

    </div>
  );
}