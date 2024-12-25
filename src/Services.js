import axios from "axios";

const tmdb_key ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M0YjA1ZGYzZGE5ZGIyNWQ2MTZhYjAyM2ZiMjkxOSIsIm5iZiI6MTczNDU5ODc0MC41ODYsInN1YiI6IjY3NjNlMDU0MGU5ZGMzMjgyY2FiMDIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UE-qsLO9A-sp4FhM7SW10y0bTsaJY4DwDWFBNWhVtfs';

  //'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export const fetchFromTMDB = async (url)=> {
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+tmdb_key
        }
   }
   const responce = await axios.get(url,options);
   
   return responce.data;
}
   

    