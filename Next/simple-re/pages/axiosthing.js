import axios from "axios";

export default function Home(props) {
  const userinfo = props.item;

  return <h1>{userinfo.year}</h1>;
}

// async 랑 await은 함께 쓰기
export async function getServerSideProps(props) {
  // post시 형식 잘 맞춰주고(파이프 설정시 걸릴 가능성 높음)
  await axios.post("http://localhost:10001/movies", {
    title: "hi post from next",
    year: "1425",
  });
  //get은 받아와서 props 넣어주고
  const response = await axios.get("http://127.0.0.1:10001/movies/1");
  const data = response.data;

  return {
    props: {
      item: data,
    },
  };
}
