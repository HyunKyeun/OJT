import Inputs from "../components/Input";
import Lavel from "../components/lavel";
import Link from "next/link";
import Custombtn from "../components/custombtn";

export default function LoginPage() {
    const alerting = () =>{
        return alert("Sry! I didnt make it yet");
    };
    return (
        <sign>
            <div className="input">
                <Lavel htmlfor="userid" post = "- ID"/>
                <Inputs id="userid" placeholder="아이디" />
            </div>
            <div className="input">
                <Lavel htmlfor="userpw" post = "- PW"/>
                <Inputs id="userpw" placeholder="패스워드" type="password" />
            </div>
            <div className="btn">
                <Link href="/gooded">
                    <a><Custombtn post="Login"/></a>
                </Link>
                <Link href="/">
                    <a><Custombtn post="뒤로가기"/></a>
                </Link>
            </div>
            <div className="btn">
            <Link href="/signUpPage">
                <a>만든다 너는 없으면 아이디</a>
                </Link>
            </div>
            <div className="btn">
            <Link href=" " >
            {/* onClick={() => alerting}> */}
                <a>찾는다 너는 까먹으면 아이디</a>
                </Link>
            </div>
        <style jsx>{`
        sign {
            display : flex;
            width : 100%;
            flex-direction : column;
            padding-top : 10px;
            padding-bottom : 10px;
                     
          }

        .input{
            padding-left : 80px;
            padding-right : 80px;
        }
        .btn{
            margin-top : 10px;
             display : flex;
             align-items : center;
             justify-content : center;
        }
        a:link {
            color : blue;
            text-decoration: underline;
            font-size : 13px;
          }
          a:visited {
            color : purple;
            text-decoration: underline;
            font-size : 13px;
          }
          a:hover {
            color : red;
            text-decoration: underline;
            font-size : 13px;
        }
        `}</style>
        </sign>
        
    );
}