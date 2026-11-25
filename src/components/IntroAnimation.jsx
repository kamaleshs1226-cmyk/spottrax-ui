import { useEffect, useState } from "react";

import spottraxLogo from "../assets/spottrax-logo.png";

function IntroAnimation({ onComplete }) {

  const [closing, setClosing] = useState(false);

  useEffect(() => {

    const closeTimer = setTimeout(() => {
      setClosing(true);
    }, 4200);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4900);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(completeTimer);
    };

  }, [onComplete]);

  return (

    <div
      className={
        closing
          ? "spottrax-intro spottrax-intro-closing"
          : "spottrax-intro"
      }
    >

      {/* BACKGROUND PARTICLES */}

      <div className="intro-particles">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>


      {/* CENTER CONTENT */}

      <div className="intro-center">

        {/* GLOW */}

        <div className="intro-glow"></div>


        {/* ANIMATED RINGS */}

        <div className="intro-ring intro-ring-one"></div>

        <div className="intro-ring intro-ring-two"></div>

        <div className="intro-ring intro-ring-three"></div>


        {/* MAIN LOGO */}

        <div className="intro-brand">

          <img
            src={spottraxLogo}
            alt="SpottraX Network"
          />

        </div>


        {/* TAGLINE */}

        <div className="intro-tagline">

          Connecting Talent
          <span> • </span>
          Technology
          <span> • </span>
          Business

        </div>


        {/* LOADING LINE */}

        <div className="intro-line">

          <span></span>

        </div>

      </div>


      {/* EXIT PANELS */}

      <div className="intro-panel intro-panel-left"></div>

      <div className="intro-panel intro-panel-right"></div>

    </div>

  );
}

export default IntroAnimation;