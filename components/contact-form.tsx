"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { InputDash } from "./ui/inputDash";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/buttonPage";
import { useState } from "react";

const ContactForm = () => {
    const [sucessForm, setSucessForm] = useState(false)

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values)
        })
        if (response.status === 200) {
            setSucessForm(true)
        }
    }

    return (
        <Form {...form}>
            {sucessForm ? (
                <h1>brFormulario se ha enviado con éxito 👽, me contactare contigo lo mas pronto posible 🐘</h1>
            ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 space-x-60">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputDash
                                        placeholder="Tu nombre"
                                        {...field}
                                        className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputDash
                                        placeholder="Tu correo electronico"
                                        {...field}
                                        className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Escribe tu mensaje..."
                                        {...field}
                                        className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Enviar</Button>
                </form>
            )}
        </Form>
    );
}

export default ContactForm;