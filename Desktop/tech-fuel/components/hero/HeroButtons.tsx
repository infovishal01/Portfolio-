export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">

      <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-semibold transition duration-300">

        Start Learning

      </button>

      <button className="border border-zinc-700 hover:border-green-500 px-8 py-4 rounded-full transition duration-300">

        Explore AI Tools

      </button>

    </div>
  );
}