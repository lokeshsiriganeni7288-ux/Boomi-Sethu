import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import { projects } from "../ProjectsData";
import {
  getSessionUserData,
  sendToAppsScript,
  SHEETS,
} from "../utils/appsScript";

// Survives React StrictMode remounts (refs alone get reset)
const sentProjectInterests = new Set();

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const sendingRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Send user + project to Apps Script once per project (prevents duplicate rows)
  useEffect(() => {
    if (!project || !id) return;

    // Block StrictMode double-invoke + repeat visits in the same session
    const guardKey = `project_interest_${id}`;
    if (
      sentProjectInterests.has(guardKey) ||
      sessionStorage.getItem(guardKey)
    ) {
      return;
    }
    if (sendingRef.current) return;

    sendingRef.current = true;
    sentProjectInterests.add(guardKey);
    sessionStorage.setItem(guardKey, "true");

    const userData = getSessionUserData();
    const payload = {
      type: "project_click",
      sheetName: SHEETS.PROJECT_INTERESTS,
      name: userData?.name || "",
      phone: userData?.phone || "",
      email: userData?.email || "",
      message: userData?.message || "",
      projectId: project.id || "",
      projectTitle: project.title || "",
      projectCategory: project.category || "",
      projectLocation: project.location || "",
    };

    console.log("Sending to Google Sheet:", payload);

    sendToAppsScript(payload).catch((error) => {
      console.error("Failed to save project interest:", error);
      // Allow retry if the request failed
      sentProjectInterests.delete(guardKey);
      sessionStorage.removeItem(guardKey);
      sendingRef.current = false;
    });
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center">
          <h1 className="text-3xl font-serif text-slate-900 mb-4">
            Project not found
          </h1>
          <Link to="/" className="text-amber-600 font-semibold hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>{project.title} | Bhoomi Sethu</title>
        <meta name="description" content={project.desc} />
      </Helmet>
      <Navbar />

      <div className="relative h-[55vh] min-h-[320px] overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-7xl mx-auto">
          <span className="inline-block bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-amber-600 mb-8 transition-colors"
        >
          ← Back to projects
        </Link>

        <p className="text-amber-700 font-medium mb-6">{project.location}</p>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          {project.desc}
        </p>
        <p className="text-slate-700 leading-relaxed mb-12">
          {project.longDesc}
        </p>

        {/* Map section */}
        <div>
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-2 block">
            Location
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">
            Find this property on the map
          </h2>

          <div className="relative group overflow-hidden rounded-2xl shadow-xl border-4 border-white ring-1 ring-slate-200/80 bg-white">
            <iframe
              title={`${project.title} location`}
              src={project.map}
              className="w-full h-[320px] sm:h-[400px] md:h-[450px] border-0 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-3 sm:gap-4 pointer-events-none">
              <div className="bg-amber-600 p-2.5 sm:p-3 rounded-lg text-white shrink-0">
                <MapPin size={22} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">
                  {project.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 truncate">
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
