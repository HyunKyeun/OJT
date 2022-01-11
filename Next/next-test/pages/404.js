import Link from "next/link";


// 잘못된주소로 접근시 표현할 404notfound페이지 
export default function NotFound() {
    return (
        <div>
            <h3>You are in wrong page</h3>
            <Link href="/">
            <a>Home</a>
            </Link>

        </div>
    )
};