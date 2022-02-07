import axios from "axios";

export default function Home(props) {
  const count = props.item;
  console.log(count);
  return (
    <>
      <div className="main">
        <h1>{count} user Info's are in MongoDB!</h1>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          width: 100%;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

//현재 nest에 저장된 갯수 확인
export async function getServerSideProps(props) {
  const response = await axios.get("http://127.0.0.1:10001/userinfo/");
  const data = response.data.length;

  return {
    props: {
      item: data,
    },
  };
}
