import Link from "next/link";
import Custombtn from "../../components/custombtn";
import React from "react";
import { useRouter } from "next/router";

// router로 받아온 id를 띄움

export default function SignedUpPage({ params }) {
  const router = useRouter();
  let temp = params[0];
  // const [email, username, userid, userpw] = temp.split(",");

  return (
    <>
      <div>
        <h4>User ID : {temp} </h4>
      </div>
      <div>
        <Link href="/">
          <a>
            <Custombtn post="메인으로 돌아가기" />
          </a>
        </Link>
      </div>
      <style jsx>{`
        div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
