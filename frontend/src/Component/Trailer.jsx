import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/logo/k3.png";
const Trailer = () => {
  return (
    <>
      <div className="navbar text-white bg-black h-[75px]">
  <div className="flex-1">
    <img src={logoImage} alt="Logo k3" className="w-[108px] ml-9"/>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <ul className="flex ml-8">
      <li><a href="home" className="font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600
       hover:duration-300 underline-offset-4 cursor-pointer ">Home</a></li>
      <li><a href="#populer" className="ml-3 font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600
       hover:duration-300 underline-offset-4 cursor-pointer">Populer</a></li>
      <li><a href="#movie" className="ml-3 font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600
       hover:duration-300 underline-offset-4 cursor-pointer">Movies</a></li>
    </ul>
   
    <input className="ml-auto mr-14 p-1 rounded-xl text-black px-2 focus:outline-none hover:w-96 hover:duration-500 cursor-pointer"
      type="search" placeholder="  cari...."/>
      <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
       <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8">
        <div className="w-8 rounded-full">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <FontAwesomeIcon icon={faUser} className="h-10" style={{color: "#fff",}} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>

  {/* <card className="">
  {/* <img src="https://storage.nu.or.id/storage/post/16_9/mid/1568020652.jpg" className="w-60 bg-cover ml-56 " /> */}
  {/* <div className="top-0 w-full h-full bg-gradient-to-t from-black/90 "></div> */}
  {/* </card> */} 
    {/* <div className="flex items-center justify-center"> */}
    <div className=" w-full h-5/6 bg-center bg-cover rounded  border-white border-4 hover:border-black" 
    style={{ backgroundImage: `url("https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
          <div className=" w-full h-full bg-gradient-to-t from-black/100">
            fgfg
          </div>
    </div>
 
        {/* </div> */}
        <br /><br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo totam possimus quas quod doloremque, vel ipsam, ratione suscipit esse quam voluptas optio odit, quos veritatis at. Tempore fuga commodi consectetur.
        </p>
        <img src=" https://reactjs.org/logo-og.png " alt="React Image" />
    
    
    <img src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
      <img
        src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Image"
        className="object-cover w-full h-full"
      />
    </div>
    <br />
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent w-full"></div>
      <img
        src="https://wallpaperaccess.com/full/6480515.jpg"
        alt="Image"
        className="object-cover w-full h-full"
      />
    </div>

    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <img
        src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
        className="object-cover w-full h-full"
      />
    </div>
    <br />
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-transparent"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500"></div> */}
      <img
        src=" https://reactjs.org/logo-og.png"
        alt="Image"
        className="object-cover w-full h-full"
      />
    </div>
    <br />
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-transparent"></div>
      </div>
      <img
        src="https://reactjs.org/logo-og.png"
        alt="Image"
        className="object-cover w-full h-full"
      />
    </div>

    <div >

    </div>
    </>



  );
};

export default Trailer;
