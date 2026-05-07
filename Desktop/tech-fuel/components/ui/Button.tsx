import React from "react";

interface ButtonProps {

  children: React.ReactNode;

  variant?: "primary"
  | "secondary";

  className?: string;

  type?: "button"
  | "submit";

  onClick?: () => void;
}

export default function Button({

  children,

  variant = "primary",

  className = "",

  type = "button",

  onClick,
}: ButtonProps) {

  const variants = {

    primary:
      "bg-green-500 hover:bg-green-400 text-black",

    secondary:
      "border border-zinc-800 hover:border-green-500 bg-zinc-950 text-white",
  };

  return (

    <button
      type={type}
      onClick={onClick}
      className={`
        px-6
        py-4
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >

      {children}

    </button>
  );
}