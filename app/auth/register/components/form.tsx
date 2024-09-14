'use client'

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";


const Form = () =>{

    const router = useRouter();

    return(
        <>
        <div className='w-full max-w-md'>
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold mb-2'>Bienvenido!</h2>
                <p className=" text-xl text-gray-600">
                    Ingresa los siguientes datos para registrarte correctamente! 
                </p>
            </div>
            <form className="w-full">
                <Input type='text' placeholder="Nombre"/>
                <Input type='text' placeholder="Correo electronico"/>
                <Input type='password' placeholder="Contraseña"/>
                <Input type='password' placeholder="Confirmar contraseña"/>
            </form>
            <Button type="submit" label="Crear cuenta"/>
            <div className="mt-5 flex iteams-center justify-center gap-x-2">
                <p className="text-gray-500">Ya tienes una cuenta?</p>
                <button type='button' className="font-semibold hover:text-secondary" onClick={()=>router.push('/auth/login')}>Inicia sesión</button>
            </div>
        </div>
        </>
    )
}

export default Form;