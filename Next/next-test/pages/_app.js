import Layout from "../components/layout";
import "../styles/globals.css";

// 모든 페이지 작성시 _app을 실행
// layout.js를 실행 하여 Layout 생성 후 pageProps를 이용하여 컴포넌트 출력
// ex) 첫 페이지 실행시 _app실행후 index.js를 실행
export default function myApp({Component, pageProps}){
  return ( 
    <Layout>
      <Component {...pageProps} />;
    </Layout>
    
  );
}