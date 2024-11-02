import '@/styles/globals.css'
import Head from 'next/head'

import Footer from '@/components/Footer'
import NavBar from '@/components/navbar/NavBar'

export default function App({ Component, pageProps }) {
  return <>
     <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
     </Head>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
