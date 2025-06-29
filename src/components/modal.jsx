import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BB8Model({ startX = 5, moveIn = true }) {
    

  const ref = useRef();
  const { scene, animations } = useGLTF("/bb-8_rolling_robot.glb");
  const mixer = useRef();
  const positionX = useRef(startX);
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouse.current = { x, y };
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  

  useEffect(() => {
    if (ref.current && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(ref.current);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }
  
      

    return () => {
      mixer.current?.stopAllAction();
    };
  }, [animations]);

  useFrame((_, delta) => {
    // Animate BB-8's entrance from left to center
    if (moveIn && ref.current && positionX.current > 1.8) {
      positionX.current = Math.max(positionX.current - delta / 0.5, 0);
      ref.current.position.x = positionX.current;
    
    }
    
 
   

    // Update animation mixer (for GLB animations)
    mixer.current?.update(delta);
       if (ref.current) {
  const maxYaw = Math.PI / 1.5; // left-right
  const maxPitch = Math.PI / 16; // up-down

  const targetY = mouse.current.x * maxYaw;
  const targetX = -mouse.current.y * maxPitch;

  // Smoothly rotate Y (horizontal)
  const diffY = targetY - ref.current.rotation.y;
  ref.current.rotation.y += diffY * 0.1;

  // Smoothly rotate X (vertical)
  const diffX = targetX - ref.current.rotation.x;
  ref.current.rotation.x += diffX * 0.1;
}

  });

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={6.2}
      position={[positionX.current, -0.8, 0]}
    />
  );
}
