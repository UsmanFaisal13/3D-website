import { Canvas } from "@react-three/fiber";
import BB8Model from "./components/modal.jsx";
import { Text } from "@react-three/drei";
import { Html } from "@react-three/drei";


export default function App() {
  return (
    <div className="bg-orange-50 min-h-screen text-white">
      <header className="bg-[#EEA326] flex justify-end px-8 py-4"><nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Github</a></li>
          <li><a href="#" className="hover:underline">Linkedin</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav></header>

      <main className="h-screen w-full">
      
        <Canvas camera={{ position: [0, 1.2, 5], fov: 30 }}>
                <Text
        position={[0, 0.5, 0.1]} // x, y, z
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY= 'top-baseline'
        
        font="/Devil Breeze Bold.ttf" // Ensure this font is in your public folder
        
      >
        Web Animations
     
      </Text>
                <Text
        position={[0, 0.3, 0, 0]} // x, y, z
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY='top-baseline'
     
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
    
      <Html position={[0, 0, 1]} center>
        
        <div className="w-2xl flex items-center justify-center flex-col">
          <p className="text-center ">
            This is a simple 3D animation of BB-8 rolling into view. The model is animated using a GLB file, and the scene is rendered using React Three Fiber.
          </p>
          <div className="flex gap-8 items-center justify-center">
                      <button
            className="bg-white text-zinc-500 my-8 py-2 px-8 w-40 rounded-full shadow hover:bg-orange-200 transition"
    onClick={() => console.log("Clicked!")}
  >
    Explore
  </button>
   <button
            className="bg-amber-300 text-orange my-8 py-2 px-8 w-40 rounded-full shadow hover:bg-orange-200 transition"
    onClick={() => console.log("Clicked!")}
  >
    Contact
  </button>
  </div>

  </div>
</Html>
      
      

          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} />
          <BB8Model />
        </Canvas>
      </main>

    </div>
  );
}
