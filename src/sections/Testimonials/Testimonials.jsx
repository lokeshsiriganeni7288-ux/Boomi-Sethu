import React from 'react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner, Skyline Towers",
    content: "The attention to detail in the architecture is unlike anything I've seen. Moving here wasn't just a move; it was a total lifestyle upgrade.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Marcus Thorne",
    role: "CEO, Metro Plaza Tenant",
    content: "Our team's productivity has soared since moving into Metro Plaza. The smart infrastructure and natural lighting are game changers for commercial spaces.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Elena Rodriguez",
    role: "Green Villas Resident",
    content: "Finding a home that balances modern luxury with true eco-friendly sustainability seemed impossible until we found this community.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Voices of our Residents
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
            Trusted by <span className="italic text-stone-500">Visionaries</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="relative p-10 rounded-3xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl transition-all duration-500 group"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-10 text-6xl font-serif text-stone-200 group-hover:text-amber-100 transition-colors">
                &ldquo;
              </div>

              <div className="relative z-10">
                <p className="text-stone-600 leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{t.name}</h4>
                    <p className="text-stone-400 text-xs uppercase tracking-wider font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale contrast-125">
          {/* You can place small partner logos or simple text here */}
          <span className="font-serif text-xl">Architectural Digest</span>
          <span className="font-serif text-xl">Modern Home</span>
          <span className="font-serif text-xl">Urban Living</span>
          <span className="font-serif text-xl">Design Bureau</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;