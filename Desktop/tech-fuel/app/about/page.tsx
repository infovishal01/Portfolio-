export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-4 sm:px-6 py-20">

      <div className="max-w-[1400px] mx-auto w-full">

        {/* Hero */}
        <div className="text-center mb-24">

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">
            About
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Fueling The Future With
            <span className="text-green-500"> AI </span>
            & Technology
          </h1>

          <p className="text-zinc-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Tech Fuel is a modern learning platform helping students,
            developers, creators, and beginners learn AI tools,
            coding, and future technology through practical guides.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-500 mb-6">
              Our Mission
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              We aim to simplify AI and technology learning for everyone.
              Our mission is to help learners discover powerful AI tools,
              improve productivity, and build future-ready skills.
            </p>

          </div>

          {/* Features */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-500 mb-6">
              What We Provide
            </h2>

            <ul className="space-y-4 text-zinc-400">

              <li>✅ AI Tool Tutorials</li>
              <li>✅ Coding Resources</li>
              <li>✅ Prompt Engineering</li>
              <li>✅ AI Productivity Guides</li>
              <li>✅ Beginner Friendly Learning</li>

            </ul>

          </div>

        </div>

        {/* Audience */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-14">
            Built For Every Learner
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {[
              "🎓 Students",
              "💻 Developers",
              "🎨 Creators",
              "📈 Business",
              "🚀 Beginners",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 text-center hover:border-green-500 transition duration-300"
              >
                <p className="text-lg font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}