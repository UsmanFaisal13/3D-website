import { Canvas } from "@react-three/fiber";
import BB8Model from "./components/modal.jsx";
import { Text } from "@react-three/drei";
import { Html, ScrollControls, Scroll } from "@react-three/drei";
import { Github, Linkedin, Mail } from "lucide-react"


export default function App() {
  return (
    <div className="bg-orange-50 min-h-screen text-white font-light">
      <header className="bg-[#EEA326] flex justify-end px-8 py-4"> <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Mail size={20} />
            </a>
          </div></header>

      <main className="h-screen w-full">
      
        <Canvas camera={{ position: [0, 1.2, 5], fov: 30 }}>
                   <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} />
          <ScrollControls pages={3}>
            <Scroll>
              <BB8Model />
            </Scroll>
      <Scroll>
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
<Scroll html>
  <section className="h-screen w-full ">
   
  </section>
  <section className="h-screen w-screen ">
    <h2 className="text-3xl font-bold">Section 2</h2>
    <p>This is the content for section 2.</p>
  </section>
  <section className="h-screen w-full ">
    <h2 className="text-3xl font-bold">Section 3</h2>
    <p>This is the content for section 3.</p> 
  </section>
</Scroll>


      
      


            </Scroll>
          </ScrollControls> 
        </Canvas>
      </main>

    </div>
  );
}
