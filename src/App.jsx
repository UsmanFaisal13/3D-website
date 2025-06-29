import { Canvas } from "@react-three/fiber";
import BB8Model from "./components/modal.jsx";
import { Text } from "@react-three/drei";
import { Html } from "@react-three/drei";


export default function App() {
  return (
    <div className="bg-orange-50 min-h-screen text-orange-900">
     

      <main className="h-screen w-full">
      
        <Canvas camera={{ position: [0, 1.2, 5], fov: 30 }}>
                <Text
        position={[0, 0.5, 0.1]} // x, y, z
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY='middle'
        
        font="/Devil Breeze Bold.ttf" // Ensure this font is in your public folder
        
      >
        Web Animations
     
      </Text>
                <Text
        position={[0, 0.3, 0, 0]} // x, y, z
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY='middle'
        
        font="/Devil Breeze Bold.ttf" // Ensure this font is in your public folder
        
      >
        Web Animations
         <meshPhysicalMaterial
    transmission={1}
    roughness={0}
    thickness={1}
    clearcoat={1}
    transparent
    opacity={5}
    color="white"
  />
      </Text>
      <Html position={[0, -0.5, 0]} center>
  <button
    className="bg-transparent bg-blend-saturation text-white font-bold py-2 px-8 w-40 rounded shadow hover:bg-orange-600 transition"
    onClick={() => console.log("Clicked!")}
  >
    Click Me
  </button>
</Html>
      
      
      

          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} />
          <BB8Model />
        </Canvas>
      </main>

    </div>
  );
}
