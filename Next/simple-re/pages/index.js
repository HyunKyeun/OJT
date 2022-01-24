import axios from "axios";

export default function Home(props) {
  const userinfo = props.item;

  return <h1>{userinfo.year}</h1>;
}

export async function getServerSideProps(props) {
  await axios.post("http://localhost:10001/movies", {
    title: "hi post from next",
    year: 1425,
  });
  const response = await axios.get("http://127.0.0.1:10001/movies/2");
  const data = response.data;

  return {
    props: {
      item: data,
    },
  };
}
