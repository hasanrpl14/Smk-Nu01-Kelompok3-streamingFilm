import "./movie.css"
import { getMovieList , searchMovie} from "./api"
import { useEffect, useState } from "react"

const Trailer = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    setPopularMovies(getMovieList())
  }, [])
  const search = (q) => {
    console.log({q})

  }

  console.log({ popularMovies: popularMovies })

  return (
    <>
    <div className=" h-screen">
    <h1>K3 FILMS</h1>
    <input onChange={({target}) => search(target.value)} className="bg-slate-200"/>
      <div className="container">
        <div className="wraper">
          <div className="title"></div>
          <img src="image" alt="" className="" />
          <div className="date"></div>
          <div className="rate"></div>
        </div>
      </div>

    </div>
      
    </>
      

  )
}

export default Trailer

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };






// import NavbarFilm from "../Component isi/NavbarFilm"
// import movieImage from "../assets/bg/avecover.png";
// import bgImage from "../assets/bg/avengers.jpg";
// import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// // import { Link } from "react-router-dom";
// const TvShow = () => {
//   return (
//     <>
//     <div className="bg-black">
//     <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url("${bgImage}")` }}>
//       <div className=" w-full h-full bg-gradient-to-t from-black/100 ">
//       <NavbarFilm/>
//     <div className="ml-12 mt-20 flex left-28">
//         <div className="h-72 w-52 bg-cover bg-center relative" style={{ backgroundImage: `url("${movieImage}")` }}>
//           <div className="absolute inset-0 flex items-center justify-center">
//           <a href="video">
//           {/* <FontAwesomeIcon icon={faCirclePlay} beat style={{ color: "#ffffff" }} className="h-16 hover:text-red-600"/> */}
//           <FontAwesomeIcon icon={faCirclePlay} beat style={{ color: "#ffffff" }} className="h-16" />

//           {/* <FontAwesomeIcon icon={faCirclePlay} beat style={{ color: "#ffffff" }} className="h-16 hover:bg-red-600" /> */}

//             </a>
//           </div>

//         </div>

// {/* <div className="ml-12 mt-20 flex left-28">
//   <div className="h-72 w-52 bg-cover bg-center relative" style={{ backgroundImage: `url("${movieImage}")` }}>
//     <div className="absolute inset-0 flex items-center justify-center">
//       <a href="video">
//         <h1 className="text-white">Play</h1>
//       </a>
//     </div>
//   </div>
// </div> */}




//       {/* <img src={ movieImage } alt="" className="h-72 w-52"/> */}
     

//       <div className="ml-14">
//         <h1 className="font-semibold text-4xl mt-2 text-white">Avengers: Infinity War</h1>
//         <div className="flex mt-2 text-white">
//           <h1 className="bg-red-600 p-1 px-1 py-1 rounded-md text-center">2 j 29 m</h1>
//           <h1 className="bg-red-600 ml-3 p-1 px-1 rounded-md text-center">Negara</h1>
//           <h1 className="bg-red-600 ml-3 p-1 px-1 rounded-md text-center">Negara</h1>
//           <h1 className="bg-red-600 ml-3 p-1 px-1 rounded-md text-center">Negara</h1>
//         </div>
//       <div className="mt-5 w-[38rem] h-96 text-white">
//         <h1 className="pl-28">Info Film</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, optio labore explicabo suscipit voluptatem, magnam fugit eaque temporibus libero 
//             iste assumenda dignissimos distinctio provident blanditiis maxime modi, dicta reiciendis repellat!</p>
//       </div>
//       </div>
//     </div>
//       <div>

//       </div>

//       </div>
    
//     </div>

//     <br />
//     <br />

//     <h1>Actor</h1>

//     </div>
  
//     </>
    
//   )
// }

// export default TvShow