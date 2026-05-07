export default function DashboardNavbar() {

  return (

    <header className="h-20 border-b border-zinc-800 bg-black/50 backdrop-blur-xl flex items-center justify-between px-6 lg:px-10">

      {/* Search */}
      <div className="hidden md:flex">

        <input
          type="text"
          placeholder="Search..."
          className="
            bg-zinc-950
            border
            border-zinc-800
            rounded-2xl
            px-5
            py-3
            text-white
            outline-none
            focus:border-green-500
            transition
          "
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button
          className="
            w-12
            h-12
            rounded-2xl
            bg-zinc-950
            border
            border-zinc-800
            hover:border-green-500
            transition
          "
        >

          🔔

        </button>

        {/* Profile */}
        <div className="w-12 h-12 rounded-2xl bg-green-500 text-black flex items-center justify-center font-bold">

          V

        </div>

      </div>

    </header>
  );
}