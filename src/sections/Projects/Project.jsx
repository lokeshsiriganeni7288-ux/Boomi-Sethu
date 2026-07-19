// import React from 'react';

// const projects = [
//   {
//     title: "Skyline Towers",
//     desc: "Luxury apartments with smart amenities, breathtaking city views, and sustainable infrastructure designed for modern urban living.",
//     category: "Residential",
//     img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Green Villas",
//     desc: "Eco-friendly villa community featuring solar power, rainwater harvesting, and lush private gardens for a serene lifestyle.",
//     category: "Sustainable",
//     img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Metro Plaza",
//     desc: "A premium commercial business hub located in the heart of the city, offering state-of-the-art office spaces and retail zones.",
//     category: "Commercial",
//     img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 px-6 bg-stone-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-xl">
//             <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3 block">
//               Our Portfolio
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
//               Featured <span className="italic text-slate-500">Developments</span>
//             </h2>
//           </div>
//           <button className="hidden md:block text-slate-900 font-semibold border-b-2 border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
//             View All Projects
//           </button>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {projects.map((p, i) => (
//             <div
//               key={i}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//             >
//               {/* Image Container */}
//               <div className="relative h-[450px] overflow-hidden">
//                 <img
//                   src={p.img}
//                   alt={p.title}
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Overlay Gradient - Darkens on hover to make text readable */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

//                 {/* Category Badge */}
//                 <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
//                   {p.category}
//                 </span>

//                 {/* Text Content - Positioned absolutely at the bottom of the image container */}
//                 <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
//                   <h3 className="text-2xl font-serif mb-3 transition-transform duration-500 group-hover:-translate-y-2">
//                     {p.title}
//                   </h3>

//                   {/* Expandable Section */}
//                   <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
//                     <p className="text-slate-200 text-sm leading-relaxed mb-6">
//                       {p.desc}
//                     </p>

//                     {/* Action Button */}
//                     <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
//                       Explore Project
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { projects } from "../../ProjectsData"; // Import data

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              {" "}
              Our Portfolio{" "}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Featured{" "}
              <span className="italic text-slate-500">Developments</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p) => (
            /* CHANGED: Div changed to Link pointing to custom URL paths */
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="group relative block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                  {p.category}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                  <h3 className="text-2xl font-serif mb-3 transition-transform duration-500 group-hover:-translate-y-2">
                    {p.title}
                  </h3>

                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                      {p.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                      Explore Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
