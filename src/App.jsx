import React, {useState} from 'react';
import './App.css';
import MovieTable from './Components/MovieTable';
import Filter from './Components/Filter';
import movie from "./Data/movieData.json";

function App() {
  
  const [filtered, setFiltered] = useState(movie);  

  return (
    <div className='app'>
      <h2 className='text-center fw-bold'>Movies List</h2>
      <Filter onFilterChange={setFiltered}/>
      <MovieTable movies={filtered}/>
    </div>
    );
}

export default App;
