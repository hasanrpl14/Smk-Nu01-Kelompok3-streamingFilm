import Movie from '../Component/Movie'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import movieImage from "../assets/logo/MovieImg.jpg";

const Movies = () => {
  return (
    <>
    <Movie />
    <h1 className="">Movies</h1>
    <div className="flex row-auto inset-16">
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
    </>

  )
}

export default Movies