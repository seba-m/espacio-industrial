export default function Footer() {
  const LINKS = [
    {
      title: "Contacto:",
      items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Resource",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
  ];

  return (
    <footer className="w-full p-8 bg-[#023b6d]">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap bg-[#023b6d] items-center justify-center gap-y-6 gap-x-12   text-center md:justify-between">
          <img src="/img/logo_blanco.png" alt="logo-ct" className=" h-20 m-3 dark:filter brightness-100" />
          <div>
            <Typography variant="h5" color="white" className="mb-3">
              Síguenos en
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href="https://web.facebook.com/profile.php?id=100063591579194"
                className="opacity-80 transition-opacity hover:opacity-100"
                color="white"
              >
                <img
                  src="/img/facebook.png"
                  alt="facebook logo"
                  className="h-10 w-10 rounded-full"
                />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80  transition-opacity hover:opacity-100"
                color="white"
              >
                <img
                  src="/img/instagram.png"
                  alt="instagram logo"
                  className="h-10 w-10 rounded-full"
                />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
                color="white"
              >
                <img
                  src="/img/x.png"
                  alt="x logo"
                  className="h-10 w-10 rounded-full"
                />
              </Typography>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-between gap-4">
            <ul>
              <Typography
               variant="h5"
                color="white"
                className="mb-3"
              >
                Contacto:
              </Typography>

              <li>
                <Typography
                  as="a"
                  href="mailto:espacioindustria@cidere.cl"
                  color="white"
                  className="py-1.5 text-sm transition-colors"
                >
                  espacioindustria@cidere.cl
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="tel:+56957288903"
                  color="white"
                  className="py-1.5 text-sm transition-colors hover:cursor-pointer"
                >
                  +569 5728 8903
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="tel:+56957288408"
                  color="white"
                  className="py-1.5 text-sm transition-colors"
                >
                  +569 5728 8408
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-blue-gray-50" />
          <Typography
            variant="medium"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; Espacio Industrial Minero™
          </Typography>
      </div>
    </footer>
  );

  /*return <footer className="bg-[#023b6d] bg-no-repeat bg-cover !rounded-none shadow bottom-0">
        <div className="w-full max-w-screen-xl mx-auto p-3 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between mb-4">
                <Link href="/" className="flex justify-center items-center mb-4 sm:mb-0">
                    <img src="/img/logo_blanco.png" className="h-20 m-3" alt="Logo Espacio Industrial" />
                </Link>
                <div className="flex flex-col text-center mb-4">
                    <p className="text-white font-bold capitalize text-2xl mb-2">siguenos en</p>
                    <div className="flex flex-row text-center place-content-around">
                        <Link href="https://web.facebook.com/profile.php?id=100063591579194">
                            <img src="/img/facebook.png" alt="facebook logo" className="h-14 md:mr-4 lg:mr-5 rounded-full" />
                        </Link>
                        <Link href="https://www.instagram.com/cidere_regiondecoquimbo/">
                            <img src="/img/instagram.png" alt="instagram logo" className="h-14 md:mr-4 lg:mr-5 rounded-full" />
                        </Link>
                        <Link href="https://twitter.com/cidereivregion">
                            <img src="/img/x.png" alt="x logo" className="h-14 rounded-full"/>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-white font-bold capitalize text-2xl">contacto:</p>
                    <Link className="text-white text-xl" href="mailto:espacioindustria@cidere.cl">espacioindustria@cidere.cl</Link>
                    <Link className="text-white text-xl" href="tel:+56957288903">+569 5728 8903</Link>
                    <Link className="text-white text-xl" href="tel:+56957288408">+569 5728 8408</Link>
                </div>
            </div>
            <span className="block text-sm text-white text-center justify-center items-center">© 2023 <Link href="/" className="hover:underline">Espacio Industrial Minero™</Link></span>
        </div>
    </footer>*/
}
