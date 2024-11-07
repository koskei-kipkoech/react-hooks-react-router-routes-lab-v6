import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const {id} = useParams();
  const[movie,setMovies] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  },[id])
  if (!movie) return <p>Loading...</p>
  return (
    <>
      <header>
        <NavBar/>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time}</p>
        <div>
            {movie.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
        </div>
        
      </main>
    </>
  );
};

export default Movie;
