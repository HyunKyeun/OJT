import Link from "next/link"
import Custombtn from "./custombtn";

export default function Logo(){
    return(
        <logo>
            
        <div>
            <Link href="/">
                <a className="logos"><img src="/vercel.svg" /></a>
            </Link>
            <btn>
                <Link href="/signUpPage">
                <a><Custombtn post="회원가입"/></a>
                </Link>
                <Link href="/LoginPage">
                <a><Custombtn post="로그인"/></a>
                </Link>
            </btn>
        </div>
        
        <style jsx>{`
        logo {
            display : flex;
            width : 100%;
            flex-direction : column;
            padding-top : 10px;
            padding-bottom : 10px;
            box-shadow : rgba(0, 0, 0, 0.8) 0px 1px 12px;
            
          }
        img {
            max-width: 100px;
            margin-top : 5px;
            margin-bottom : 5px;
        }
        logo div {
            display: flex;
            gap: 10px;
            padding-right : 10px;
            
        }
        .logos {
            display : flex;
            margin-left : 10px;
            align-itmes : center;
        }
              
        btn{
            margin-left: auto;
        }
        `}</style>
        </logo>
    );
}