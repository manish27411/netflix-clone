import react, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
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
    const [playingMovies, setPlayingMovies] = useState([]);
    const [ratedMovies, setRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularMoviesData = await fetchFromTMDB(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
        );
        const playingMoviesData=await fetchFromTMDB(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
        );
       const ratedMoviesData=await fetchFromTMDB(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
        );
        upcomingMovies= await fetchFromTMDB(
          'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
        );
        setPlayingMovies(playingMoviesData.results);
        setPopularMovies(popularMoviesData.results);
         setRatedMovies(ratedMoviesData.results);
        setUpcomingMovies(upcomingMovies.results);
      } catch (error) {
        console.error("Error fetching TMDB data:", error);
      }
    }
    
    fetchData();
}, []);
  return (
    <section className="home">
   <div className="banner"  style={{backgroundImage: popularMovies[0]
                        ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
                        : "rgb(16, 16, 16)",}}>     </div>
  <Row title={"Popular on the Netflix"} arr={popularMovies} />
  <Row title={"Now Playing Movies"} arr={playingMovies} />
  <Row title={"Top Rated on the Netflix"} arr={ratedMovies} />
  <Row title={"Upcoming Movies"} arr={upcomingMovies} />
    </section>
  )
}
export default Home