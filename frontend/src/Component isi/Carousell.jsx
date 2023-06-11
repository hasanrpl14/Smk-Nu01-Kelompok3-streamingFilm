import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


const Carousell = () => {
  return (
    

    <>
    <div className="flex items-center justify-center">
        <div className="carousel w-10/12">
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

    </div>


    </>
  )
}

export default Carousell


