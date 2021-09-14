import './App.css';
import MoviesList from './MoviesList';
import MovieForm from './MovieForm';
import { useState } from 'react';

function App() {
  const [ refresh, setRefresh ] = useState(Date.now());
  const [ editingMovie, setEditingMovie ] = useState(null);
  const handleRefresh = () => {
    setRefresh(Date.now());
  }
  const handleEditingMovie = (movie) => {
    setEditingMovie(movie)
  }
  return (
    <div className="App">
      <MovieForm onRefresh={handleRefresh} movieToEdit={editingMovie} editMovie={handleEditingMovie} />
      <MoviesList refresh={refresh} editMovie={handleEditingMovie} />
    </div>
  );
}

export default App;
