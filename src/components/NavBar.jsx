import { Navbar, Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <Navbar fluid={true} rounded={true} className="bg-[#023b6d] shadow !py-1">
            <Navbar.Brand
                href="https://espacioindustria.cl/"
                className="flex items-center"
            >
                <img
                    src="/img/logo_blanco.png"
                    className="h-14 m-3"
                    alt="Logo Espacio Industrial"
                />
            </Navbar.Brand>

            <Navbar.Toggle theme={{ base:`inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-[#6684c6] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden` }}/>
            <Navbar.Collapse theme={{
                base: `w-full lg:block lg:w-auto`,
                list: `mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium`
            }}>
                <Navbar.Link
                    as={Link}
                    href="/"
                    className="text-white p-2 flex items-center justify-center transition-opacity hover:opacity-75 text-xl border-0"
                >
                    Inicio
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    href="/nosotros"
                    className="text-white p-2 flex items-center justify-center transition-opacity hover:opacity-75 text-xl border-0"
                >
                    Nosotros
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    href="/buscar"
                    className="text-white p-2 flex items-center justify-center transition-opacity hover:opacity-75 text-xl border-0"
                >
                    Proveedores
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    href="/contacto"
                    className="text-white p-2 flex items-center justify-center transition-opacity hover:opacity-75 text-xl border-0"
                >
                    Contacto
                </Navbar.Link>
                <div className="flex flex-row items-center justify-center w-full lg:w-auto ">
                    <Button
                        href="/login"
                        type="button"
                        className="
                                bg-[#023b6d] hover:bg-[#024f93] focus:ring-4 focus:outline-none
                                focus:ring-blue-300 rounded-md px-0 py-2 mr-3 md:mr-2 
                                border-2 border-white h-8
                            "
                    >
                        <p className="text-base text-center text-white font-bold uppercase ">
                            Acceder
                        </p>
                    </Button>
                    <Button
                        href="/register"
                        type="button"
                        className="
                                    text-white bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none
                                    focus:ring-blue-300 rounded-md px-0 py-2 
                                    border-2 border-white h-8
                                "
                    >
                        <p className="text-base text-center text-[#023b6d] font-bold uppercase ">
                            Registrarse
                        </p>
                    </Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}
