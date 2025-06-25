import React from "react";
import './World.css';

import ModelEarth from "../../Components/ModelPlane/ModelEarth";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import TextHoverEffectDemo from "../../Components/components/text-hover-effect";



const World = () => {
    return(
        <div className="World-style">
            <TextHoverEffectDemo />
            <div className="world-center">
                <Canvas style={{ position:'relative', width:'1000px',borderRadius: '20rem' }} >
                    <Stage environment={"city"} intensity={0.6} >
                        <ModelEarth scale={6} />
                        <OrbitControls enableRotate={true} />
                    </Stage>
                </Canvas>
            </div>
        </div>
    )
}

export default World;