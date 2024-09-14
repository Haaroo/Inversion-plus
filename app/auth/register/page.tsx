import Logo from "@/components/shared/logo";
import Form from "./components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth - register",
  description: "Auth - register",
};


export default function Register() {
  return (
    <section className='h-full flex flex-col items-center justify-center'>
        <Logo/>
        <Form/>
    </section>
  )
}
