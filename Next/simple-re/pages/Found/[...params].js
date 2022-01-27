import Link from "next/link";
import { useRouter } from "next/router";
import Custombtn from "../../components/custombtn";
import Lavel from "../../components/lavel";
import Inputs from "../../components/Input";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function LoggedinPage({ params }) {
  const router = useRouter();
  //console.log(params)
  const [userID] = params;
  const [changedUserpw, setchangeUserpw] = useState("");
  const [changedUserpw2, setchangeUserpw2] = useState("");

  const onClick = (userID, userpw, userpw2) => {
    userpw === "" || userpw2 === ""
      ? toast("Put all material")
      : axios
          .patch(`http://127.0.0.1:10001/userinfo/${userID}`, {
            userpw: `${userpw}`,
          })
          .then(function (response) {
            router.push(`/Modified/${userID}`);
          })
          .catch(function (error) {
            toast("Unexpected error");
          });
  };
  return (
    <sig>
      <div>
        <div className="input">
          <Lavel hf="userID" post="- 유저 ID" />
          <input
            className="tag"
            id="userid"
            value={userID}
            readonly="able"
            onChange={(e) => setchangeUserpw(e.target.value)}
          />
        </div>
        {/* <h3>{userID}</h3> */}
      </div>
      <ToastContainer />
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
        <Lavel hf="userpw" post="- PW" />
        <Inputs
          id="userpw2"
          placeholder="패스워드 재입력하기"
          type="password"
          onChange={(e) => setchangeUserpw2(e.target.value)}
        />
      </div>
      <div className="btn">
        <div onClick={() => onClick(userID, changedUserpw, changedUserpw2)}>
          <a>
            <Custombtn post="비밀번호 수정하기" />
          </a>
          <Link href="/">
            <a>
              <Custombtn post="메인으로 돌아가기" />
            </a>
          </Link>
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
        .inputs {
          padding-left: 80px;
          padding-right: 80px;
          background-color: hsla(50, 33%, 25%, 0.75);
        }
        .btn {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tag {
          position: relative;
          width: 100%;
          height: 40px;
          background-color: #d1d1d1;
          border: 3px solid rgba(169, 210, 200, 0.6);
          border-radius: 3px;
        }
        .tag:hover {
          border: 3px solid rgba(169, 210, 200, 0.9);
        }
      `}</style>
    </sig>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
