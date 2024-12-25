import  { useEffect, useState } from "react";
import "./Home.scss";
import React from 'react'
import {fetchFromTMDB} from "../../Services.js";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Card = ({img}) =>(
<img className="card" src={img} alt="cover" />

)
const Row = ({title,arr= []})=>(
 <div className="row">
     <h2>{title}</h2>
     <div>
     {
         arr.map((item, index) => (
                <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))
            
     }
     </div>
 </div>

)
const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularMoviesData = await fetchFromTMDB(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
        );
        
        setPopularMovies(popularMoviesData.results);
      } catch (error) {
        console.error("Error fetching TMDB data:", error);
      }
    }
    
    fetchData();
}, []);
  return (
    <section className="home">
   <div className="banner"  style={{backgroundImage :`url(${`${imgUrl}/${popularMovies[0]}`})`}}>     </div>
  <Row title={"Popular on the Netflix"} arr={popularMovies} />
    </section>
  )
}

export default Home