export default function Footer() {
    return <footer className="bg-[#023b6d] bg-no-repeat bg-cover !rounded-none shadow bottom-0">
        <div className="w-full max-w-screen-xl mx-auto p-3 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between mb-4">
                <a href="/" className="flex justify-center items-center mb-4 sm:mb-0">
                    <img src="/img/logo_blanco.png" className="h-20 m-3" alt="Logo Espacio Industrial" />
                </a>
                <div className="flex flex-col text-center mb-4">
                    <p className="text-white font-bold capitalize text-2xl mb-2">siguenos en</p>
                    <div className="flex flex-row text-center place-content-around">
                        <a href="https://web.facebook.com/profile.php?id=100063591579194">
                            <img src="/img/facebook.png" alt="facebook logo" className="h-14 md:mr-4 lg:mr-5 rounded-full" />
                        </a>
                        <a href="https://www.instagram.com/cidere_regiondecoquimbo/">
                            <img src="/img/instagram.png" alt="instagram logo" className="h-14 md:mr-4 lg:mr-5 rounded-full" />
                        </a>
                        <a href="https://twitter.com/cidereivregion">
                            <img src="/img/x.png" alt="x logo" className="h-14 rounded-full"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-white font-bold capitalize text-2xl">contacto:</p>
                    <a className="text-white text-xl" href="mailto:espacioindustria@cidere.cl">espacioindustria@cidere.cl</a>
                    <a className="text-white text-xl" href="tel:+56957288903">+569 5728 8903</a>
                    <a className="text-white text-xl" href="tel:+56957288408">+569 5728 8408</a>
                </div>
            </div>
            <span className="block text-sm text-white text-center justify-center items-center">© 2023 <a href="/" className="hover:underline">Espacio Industrial Minero™</a></span>
        </div>
    </footer>
}