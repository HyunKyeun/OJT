import Link from "next/link";
import Custombtn from "../components/custombtn";
import React from "react";
import { useRouter } from "next/router";

export default function SignedUpPage() {
  return (
    <>
      <div>
        <h4>Deleted successfully Ty!</h4>
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
