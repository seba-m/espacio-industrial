import '@/styles/globals.css'
import { CookiesProvider } from "react-cookie"
import Footer from '@/components/LandingPage/Footer'
import NavBar from '../components/LandingPage/NavBar'



function MyApp({ Component, pageProps }) {

  return (
    <CookiesProvider>
      <main className=''>
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