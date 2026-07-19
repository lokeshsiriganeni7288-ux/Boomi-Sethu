import React, { useState, useEffect } from "react";
import { X, Send, Phone, MessageCircle, Mail } from "lucide-react";

function EnquiryModal() {
  // 1. Control modal open state with the 10s timer
  const [isOpen, setIsOpen] = useState(false);

  // 2. Manage form states dynamically
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const contactInfo = {
    phone: "7288952375",
    whatsapp: "7288952375",
    email: "infrabuild.co@gmail.com",
  };

  // Google Apps Script web app URL (must end with /exec once — not duplicated)
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxZG7waQeGJQGPvqVtMw9EQFXRr3c83YX5t8q5UpNpj7-gZD4t9yyQRW2gsh-ay6Fzl/exec";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Opens automatically after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      // URL-encoded body avoids CORS preflight; Apps Script reads e.parameter
      const body = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });

      // mode: "no-cors" is required for Google Apps Script from the browser;
      // the response is opaque, but the row is still written to the sheet.
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setStatus({
        type: "success",
        message: "Thank you! Submitted successfully.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Submission failed.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    // Backdrop blur / dim overlay
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-100 transform transition-all scale-100">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-xl z-10 transition-all"
        >
          <X size={20} />
        </button>

        {/* Premium Real Estate Header */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-7 text-white">
          <h2 className="text-2xl font-bold tracking-tight">
            Find Your Perfect Home
          </h2>
          <p className="text-blue-100 mt-1 text-sm opacity-90">
            Our property experts are ready to assist you.
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Success/Error Alert Bar */}
            {status.message && (
              <div
                className={`p-3 rounded-xl text-xs font-semibold ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-rose-50 text-rose-700 border border-rose-200"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Full Name Input */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-sm"
              />
            </div>

            {/* Phone Number Input */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="7288952375"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-sm"
              />
            </div>

            {/* Email Address Input */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-sm"
              />
            </div>

            {/* Optional message context field */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Message / Requirements
              </label>
              <textarea
                name="message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'm looking for a 2BND/3BHK..."
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <>
                  <Send size={16} />
                  Request Callback
                </>
              )}
            </button>
          </form>

          {/* Quick Connect Section */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Or Connect Directly
            </p>

            <div className="flex justify-between gap-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=I'm interested in your property listings.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-xl border border-gray-100 hover:bg-green-50 hover:border-green-200 transition-all group"
              >
                <MessageCircle
                  size={18}
                  className="text-green-500 mb-1 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-bold text-gray-600 tracking-wide">
                  WhatsApp
                </span>
              </a>

              {/* Call */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <Phone
                  size={18}
                  className="text-blue-500 mb-1 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-bold text-gray-600 tracking-wide">
                  Call Now
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex-1 flex flex-col items-center justify-center py-2.5 px-2 rounded-xl border border-gray-100 hover:bg-purple-50 hover:border-purple-200 transition-all group"
              >
                <Mail
                  size={18}
                  className="text-purple-500 mb-1 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-bold text-gray-600 tracking-wide">
                  Email
                </span>
              </a>
            </div>
          </div>

          <p className="text-center text-[10px] text-gray-400 mt-5 italic">
            Your data is secure. We don't share your info with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnquiryModal;
