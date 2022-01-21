import Link from "next/link"
import Custombtn from "./custombtn";
import React , { useState } from "react";


export default function Header(){
        const [ModalOpened, setModalOpened] = useState(false);
    return(
        <logo>


        <div>
            
            <Link href="/">
                <a className="logos"><img src="/vercel.svg" /></a>
            </Link>
            {/* {!user.isLogged &&( */}
            <btn>
               <div>
                   <button 
                   type="button" 
                   className="custombtn"
                   onClick={() => setModalOpened(true)}>
                    회원 가입   
                   </button>
                   <button
                   type="button"
                   className="custombtn">
                       로그인
                   </button>
               </div>
            </btn>
        </div>
        {ModalOpened &&(
            <div className= "modal-wrapper">
                <div
                className="modal-background"
                role="presentation"
                onClick={() => setModalOpened(false)}
                />
                <div className="modal-contents" />
            </div>
        )}
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
        .custombtn{
            height : 40px;
            margin-right : 8px;
            padding : 0 16px;
            border : 0;
            border-radius : 20px;
            background-color : rgba(169,210,200,0.7);
            box-shadow : 0px 1px 2px rgba(0, 0, 0, 0.6);
            cursor : pointer;
        }
        .custombtn:hover{
            background-color : rgba(169,210,200,0.9);
            box-shadow : 0px 2px 8px rgba(0, 0, 0, 0.6);
        }
        .modal-wrapper {
            width: 100%;
            height : 100%;
            display : flex;
            justify-content : center;
            align-items : center;
            position : fixed;
            top : 0;
            left : 0;
            z-index : 10;
        }
        .modal-background {
            width : 100%;
            height : 100%;
            background-color : rgba(0,0,0,0.75);
           
        }
       .modal-contents {
            width : 400px;
            height : 400px;
            background-color : white;
            z-index : 13;
        }
       
        `}</style>
        </logo>
    );
}