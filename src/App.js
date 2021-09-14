import './App.css';
import MoviesList from './MoviesList';
import MovieForm from './MovieForm';
import { useState } from 'react';

function App() {
  const [ refresh, setRefresh ] = useState(Date.now());
  const handleRefresh = () => {
    setRefresh(Date.now());
  }
  return (
    <div className="App">
      <MovieForm onRefresh={handleRefresh} />
      <MoviesList refresh={refresh} />
    </div>
  );
}

export default App;
