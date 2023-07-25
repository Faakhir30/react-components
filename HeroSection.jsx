import "../styles/HeroSection.css";
import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBg = () => {
  const [isHovered, setIsHovered] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
    
  const particlesLoaded = useCallback(async (container) => {
    // Perform a null check before accessing container.current
    if (container && container.current) {
      container.current.style.display = "none";
    }
  }, []);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="particles-container"
    >
      <Particles
        id="tsparticles"
        width="15vw"
        height="700px"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background:
            "linear-gradient(to right, rgb(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
          fpsLimit: 120,
          fullScreen: false,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "bounce",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#aaa",
            },
            links: {
              color: "#aaa",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1  ,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 50,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="div1">
        <ParticleBg />
        Div 1
      </div>
      <div className="div2">Div 2</div>
      <div className="div3">Div 3</div>
    </section>
  );
};

export default HeroSection;
