import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import NavBar from "@/components/navbar/NavBar";

export default function App({ Component, pageProps }) {
  return <ThemeProvider enableSystem= {true} attribute="class">
    <NavBar />
    <Component {...pageProps} />
    <Footer />
        </ThemeProvider>;
}
