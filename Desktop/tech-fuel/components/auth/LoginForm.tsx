export default function LoginForm() {
  return (
    <div className="space-y-5">

      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
      />

      <button className="w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-semibold transition duration-300">

        Login

      </button>

    </div>
  );
}