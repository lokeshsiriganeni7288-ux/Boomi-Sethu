import React, { useEffect, useState } from "react";
import EnquiryModal from "../../components/EnquiryModal";
import Video from "../../components/Video";

const Hero = () => {
  // console.log(sessionStorage.getItem("enquiryModalShown"));
  return (
    <>
      <section
        id="home"
        className="relative h-[95vh] min-h-[750px] w-full overflow-hidden flex items-center justify-center"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Video />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>

              <span className="text-white text-xs font-medium tracking-[0.2em] uppercase">
                Premium Real Estate 2024
              </span>
            </div>

            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-[-0.04em] mb-8">
                Elevate Your
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Living Experience
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
                Discover a lifestyle defined by luxury. We offer exclusive
                access to the world's most prestigious properties and
                architectural masterpieces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all">
                Browse Properties
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
