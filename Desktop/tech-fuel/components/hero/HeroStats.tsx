const stats = [
  {
    value: "50+",
    label: "AI Tools",
  },

  {
    value: "200+",
    label: "Tutorials",
  },

  {
    value: "10K+",
    label: "Learners",
  },

  {
    value: "Weekly",
    label: "AI Updates",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full max-w-5xl">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="border border-zinc-800 bg-zinc-950 rounded-3xl p-6"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-green-500">

            {stat.value}

          </h2>

          <p className="text-zinc-400 mt-3">

            {stat.label}

          </p>

        </div>
      ))}

    </div>
  );
}