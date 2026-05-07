export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

      {/* Glow 1 */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-green-500/20 blur-[120px] rounded-full" />

      {/* Glow 2 */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-green-500/10 blur-[120px] rounded-full" />
    </>
  );
}