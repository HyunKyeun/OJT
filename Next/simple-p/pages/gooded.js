import Link from "next/link";
import Custombtn from "../components/custombtn";

export default function LoggedinPage() {
    return (
    <>
        <div>
            <h3>you logged in!</h3>
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