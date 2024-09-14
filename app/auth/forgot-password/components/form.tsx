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
                <h2 className='text-2xl font-semibold mb-2'>¿Olvidaste tu contraseña?</h2>
                <p className=" text-xl text-gray-600">
                    Recuperala con el siguiente dato: 
                </p>
            </div>
            <form className="w-full">
                <Input type='text' placeholder="Correo electronico"/>
                
            </form>
            <Button type="submit" label="Enviar instrucciones"/>
            <div className="mt-5 flex iteams-center justify-center gap-x-2">
                <p className="text-gray-500">¿No tienes una cuenta?</p>
                <button type='button' className="font-semibold hover:text-secondary" onClick={()=>router.push('/auth/register')}>Registrate</button>
            </div>
            <div className="mt-3 flex iteams-center justify-center gap-x-2">
                <p className="text-gray-500">¿Ya tienes una cuenta?</p>
                <button type='button' className="font-semibold hover:text-secondary" onClick={()=>router.push('/auth/login')}>Inicia sesión</button>
            </div>
        </div>
        </>
    )
}

export default Form;