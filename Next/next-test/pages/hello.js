import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";


//SSR 결과값 result사용
export default function Home({results}) {
  const router = useRouter();

//onClick함수 구현
  const onClick = (id,title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    
    <div className="container">
      <Seo title="Home" />
      {/* result 패러미터를 이용하여 사진 이름  */}
      {results?.map((movie) => (
          //  navigating 1번째방법 onclick으로 구현
          <div onClick = {() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
             {/* navigating 2번째 Link를 통해 다음 주소로 이동 */}
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>{movie.original_title}</a>
            </Link>
            </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// SSR을 통해 클라이언트측렌더링이 아닌 서버 렌더링
// HTML형태로 만들어서 출력 그 출력물을 Home 컴포넌트에서 이용
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:10000/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
// export default function Home2() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <h1>Hello {counter}</h1>
//       <button onClick={() => setCounter((prev) => prev + 2)}>+</button>
//       <button onClick={() => setCounter(0)}>reset</button>
//     </div>
//   )
// }

// import Navbar from "../components/NavBar";


// export default function Home3() {
//   return (
//     <div>
//       <Navbar />
//       <h1>Hello</h1>
//     </div>
//   )
// }
