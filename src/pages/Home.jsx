import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar"

function Home() {
const [movies, setMovies] = useState([])

useEffect(() =>{
  fetch("http://localhost:4000/movies")
  .then((res) => res.json())
  .then((data) => setMovies(data))
  .catch((error) => console.error(error))
}, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
          ))
        ):(
          <p>No movies found</p>
        )}
      </main>
    </>
  );
}

export default Home;