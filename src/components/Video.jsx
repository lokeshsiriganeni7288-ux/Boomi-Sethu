import React from "react";
import realestatevideo from "../assets/video/realestatevideo.mp4";

const Video = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src={realestatevideo}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;
