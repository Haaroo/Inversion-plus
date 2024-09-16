'use client'

import React, { useState } from 'react';
import NavbarHome from "../navbar"; // Ajusta la ruta según tu estructura de carpetas
import Input from '@/components/ui/input';
import { toast, ToastContainer } from 'react-toastify';
import Button from '@/components/ui/button';


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
      if (!formData.name || !formData.email || formData.message) {
      toast.error('Todos los campos son obligatorios');
      return;
      }
      toast.success('Formulario enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
      setError(null);
  };
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <NavbarHome />
      
      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8 mb-6">
        <div className="max-w-4xl mx-auto mb-4">
          {/* Hero Section */}
          <section className="text-center mb-5">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Contáctanos
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Completa el formulario a continuación para ponerte en contacto con nosotros.
            </p>
          </section>

          {/* Contact Form Section */}
          <section>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Enviar un Mensaje
              </h2>
              <form action="#" method="POST" className="space-y-6">
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
                  <Button type="submit" label="Enviar mensaje" onClick={()=> handleSubmit(new Event('submit') as any)}/>
              </form>
            </div>
          </section>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ContactPage;
