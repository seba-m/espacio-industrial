import Footer from '@/components/LandingPage/Footer'
import NavBar from '../components/LandingPage/NavBar'
import { CustomHead } from '@/components/CustomHead'


export default function LandingPage() {
  return <>
    <CustomHead />

    <main className=''>
      {/* nav */}
      <NavBar />
      {/* content */}

      {/* footer */}
      <Footer />
    </main>
  </>
}
