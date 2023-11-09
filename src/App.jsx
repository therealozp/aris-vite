import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Sparkles } from '@react-three/drei';
import { Flex } from '@chakra-ui/react';

const App = () => {
	return (
		<Flex
			h="100vh"
			w="100vw"
			alignItems="center"
			justifyContent={'center'}
			bg={'#141414'}
		>
			<Canvas camera={{ fov: 45, position: [-4, 2, -4] }}>
				<gridHelper position={[0, 0, 0]} />
				<axesHelper position={[0, 0, 0]} />
				<Sparkles position={[1, 1, 1]} />
				<OrbitControls makeDefault />
				<mesh position={[6.9, -2.158, 0.465]}>
					{/* <boxBufferGeometry attach="geometry" /> */}
					<meshStandardMaterial
						attach="material"
						color={'rgb(59, 24, 24)'}
						flatShading={true}
					/>
				</mesh>
				<directionalLight position={[4.224, 1.912, 3.046]} />
				<ambientLight />
				<Sphere
					position={[14.187, 6.856, 7.807]}
					material-color={'rgb(226, 56, 56)'}
				/>
			</Canvas>
		</Flex>
	);
};

export default App;
