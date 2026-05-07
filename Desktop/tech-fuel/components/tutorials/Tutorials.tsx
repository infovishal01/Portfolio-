import TutorialSearch from "./TutorialSearch";

import TutorialCategories from "./TutorialCategories";

import TutorialsGrid from "./TutorialsGrid";

export default function Tutorials() {
  return (
    <section className="bg-black text-white py-24 min-h-screen">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

            Tutorials

          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">

            Learn AI & Technology

          </h1>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto text-lg">

            Explore practical tutorials for AI, coding,
            productivity, and future tech skills.

          </p>

        </div>

        {/* Search */}
        <TutorialSearch />

        {/* Categories */}
        <TutorialCategories />

        {/* Tutorials */}
        <TutorialsGrid />

      </div>

    </section>
  );
}