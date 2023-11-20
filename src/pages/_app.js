import '@/styles/globals.css'
import { CookiesProvider } from "react-cookie"

import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import { Lato } from '@next/font/google'

const lato = Lato({
  subsets: ['latin-ext'],
  fontDisplay: 'swap',
  weight: ['100', '300', '400', '700', '900'],
});



function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <main className={`${lato.className}`}>
      {/* nav */}
      <NavBar />
      {/* content */}
      <Component {...pageProps} />
      {/* footer */}
      <Footer />
    </main>
    </CookiesProvider>
  );
}

export default MyApp