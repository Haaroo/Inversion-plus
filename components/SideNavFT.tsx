'use client';

import Link from "next/link";
import { FaCog, FaFileInvoice, FaWallet, FaSignOutAlt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoMdHelp } from "react-icons/io";
import { usePathname } from 'next/navigation';
import { useState } from "react";

const SideNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad del menú en móviles

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón de Menú Hamburguesa en la parte inferior */}
      <button
        className="md:hidden p-4 fixed bottom-4 left-4 z-10 bg-[#98b4b2] text-white rounded-full shadow-lg "
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-white mb-2"></span>
        <span className="block w-6 h-0.5 bg-white mb-2"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Menú lateral */}
      <aside className={`h-screen w-56 border-r-2 border-gray-300 fixed top-0 left-0 md:relative md:block transform ${isOpen ? "translate-x-0 bg-[#98b4b2]" : "-translate-x-full"} transition-transform md:translate-x-0`}>
        <section className="flex flex-col mt-8 ml-8 text-gray-600">
          {/* Logo o nombre del proyecto */}
          <figure className="flex pb-5">
            <p className="font-medium text-xl ml-2">Rastrear</p>
          </figure>

          {/* Enlaces de navegación */}
          <section className="mt-10 sxl:mt-4 items-center">
            <Link href="/page/ftracker">
              <section className={`flex flex-row cursor-pointer ${pathname === "/page/ftracker" ? "text-teal-600" : "text-gray-600"}`}>
                <MdDashboard className="w-6 h-6" />
                <span className="text-lg ml-2">Descripcion general</span>
              </section>
            </Link>
          </section>

          <section className="mt-10 sxl:mt-6 items-center">
            <Link href="/page/ftracker/dashboard/budget">
              <section className={`flex flex-row cursor-pointer ${pathname === "page/ftracker/dashboard/budget" ? "text-teal-600" : "text-gray-600"}`}>
                <FaFileInvoice className="w-6 h-6" />
                <span className="text-lg ml-3">Presupuesto</span>
              </section>
            </Link>
          </section>

          <section className="mt-10 sxl:mt-6 items-center">
            <Link href="/page/ftracker/dashboard/cashflow">
              <section className={`flex flex-row cursor-pointer ${pathname === "page/ftracker/dashboard/cashflow" ? "text-teal-600" : "text-gray-600"}`}>
                <FaWallet className="w-6 h-6" />
                <span className="text-lg ml-3">Flujo de caja</span>
              </section>
            </Link>
          </section>
        </section>
      </aside>
    </>
  );
};

export default SideNav;
