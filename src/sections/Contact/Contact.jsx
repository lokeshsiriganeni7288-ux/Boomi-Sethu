import React, { useState } from 'react';

const Contact = () => {
  // 1. Unified State for all fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Residential Buying',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // 2. Change handler to update state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Updated Submission Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Enquiry Sent Successfully!");
        // Reset form after success
        setFormData({ name: '', email: '', inquiryType: 'Residential Buying', message: '' });
      } else {
        alert("Server error. Please try again later.");
      }
    } catch (err) {
      console.error("Failed to send", err);
      alert("Network error. Please check if the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            <div>
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Ready to find your <span className="italic text-stone-400">dream space?</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed max-w-md">
                Whether you're looking for a luxury suite or a commercial hub, our 
                consultants are here to guide you through every step of the journey.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-stone-800 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Main Office</h4>
                  <p className="text-stone-400 text-sm">123 Skyline Blvd, Financial District, NY</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-stone-800 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Email Us</h4>
                  <p className="text-stone-400 text-sm">inquiries@skyline.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-stone-800/50 p-8 md:p-12 rounded-3xl border border-stone-700 backdrop-blur-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" // Linked to state
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" // Linked to state
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Inquiry Type</label>
                <div className="relative">
                  <select 
                    name="inquiryType" // Linked to state
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option>Residential Buying</option>
                    <option>Commercial Leasing</option>
                    <option>Property Management</option>
                  </select>
                  {/* Custom Arrow for select */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Message</label>
                <textarea 
                  name="message" // Linked to state
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full ${loading ? 'opacity-50 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-500'} text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-900/20 active:scale-[0.98]`}
              >
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;