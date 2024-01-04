import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";



const Computers = ( props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./character/ALlAnim2.gltf')
    const { actions, names } = useAnimations(animations, group)
    // const { setAnimations, animationIndex } = useCharacterAnimations();
    console.log("The value of scroll is : ", props.scrollValue);
    // console.log(names);

  var animationIndex=4;
  if(props.scrollValue <= 70)
  {
    // 6.Hiii_anima at HOME SECTION
    animationIndex = 6;
  }
  else if(props.scrollValue > 70 && props.scrollValue < 160)
  {
    // 1.chiken_Dance_anim at ABOUT/OVERVIEW
    animationIndex = 1;
    // props.position[2] = 12;
  }
  else if(props.scrollValue <= 460)
  {
    // 3.Opengun_anim at work and education
    animationIndex = 3;
  } else if(props.scrollValue > 460 && props.scrollValue < 600)
  {
    // 5.Waving_Dance_anim at Proj
    animationIndex = 5;
  }
  else
  {
    // not visiable at gallery
    animationIndex = 4;
    props.position[1] = -100;

  }

   useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);


  return (

    <group ref={group} {...props} dispose={null}>
      <group name="Scene" rotation={[0,0, 0]}>
        <group name="Rig" position={[0, -30, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            castShadow 
            name="Circle012" 
            geometry={nodes.Circle012.geometry} 
            material={nodes.Circle012.material} skeleton=
            {nodes.Circle012.skeleton} 
          />
          <skinnedMesh
            castShadow 
            name="Circle013" 
            geometry={nodes.Circle013.geometry} 
            material={materials['Material.037']} 
            skeleton={nodes.Circle013.skeleton} 
          />
          <skinnedMesh
            castShadow 
            name="Cube033" 
            geometry={nodes.Cube033.geometry} 
            material={materials['Material.036']} 
            skeleton={nodes.Cube033.skeleton} 
          />
          <skinnedMesh
            castShadow 
            name="Cube034" 
            geometry={nodes.Cube034.geometry} 
            material={materials['Material.036']} 
            skeleton={nodes.Cube034.skeleton} 
          />
          <group name="Cube035">
            <skinnedMesh
              castShadow 
             name="Cube020" 
             geometry={nodes.Cube020.geometry} 
             material={materials['Material.031']} 
             skeleton={nodes.Cube020.skeleton} 
            />
            <skinnedMesh
              castShadow 
             name="Cube020_1" 
             geometry={nodes.Cube020_1.geometry} 
             material={materials['Material.032']} 
             skeleton={nodes.Cube020_1.skeleton} 
            />
          </group>
          <group name="Cube037">
            <skinnedMesh
              castShadow 
             name="Cube019" 
             geometry={nodes.Cube019.geometry} 
             material={materials['Skin.012']} 
             skeleton={nodes.Cube019.skeleton} 
            />
            <skinnedMesh
              castShadow 
             name="Cube019_1" 
             geometry={nodes.Cube019_1.geometry} 
             material={materials['Material.034']} 
             skeleton={nodes.Cube019_1.skeleton} 
            />
            <skinnedMesh
              castShadow 
             name="Cube019_2" 
             geometry={nodes.Cube019_2.geometry} 
             material={materials['Material.035']} 
             skeleton={nodes.Cube019_2.skeleton} 
            />
            <skinnedMesh
              castShadow 
             name="Cube019_3" 
             geometry={nodes.Cube019_3.geometry} 
             material={materials['Material.033']} 
             skeleton={nodes.Cube019_3.skeleton} 
            />
          </group>
          <group name="Cube038">
            <skinnedMesh
              castShadow 
             name="Cube023" 
             geometry={nodes.Cube023.geometry} 
             material={materials['Skin.012']} 
             skeleton={nodes.Cube023.skeleton} 
            />
            <skinnedMesh
              castShadow 
             name="Cube023_1" 
             geometry={nodes.Cube023_1.geometry} 
             material={materials['Skin.013']} 
             skeleton={nodes.Cube023_1.skeleton} 
            />
          </group>
          <skinnedMesh
            castShadow 
           name="Plane007" 
           geometry={nodes.Plane007.geometry} 
           material={materials['Material.030']} 
           skeleton={nodes.Plane007.skeleton} 
          />
        </group>
      </group>
    </group>
  )
  
};

const ComputersCanvas = ({scrollValue}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0,100,0], fov: 50 }}
      // style={{ backgroundColor: "red" }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          // enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.1}/>
        <directionalLight
          position={[15, 5, 15]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          intensity={0.5}
        />
        
        {/* only visiable on large screen */}
        <Computers isMobile={isMobile} scrollValue={scrollValue} position={[0, -10,0]} />


      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
