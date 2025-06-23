import { useGLTF } from "@react-three/drei";

useGLTF.preload("/public/plane.glb")

const ModelPlane = ({scale}) => {
    
    const { scene } = useGLTF("/plane.glb");

    return(
        <>
        <group>
            <primitive object={scene} scale={scale} />
        </group>
        </>
    )
}

export default ModelPlane;