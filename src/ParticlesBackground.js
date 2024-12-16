import React from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Lightweight engine

const ParticlesBackground = () => {
    // Custom init function to load the tsparticles engine
    const particlesInit = async (engine) => {
        console.log("Loading tsparticles...");
        await loadSlim(engine); // Load the slim engine
    };

    // Configuration options for particles
    const particlesOptions = {
        background: {
            color: {
                value: "#0d47a1", // Background color
            },
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 100, // Number of particles
                density: {
                    enable: true,
                    area: 800, // Density area
                },
            },
            color: {
                value: "#ffffff", // Particle color
            },
            shape: {
                type: "circle", // Particle shape
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                },
            },
            size: {
                value: 5, // Particle size
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0.3,
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out",
                },
                attract: {
                    enable: false,
                },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // Effect when hovering over particles
                },
                onClick: {
                    enable: true,
                    mode: "push", // Effect when clicking on particles
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
        />
    );
};

export default ParticlesBackground;
