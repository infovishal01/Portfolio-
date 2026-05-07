"use client";

import Link from "next/link";

import {
  useSession,
  signOut,
} from "next-auth/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {
    data: session,
    status,
  } = useSession();

  return (

    <main className="
      min-h-screen
      bg-black
      text-white
    ">

      {/* Navbar */}
      <header className="
        sticky
        top-0
        z-50
        border-b
        border-white/5
        bg-black/70
        backdrop-blur-2xl
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        ">

          {/* LEFT */}
          <Link
            href="/"
            replace
            className="
              flex
              items-center
              gap-4
            "
          >

            {/* Logo */}
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

            {/* Brand */}
            <div>

              <h1 className="
                text-2xl
                font-black
                tracking-tight
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
                -mt-1
              ">

                AI Developer Platform

              </p>

            </div>

          </Link>

          {/* RIGHT */}
          <div className="
            flex
            items-center
            gap-4
          ">

            {/* Loading */}
            {status === "loading" && (

              <p className="
                text-zinc-500
                text-sm
              ">

                Loading...

              </p>

            )}

            {/* Logged Out */}
            {status !== "loading" &&
              !session && (

              <>

                {/* Login */}
                <Link
                  href="/login"
                  replace
                  className="
                    hidden
                    sm:flex
                    items-center
                    justify-center
                    px-6
                    py-3
                    rounded-2xl
                    border
                    border-zinc-800
                    hover:border-green-500
                    transition
                  "
                >

                  Login

                </Link>

                {/* Signup */}
                <Link
                  href="/signup"
                  replace
                  className="
                    bg-green-500
                    hover:bg-green-400
                    text-black
                    px-6
                    py-3
                    rounded-2xl
                    font-bold
                    transition
                  "
                >

                  Start Free

                </Link>

              </>

            )}

            {/* Logged In */}
            {status !== "loading" &&
              session && (

              <div className="
                flex
                items-center
                gap-4
              ">

                {/* Dashboard */}
                <Link
                  href="/dashboard"
                  replace
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    border
                    border-zinc-800
                    hover:border-green-500
                    transition
                  "
                >

                  Dashboard

                </Link>

                {/* Profile */}
                <div className="
                  flex
                  items-center
                  gap-3
                  border
                  border-white/10
                  bg-zinc-950
                  px-4
                  py-2
                  rounded-2xl
                ">

                  {/* Avatar */}
                  <div className="
                    w-10
                    h-10
                    rounded-xl
                    bg-green-500
                    text-black
                    flex
                    items-center
                    justify-center
                    font-black
                  ">

                    {session.user?.name
                      ?.charAt(0)
                      ?.toUpperCase()}

                  </div>

                  {/* User */}
                  <div className="
                    hidden
                    sm:block
                  ">

                    <p className="
                      text-sm
                      font-medium
                    ">

                      {session.user?.name}

                    </p>

                    <p className="
                      text-xs
                      text-zinc-500
                    ">

                      {session.user?.email}

                    </p>

                  </div>

                  {/* Logout */}
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: "/",
                      })
                    }
                    className="
                      ml-2
                      text-sm
                      text-red-400
                      hover:text-red-300
                      transition
                    "
                  >

                    Logout

                  </button>

                </div>

              </div>

            )}

          </div>

        </div>

      </header>

      {/* Page */}
      <div>

        {children}

      </div>

    </main>
  );
}