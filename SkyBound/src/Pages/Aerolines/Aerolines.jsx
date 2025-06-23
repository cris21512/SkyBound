import React from "react";
import './Header.css';
import ModelPlane from "../../Components/ModelPlane/ModelPlane";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";


const Aerolines = () => {
    return(
        <section className="Header-style">
            <div className="Content-model">
                <Canvas style={{ position:'relative' }}>
                    <Stage environment={"city"}>
                        <ModelPlane scale={5} />
                        <OrbitControls/>
                    </Stage>
                </Canvas>
            </div>
        </section>
    )
}

export default Aerolines;