const updates = [
  "OpenAI launched new GPT features.",
  "Google Gemini improves multimodal AI.",
  "DeepSeek becomes popular among developers.",
];

export default function AIUpdates() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-800">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

            AI Updates

          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">

            Latest AI News

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {updates.map((update, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-3xl p-8 bg-black"
            >

              <h3 className="text-white text-lg leading-relaxed">

                {update}

              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}