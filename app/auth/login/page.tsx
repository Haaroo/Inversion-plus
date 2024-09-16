import Logo from "@/components/shared/logo";
import Form from "./components/form";
import { Metadata } from "next";
import Navbar from "@/app/home/navbar";


export const metadata: Metadata = {
  title: "Auth - Login",
  description: "Auth - Login",
};

export default function Login() {
  return (
    <section className='h-full flex flex-col items-center justify-center'>
        <Logo/>
        <Form/>
    </section>
  )
}
