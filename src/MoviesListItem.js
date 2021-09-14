function MoviesListItem (props) {
  const { movie, deleteMovie } = props;
  return (
    <div className="MoviesListItem">
      <div className="MoviesListItem__header">
        <button>edit</button>
        <button onClick={()=>deleteMovie(movie.id)}>delete</button>
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

export default MoviesListItem;