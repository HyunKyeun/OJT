import Link from "next/link";
import { useReducer } from "react";
import Custombtn from "./custombtn";

export default function Logo() {
  return (
    <logo>
      <div>
        <Link href="/">
          <a className="logos">
            <img src="/vercel.svg" />
          </a>
        </Link>
      </div>

      <btn>
        <Link href="/Finding">
          <a>
            <Custombtn post="아이디 찾기" />
          </a>
        </Link>
        <Link href="/signUpPage">
          <a>
            <Custombtn post="회원가입" />
          </a>
        </Link>
        <Link href="/LoginPage">
          <a>
            <Custombtn post="로그인" />
          </a>
        </Link>
      </btn>

      <style jsx>{`
        logo {
          display: flex;
          width: 100%;
          flex-direction: column;
          margin: 0 auto;
          padding-top: 10px;
          padding-bottom: 10px;
          box-shadow: rgba(0, 0, 0, 0.8) 0px 1px 12px;
          align-items: center;
        }
        logo:hover btn {
          display: flex;
        }
        img {
          max-width: 100px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        logo div {
          display: flex;
          gap: 10px;
          padding-right: 10px;
        }
        .logos {
          display: flex;
          margin-left: 10px;
          align-itmes: center;
        }

        btn {
          display: none;
        }
      `}</style>
    </logo>
  );
}
