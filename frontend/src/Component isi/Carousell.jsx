// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faPlay } from "@fortawesome/free-solid-svg-icons";
// // import bgImage from "../assets/bg/avengers.jpg";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import bgImage from "../assets/bg/avengers.jpg";
// const Carousell = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: true
//   };
//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   autoplaySpeed: 5000,
//   //   pauseOnHover: true
//   // };

//   return (
    

//     <>
//     {/* <div className="flex items-center justify-center">
//         <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-2/3 h[400px]">
//     <img src={ bgImage } className="bg-cover bg-center w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <div className="flex flex-col  justify-start mr-auto ml-10">
//       <h1 className="text-5xl font-bold text-red-600 uppercase">Gundala</h1> 
//       <p className="text-white">Berkisah tentang sosok antihero yang mendapatkan kekuatan dari dewa.</p>
//       <p className="text-white">mesir bernama Adam. Ia datang untuk menciptakan keadilan di dunia saat ini.</p>

//       <button className="h-9 w-36 border-none rounded-xl bg-red-500 text-white text-base font-semibold cursor-pointer mt-3">
//             <a href="rincian">Watch Now</a>
//           <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
//           </button>
//       </div>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 

//   <div id="slide2" className="carousel-item relative w-full h-[37rem]">
//     <img src="https://wallpaperaccess.com/full/7293192.jpg" className="w-full bg-cover" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <div className="flex flex-col  justify-start mr-auto ml-10">
//       <h1 className="text-5xl font-bold text-red-500 uppercase">The Raid</h1> 
//       <p className="text-white">Berkisah tentang sosok antihero yang mendapatkan kekuatan dari dewa.</p>
//       <p className="text-white">mesir bernama Adam. Ia datang untuk menciptakan keadilan di dunia saat ini.</p>

//       <button className="h-9 w-36 border-none rounded-xl bg-red-500 text-white text-base font-semibold cursor-pointer mt-3">
//             <a href="video">Watch Now</a>
//           <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
//           </button>
//       </div>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full h-[37rem]">
//     <img src="https://akuaktor.com/wp-content/uploads/2018/11/acting-wiro-sableng.jpg" className="w-full bg-cover" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <div className="flex flex-col  justify-start mr-auto ml-10">
//       <h1 className="text-5xl font-bold text-red-500 uppercase">Wiro Sableng</h1> 
//       <p className="text-white">Berkisah tentang sosok antihero yang mendapatkan kekuatan dari dewa.</p>
//       <p className="text-white">mesir bernama Adam. Ia datang untuk menciptakan keadilan di dunia saat ini.</p>

//       <button className="h-9 w-36 border-none rounded-xl bg-red-500 text-white text-base font-semibold cursor-pointer mt-3">
//             <a href="video">Watch Now</a>
//           <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
//           </button>
//       </div>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
// </div>

//     </div> */}

// <div className="flex items-center justify-center">
// {/* <div  className="bg-red-200 w-11/12 h-2/4"> */}
//         <Slider {...settings}>
//           <div className="bg-white">
//             <img src={ bgImage } className="w-full"/>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//       </div>

//     </>
//   )
// }

// export default Carousell


import NavbarFilm from "../Component isi/NavbarFilm"
import movieImage from "../assets/bg/avecover.png";
import bgImage from "../assets/bg/avengers.jpg";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Link } from "react-router-dom";
const Carousell = () => {
  return (
    <>
    <div className="bg-black">
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url("${bgImage}")` }}>
      <div className=" w-full h-full bg-gradient-to-t from-black/100 ">
      <NavbarFilm/>
    <div className="ml-12 mt-20 flex left-28">
        <div className="h-72 w-52 bg-cover bg-center relative" style={{ backgroundImage: `url("${movieImage}")` }}>
          <div className="absolute inset-0 flex items-center justify-center">
          <a href="video">
          {/* <FontAwesomeIcon icon={faCirclePlay} beat style={{ color: "#ffffff" }} className="h-16 hover:text-red-600"/> */}
          <FontAwesomeIcon icon={faCirclePlay} beat style={{ color: "#ffffff" }} className="h-16" />

          {/* <FontAwesomeIcon icon={faCirclePlay} beat style={{ color: "#ffffff" }} className="h-16 hover:bg-red-600" /> */}

            </a>
          </div>

        </div>
     

      <div className="ml-14">
        <h1 className="font-semibold text-4xl mt-2 text-white">Avengers: Infinity War</h1>
        <div className="flex mt-2 text-white">
          <h1 className="bg-red-600 p-1 px-1 py-1 rounded-md text-center">2 j 29 m</h1>
          <h1 className="bg-red-600 ml-3 p-1 px-1 rounded-md text-center">Negara</h1>
          <h1 className="bg-red-600 ml-3 p-1 px-1 rounded-md text-center">Negara</h1>
          <h1 className="bg-red-600 ml-3 p-1 px-1 rounded-md text-center">Negara</h1>
        </div>
      <div className="mt-5 w-[38rem] h-96 text-white">
        <h1 className="pl-28">Info Film</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, optio labore explicabo suscipit voluptatem, magnam fugit eaque temporibus libero 
            iste assumenda dignissimos distinctio provident blanditiis maxime modi, dicta reiciendis repellat!</p>
      </div>
      </div>
    </div>
      <div>

      </div>

      </div>
    
    </div>

    <br />
    </div>
  
    </>
    
  )
}

export default Carousell

