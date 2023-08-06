import '@/styles/globals.css'

import Footer from '@/components/Footer'
import NavBar from '@/components/navbar/NavBar'

export default function App({ Component, pageProps }) {
  return <>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
