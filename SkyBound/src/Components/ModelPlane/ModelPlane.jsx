import { useGLTF } from "@react-three/drei";

useGLTF.preload("/plane.glb")

const ModelPlane = ({scale}) => {
    
    const { scene } = useGLTF("/plane-comprimido.glb");

    return(
        <>
        <group>
            <primitive object={scene} scale={scale} />
        </group>
        </>
    )
}

export default ModelPlane;