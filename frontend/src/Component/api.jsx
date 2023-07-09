import axios from "axios"
const apiKey = `proocess.env.REACT_APP_TMDB_KEY`;
const baseUrl = `process.env.REACT_APP_BASE_URL`;
// export const getMovieList = async() => {

//     const movie = await axios.get(`${baseUrl}/movies/popular?api_key=${apiKey}`
//     )
//     // console.log({ MovieList: movie })
//     return movie.data.results
    
// }


// export const searchMovie = async(q) => {
//     const search = await axios.get(q)
//     return
// }

export const getMovieList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/movies/popular?api_key=${apiKey}`);
      console.log({ MovieList: response.data });
      return response.data;
    } catch (error) {
      console.error("Error fetching movie list:", error);
      throw error;
    }
  };
  
  export const searchMovie = async (q) => {
    try {
      const response = await axios.get(q);
      return response.data;
    } catch (error) {
      console.error("Error searching movie:", error);
      throw error;
    }
  };
  



// import axios from "axios";

// const apiKey = process.env.REACT_APP_TMDB_KEY;
// const baseUrl = process.env.REACT_APP_BASE_URL;

// export const getMovieList = async () => {
//   const movie = await axios.get(`${baseUrl}/movies/popular?api_key=${apiKey}`);
//   console.log({ MovieList: movie.data });
//   return movie.data;
// };

// export const searchMovie = async (q) => {
//   const search = await axios.get(q);
//   return search.data;
// };
