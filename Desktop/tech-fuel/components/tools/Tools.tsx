import ToolFilters from "./ToolFilters";

import ToolsGrid from "./ToolsGrid";

export default function Tools() {
  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

            Popular AI Tools

          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">

            Top Tools To Know

          </h2>

        </div>

        {/* Filters */}
        <ToolFilters />

        {/* Grid */}
        <ToolsGrid />

      </div>

    </section>
  );
}