import Link from "next/link";

export default function Hero() {

  return (

    <section className="
      relative
      min-h-[90vh]
      flex
      items-center
      justify-center
      px-6
      overflow-hidden
      bg-black
      text-white
    ">

      {/* Glow Effect */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-green-500/10
        blur-[120px]
        rounded-full
      " />

      {/* Content */}
      <div className="
        relative
        z-10
        text-center
        max-w-5xl
      ">

        {/* Badge */}
        <div className="
          inline-flex
          items-center
          gap-3
          px-5
          py-2
          rounded-full
          border
          border-green-500/20
          bg-green-500/10
          text-green-400
          text-sm
          font-medium
          mb-8
        ">

          ✨ AI Developer Platform

        </div>

        {/* Heading */}
        <h1 className="
          text-6xl
          sm:text-7xl
          lg:text-8xl
          font-black
          tracking-tight
          leading-[0.92]
        ">

          The Modern
          <br />

          AI Developer
          <br />

          <span className="
            text-green-500
          ">

            Workspace

          </span>

        </h1>

        {/* Description */}
        <p className="
          text-zinc-400
          text-lg
          sm:text-xl
          leading-relaxed
          max-w-3xl
          mx-auto
          mt-10
        ">

          Learn AI, generate code,
          build projects, prepare for interviews,
          and grow as a modern developer.

        </p>

        {/* Buttons */}
        <div className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-5
          mt-12
        ">

          {/* Start Building */}
          <Link
            href="/login"
            replace
            className="
              bg-green-500
              hover:bg-green-400
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition-all
              duration-300
              shadow-xl
              shadow-green-500/20
            "
          >

            Start Building

          </Link>

          {/* Explore Features */}
          <Link
            href="/login"
            replace
            className="
              border
              border-zinc-800
              hover:border-green-500
              bg-zinc-950
              px-8
              py-4
              rounded-2xl
              font-medium
              text-lg
              transition-all
              duration-300
            "
          >

            Explore Features

          </Link>

        </div>

      </div>

    </section>
  );
}