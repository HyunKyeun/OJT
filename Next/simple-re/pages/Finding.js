import Inputs from "../components/Input";
import Lavel from "../components/lavel";
import Link from "next/link";
import Custombtn from "../components/custombtn";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Finding() {
  const [changedUserid, setchangeUserid] = useState("");
  const [changedName, setchangeName] = useState("");

  const router = useRouter();

  const onClick = (username) => {
    username === ""
      ? toast("Put all material")
      : axios
          .get(`http://127.0.0.1:10001/found/${username}`)
          .then(function (response) {
            toast(`Your ID is ${response.data.userid}`);
          })
          .catch(function (error) {
            toast(`There is no name about ${username}`);
          });
  };

  const onClickchange = (userid) => {
    userid === ""
      ? toast("Put ID please")
      : axios
          .get(`http://127.0.0.1:10001/userinfo/${userid}`)
          .then(function (response) {
            router.push(`/Found/${response.data.userid}`);
          })
          .catch(function (error) {
            toast(`There is no Info about ${userid}`);
          });
  };

  return (
    <sig>
      <ToastContainer />
      <div className="input">
        <Lavel hf="name" post="- 이름" />
        <Inputs
          id="name"
          placeholder="이름"
          onChange={(e) => setchangeName(e.target.value)}
        />
      </div>
      <div className="btn">
        <div onClick={() => onClick(changedName)}>
          <a>
            <Custombtn post="찾기" />
          </a>
        </div>
      </div>
      <div className="input">
        <Lavel hf="userid" post="- ID" />
        <Inputs
          id="userid"
          placeholder="아이디"
          onChange={(e) => setchangeUserid(e.target.value)}
        />
      </div>
      <div className="btn">
        <div onClick={() => onClickchange(changedUserid)}>
          <a>
            <Custombtn post="비밀번호 수정하기" />
          </a>
        </div>
        <Link href="/">
          <a>
            <Custombtn post="메인으로" />
          </a>
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
      `}</style>
    </sig>
  );
}
