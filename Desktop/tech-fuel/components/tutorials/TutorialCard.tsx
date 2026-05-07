import Link from "next/link";

interface TutorialCardProps {

  title: string;

  description: string;

  slug: string;
}

export default function TutorialCard({

  title,

  description,

  slug,

}: TutorialCardProps) {

  return (
    <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8 hover:border-green-500 transition duration-300">

      <p className="text-green-500 text-sm mb-4">

        AI Tutorial

      </p>

      <h2 className="text-2xl font-bold text-white">

        {title}

      </h2>

      <p className="text-zinc-400 mt-5 leading-relaxed">

        {description}

      </p>

      <Link
        href={`/tutorials/${slug}`}
        className="inline-block mt-8 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-full font-medium transition duration-300"
      >

        Read Tutorial

      </Link>

    </div>
  );
}