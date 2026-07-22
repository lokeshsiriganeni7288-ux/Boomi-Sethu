import React, { useEffect, useRef, useState } from "react";
import { Building2, MapPin, Award, Smile } from "lucide-react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Total Projects",
    icon: Building2,
  },
  {
    value: 12,
    suffix: "+",
    label: "Cities",
    icon: MapPin,
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    icon: Award,
  },
  {
    value: 1200,
    suffix: "+",
    label: "Happy Customers",
    icon: Smile,
  },
];

function useCountUp(target, active, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = null;
    let frameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, icon: Icon, active }) {
  const count = useCountUp(value, active);

  return (
    <div className="group flex flex-col items-center text-center px-4 py-8 md:py-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-200/80 transition-all duration-300 group-hover:bg-amber-100 group-hover:scale-110">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <p className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight tabular-nums">
        {count.toLocaleString()}
        <span className="text-amber-600">{suffix}</span>
      </p>

      <p className="mt-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
        {label}
      </p>
    </div>
  );
}

const Stats = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Company achievements"
      className="relative overflow-hidden bg-stone-100 py-16 md:py-20 "
    >
      {/* Subtle pattern so it reads clearly against the dark hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(168 162 158 / 0.35) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 md:mb-12 text-center">
          <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
            Numbers that define our journey
          </h2>
        </div>

        <div className="rounded-3xloverflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-stone-100">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
