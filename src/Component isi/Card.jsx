// import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import movieImage from "../assets/logo/MovieImg.jpg";

import "./style.css"

export default class Card extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div>
          <h2>Center Mode</h2>
          <Slider {...settings}>
            <div>
              <img src={ movieImage } alt="" />
            </div>
            <div>
            <img src={ movieImage } alt="" />
            </div>
            <div>
            <img src={ movieImage } alt="" />
            </div>
            <div>
            <img src={ movieImage } alt="" />
            </div>
            <div>
            <img src={ movieImage } alt="" />
            </div>
            <div>
            <img src={ movieImage } alt="" />
            </div>
          </Slider>
        </div>
      );
    }
  }




//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };

//     return (
//       <div>
//         <h2>Multiple items</h2>
//         <Slider {...settings}>
//           <div className="m-0">
//             <div className="flex">
//               <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-52 hover:h-72 duration-700" style={{ backgroundImage: `url(${movieImage})` }}>
//                 <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
//                   <div className="absolute bottom-12 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
//                     <p className="text-2xl font-semibold ">Black Adams</p>
//                     <p className="text-sm text-yellow-500">2022, Anthony Russo</p>
//                     <p className="text-sm text-yellow-500">Action, Sci-fi<span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
//                     <div>
//                       <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
//                       <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
//                       <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
//                       <span>8.5</span>
//                     </div>
//                     <div>
//                       <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
//                     </div>
//                     <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
//                       <a href="video">Watch Now</a>
//                       <FontAwesomeIcon icon={faPlay} className="ml-1" style={{ color: "#fff" }} />
//                     </button>
//                   </div>
//                 </div>

                
//               </div>
//             </div>
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
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
