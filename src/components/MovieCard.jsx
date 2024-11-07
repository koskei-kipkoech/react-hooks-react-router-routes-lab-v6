//import { Link } from 'react-router-dom';

function MovieCard({ title, id }) {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <a href={`/movie/${id}`}>View Info</a>
    </div>
  );
}

export default MovieCard;
