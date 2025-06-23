import React from "react";
import './Aerolines.css';

import ModelPlane from "../../Components/ModelPlane/ModelPlane";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import Particles from '../../Backgrounds/Particles/Particles'

const Aerolines = () => {
    return(
        <section className="Aerolines-style">
            <div style={{ width: '100%', height: '120vh', position: 'absolute', overflow: 'hidden' }}>
  <Particles
    particleColors={['#10214b']}
    particleCount={300}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={true}
  />
</div>
            <h1 className="title-model"> Choose how you fly</h1>
            <div className="Content-model">
                <Canvas style={{ position:'relative', width:'1000px' }}>
                    <Stage environment={"city"} intensity={0.6} contactShadow={false}>
                        <ModelPlane scale={5} />
                        <OrbitControls/>
                    </Stage>
                </Canvas>
                <div className="content-text">
                    <h1 className="subtitle-model">Airn B 75F</h1>
                    <p>Introducing the Airn B 75F, an aircraft crafted to elevate your travel standards.
Whether you’re looking for executive efficiency or maximum comfort, this beauty of the skies is ready to take off with you.
Explore our options and experience a new way to fly.

</p>
                </div>
            </div>
        </section>
    )
}

export default Aerolines;