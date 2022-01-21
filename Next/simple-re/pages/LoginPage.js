import Inputs from "../components/Input";
import Lavel from "../components/lavel";
import Link from "next/link";
import Custombtn from "../components/custombtn";
import { useRouter } from "next/router";
import { useState } from "react";


export default function LoginPage() {
    const TempID = process.env.NEXT_PUBLIC_TEMP_ID;
    const TempPW = process.env.NEXT_PUBLIC_TEMP_PW;
    
    const router = useRouter();

    const [changedUserid,setchangeUserid] = useState("");
    const [changedUserpw,setchangeUserpw] = useState("");

    // const onClick = (userid) => {
    //     ((TempID === changedUserid) && (TempPW === changedUserpw)) ? router.push(`loggedin/${userid}`) : toast.notify("You put wrong")
    // };

    const onClick = (userid) => {
        ((TempID === changedUserid) && (TempPW === changedUserpw)) ? router.push(`loggedin/${userid}`) : router.push(`/`)
    };
    // const onClickToast =() => {
    //     toast.notify("I didnt make it yet");
    // };
    return (
        <sig>
            <div className="input">
                <Lavel hf="userid" post = "- ID"/>
                <Inputs id="userid" placeholder="아이디" onChange={e => setchangeUserid(e.target.value)}/>
            </div>
            <div className="input">
                <Lavel hf="userpw" post = "- PW"/>
                <Inputs id="userpw" placeholder="패스워드" type="password" onChange={e => setchangeUserpw(e.target.value)}/>
            </div>
            {/* <ToastContainer /> */}
            <div className="btn">
                <div onClick={() => onClick(changedUserid)} >
                    <a><Custombtn post="Login"/></a>
                    </div>
                <Link href="/">
                    <a><Custombtn post="뒤로가기"/></a>
                </Link>
            </div>
            <div className="btn">
            <Link href="/signUpPage">
                <a>만든다 너는 없으면 아이디</a>
                </Link>
                </div>
            <div className = "btn" onClick={() => onClickToast()}>
                <a>찾는다 너는 까먹은 아이디</a>
             </div>
            
        <style jsx>{`
        sig {
            display : flex;
            width : 100%;
            flex-direction : column;
                     
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
        
        a {
            color : blue;
            text-decoration: underline;
            font-size : 14px;
          }
          a:visited {
            color : purple;
            text-decoration: underline;
            font-size : 14px;
          }
          a:hover {
            color : red;
            text-decoration: underline;
            font-size : 14px;
        }
        `}</style>
        </sig>
        
    );
}