import { Navbar, Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <Navbar fluid={true} rounded={true} className="bg-[#0033a0] shadow">
            <Navbar.Brand
                href="https://espacioindustria.cl/"
                className="flex items-center"
            >
                <img
                    src="/img/logo_blanco.png"
                    className="h-16 m-3"
                    alt="Logo Espacio Industrial"
                />
            </Navbar.Brand>

            <Navbar.Toggle className="inline-flex items-center text-white rounded-lg p-2 text-sm hover:bg-[#6684c6] focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" />
            <Navbar.Collapse>
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
                <Navbar.Link
                    as={"div"}
                    href="/contacto"
                    className="flex order-2 pt-2 w-full lg:w-auto"
                >
                        <div className="flex flex-row items-center justify-center w-full lg:w-auto ">
                            <Button
                                href="/login"
                                type="button"
                                className="
                        bg-[#0033a0] hover:bg-blue-800 focus:ring-4 focus:outline-none
                        focus:ring-blue-300 rounded-lg px-0 py-2 mr-3 md:mr-2 
                        border-2 border-white h-8 md:h-10
                    "
                            >
                                <p className="text-lg md:text-2xl text-center text-white font-bold uppercase ">
                                    Acceder
                                </p>
                            </Button>
                            <Button
                                href="/register"
                                type="button"
                                className="
                                    text-white bg-[#ef8f00] hover:bg-[#f09814] focus:ring-4 focus:outline-none
                                    focus:ring-blue-300 rounded-lg px-0 py-2 md:mr-3 
                                    border-2 border-white h-8 md:h-10
                                "
                            >
                                <p className="text-lg md:text-2xl text-center text-white font-bold uppercase ">
                                    Registrarse
                                </p>
                            </Button>
                        </div>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
