import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import movieImage from "../assets/logo/MovieImg.jpg";
import logoImage from "../assets/logo/k3.png";



const Utama = () => {
  return (
    <>
  <div className="bg-black">
   
  <div className="navbar bg-dark text-white h-[5rem]">
  <div className="flex-1">
    <img src={logoImage} alt="Logo k3" className="w-[7rem] ml-9"/>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <ul className="flex ml-8">
      <li><a href="#" className="font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600
       hover:duration-300 underline-offset-4 cursor-pointer ">Home</a></li>
      <li><a href="#populer" className="ml-3 font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600
       hover:duration-300 underline-offset-4 cursor-pointer">Populer</a></li>
      <li><a href="#movie" className="ml-3 font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600
       hover:duration-300 underline-offset-4 cursor-pointer">Movies</a></li>
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
<h1 className="text-2xl text-red-600 font-semibold text-center underline underline-offset-8" id="populer">Populer</h1>
<br />
<div className="flex justify-center">
<div className="flex">
<div className="transform scale-100 w-56 h-60 bg-center bg-cover rounded mx-4 hover:w-52 hover:h-72 duration-700"
    style={{ backgroundImage: `url(${movieImage})` }}>
      <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 duration-700 opacity-0 hover:opacity-100">
        <div className="absolute bottom-12 w-full h-56	text-white flex flex-col content-evenly pt-12 px-6">
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
<h1 className="text-2xl text-red-600 font-semibold text-center underline underline-offset-8" id="movie">Movies</h1>
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
          <button className="h-auto w-36 bg-red-600 border-none rounded-xl  text-base font-semibold cursor-pointer mt-3">
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
{/*footer */}
<footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
    <img src={logoImage} alt="Logo k3" className="h-12"/>
    <p>K3FILMS.<br/>Project Industri Kelompok 3 2023</p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
<footer className="footer p-10 bg-base-600 text-base-content">
  <div>
    <img src={logoImage} alt="Logo k3" className="h-12"/>
    {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p> */}
      <p>K3FILMS.<br/>Project Industri Kelompok 3 2023</p>
  </div> 
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