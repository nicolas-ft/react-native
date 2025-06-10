import { Canvas, useFrame } from '@react-three/fiber/native';
import { GLView } from 'expo-gl';
import useControls from "r3f-native-orbitcontrols";
import { useRef } from 'react';
// import { Stats } from '@react-three/drei/native';
// import { Physics, useBox } from '@react-three/cannon';

export default function Index() {
	const [OrbitControls, events] = useControls()

	return (
		<GLView
			style={{ flex: 1 }}
			onContextCreate={(gl) => {
				// Set up the WebGL context
			}}
			{...events}
		>
			<Canvas>
				{/* <Stats /> */}
				<OrbitControls />
				<Cube />
			</Canvas>
		</GLView>
	);
}


function Cube() {
	const meshRef = useRef();

	useFrame(() => {
		meshRef.current.rotation.x += 0.01;
		meshRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshNormalMaterial />
		</mesh>
	);
}
