'use client'
import HomePage from "./home/home";
import NavbarHome from "./home/navbar";

export default function Home() {
  return (
      <section>
        <div className="realtive inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <NavbarHome/>
        <HomePage/>
        </div>
      </section>
  );
}
