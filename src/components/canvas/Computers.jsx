import React from 'react'
import { Suspense,useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useGLTF } from '@react-three/drei'
import CanvasLoader from './Loader'


const Computers = () => {

  const computer = useGLTF('/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor=" black" />
    <pintLight  intensity={1}/>
    

    </mesh>
  )
}

export default Computers