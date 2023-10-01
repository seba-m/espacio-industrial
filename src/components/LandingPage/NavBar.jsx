import { Navbar } from "flowbite-react";
import Image from 'next/image'

export default function NavBar() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="bg-[#0033a0] shadow dark:bg-gray-900"
        >
            <Navbar.Brand href="https://espacioindustria.cl/">
                <img
                    src="/img/logo_blanco.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Logo Espacio Industrial"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
                <Navbar.Link href="/login">
                    Acceder
                </Navbar.Link>
                <Navbar.Link href="/register">
                    Registrarse
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
