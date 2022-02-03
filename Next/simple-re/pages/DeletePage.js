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
  const [changedUserid, setchangeUserid] = useState("");
  const [changedUserpw, setchangeUserpw] = useState("");
  const [changedUserpw2, setchangeUserpw2] = useState("");

  // 필요 변수 id pw pw재입력
  // 1. 등록된 id pw를 확인후
  // 2. pw와 재입력 pw가 같으면
  // 3. 삭제
  const onClick = (userid, userpw, userpw2) => {
    {
      userid === ""
        ? toast("Put your ID ")
        : axios
            .post(`http://127.0.0.1:10001/delete/${userid}`, {
              userpw1: `${userpw}`,
              userpw2: `${userpw2}`,
            })
            .then(function (response) {
              router.push(`/Deleted`);
            })
            .catch(function (error) {
              toast(error.response.data.error);
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
      <div className="input">
        <Lavel hf="userpw" post="- PW 재확인" />
        <Inputs
          id="userpw"
          placeholder="패스워드 재확인"
          type="password"
          onChange={(e) => setchangeUserpw2(e.target.value)}
        />
      </div>

      <ToastContainer />
      <div className="btn">
        <div
          onClick={() => onClick(changedUserid, changedUserpw, changedUserpw2)}
        >
          <a>
            <Custombtn post="삭제하기" />
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
