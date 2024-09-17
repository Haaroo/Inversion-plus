'use client'

import React, { useState } from 'react';
import NavbarHome from "../navbar"; 
import Input from '@/components/ui/input';
import { toast, ToastContainer } from 'react-toastify';
import Button from '@/components/ui/button';
import 'react-toastify/dist/ReactToastify.css';


interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Todos los campos son obligatorios');
      return;
    }
    toast.success('Formulario enviado con éxito!');
    setFormData({ name: '', email: '', message: '' });
    setError(null);
  };
  

  return (
    <div className="pt-20">
      <NavbarHome />
      <main className='min-h-screen grid grid-cols-1 lg:grid-cols-1 p-10 lg:p-8'>
        <section className='lg:flex h-full flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
            <section className="text-center mb-5">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
                Contáctanos
              </h1>
              <h2 className="mt-4 text-3xl text-white/90">
                ¡Estamos aquí para ayudarte!
              </h2>
              <h3 className="mt-4 text-xl text-white/70 text-center px-6">
                Si tienes alguna pregunta, comentario o necesitas asistencia con nuestro sistema de libreria digital, <br />
                no dudes en ponerte en contacto con nosotros. Nuestro equipo está disponible para brindarte el soporte <br />
                que necesites y asegurarse de que tengas la mejor experiencia posible con nuestra solución.
              </h3 >
            </section>
            <section>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Enviar un Mensaje
                </h2>
                <form className="w-full" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Input type='text' placeholder="Nombre completo" id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}/>
                    </div>
                    <div>
                      <Input type='text' placeholder="Correo electronico" id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}/>
                    </div>
                  </div>
                  <div>
                      <Input type='text' placeholder="Mensaje" id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}/>
                  </div>
                </form>
                <Button type="submit" label="Enviar mensaje" onClick={()=> handleSubmit(new Event('submit') as any)}/>
              </div>
              <div className='mb-10 mt-20'/>
            </section>
        </section>
      </main>
      <ToastContainer />
    </div>
  );
}

export default ContactPage;
