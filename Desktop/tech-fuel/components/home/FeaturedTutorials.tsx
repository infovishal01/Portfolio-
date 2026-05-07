const tutorials = [
  {
    title: "Master ChatGPT Prompts",
    desc: "Learn advanced prompting techniques.",
  },

  {
    title: "DeepSeek For Developers",
    desc: "Use AI for coding workflows.",
  },

  {
    title: "AI Tools For Students",
    desc: "Boost productivity with AI.",
  },
];

export default function FeaturedTutorials() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

            Featured Tutorials

          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">

            Learn Modern AI Skills

          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8 hover:border-green-500 transition duration-300"
            >

              <div className="text-5xl mb-6">

                📘

              </div>

              <h3 className="text-2xl font-bold text-white">

                {tutorial.title}

              </h3>

              <p className="text-zinc-400 mt-5 leading-relaxed">

                {tutorial.desc}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}