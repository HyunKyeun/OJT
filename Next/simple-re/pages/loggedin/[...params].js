import Link from "next/link";
import { useRouter } from "next/router";
import Custombtn from "../../components/custombtn";

export default function LoggedinPage({params}) {
    const router = useRouter
    console.log(params)
   const[userid] = params;
    
    return (
    <>
        <div>
            <h3>{userid}님 logged in!</h3>
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