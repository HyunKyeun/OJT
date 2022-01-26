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
  const [changedEmail, setchangeEmail] = useState("");
  const [changedName, setchangeName] = useState("");
  const [changedUserid, setchangeUserid] = useState("");
  const [changedUserpw, setchangeUserpw] = useState("");

  // 1. id가 빈칸이 아닐때. axios로 받아오기, 아니면 아이디를 입력해주세요
  // 2. 받아온값을 토대로 아이디 pw  확인 , email, 이름이 빈칸이 아닌경우 patch로 수정, 아니면 패스워드 틀렷으면 틀림, 모든 정보를 입력하세요
  // 3. 다 맞으면 수정 페이지로, 그외의 언해피한 상황의 경우 에러 발생 미안
  const onClick = (email, username, userid, userpw) => {
    {
      userid === ""
        ? toast("Put your ID ")
        : axios
            .get(`http://127.0.0.1:10001/userinfo/${userid}`)
            .then(function (response) {
              response.data.userid === userid &&
              response.data.userpw === userpw &&
              email !== "" &&
              username !== ""
                ? axios
                    .patch(`http://127.0.0.1:10001/userinfo/${userid}`, {
                      email: `${email}`,
                      name: `${username}`,
                    })
                    .then(function (response) {
                      router.push(`/Modified/${userid}`);
                    })
                    .catch(function (error) {
                      toast(`Unexpected error occuried sry`);
                    })
                : response.data.userpw !== userpw
                ? toast(`PW is Wrong`)
                : toast(`Put all material`);
            })
            .catch(function (error) {
              toast(`There are no user ID : ${userid}`);
            });
    }
  };

  const onClickToast = () => {
    toast("I didnt make it yet");
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
      <div className="input">
        <ToastContainer />
        <Lavel hf="emails" post="- E-Mail" />
        <Inputs
          id="email"
          placeholder="E-Mail"
          type="email"
          onChange={(e) => setchangeEmail(e.target.value)}
        />
      </div>
      <div className="input">
        <Lavel hf="name" post="- 이름" />
        <Inputs
          id="name"
          placeholder="이름"
          onChange={(e) => setchangeName(e.target.value)}
        />
      </div>
      <ToastContainer />
      <div className="btn">
        <div
          onClick={() =>
            onClick(changedEmail, changedName, changedUserid, changedUserpw)
          }
        >
          <a>
            <Custombtn post="수정하기" />
          </a>
        </div>
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
