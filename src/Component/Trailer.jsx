import logoImage from "../assets/logo/k3.png";
const Trailer = () => {
  return (
    <>
      <div>Halaman Trailer</div>
      <div className="navbar bg-black text-white h-[5rem]">
        <div className="flex-1">
          <img src={logoImage} alt="Logo k3" className="w-[7rem] ml-9" />
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <ul className="flex ml-8">
            <li>
              <a href="home" className=" font-semibold text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#populer" className="ml-3 font-semibold text-lg">
                Populer
              </a>
            </li>
            <li>
              <a href="#" className="ml-3 font-semibold text-lg">
                Movies
              </a>
            </li>
          </ul>
          <input
            className="ml-auto mr-20 p-1 rounded-2xl text-black px-2"
            type="search"
            placeholder="  cari...."
          />
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Trailer;
