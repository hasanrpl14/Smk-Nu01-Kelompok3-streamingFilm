

const Hero = () => {
  return (
    <div className="min-h-screen flex bg-cover bg-center" style={{ backgroundImage: `url("https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>

      <div className="ml-11 mt-6 text-3xl flex">
      <h1 className=" text-red-600 font-bold font-size underline">K3</h1>
    <span className="text-white">FILMS</span>
      </div>

      {/* <div className="text-center flex items-center justify-center ml-96 mb-52">
        <h1 className="text-red-600 text-5xl font-bold">Welcome To</h1>
      </div>
      <div className="text-center flex items-center justify-center  mb-52">
        <h1 className="text-red-600 text-5xl font-bold">K3FILMS</h1>
      </div> */}
   <div className="hero-content text-center ml-72">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome K3FILMS</h1>
      <p className="py-6  text-white">K3FILMS Adalah Sebuah Project Mini Web Streaming Film Dari Kelompok 3 Dari Smk Nu 01 Kendal</p>
      <button className="btn  bg-red-600">
        <a href="login">Get Started</a>
      </button>
    </div>
  </div>
  </div>
  // <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}></div>
  )
}

export default Hero