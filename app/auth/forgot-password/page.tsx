import Logo from "@/components/shared/logo";
import Form from "./components/form";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Auth - ForgotPassword",
    description: "Auth - ForgotPassword",
  };

export default function ForgotPassword() {
  return (
    <section className='h-full flex flex-col items-center justify-center'>
        <Logo/>
        <Form/>
    </section>
  )
}
