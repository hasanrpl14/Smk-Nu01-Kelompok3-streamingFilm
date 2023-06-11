import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import movieImage from "../assets/logo/MovieImg.jpg";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const List = () => {
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
              <p className="text-sm text-yellow-500">2022, Anthony Russo</p>
              <p className="text-sm text-yellow-500">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
                  <a href="video">Watch Now</a>
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
              <p className="text-sm text-yellow-500">2022, Anthony Russo</p>
              <p className="text-sm text-yellow-500">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
                  <a href="video">Watch Now</a>
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
              <p className="text-sm text-yellow-500">2022, Anthony Russo</p>
              <p className="text-sm text-yellow-500">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
                  <a href="video">Watch Now</a>
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
              <p className="text-sm text-yellow-500">2022, Anthony Russo</p>
              <p className="text-sm text-yellow-500">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
                  <a href="video">Watch Now</a>
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
              <p className="text-sm text-yellow-500">2022, Anthony Russo</p>
              <p className="text-sm text-yellow-500">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
                  <a href="video">Watch Now</a>
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
              <p className="text-sm text-yellow-500">2022, Anthony Russo</p>
              <p className="text-sm text-yellow-500">Action, Sci-fi
                <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span>
              </p>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fff700" }} />
                <span>8.5</span>
                <div>
                  <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
                </div>
                <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
                  <a href="video">Watch Now</a>
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