import React from "react";
import './Aerolines.css';
import ModelPlane from "../../Components/ModelPlane/ModelPlane";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";


const Aerolines = () => {
    return(
        <section className="Aerolines-style">
            <h1 className="title-model"> Choose how you fly</h1>
            <div className="Content-model">
                <Canvas style={{ position:'relative', width:'1000px' }}>
                    <Stage environment={"city"} intensity={0.6} contactShadow={false}>
                        <ModelPlane scale={5} />
                        <OrbitControls/>
                    </Stage>
                </Canvas>
                <div className="content-text">
                    <h1 className="subtitle-model">Airn b 75F</h1>
                    <p>From executive trips to global adventures, Skybound lets you decide how and when to fly.
Explore our aircraft options and get ready to elevate your journey.</p>
                </div>
            </div>
        </section>
    )
}

export default Aerolines;