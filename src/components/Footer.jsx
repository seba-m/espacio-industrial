import { Typography } from "@material-tailwind/react";

export default function Footer() {


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
                className="opacity-100 transition-opacity hover:opacity-80"
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
                className="opacity-100  transition-opacity hover:opacity-80"
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
                className="opacity-100 transition-opacity hover:opacity-80"
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
}
