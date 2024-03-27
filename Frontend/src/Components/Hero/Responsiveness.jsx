import React, { useEffect, useRef } from 'react';
import vid1 from "../../assets/tag.mp4";
import './Responsiveness.css';

const Responsiveness = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video playback manually
    videoRef.current.play();
  }, []);

  return (
    <div className="video-container">
      <video
        className="responsive-video w-full h-full"
        ref={videoRef}
        src={vid1}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="text-overlay">Your Text Here</div>
    </div>
  );
};

export default Responsiveness;
