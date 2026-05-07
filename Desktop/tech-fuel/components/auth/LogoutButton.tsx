"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {

  const router = useRouter();

  const handleLogout = () => {

    // Remove Token
    localStorage.removeItem(
      "token"
    );

    // Redirect
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-900 transition text-red-400"
    >

      Logout

    </button>
  );
}