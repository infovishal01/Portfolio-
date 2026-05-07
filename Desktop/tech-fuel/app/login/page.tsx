"use client";

import Link from "next/link";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =========================
  // LOGIN
  // =========================

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      const response =
        await fetch(
          "/api/login",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
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

      // Save JWT
      Cookies.set(
        "token",
        data.token,
        {
          expires: 7,
        }
      );

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(
          data.user
        )
      );

      // Redirect
      router.push(
        "/dashboard"
      );

    } catch (error) {

      console.log(error);

      setError(
        "Something went wrong"
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

            Welcome back to the future of AI learning

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
          onSubmit={handleLogin}
          className="space-y-5"
        >

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

          {/* Forgot */}
          <div className="flex justify-end">

            <button
              type="button"
              className="text-sm text-green-400 hover:text-green-300 transition"
            >

              Forgot Password?

            </button>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-lg shadow-green-500/20"
          >

            {loading
              ? "Logging in..."
              : "Login"}

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



        {/* Footer */}
        <p className="text-center text-zinc-400 mt-8">

          Don&apos;t have an account?{" "}

          <Link
            href="/signup"
            className="text-green-400 hover:text-green-300 font-medium"
          >

            Create Account

          </Link>

        </p>

      </div>

    </main>
  );
}