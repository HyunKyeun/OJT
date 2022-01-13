import Inputs from "../components/Input";
import Lavel from "../components/lavel";
import Link from "next/link";
import Custombtn from "../components/custombtn";
import React, { useState } from "react";
import { useRouter } from "next/router";



export default function signUpPage() {
    
    const [changedEmail,setchangeEmail] = useState("");
    const [changedName,setchangeName] = useState("");
    const [changedUserid,setchangeUserid] = useState("");
    const [changedUserpw,setchangeUserpw] = useState("");
    const router = useRouter();

    const onClick = (email,username,userid,userpw) => {
        router.push(`/signedup/${email},${username},${userid},${userpw}`)
    }
    return (
        <sig>
             <div className="input">
                <Lavel hf="emails"  post = "- E-Mail"/> 
                <Inputs id = "email" placeholder="E-Mail" type="email" onChange={e => setchangeEmail(e.target.value)}/>
             </div>
            <div className="input">
                <Lavel hf="name" post = "- 이름"/>
                <Inputs id="name" placeholder="이름" onChange={e => setchangeName(e.target.value)}/>
            </div>
            <div className="input">
                <Lavel hf="userid" post = "- ID"/>
                <Inputs id="userid" placeholder="아이디" onChange={e => setchangeUserid(e.target.value)}/>
            </div>
            <div className="input">
                <Lavel hf="userpw" post = "- PW"/>
                <Inputs id="userpw" placeholder="패스워드" type="password" onChange={e => setchangeUserpw(e.target.value)}/>
            </div>
            <div className="btn">
                <div onClick={() => onClick(changedEmail,changedName,changedUserid,changedUserpw)}>
                    <a><Custombtn post="Sign Up"/></a>
                    </div>
                <Link href="/">
                    <a><Custombtn post="메인으로"/></a>
                </Link>
            </div>
        <style jsx>{`
        sig {
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
        </sig>
        
    );
    
}