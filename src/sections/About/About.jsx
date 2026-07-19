// const About = () => {
//     return (
//       <section id="about" className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">About Us</h2>
  
//         <p className="max-w-3xl mx-auto text-gray-600 leading-7">
//           We specialize in delivering world-class infrastructure and real estate
//           projects. With years of expertise, we bring innovation, sustainability,
//           and excellence to every project we build.
//         </p>
//       </section>
//     );
//   };
  
//   export default About;
import React from 'react';

const About = () => {
  return (
    <section id="about"  className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side (LHS) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern luxury interior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -right-8 z-20 bg-stone-900 text-white p-8 rounded-2xl hidden md:block shadow-xl border border-white/10">
              <p className="text-4xl font-serif mb-1 italic">15+</p>
              <p className="text-stone-400 uppercase tracking-widest text-xs">Years of Excellence</p>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-64 h-96 bg-stone-50 rounded-full -z-0 blur-3xl"></div>
          </div>

          {/* Content Side (RHS) */}
          <div className="lg:col-span-6">
            <header className="mb-8">
              <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                The Heritage of Home
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-[1.1] mb-6">
                Crafting environments where <span className="text-stone-400 italic">life unfolds.</span>
              </h2>
            </header>

            <div className="space-y-6">
              <p className="text-stone-600 text-lg leading-relaxed">
                Founded on the principle that luxury is defined by detail and comfort, 
                we specialize in creating residential masterpieces that stand the test of time. 
                Our approach blends modern sustainable technology with timeless architectural 
                aesthetics.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-stone-900 font-bold mb-2">Architectural Integrity</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Every blueprint is a commitment to structural perfection and aesthetic harmony.
                  </p>
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold mb-2">Client-Centric Philosophy</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    We don’t just build houses; we curate lifestyles tailored to your unique journey.
                  </p>
                </div>
              </div>

              <div className="pt-10 flex items-center gap-6">
                <button className="bg-stone-900 text-white px-10 py-4 rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-stone-200">
                  Our Projects
                </button>
                <button className="text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
                  Meet the Team
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;