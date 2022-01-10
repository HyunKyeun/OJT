import Navbar from "../components/NavBar";
import "../styles/globals.css";

export default function myApp({Component, pageProps}){
  return ( 
      <>
      <Navbar />
      <Component {...pageProps} />;
      <style jsx global>{`
      a {
        color : white;
      }
      `}</style>
    </>
    
  );
}