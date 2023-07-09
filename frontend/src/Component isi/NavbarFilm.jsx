import logoImage from '../assets/logo/k3.png';
import './style.css';

const Navbar = () => {
  return (
    <div className="navbar text-white h-[75px]">
      <div className="flex-1">
        <a href="home">
          <img src={logoImage} alt="Logo k3" className="w-[108px] ml-9" />
        </a>
        <ul className="flex ml-8">
          <li>
            <a
              href="home"
              className="font-semibold text-lg hover:text-red-600 hover:duration-300 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="movie"
              className="ml-3 font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600 hover:duration-300 underline-offset-4 cursor-pointer"
            >
              Movies
            </a>
          </li>
          <li>
            <a
              href="tvshow"
              className="ml-3 font-semibold text-lg decoration-red-600 decoration-4 hover:underline hover:underline-red-600 hover:duration-300 underline-offset-4 cursor-pointer"
            >
              Tv Show
            </a>
          </li>
        </ul>

        <a href="search" className="ml-auto mr-32">
          <input
            className="p-1 rounded-xl text-black px-2 focus:outline-none cursor-pointer"
            type="search"
            placeholder="  cari...."
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;


