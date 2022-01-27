import axios from "axios";

export default function Home(props) {
  const userinfo = props.item;

  return <h1>{userinfo.year}</h1>;
}
// async 랑 await은 함께 쓰기
export async function getServerSideProps(props) {
  await axios.post("http://localhost:10001/userinfo", {
    userid: "testaxios",
    userpw: "1234",
    email: "dd@dddd.dd",
    name: "nhk",
  });
  const response = await axios.get("http://127.0.0.1:10001/userinfo/testaxios");
  const data = response.data;

  return {
    props: {
      item: data,
    },
  };
}
