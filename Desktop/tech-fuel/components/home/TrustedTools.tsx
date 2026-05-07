const tools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "DeepSeek",
  "Perplexity",
];

export default function TrustedTools() {
  return (
    <section className="py-20 border-y border-zinc-800 bg-zinc-950">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        <p className="text-center text-zinc-500 uppercase tracking-[0.2em] text-sm mb-12">

          Trusted AI Platforms

        </p>

        <div className="flex flex-wrap justify-center gap-6">

          {tools.map((tool, index) => (
            <div
              key={index}
              className="border border-zinc-800 bg-black px-8 py-4 rounded-2xl text-zinc-300 hover:border-green-500 hover:text-green-400 transition duration-300"
            >

              {tool}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}