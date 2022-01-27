import "../styles/globals.css";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="wrapper">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
