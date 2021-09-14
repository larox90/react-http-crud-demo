import { useEffect, useState } from "react";

export function MoviesListItem (props) {
  const { movie } = props;
  return (
    <div className="MoviesListItem">
      <div className="MoviesListItem__header">
        <button>edit</button>
        <button>delete</button>
      </div>
      <div className="MoviesListItem__body">
        <div className="MovieListItem__text">
          <h2> { movie.title } </h2>
          <p> { movie.summary } </p>
        </div>
        <div className="MovieListItem__poster" style={{ 'backgroundImage': `url("${movie.poster}")` }} />
      </div>
    </div>
  );
}
function MoviesList(props) {
  const [movies, setMovies] = useState([]);
  const { refresh } = props;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('https://react-http-crud-default-rtdb.firebaseio.com/movies.json');
      const data = await response.json();
      let formattedMovies = [];
      for (const key in data) {
        formattedMovies.push({
          id: key,
          poster: data[key].poster,
          summary: data[key].summary,
          title: data[key].title
        });
      }
      formattedMovies.reverse();
      setMovies(formattedMovies);
    }
    fetchMovies();
  }, [refresh]);
  let content = '';
  if (movies && movies.length) {
    content = movies.map(movie => {
      return <MoviesListItem key={movie.id}  movie={movie} />
    })
  }

  return (
    <div className="MoviesList">
      { content }
    </div>
  );
}

export default MoviesList;