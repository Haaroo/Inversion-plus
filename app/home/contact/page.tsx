'use client'

import React from 'react';
import NavbarHome from "../navbar"; 
import ContactForm from '@/components/contact-form';


const Contact = () => {

  return (
    <div>
      <NavbarHome />
      <main className='min-h-max grid grid-cols-1 lg:grid-cols-1 p-10 lg:p-8'>
        <section className='lg:flex h-full flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
            <section className="text-center mb-5">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-5 pt-10">
                Contáctanos
              </h1>
              <h2 className="mt-4 text-3xl text-white/90">
                ¡Estamos aquí para ayudarte!
              </h2>
              <h3 className="mt-4 text-xl text-white/70 text-center px-6">
                Si tienes alguna pregunta, comentario o necesitas asistencia con nuestro sistema de asesoramiento de inversión, <br />
                no dudes en ponerte en contacto con nosotros. Nuestro equipo está disponible para brindarte el soporte <br />
                que necesites y asegurarse de que tengas la mejor experiencia posible con nuestra solución.
              </h3 >
            </section>  
            <section className='grid-cols-3 lg:grid-cols-3'>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Enviar un Mensaje <br />
                  <br />
                  <ContactForm/>
                </h2>
              </div>
              <div className='mt-16'/>
            </section>
            <div className='mb-28'></div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
