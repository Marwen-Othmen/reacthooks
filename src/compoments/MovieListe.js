import React from 'react';
import MovieCard from './MovieCard';

const MovieListe = ({data}) => {
  return <div  style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:15}}>
{data.map (y=><MovieCard key={y.id} title={y.title} rate={y.rate} description={y.description} image={y.posterUrl} trailer={y.trailer} />) };

  </div>;
};

export default MovieListe;
