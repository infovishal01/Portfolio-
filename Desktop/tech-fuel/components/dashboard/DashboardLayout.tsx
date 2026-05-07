"use client";

import Link from "next/link";

import { ReactNode }
from "react";

import {
  usePathname,
} from "next/navigation";

import {
  LayoutDashboard,
  MessageSquare,
  FolderKanban,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import {
  signOut,
  useSession,
} from "next-auth/react";

type Props = {
  children: ReactNode;
};

const navItems = [

  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "AI Chat",
    href: "/dashboard/chat",
    icon: MessageSquare,
  },

  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },

  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: Props) {

  const pathname =
    usePathname();

  const {
    data: session,
  } = useSession();

  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      flex
    ">

      {/* Sidebar */}
      <aside className="
        hidden
        lg:flex
        flex-col
        justify-between
        w-[280px]
        border-r
        border-white/5
        bg-zinc-950
        p-6
      ">

        {/* Top */}
        <div>

          {/* Logo */}
          <Link
            href="/"
            className="
              flex
              items-center
              gap-4
              mb-12
            "
          >

            {/* Icon */}
            <div className="
              w-12
              h-12
              rounded-2xl
              bg-green-500
              text-black
              flex
              items-center
              justify-center
              text-2xl
              font-black
            ">

              T

            </div>

            {/* Text */}
            <div>

              <h1 className="
                text-2xl
                font-black
              ">

                Tech{" "}

                <span className="
                  text-green-500
                ">

                  Fuel

                </span>

              </h1>

              <p className="
                text-xs
                text-zinc-500
              ">

                AI Workspace

              </p>

            </div>

          </Link>

          {/* Navigation */}
          <nav className="
            space-y-3
          ">

            {navItems.map(
              (item) => {

                const Icon =
                  item.icon;

                const active =
                  pathname ===
                  item.href;

                return (

                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex
                      items-center
                      gap-4
                      px-5
                      py-4
                      rounded-2xl
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-green-500 text-black font-semibold"
                          : "hover:bg-zinc-900 text-zinc-400"
                      }
                    `}
                  >

                    <Icon
                      size={20}
                    />

                    {item.label}

                  </Link>
                );
              }
            )}

          </nav>

        </div>

        {/* Bottom Profile */}
        <div className="
          border
          border-white/10
          bg-black
          rounded-3xl
          p-5
        ">

          <div className="
            flex
            items-center
            gap-4
          ">

            {/* Avatar */}
            <div className="
              w-14
              h-14
              rounded-2xl
              bg-green-500
              text-black
              flex
              items-center
              justify-center
              text-xl
              font-black
            ">

              {session?.user?.name
                ?.charAt(0)
                ?.toUpperCase() || "U"}

            </div>

            {/* Info */}
            <div>

              <h3 className="
                font-semibold
              ">

                {session?.user?.name || "User"}

              </h3>

              <p className="
                text-sm
                text-zinc-500
              ">

                {session?.user?.email}

              </p>

            </div>

          </div>

          {/* Logout */}
          <button
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
            className="
              mt-5
              w-full
              flex
              items-center
              justify-center
              gap-3
              bg-red-500/10
              hover:bg-red-500/20
              border
              border-red-500/20
              text-red-400
              py-3
              rounded-2xl
              transition
            "
          >

            <LogOut
              size={18}
            />

            Logout

          </button>

        </div>

      </aside>

      {/* Main Content */}
      <section className="
        flex-1
        p-6
        lg:p-10
      ">

        {children}

      </section>

    </main>
  );
}