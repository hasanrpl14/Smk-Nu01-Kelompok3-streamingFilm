import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import movieImage from "../assets/logo/MovieImg.jpg";
import logoImage from "../assets/logo/k3.png";
// import video from "../assets/video/naruto.mp4";


const Utama = () => {
  return (
    <>
    
  <div className="bg-black">
    
  <div className="navbar bg-dark text-white h-[5rem]">
  <div className="flex-1">
    <img src={logoImage} alt="Logo k3" className="w-[7rem] ml-9"/>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <ul className="flex ml-8">
      <li><a href="home" className=" font-semibold text-lg">Home</a></li>
      <li><a href="#populer" className="ml-3 font-semibold text-lg">Populer</a></li>
      <li><a href="#" className="ml-3 font-semibold text-lg">Movies</a></li>
    </ul>
    <input className="ml-auto mr-20 p-1 rounded-2xl text-black px-2"
      type="search" placeholder="  cari...."/>
  </div>
</div>

{/* menu carousel */}
  <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[37rem]">
    <img src="https://storage.nu.or.id/storage/post/16_9/mid/1568020652.jpg" className="w-full bg-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <div className="flex flex-col  justify-start mr-auto ml-10">
      <h1 className="text-5xl font-bold text-red-600 uppercase">Gundala</h1> 
      <p className="text-white">Berkisah tentang sosok antihero yang mendapatkan kekuatan dari dewa.</p>
      <p className="text-white">mesir bernama Adam. Ia datang untuk menciptakan keadilan di dunia saat ini.</p>

      <button className="h-9 w-36 border-none rounded-xl bg-red-500 text-white text-base font-semibold cursor-pointer mt-3">
            <a href="rincian">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
      </div>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full h-[37rem]">
    <img src="https://wallpaperaccess.com/full/7293192.jpg" className="w-full bg-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <div className="flex flex-col  justify-start mr-auto ml-10">
      <h1 className="text-5xl font-bold text-red-500 uppercase">The Raid</h1> 
      <p className="text-white">Berkisah tentang sosok antihero yang mendapatkan kekuatan dari dewa.</p>
      <p className="text-white">mesir bernama Adam. Ia datang untuk menciptakan keadilan di dunia saat ini.</p>

      <button className="h-9 w-36 border-none rounded-xl bg-red-500 text-white text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
      </div>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[37rem]">
    <img src="https://akuaktor.com/wp-content/uploads/2018/11/acting-wiro-sableng.jpg" className="w-full bg-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <div className="flex flex-col  justify-start mr-auto ml-10">
      <h1 className="text-5xl font-bold text-red-500 uppercase">Wiro Sableng</h1> 
      <p className="text-white">Berkisah tentang sosok antihero yang mendapatkan kekuatan dari dewa.</p>
      <p className="text-white">mesir bernama Adam. Ia datang untuk menciptakan keadilan di dunia saat ini.</p>

      <button className="h-9 w-36 border-none rounded-xl bg-red-500 text-white text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
      </div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

<br /><br />
{/* kartu */}
<h1 className="text-2xl text-white font-semibold text-center underline underline-offset-8" id="populer">Populer</h1>
<br />
<div className="flex justify-center">
<div className="flex">
<div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-60 hover:h-72"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>

    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>

    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>

    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>
    
    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>
</div>
</div>

<br /><br />
{/* kartu */}
<h1 className="text-2xl text-white font-semibold text-center underline underline-offset-8">Anime</h1>
<br />
<div className="flex justify-center">
<div className="flex">
    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>

    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>

    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>
    
    <div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-0 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
          <p className="text-2xl font-semibold ">Black Adams</p>
          <p className="text-sm text-yellow-500">2022,Anthony Russo</p>
          <p className="text-sm text-yellow-500">Action,Sci-fi
          <span className="pt-0 px-1.5 ml-1.5 border-2 rounded text-xs">170min</span></p>
          <div>
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
          {/* <FontAwesomeIcon icon={farStar} style={{color: "#fff700",}}/> */}
          <span >8.5</span>
          <div>
            <p>ikiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
          </div>
          <button className="h-auto w-36 border-none rounded-xl bg-yellow-500 text-base font-semibold cursor-pointer mt-3">
            <a href="video">Watch Now</a>
          <FontAwesomeIcon icon={faPlay} className="ml-1" style={{color: "#fff",}} />
          </button>
        </div>
        </div>
      </div>
    </div>
</div>
</div>

<br /><br />
{/* 
  footer */}
  <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  </div>
    </>
  )
}

export default Utama