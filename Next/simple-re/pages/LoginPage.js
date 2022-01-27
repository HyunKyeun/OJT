import Inputs from "../components/Input";
import Lavel from "../components/lavel";
import Link from "next/link";
import Custombtn from "../components/custombtn";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  // input 박스 data가 바뀔때마다 캐치하여 저장
  const [changedUserid, setchangeUserid] = useState("");
  const [changedUserpw, setchangeUserpw] = useState("");
  // 클릭시 아이디, 비번 확인해서  axios로 nest에 데이터 받아오기
  // 받아온 데이터와 입력된 id, pw 일치하면 넘어가고 아니면 에러 토스트
  const onClick = (userid, userpw) => {
    {
      userid === "" || userpw === ""
        ? toast("Please write ID and PW")
        : axios
            .get(`http://127.0.0.1:10001/userinfo/${userid}`)
            .then(function (response) {
              response.data.userid === userid && response.data.userpw === userpw
                ? router.push(`loggedin/${userid}`)
                : toast("Your PW isn't correct");
            })
            .catch(function (error) {
              toast(`There are no user ID : ${userid}`);
            });
    }
  };
  return (
    <sig>
      <div className="input">
        <Lavel hf="userid" post="- ID" />
        <Inputs
          id="userid"
          placeholder="아이디"
          onChange={(e) => setchangeUserid(e.target.value)}
        />
      </div>
      <div className="input">
        <Lavel hf="userpw" post="- PW" />
        <Inputs
          id="userpw"
          placeholder="패스워드"
          type="password"
          onChange={(e) => setchangeUserpw(e.target.value)}
        />
      </div>
      <ToastContainer />
      <div className="btn">
        <div onClick={() => onClick(changedUserid, changedUserpw)}>
          <a>
            <Custombtn post="Login" />
          </a>
        </div>
        <Link href="/">
          <a>
            <Custombtn post="뒤로가기" />
          </a>
        </Link>
      </div>
      <div className="btn">
        <Link href="/signUpPage">
          <a>만든다 너는 없으면 아이디</a>
        </Link>
      </div>
      <div className="btn">
        <Link href="/Finding">
          <a>찾는다 너는 까먹은 아이디</a>
        </Link>
      </div>

      <style jsx>{`
        sig {
          display: flex;
          width: 100%;
          flex-direction: column;
        }

        .input {
          padding-left: 80px;
          padding-right: 80px;
        }
        .btn {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        a {
          color: blue;
          text-decoration: underline;
          font-size: 14px;
        }
        a:visited {
          color: purple;
          text-decoration: underline;
          font-size: 14px;
        }
        a:hover {
          color: red;
          text-decoration: underline;
          font-size: 14px;
        }
      `}</style>
    </sig>
  );
}
