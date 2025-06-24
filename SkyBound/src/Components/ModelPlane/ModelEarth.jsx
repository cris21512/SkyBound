import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/earth.glb"); // Asegúrate de que la ruta del modelo sea correcta

const ModelEarth = ({ scale }) => {
  const { scene } = useGLTF("/earth.glb"); // Carga el modelo de la Tierra


  // Esto hace que el modelo rote levemente en cada frame


  return (
    <group >
      <primitive object={scene} scale={scale} />
    </group>
  );
};

export default ModelEarth;