import React from 'react';
import { MapPin, School, Train, Coffee, Plus } from 'lucide-react';

const Location = () => {
  const highlights = [
    { icon: <School size={20} />, title: "Education", desc: "5 Premium Schools within 2km" },
    { icon: <Train size={20} />, title: "Connectivity", desc: "Metro Station - 5 mins walk" },
    { icon: <Coffee size={20} />, title: "Lifestyle", desc: "City Center Mall & Cafes nearby" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Map Visual */}
          <div className="w-full lg:w-1/2">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
              {/* Replace the src with a real Google Maps Embed API link if needed */}
              <iframe
                title="Property Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121454.16469703142!2d79.52167041639439!3d17.958131570520244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33450bd75e4be7%3A0x9306909c277bc137!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1777370929467!5m2!1sen!2sin"
                className="w-full h-[450px] grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              ></iframe>


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121454.16469703142!2d79.52167041639439!3d17.958131570520244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33450bd75e4be7%3A0x9306909c277bc137!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1777370929467!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              
              {/* Floating Address Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Premium Heights</h4>
                  <p className="text-sm text-gray-600">742 Evergreen Terrace, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Amenities */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">The Neighborhood</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
                Everything is within <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Your Reach
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Located in the heart of the tech district, our property offers the perfect blend of suburban peace and urban convenience.
              </p>
            </div>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all group">
                  <div className="text-blue-600 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
              Explore Full Neighborhood Guide <Plus size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;