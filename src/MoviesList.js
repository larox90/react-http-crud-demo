import { useEffect, useState } from "react";
import MoviesListItem from './MoviesListItem';

function MoviesList(props) {
  const [movies, setMovies] = useState([]);
  const { refresh } = props;

  const fetchMovies = async () => {
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

  const deleteMovie = async (id) => {
    await fetch(`https://react-http-crud-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method: 'DELETE'
    });
    fetchMovies();
  }

  useEffect(() => {
    fetchMovies();
  }, [refresh]);

  let content = '';
  if (movies && movies.length) {
    content = movies.map(movie => {
      return <MoviesListItem key={movie.id}  movie={movie} deleteMovie={deleteMovie} />
    })
  }

  return (
    <div className="MoviesList">
      { content }
    </div>
  );
}

export default MoviesList;