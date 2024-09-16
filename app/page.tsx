'use client'

import Image from "next/image";
import router from "next/router";
import HomePage from "./home/home";
import NavbarHome from "./home/navbar";

export default function Home() {
  return (
      <section>
        <NavbarHome/>
        <HomePage/>
      </section>
  );
}
