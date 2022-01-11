import Link from "next/link";
import {useRouter} from "next/router"
 
export default function Navbar(){
    const router = useRouter();

    return(
      <nav>
        <img src="/vercel.svg" />
        <div>
          {/* 링크들위치 및 pathname 저장 + 현재페이지일 경우 active로 색 변화 */}
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/hello">
            <a className={router.pathname === "/hello" ? "active" : ""}>Movie</a>
          </Link>
          <Link href="/posts/test/1">
            <a className={router.pathname === "/posts/test/1" ? "active" : ""}>About</a>
          </Link>
        </div>
        <style jsx>{`
          nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          img {
            max-width: 100px;
            margin-bottom: 5px;
          }
          nav a {
            font-weight: 600;
            font-size: 18px;
          }
          .active {
            color: tomato;
          }
          nav div {
            display: flex;
            gap: 10px;
          }
        `}</style>
      </nav>
    );
}
//----
// import Link from "next/link";
// import {useRouter} from "next/router"

// export default function Navbar3(){
//     const router = useRouter();
//     console.log(router);
//     return(
//      <nav>
//         <Link href ="/">
//         <a style = {{color : router.pathname === "/" ? "red" : "blue" }}>home</a>
//         </Link>

//         <Link href = "/posts/test/1">
//         <a style = {{color : router.pathname === "/posts/test/1" ?  "red" : "blue" }}>About</a>
//         </Link>
//     </nav>
//     )
// }
//----
// import Link from "next/link";
// import {useRouter} from "next/router"
// import styles from "./NavBar.module.css";


// export default function Navbar(){
//     const router = useRouter();
//     console.log(router);
//     return(
//         <nav>
//             <Link href ="/">
//             <a className={`${styles.link} ${router.pathname === "/" ? styles.active : styles.inactive}`}>home</a>
//             </Link>

//              <Link href = "/posts/test/1">
//             <a className={[styles.link, router.pathname === "/posts/test/1" ? styles.active : styles.inactive].join(" ")}>About</a>
//              </Link>
//          </nav>
//     )
// }
// ----
// import Link from "next/link";
// import {useRouter} from "next/router"
 
// export default function Navbar(){
//     const router = useRouter();

//     return(
//         <nav>
//             <Link href ="/">
//             <a className = {router.pathname === "/" ? "active" : "inactive" }>home</a>
//             </Link>

//              <Link href = "/posts/test/1">
//              <a className = {router.pathname === "/posts/test/1" ? "active" : "inactive" }>About</a>
//              </Link>
//              <style jsx>{`
//              nav {
//                  background-color: tomato;
//              }
//              a {
//                  text-decoration: underline;
//              }
//              .active{
//                  color: blue;
//              }
//              .inactive{
//                 color: yellow;
//              }
//              `}</style>
            
//          </nav>
//     );
// }