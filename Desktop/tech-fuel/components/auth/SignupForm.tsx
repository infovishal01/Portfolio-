"use client";

import { useState } from "react";

export default function SignupForm() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignup = () => {

    console.log({
      name,
      email,
      password,
    });

    alert("Account Created Successfully 🚀");
  };

  return (
    <div className="space-y-5">

      {/* Name */}
      <div>

        <label className="block text-sm text-zinc-400 mb-2">

          Full Name

        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
        />

      </div>

      {/* Email */}
      <div>

        <label className="block text-sm text-zinc-400 mb-2">

          Email Address

        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
        />

      </div>

      {/* Password */}
      <div>

        <label className="block text-sm text-zinc-400 mb-2">

          Password

        </label>

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
        />

      </div>

      {/* Signup Button */}
      <button
        onClick={handleSignup}
        className="w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-semibold transition duration-300"
      >

        Create Account

      </button>

    </div>
  );
}