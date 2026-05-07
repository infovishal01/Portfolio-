"use client";

import { useEffect }
from "react";

import { useState }
from "react";

export default function ProfilePage() {

  const [user, setUser]: any =
    useState(null);

  useEffect(() => {

    const storedUser =
      localStorage.getItem(
        "user"
      );

    console.log(
      "Stored User:",
      storedUser
    );

    if (storedUser) {

      setUser(
        JSON.parse(
          storedUser
        )
      );
    }

  }, []);

  // Loading
  if (!user) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">

        No User Found

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-2xl border border-zinc-800 bg-zinc-950 rounded-3xl p-10">

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-green-500 text-black flex items-center justify-center text-3xl font-bold mb-8">

          {user.name?.charAt(0)}

        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold">

          {user.name}

        </h1>

        {/* Email */}
        <p className="text-zinc-400 text-xl mt-4">

          {user.email}

        </p>

        {/* Role */}
        <div className="mt-8 inline-flex bg-green-500/10 border border-green-500 text-green-400 px-5 py-3 rounded-full">

          {user.role || "student"}

        </div>

      </div>

    </main>
  );
}