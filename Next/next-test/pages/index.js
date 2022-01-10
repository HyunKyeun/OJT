import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
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
