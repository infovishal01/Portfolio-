"use client";

import { useState } from "react";

import { useRouter }
from "next/navigation";

import Cookies from "js-cookie";

export default function ProfileDropdown() {

  const router = useRouter();

  const [open, setOpen] =
    useState(false);

  // Logout
  const handleLogout = () => {

    // Remove Cookie
    Cookies.remove("token");

    // Remove LocalStorage
    localStorage.removeItem(
      "token"
    );

    // Redirect
    router.push("/login");
  };

  return (
    <div className="relative">

      {/* Profile Button */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="flex items-center gap-3 border border-zinc-800 bg-zinc-950 px-3 py-2 rounded-full hover:border-green-500 transition duration-300"
      >

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-green-500 text-black flex items-center justify-center font-bold text-sm">

          VK

        </div>

        {/* Info */}
        <div className="hidden lg:block text-left">

          <p className="text-sm font-medium text-white">

            Vishal Kumar

          </p>

          <p className="text-xs text-zinc-400">

            Admin

          </p>

        </div>

      </button>

      {/* Dropdown */}
      {open && (

        <div className="absolute right-0 mt-4 w-56 border border-zinc-800 bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden z-50">

          {/* Profile */}
          <button
            onClick={() =>
              router.push(
                "/profile"
              )
            }
            className="w-full text-left px-5 py-4 hover:bg-zinc-900 transition text-white"
          >

            My Profile

          </button>

          {/* Dashboard */}
          <button
            onClick={() =>
              router.push(
                "/dashboard"
              )
            }
            className="w-full text-left px-5 py-4 hover:bg-zinc-900 transition text-white"
          >

            Dashboard

          </button>

          {/* Logout */}
          <button
            onClick={
              handleLogout
            }
            className="w-full text-left px-5 py-4 hover:bg-zinc-900 transition text-red-400"
          >

            Logout

          </button>

        </div>
      )}

    </div>
  );
}