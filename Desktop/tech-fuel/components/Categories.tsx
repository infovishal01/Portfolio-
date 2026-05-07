// const categories = [
//   {
//     icon: "🎓",
//     title: "Students",
//     desc: "AI tools for study and learning",
//   },
//   {
//     icon: "💻",
//     title: "Developers",
//     desc: "Coding assistants and AI workflows",
//   },
//   {
//     icon: "🎨",
//     title: "Creators",
//     desc: "Content creation using AI",
//   },
//   {
//     icon: "📈",
//     title: "Business",
//     desc: "Automation and productivity",
//   },
//   {
//     icon: "🚀",
//     title: "Beginners",
//     desc: "Learn AI step by step",
//   },
// ];

// export default function Categories() {
//   return (
//     <section className="bg-zinc-950 text-white px-6 py-20">

//       <div className="max-w-7xl mx-auto">

//         <p className="text-green-500 uppercase text-sm tracking-widest mb-3">
//           Who is this for?
//         </p>

//         <h2 className="text-4xl font-bold mb-12">
//           Built For Every Learner
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

//           {categories.map((item, index) => (
//             <div
//               key={index}
//               className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-green-500 transition"
//             >

//               <div className="text-4xl mb-4">
//                 {item.icon}
//               </div>

//               <h3 className="text-xl font-semibold mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-zinc-400 text-sm">
//                 {item.desc}
//               </p>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

const categories = [
  { icon: "👨‍🎓", title: "Students", desc: "AI tools for study and learning" },
  { icon: "👨‍💻", title: "Developers", desc: "Coding assistants and AI workflows" },
  { icon: "🎨", title: "Creators", desc: "Content creation using AI" },
  { icon: "📈", title: "Business", desc: "Automation and productivity" },
  { icon: "🌱", title: "Beginners", desc: "Learn AI step by step" },
];

export default function Categories() {
  return (
    <section className="bg-zinc-950 text-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center md:text-left">
          <p className="text-green-500 uppercase text-xs md:text-sm tracking-widest mb-2 md:mb-3">
            Who is this for?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            Built For Every Learner
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-green-500 transition flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="text-4xl mb-3 md:mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}