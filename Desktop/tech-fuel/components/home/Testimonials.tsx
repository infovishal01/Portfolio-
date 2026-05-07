const testimonials = [
  {
    name: "Rahul",
    text: "Tech Fuel helped me learn AI tools faster.",
  },

  {
    name: "Anjali",
    text: "Amazing tutorials and modern UI experience.",
  },

  {
    name: "Amit",
    text: "Best platform for AI learning and productivity.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

            Testimonials

          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">

            Loved By Learners

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8"
            >

              <p className="text-zinc-300 leading-relaxed">

                “{testimonial.text}”

              </p>

              <h3 className="text-green-500 mt-6 font-semibold">

                {testimonial.name}

              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}