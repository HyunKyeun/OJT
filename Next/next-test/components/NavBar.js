import Link from "next/link";
import {useRouter} from "next/router"
 
export default function Navbar(){
    const router = useRouter();

    return(
        <nav>
            <Link href ="/">
            <a className = {router.pathname === "/" ? "active" : "" }>home</a>
            </Link>

             <Link href = "/posts/test/1">
             <a className = {router.pathname === "/posts/test/1" ? "active" : "" }>About</a>
             </Link>
             <style jsx>{`
             nav {
                 background-color: tomato;
             }
             a {
                 text-decoration: underline;
             }
             .active{
                 color: blue;
             }
             .inactive{
                color: yellow;
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