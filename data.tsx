import { BookText,BriefcaseBusiness ,CodeSquare, Home, Mail, UserRound } from "lucide-react";


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <Home size={20} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre nosotros",
        icon: <UserRound size={20} />,
        link: "/home/about",
    },
    {
        id: 3,
        title: "Trabajos",
        icon: <BriefcaseBusiness size={20} />,
        link: "/home/contact",
    },
    {
        id: 4,
        title: "Experiencia",
        icon: <CodeSquare size={20} />,
        link: "/auth/login",
    },
    {
        id: 5,
        title: "Servicios",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 6,
        title: "Contacto",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];