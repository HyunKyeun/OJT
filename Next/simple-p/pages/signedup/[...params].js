import Link from "next/link";
import Custombtn from "../../components/custombtn";
import React from "react";
import { useRouter } from "next/router";

export default function SignedUpPage({params}) {
    console.log({params});
    const router = useRouter();
    var temp = params[0];
    console.log(temp);
    const [email, username, userid, userpw] = temp.split(",");    
    
    return (
    <>
        <div>
        <h4>Email : {email} </h4>
        </div>
        <div>
        <h4>Username : {username} </h4>
        </div>
        <div>
        <h4>User ID : {userid} </h4>
        </div>
        <div>
        <h4>User Password : {userpw} </h4>
        </div>
        <div>
            <Link href="/">
                <a><Custombtn post="메인으로 돌아가기"/></a>
            </Link>
        </div>
    <style jsx>{`
    div{
        position : relative;
        display : flex;
        align-items : center;
        justify-content : center;
    }
    `}</style>
    </>
    );
}
export function getServerSideProps({params:{params}}) {
        return{props: {
            params,
        },
    };
}