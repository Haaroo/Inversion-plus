import ContactForm from '@/components/contact-form-page'
import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import React from 'react'

export default function page() {
  return (
    <>  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="max-w-4xl mx-auto p-6">
            <NavbarPage />
   
                <section className="flex flex-col items-center justify-center gap-y-8 rounded-2xl p-8">
                    <h1 className="text-4xl font-extrabold text-[#061429] sm:text-5xl text-center">
                    Contáctanos
                    </h1>
                    <h2 className="mt-4 text-2xl text-[#061429] text-center">
                    ¡Estamos aquí para ayudarte!
                    </h2>
                    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl mt-8">
                    <h3 className="text-2xl font-semibold text-[#061429] mb-6 text-center">
                        Enviar un Mensaje
                    </h3>
                    <ContactForm />
                    </div>
                </section>
            
            <Footer />
        </div>
    </>
  )
}
