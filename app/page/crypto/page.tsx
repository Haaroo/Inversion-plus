"use client"

import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import CryptoTracker from "./components/CryptoTracker";
import './App.css';
import React from 'react'

export default function page() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <NavbarPage />
        <div className="App">
            <CryptoTracker />
        </div>
        <Footer />
    </div>
  )
}