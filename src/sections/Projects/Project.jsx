import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../ProjectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Featured{" "}
              <span className="italic text-slate-500">Developments</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p) => (
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
