import React from "react";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div
      className="
        border
        border-zinc-800
        bg-zinc-950
        rounded-3xl
        p-8
        hover:border-green-500
        transition-all
        duration-300
      "
    >

      {children}

    </div>
  );
}