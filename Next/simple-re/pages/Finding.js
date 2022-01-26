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
  const [changedName, setchangeName] = useState("");
  const onClick = (username) => {
    username === ""
      ? toast("Put all material")
      : axios
          .get(`http://127.0.0.1:10001/userinfo/${username}`)
          .then(function (response) {
            username === response.data.userid
              ? toast(`Your ID and name looks like same? huh`)
              : toast(`Your ID is ${response.data.userid}`);
          })
          .catch(function (error) {
            toast(`There is no Info about ${username}`);
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
