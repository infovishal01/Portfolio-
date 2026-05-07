const categories = [

  "All",

  "AI",

  "Web Dev",

  "Programming",

  "Productivity",

  "Career",
];

export default function TutorialCategories() {

  return (
    <div className="flex flex-wrap gap-4 mb-14">

      {categories.map(
        (category, index) => (

          <button
            key={index}
            className="border border-zinc-800 hover:border-green-500 bg-zinc-950 px-5 py-3 rounded-full text-sm transition"
          >

            {category}

          </button>
        )
      )}

    </div>
  );
}