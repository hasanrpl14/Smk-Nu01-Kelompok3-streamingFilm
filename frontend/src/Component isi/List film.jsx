// import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import movieImage from "../assets/bg/avecover.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
// import axios from "axios"


const List = () => {
  // const [movies, setMovies] = useState([])
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
  //     params: {
  //       api_key: process.env.REACT_APP_TMDB_KEY
  //     }
  //   }).then((response) => {
  //     setMovies(response.data.results)
  //   })
  // }, [])


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };


  return (
    <>
      <h1 className="text-2xl text-red-600 font-semibold text-center underline underline-offset-8" id="populer">Populer</h1>
      <br /><br />

      <carousel className="flex justify-center items-center"> 
      <div className="w-4/5">
        <Slider {...settings} className="">
          <div className="slider single-item">
          <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-8 hover:w-52 hover:h-72 duration-700 border-white border-4 hover:border-black" style={{ backgroundImage: `url(${movieImage})` }}>
          <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
            <div className="absolute bottom-12 w-full h-56 text-white flex flex-col content-evenly pt-12 px-6">
              <p className="text-2xl font-semibold">Black Adams</p>
              <p className="text-sm text-white">2022, Anthony Russo</p>
              <p className="text-sm text-white">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-red-600 text-base font-semibold cursor-pointer mt-3">
                  <a href="rincian">Watch Now</a>
                  <FontAwesomeIcon icon={faPlay} className="ml-1" style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div>
          <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-52 hover:h-72 duration-700 border-white border-4 hover:border-black" style={{ backgroundImage: `url(${movieImage})` }}>
          <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
            <div className="absolute bottom-12 w-full h-56 text-white flex flex-col content-evenly pt-12 px-6">
              <p className="text-2xl font-semibold">Black Adams</p>
              <p className="text-sm text-white">2022, Anthony Russo</p>
              <p className="text-sm text-white">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-red-600 text-base font-semibold cursor-pointer mt-3">
                  <a href="rincian">Watch Now</a>
                  <FontAwesomeIcon icon={faPlay} className="ml-1" style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div>
          <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-52 hover:h-72 duration-700 border-white border-4 hover:border-black" style={{ backgroundImage: `url(${movieImage})` }}>
          <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
            <div className="absolute bottom-12 w-full h-56 text-white flex flex-col content-evenly pt-12 px-6">
              <p className="text-2xl font-semibold">Black Adams</p>
              <p className="text-sm text-white">2022, Anthony Russo</p>
              <p className="text-sm text-white">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-red-600 text-base font-semibold cursor-pointer mt-3">
                  <a href="rincian">Watch Now</a>
                  <FontAwesomeIcon icon={faPlay} className="ml-1" style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div>
          <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-52 hover:h-72 duration-700 border-white border-4 hover:border-black" style={{ backgroundImage: `url(${movieImage})` }}>
          <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
            <div className="absolute bottom-12 w-full h-56 text-white flex flex-col content-evenly pt-12 px-6">
              <p className="text-2xl font-semibold">Black Adams</p>
              <p className="text-sm text-white">2022, Anthony Russo</p>
              <p className="text-sm text-white">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-red-600 text-base font-semibold cursor-pointer mt-3">
                  <a href="rincian">Watch Now</a>
                  <FontAwesomeIcon icon={faPlay} className="ml-1" style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div>
          <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-52 hover:h-72 duration-700 border-white border-4 hover:border-black" style={{ backgroundImage: `url(${movieImage})` }}>
          <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
            <div className="absolute bottom-12 w-full h-56 text-white flex flex-col content-evenly pt-12 px-6">
              <p className="text-2xl font-semibold">Black Adams</p>
              <p className="text-sm text-white">2022, Anthony Russo</p>
              <p className="text-sm text-white">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-red-600 text-base font-semibold cursor-pointer mt-3">
                  <a href="rincian">Watch Now</a>
                  <FontAwesomeIcon icon={faPlay} className="ml-1" style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div>
          <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-52 hover:h-72 duration-700 border-white border-4 hover:border-black" style={{ backgroundImage: `url(${movieImage})` }}>
          <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
            <div className="absolute bottom-12 w-full h-56 text-white flex flex-col content-evenly pt-12 px-6">
              <p className="text-2xl font-semibold">Black Adams</p>
              <p className="text-sm text-white">2022, Anthony Russo</p>
              <p className="text-sm text-white">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-red-600 text-base font-semibold cursor-pointer mt-3">
                  <a href="rincian">Watch Now</a>
                  <FontAwesomeIcon icon={faPlay} className="ml-1" style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
        </Slider>
      </div> 

      </carousel>

      
      <br /><br />

      
    </>
  );
}

export default List;




// import { useEffect, useState } from "react";
// import axios from "axios";

// const List = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
//         params: {
//           api_key: process.env.REACT_APP_TMDB_KEY,
//         },
//       })
//       .then((response) => {
//         setMovies(response.data.results);
//       });
//   }, []);

//   return (
//     <div className="bg-gray-900">
//       <div className="container mx-auto py-8">
//         <h1 className="text-white text-3xl font-bold mb-4">TRENDING MOVIES</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {movies.map((result, index) => {
//             return (
//               <div className="movieWrapper" id="trending" key={index}>
//                 <div className="bg-white rounded-lg shadow-md">
//                   <img
//                     src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
//                     alt="test"
//                     className="w-full h-auto"
//                   />
//                   <div className="bg-gray-900">
//                     <div className="p-2 m-1 text-white">
//                       <h2 className="text-center text-lg font-semibold">
//                         {result.title}
//                       </h2>
//                       <p className="text-left">{result.overview}</p>
//                       <p className="text-left">{result.release_date}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;
