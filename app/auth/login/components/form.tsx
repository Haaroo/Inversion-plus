'use client'

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    email: string;
    password: string;
}

const Form = () =>{
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        toast.dismiss();
        
        if (!formData.email || !formData.password) {
        toast.error('Todos los campos son obligatorios');
        return;
        }
        
        if (formData.email === 'admin@cloudbooks.com' && formData.password === '12345') {
            toast.success('Bienvenido al Dashboard!');
            setFormData({ email: '', password: '' });
            setError(null);
            setTimeout(() => {
                router.push('/dashboard');
            }, 1500);
        } else {
            toast.error('Credenciales incorrectas');
            setError('Credenciales incorrectas');
        }

        setFormData({ email: '', password: '' });
        setError(null);
    };

    return(
        <>
        <div className='w-full max-w-md'>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold mb-2'>Bienvenido!</h2>
                <p className=" text-xl text-gray-600">
                    Ingresa tu correo y contraseña para iniciar sesion
                </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <Input type='text' placeholder="Correo electronico" id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}/>
                <Input type='password' placeholder="Contraseña" id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}/>
                <div className="flex justify-end mb-5">
                    <button type="button" className="text-gray-600 hover:text-secondary" onClick={()=>router.push('/auth/forgot-password')}>¿Olvidaste tu contraseña?</button>
                </div>
            </form>
            <Button type="submit" label="Iniciar sesión" onClick={()=> handleSubmit(new Event('submit') as any)}/>
            <div className="mt-5 flex iteams-center justify-center gap-x-2">
                <p className="text-gray-500">¿No tienes una cuenta?</p>
                <button type='button' className="font-semibold hover:text-secondary" onClick={()=>router.push('/auth/register')}>Registrate</button>
            </div>
            <ToastContainer />
        </div>
        </>
    )
}

export default Form;