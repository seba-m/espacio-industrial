import { Button } from "flowbite-react";
import React from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  // Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        variant="small"
        color="blue-gray"
        href="/"
        className="p-1 font-normal text-xl border-0 text-white  border-b-2 border-transparent hover:border-[#ffa500] hover:text-[#ffa500]"
      >
        Inicio
      </Typography>
      <Typography
        as={Link}
        variant="small"
        href="/nosotros"
        color="blue-gray"
        className="p-1 font-normal text-xl border-0 text-white border-b-2 border-transparent hover:border-[#ffa500] hover:text-[#ffa500]"
      >
        Nosotros
      </Typography>
      <Typography
        as={Link}
        href="/nosotros/#asociados"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl border-0 text-white border-b-2 border-transparent hover:border-[#ffa500] hover:text-[#ffa500]"
      >
        Gobernanza
      </Typography>
      <Typography
        as={Link}
        href="/buscar"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl border-0 text-white border-b-2 border-transparent hover:border-[#ffa500] hover:text-[#ffa500]"
      >
        Proveedores
      </Typography>
      <Typography
        as={Link}
        href="/contacto"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl border-0 text-white border-b-2 border-transparent hover:border-[#ffa500] hover:text-[#ffa500]"
      >
        Contacto
      </Typography>
      <Typography
        as={Link}
        href="/preguntas"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl border-0 text-white border-b-2 border-transparent hover:border-[#ffa500] hover:text-[#ffa500]"
      >
        FaQ
      </Typography>
      <Typography
        as={Link}
        href="/redes"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-xl border-0 text-white border-b-2 border-transparent hover:border-[#ffa500] hover:text-[#ffa500]"
      >
        Redes Sociales
      </Typography>
    </ul>
  );

  return (
    <div className="dark:bg-gray-800 sm:px-4 bg-[#023b6d] !rounded-none">
      <Navbar className=" !bg-[#023b6d] border- h-max max-w-full !shadow-none  rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
              src="/img/logo_blanco.png"
              className="h-14"
              alt="Logo Espacio Industrial"
            />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                as={Link}
                href="/auth"
                type="button"
                className="
                                hidden lg:flex bg-[#023b6d] hover:bg-[#024f93] focus:ring-4 focus:outline-none
                                focus:ring-blue-300 rounded-md   mr-3 md:mr-2 
                                border-2 border-white h-8 
                            "
              >
                <p className="text-base text-center text-white font-bold uppercase ">
                  Acceder
                </p>
              </Button>
              <Button
                as={Link}
                type="button"
                href="/auth/registrarse"
                className="hidden lg:flex text-white bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 rounded-md px-0 py-2 
                    border-2 border-white h-8
                    "
              >
                <p className="text-base text-center text-[#023b6d] font-bold uppercase ">
                  Registrarse
                </p>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex w-full items-center gap-x-1">
            <Button
              as={Link}
              href="/auth"
              variant="text"
              size="sm"
              className="bg-[#023b6d] hover:bg-[#024f93] focus:ring-4 focus:outline-none
                focus:ring-blue-300 rounded-md   mr-3 md:mr-2 
                border-2 border-white h-8  w-6/12
            "
            >
              <p className="text-base text-center text-white font-bold uppercase ">
                Acceder
              </p>
            </Button>
            <Button
              as={Link}
              href="/auth/registrarse"
              size="sm"
              className="text-white bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none
                focus:ring-blue-300 rounded-md px-0 py-2 
                border-2 border-white h-8 w-6/12
                "
            >
              <p className="text-base text-center text-[#023b6d] font-bold uppercase ">
                Registrarse
              </p>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
