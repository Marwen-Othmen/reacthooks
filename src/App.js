import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MovieListe from './compoments/MovieListe';
import Header from './compoments/Header';
import AddNewMovie from './compoments/AddNewMovie';
import { Data } from './Data';

function App() {
  const [Movie, setMovie] = useState(Data);
  const addnewmovie=(x)=>{
    setMovie([...Movie,x])
    console.log(Movie)
  }
  const filterMovie=(searchText,rating)=>{
    setMovie(Movie.filter(el=> el.rating>=rating && el.title.toLowerCase().includes(searchText.toLowerCase())))
 }
  return <div>
    <Header filterMovie={filterMovie}/>
    <AddNewMovie ADD={addnewmovie} />
    <MovieListe data={Movie} />
  </div>;
}

export default App;
