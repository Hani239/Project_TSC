"use client"
// import Demo from '@/components/Demo'
// import Link from 'next/link'
// import React from 'react'

import MyComponent from '@/components/Backend/index'

import Demo from "@/components/Demo"
import Link from "next/link"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key, useState, useEffect } from "react";

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      {/* <Demo/> */}
      <MyComponent/>
      
    </div>
  )
}

export default Home;
