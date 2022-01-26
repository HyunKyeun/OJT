import axios from "axios";

export default function Home(props) {
  const count = props.item;
  console.log(count);
  return <h1>{count} user Info's are in Nest server!</h1>;
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
