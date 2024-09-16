'use client'

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface FormData {
    name: string;
    email: string;
    password: string;
    repassword: string;
}

const Form = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({ email: '', password: '', name: '', repassword: '' });
    const [error, setError] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Limpiar errores anteriores
        toast.dismiss();

        // Validar campos vacíos
        if (!formData.name || !formData.email || !formData.password || !formData.repassword) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        // Validar que las contraseñas coincidan
        if (formData.password !== formData.repassword) {
            toast.error('Las contraseñas no coinciden');
            return;
        }

        // Si todo está bien, mostrar mensaje de éxito
        toast.success('Formulario enviado con éxito!');
        setSubmitted(true); // Marca que el formulario ha sido enviado con éxito
    };

    return (
        <>
            <div className='w-full max-w-md mx-auto'>
                <div className='mb-5'>
                    <h2 className='text-2xl font-semibold mb-2'>Bienvenido!</h2>
                    <p className="text-xl text-gray-600">
                        Ingresa los siguientes datos para registrarte correctamente!
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        placeholder="Nombre completo"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Input
                        type='text'
                        placeholder="Correo electrónico"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type='password'
                        placeholder="Contraseña"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Input
                        type='password'
                        placeholder="Confirmar contraseña"
                        id="repassword"
                        name="repassword"
                        value={formData.repassword}
                        onChange={handleChange}
                    />
                    <Button type="submit" label="Crear cuenta" onClick={()=> handleSubmit(new Event('submit') as any)}/>
                </form>
                <div className="mt-5 flex items-center justify-center gap-x-2">
                    <p className="text-gray-500">Ya tienes una cuenta?</p>
                    <button
                        type='button'
                        className="font-semibold hover:text-secondary"
                        onClick={() => router.push('/auth/login')}
                    >
                        Inicia sesión
                    </button>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Form;
