import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Send, Phone, MessageCircle, Mail } from "lucide-react";
import { sendToAppsScript, SHEETS } from "../utils/appsScript";

const ENQUIRY_SUBMITTED_KEY = "enquirySubmitted";

function EnquiryModal() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    // Don't show again after a successful submission
    if (sessionStorage.getItem(ENQUIRY_SUBMITTED_KEY) === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Block Escape / body scroll while the required enquiry is open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const blockEscape = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("keydown", blockEscape, true);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", blockEscape, true);
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await sendToAppsScript({
        type: "enquiry",
        sheetName: SHEETS.ENQUIRIES,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });

      sessionStorage.setItem(ENQUIRY_SUBMITTED_KEY, "true");
      sessionStorage.setItem("sessionFormData", JSON.stringify(formData));

      setStatus({
        type: "success",
        message: "Thank you! Submitted successfully. Redirecting...",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsOpen(false);
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 800);
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      // Backdrop clicks do nothing — form must be submitted to dismiss
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="relative w-full max-w-md overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-100 transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-7 text-white">
          <h2 id="enquiry-title" className="text-2xl font-bold tracking-tight">
            Find Your Perfect Home
          </h2>
          <p className="text-blue-100 mt-1 text-sm opacity-90">
            Please fill in your details to continue browsing.
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Message / Requirements
              </label>
              <textarea
                name="message"
                rows="2"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="I'm looking for a 2BHK/3BHK..."
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-sm resize-none"
              />
            </div>

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

          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Or Connect Directly
            </p>

            <div className="flex justify-between gap-3">
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
