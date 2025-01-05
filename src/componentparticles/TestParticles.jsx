import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const TestParticles = () => {
  const handleInit = async (main) => {
    
    await loadFull(main);
  };

  return (
    <Particles
      id="particles"
      init={handleInit}
      options={{
        background: {
        "zIndex":-1,
          color: {
            value: '#000000', // background color
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: "#ff483b", // particle color
          },
          links: {
            color: '#ffffff',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default TestParticles;
