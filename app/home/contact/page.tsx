'use client'

import React from 'react';
import NavbarHome from "../navbar"; 
import ContactForm from '@/components/contact-form';


const Contact = () => {

  return (
    <div>
      <NavbarHome />
      <main className='min-h-max grid grid-cols-1 lg:grid-cols-1 p-10 lg:p-8'>
        <section className='lg:flex h-full flex-col items-center justify-center gap-y-5 bg-[#99b4b2] rounded-2xl'>
              <h1 className="text-4xl font-extrabold text-[#061429] sm:text-5xl mb-5 pt-10 justify-center text-center">
                Contáctanos
              </h1>
              <h2 className="mt-4 text-3xl text-[#061429] justify-center text-center">
                ¡Estamos aquí para ayudarte!
              </h2>
              <h3 className="mt-4 text-xl text-[#061429] text-center px-6 justify-center">
                Si tienes alguna pregunta, comentario o necesitas asistencia con nuestro sistema de asesoramiento de inversión, <br />
                no dudes en ponerte en contacto con nosotros. Nuestro equipo está disponible para brindarte el soporte <br />
                que necesites y asegurarse de que tengas la mejor experiencia posible con nuestra solución.
              </h3 >
              <div className="bg-[#b2c7c6] p-8 rounded-lg shadow-lg w-full max-w-4xl h-100 mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 justify-center">
                  Enviar un Mensaje <br />
                  <br />
                  <ContactForm/>
                </h2>
              </div>
              <div className='mt-10'/>
        </section>
      </main>
    </div>
  );
}

export default Contact;
