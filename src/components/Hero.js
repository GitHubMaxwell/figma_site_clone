import React from "react";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1 className="lg-heading">Turn Ideas Into Products Faster</h1>
        <div className="hero-subtitle">
          <h3>Design, prototype, and gather</h3>
          <h3>feedback all in one place with Figma.</h3>
        </div>
        <button>Try Figma for Free</button>
        <p>Available online; on Windows, Mac or Linux</p>
      </div>
      <div className="img-container">
        {/* <img src="https://picsum.photos/700/500" alt="hero image" /> */}
        <iframe
          title="video"
          src="https://player.vimeo.com/video/226476673?background=1"
          data-ready="true"
          // width="757"
          // height="559"
          width="848"
          max-height="636"
        />
      </div>
    </div>
  );
}
