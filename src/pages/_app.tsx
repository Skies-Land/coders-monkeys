// TYPES
import type { AppProps } from "next/app";

// DEPENDENCIES
import { Flip, ToastContainer } from 'react-toastify';

// STYLES
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={8000}
        transition={Flip}
      />
      <Component {...pageProps} />
    </>
    
  )
}
