export default function Newsletter() {

  return (

    <footer className="
      bg-black
      text-white
      px-6
      pt-24
      pb-24
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        {/* Newsletter Box */}
        <div className="
          relative
          overflow-hidden
          border
          border-white/5
          bg-zinc-950
          rounded-[40px]
          p-10
          lg:p-16
        ">

          {/* Glow */}
          <div className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            bg-green-500/10
            blur-[120px]
            rounded-full
          " />

          <div className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          ">

            {/* LEFT */}
            <div>

              <p className="
                text-green-500
                uppercase
                tracking-[0.2em]
                text-sm
                font-bold
                mb-5
              ">

                Newsletter

              </p>

              <h2 className="
                text-5xl
                lg:text-6xl
                font-black
                tracking-tight
                leading-[1]
              ">

                Stay Updated
                <br />

                With AI Trends

              </h2>

              <p className="
                text-zinc-400
                text-lg
                leading-relaxed
                mt-8
                max-w-xl
              ">

                Get AI updates, tutorials,
                developer workflows,
                startup ideas, and career insights
                directly in your inbox.

              </p>

            </div>

            {/* RIGHT */}
            <div>

              <div className="
                flex
                flex-col
                sm:flex-row
                gap-4
              ">

                {/* Input */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    bg-black
                    border
                    border-zinc-800
                    rounded-2xl
                    px-6
                    py-4
                    text-white
                    outline-none
                    focus:border-green-500
                    transition
                  "
                />

                {/* Button */}
                <button
                  className="
                    bg-green-500
                    hover:bg-green-400
                    text-black
                    px-8
                    py-4
                    rounded-2xl
                    font-bold
                    transition-all
                    duration-300
                    shadow-xl
                    shadow-green-500/20
                  "
                >

                  Subscribe

                </button>

              </div>

              <p className="
                text-zinc-500
                text-sm
                mt-5
              ">

                No spam. Only useful AI and developer content.

              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}