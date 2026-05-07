"use client";

import { signIn }
from "next-auth/react";

import Link from "next/link";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =========================
  // SIGNUP
  // =========================

  const handleSignup = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      const response =
        await fetch(
          "/api/signup",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              name,

              email,

              password,
            }),
          }
        );

      const data =
        await response.json();

      // Error
      if (!response.ok) {

        setError(
          data.message
        );

        return;
      }

      // Redirect
      router.push("/login");

    } catch (error) {

      console.log(error);

      setError(
        "Signup failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-green-500/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md border border-zinc-800 bg-zinc-950/80 backdrop-blur-2xl rounded-[32px] p-8 sm:p-10 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-10">

          <Link
            href="/"
            className="inline-block"
          >

            <h1 className="text-4xl font-black tracking-tight">

              Tech
              <span className="text-green-500">

                Fuel

              </span>

            </h1>

          </Link>

          <p className="text-zinc-400 mt-4">

            Create your AI learning account

          </p>

        </div>

        {/* Error */}
        {error && (

          <div className="mb-6 border border-red-500/30 bg-red-500/10 text-red-400 px-5 py-4 rounded-2xl">

            {error}

          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSignup}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="block text-sm text-zinc-400 mb-3">

              Full Name

            </label>

            <input
              type="text"
              placeholder="Vishal Kumar"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition duration-300"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block text-sm text-zinc-400 mb-3">

              Email Address

            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition duration-300"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm text-zinc-400 mb-3">

              Password

            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition duration-300"
            />

          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 text-sm text-zinc-400">

            <input
              type="checkbox"
              className="mt-1"
            />

            <p>

              I agree to the Terms &
              Conditions and Privacy Policy

            </p>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-lg shadow-green-500/20"
          >

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-px bg-zinc-800" />

          <span className="text-zinc-500 text-sm">

            OR

          </span>

          <div className="flex-1 h-px bg-zinc-800" />

        </div>

{/* Google Continue Button */}
<button
  type="button"
  onClick={() =>
    signIn("google", {
      callbackUrl: "/dashboard",
    })
  }
  className="
    w-full
    flex
    items-center
    justify-center
    gap-4
    border
    border-zinc-800
    hover:border-green-500
    bg-black/50
    hover:bg-zinc-900
    py-4
    rounded-2xl
    font-medium
    transition-all
    duration-300
    group
  "
>

  {/* Google Logo */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-6 h-6"
  >

    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
    />

    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
    />

    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.2 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.7 39.5 16.3 44 24 44z"
    />

    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.2 5.3-6 6.8l6.3 5.3C39.5 36.5 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
    />

  </svg>

  {/* Text */}
  <span className="text-white group-hover:text-green-400 transition">

    Continue with Google

  </span>

</button>

        {/* Footer */}
        <p className="text-center text-zinc-400 mt-8">

          Already have an account?{" "}

          <Link
            href="/login"
            className="text-green-400 hover:text-green-300 font-medium"
          >

            Login

          </Link>

        </p>

      </div>

    </main>
  );
}