import Link from "next/link";

export default function DashboardSidebar() {

  const links = [

    {
      name: "Dashboard",
      href: "/dashboard",
    },

    {
      name: "Tutorials",
      href: "/tutorials",
    },

    {
      name: "AI Tools",
      href: "/ai-tools",
    },

    {
      name: "Profile",
      href: "/profile",
    },

    {
      name: "Settings",
      href: "/settings",
    },
  ];

  return (

    <aside className="hidden lg:flex w-[280px] border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex-col p-8">

      {/* Logo */}
      <Link href="/">

        <h1 className="text-3xl font-black">

          Tech
          <span className="text-green-500">

            Fuel

          </span>

        </h1>

      </Link>

      {/* Nav */}
      <nav className="mt-14 flex flex-col gap-3">

        {links.map((link) => (

          <Link
            key={link.name}
            href={link.href}
            className="
              px-5
              py-4
              rounded-2xl
              text-zinc-400
              hover:text-white
              hover:bg-zinc-900
              transition
            "
          >

            {link.name}

          </Link>
        ))}

      </nav>

    </aside>
  );
}