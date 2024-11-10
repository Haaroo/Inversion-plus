"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/page"
                                    >

                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Inversion+
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                        Inversión+ es tu aliado en el camino hacia la libertad financiera, ofreciéndote los recursos clave para que los jóvenes universitarios aprendan a invertir con confianza.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Nuestra Historia">
                            Conoce los orígenes de CloudBooks, cómo comenzamos y nuestra misión de hacer que la lectura digital sea accesible para todos.
                            </ListItem>
                            <ListItem href="/offers" title="Nuestro Equipo">
                            Descubre al apasionado equipo detrás de CloudBooks. Conoce a nuestros expertos en literatura, tecnología y atención al cliente que hacen posible esta experiencia.
                            </ListItem>
                            <ListItem href="/" title="Valores y Compromiso">
                            Aprende sobre nuestros valores fundamentales, como la sostenibilidad, la diversidad y el apoyo a los autores, y cómo nos comprometemos a fomentar una comunidad lectora responsable.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/accesorios" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contactanos
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Primero pasos",
        href: "/page/info",
        description:
            " Aprende los primeros pasos para invertir: define tus objetivos, evalúa tu riesgo y empieza con opciones sencillas.",
    },
    {
        title: "Calculadora",
        href: "/page/calculadora",
        description:
            "Calcula el rendimiento de tu inversión: ingresa tu monto y descubre cómo crece tu dinero con el tiempo.",
    },
    {
        title: "Revistas",
        href: "/category/capsula",
        description:
            "Mantente informado y entretenido con nuestra colección de revistas digitales. Disfruta de artículos interesantes y de actualidad sobre temas que te apasionan, todo al alcance de un clic.",
    },
    {
        title: "Articulos",
        href: "/category/capsula",
        description:
            "Los artículos son escritos que analizan, informan o opinan sobre un tema específico. Pueden ser de diferentes tipos, como artículos de noticias, de opinión, científicos, académicos o de divulgación.",
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

