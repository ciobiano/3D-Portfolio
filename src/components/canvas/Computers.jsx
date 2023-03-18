import { React, Suspense, useState,useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stars, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadowMapSize={1024}
			/>

			<primitive
				object={computer.scene}
				scale={isMobile ? 0.4 : 0.6}
				position={isMobile ? [0,-3,-1.2]:[0, -3.35, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {

	const [isMobile, setIsMobile] = useState(false);


	useEffect(() => {
		//Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		//Set the initial state of the "isMobile" variable	
		setIsMobile(mediaQuery.matches);

		//Define a callback function to handle the media query change
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		//Add the callback function as a listener for the media query change event
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		//Removes the listener when the component is unmounted 
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);


	return (
		<Canvas
		
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers  isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
