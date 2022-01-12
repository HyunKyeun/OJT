import Inputs from "../components/Input";
import Lavel from "../components/lavel";
import Link from "next/link";
import Custombtn from "../components/custombtn";


export default function signUpPage() {

    return (
        <sign>
             <div className="input">
                <Lavel htmlfor="emails" post = "- E-Mail"/> 
                <Inputs id = "email" placeholder="E-Mail" type="email"/>
            </div>
            <div className="input">
                <Lavel htmlfor="name" post = "- 이름"/>
                <Inputs id="name" placeholder="이름" />
            </div>
            <div className="input">
                <Lavel htmlfor="userid" post = "- ID"/>
                <Inputs id="userid" placeholder="아이디" />
            </div>
            <div className="input">
                <Lavel htmlfor="userpw" post = "- PW"/>
                <Inputs id="userpw" placeholder="패스워드" type="password" />
            </div>
            <div className="btn">
                <Link href="/signedUp">
                    <a><Custombtn post="Sign Up"/></a>
                </Link>
                <Link href="/">
                    <a><Custombtn post="뒤로가기"/></a>
                </Link>
            </div>
        <style jsx>{`
        sign {
            display : flex;
            width : 100%;
            flex-direction : column;
            padding : 10 0 10 0  ;
                     
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
        `}</style>
        </sign>
        
    );
}