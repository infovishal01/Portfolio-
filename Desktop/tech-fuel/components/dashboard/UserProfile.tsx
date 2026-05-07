export default function UserProfile() {
  return (
    <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8">

      <div className="flex items-center gap-5">

        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-green-500 text-black flex items-center justify-center text-2xl font-bold">

          VK

        </div>

        {/* Info */}
        <div>

          <h2 className="text-2xl font-bold text-white">

            Vishal Kumar

          </h2>

          <p className="text-zinc-400 mt-2">

            Tech Fuel Founder

          </p>

        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="border border-zinc-800 rounded-2xl p-5">

          <h3 className="text-green-500 text-3xl font-bold">

            24

          </h3>

          <p className="text-zinc-400 mt-2">

            Saved Tutorials

          </p>

        </div>

        <div className="border border-zinc-800 rounded-2xl p-5">

          <h3 className="text-green-500 text-3xl font-bold">

            12

          </h3>

          <p className="text-zinc-400 mt-2">

            AI Tools Used

          </p>

        </div>

      </div>

    </div>
  );
}