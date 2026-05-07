"use client";

import { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import OTPForm from "./OTPForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
}: AuthModalProps) {

  const [mode, setMode] = useState<
    "login" | "signup" | "otp"
  >("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-500 hover:text-white"
        >
          ✕
        </button>

        {/* Heading */}
        <div className="mb-8">

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">

            Welcome

          </p>

          <h2 className="text-3xl font-bold text-white">

            Tech Fuel Authentication

          </h2>

        </div>

        {/* Tabs */}
        <div className="flex bg-zinc-900 rounded-full p-1 mb-8">

          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-3 rounded-full text-sm transition ${
              mode === "login"
                ? "bg-green-500 text-black"
                : "text-zinc-400"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-3 rounded-full text-sm transition ${
              mode === "signup"
                ? "bg-green-500 text-black"
                : "text-zinc-400"
            }`}
          >
            Signup
          </button>

          <button
            onClick={() => setMode("otp")}
            className={`flex-1 py-3 rounded-full text-sm transition ${
              mode === "otp"
                ? "bg-green-500 text-black"
                : "text-zinc-400"
            }`}
          >
            OTP
          </button>

        </div>

        {/* Forms */}
        {mode === "login" && <LoginForm />}

        {mode === "signup" && <SignupForm />}

        {mode === "otp" && <OTPForm />}

      </div>

    </div>
  );
}