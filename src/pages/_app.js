import "@/styles/globals.css";
import { CookiesProvider } from "react-cookie";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Lato } from "@next/font/google";
import { CustomHead } from "@/components/CustomHead";

import { SpeedDialog } from "@/components/SpeedDialog";

const lato = Lato({
  subsets: ["latin-ext"],
  fontDisplay: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <CustomHead />
      <main className={`${lato.className} h-full flex flex-col`}>
      <SpeedDialog />
        <div className="content">
          {/* nav */}
          <NavBar />
          {/* content */}
          <Component {...pageProps} />
          {/* footer */}
        </div>

        <div className="shrink-0">
          <Footer />
        </div>
      </main>
    </CookiesProvider>
  );
}

export default MyApp;
