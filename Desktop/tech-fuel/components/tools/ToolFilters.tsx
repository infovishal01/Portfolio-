const filters = [
  "All",
  "Coding",
  "Writing",
  "Students",
  "Productivity",
];

export default function ToolFilters() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-16">

      {filters.map((filter, index) => (
        <button
          key={index}
          className="border border-zinc-800 bg-zinc-950 hover:border-green-500 hover:text-green-400 px-6 py-3 rounded-full transition duration-300"
        >

          {filter}

        </button>
      ))}

    </div>
  );
}