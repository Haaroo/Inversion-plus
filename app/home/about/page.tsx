'use client'

import { useRouter } from "next/navigation";
import React from 'react'
import Image from 'next/image';
import NavbarHome from "../navbar";

const AboutUs: React.FC = () => {
    const router = useRouter();
    return (
      <div className="relative min-h-screen bg-gray-100">
        {/* Navbar */}
        <NavbarHome />

        {/* Main Content */}
        <div className="pt-24 px-4 sm:px-6 lg:px-8"> {/* Adjusted padding-top to account for the navbar */}
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <section className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Sobre Nosotros
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Conoce al equipo detrás de nuestra librería digital y nuestra misión para ofrecerte la mejor experiencia de lectura.
              </p>
            </section>

            {/* Team Section */}  
            <section className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-900 text-center">
                Nuestro Equipo
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {/* Team Member 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <Image
                    src="/team-member-1.jpg"
                    alt="Equipo 1"
                    width={150}
                    height={150}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-bold text-gray-800">Juan Pérez</h3>
                  <p className="text-gray-600">CEO & Fundador</p>
                </div>
                {/* Team Member 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <Image
                    src="/team-member-2.jpg"
                    alt="Equipo 2"
                    width={150}
                    height={150}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-bold text-gray-800">Ana Gómez</h3>
                  <p className="text-gray-600">CTO</p>
                </div>
                {/* Team Member 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <Image
                    src="/team-member-3.jpg"
                    alt="Equipo 3"
                    width={150}
                    height={150}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-bold text-gray-800">Luis Fernández</h3>
                  <p className="text-gray-600">Diseñador UX/UI</p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mt-12 text-center">
              <h2 className="text-3xl font-semibold text-gray-900">
                Ponte en Contacto
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                ¿Tienes preguntas o deseas colaborar con nosotros? No dudes en contactarnos.
              </p>
              <a
                href="mailto:info@libreriadigital.com"
                className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Enviar un Correo
              </a>
            </section>
          </div>
        </div>
      </div>
    );
}

export default AboutUs;
