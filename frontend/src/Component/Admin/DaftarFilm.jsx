import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays} from "@fortawesome/free-regular-svg-icons";

const DaftarFilm = () => {
  return (
    <>
     <div className="flex h-screen">
    <div className=" h-screen w-1/5 bg-slate-800 fixed">
      {/* <img className="w-40" src={ logoImage }/> */}
        <h1 className="pt-4 font-semibold uppercase flex justify-center text-white text-xl">Admin</h1><br />
    <div className="flex flex-col items-start pl-4">
        <div className="w-5/6 p-2 bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faHouseChimney} className="text-slate-800"/>
            <a href="admin" className="font-bold text-slate-800 text-base ml-2">Dashboard</a>
        </div>
        <div className="pt-2 w-5/6">
            <div className="hover:bg-white hover:bg-opacity-10 p-2 transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faDatabase} className="text-white" />
            <a href="#" className="font-bold text-base text-white ml-2">Daftar Film</a>
            </div>
        </div>
        <div className="pt-1 w-5/6">
          <div className="hover:bg-white hover:bg-opacity-10  p-2 transition duration-300 ease-in-out rounded-lg">
          <FontAwesomeIcon icon={faCalendarDays} className="text-white"/>
            <a href="admindatauser" className="font-bold text-base ml-2 text-white">Data Master</a>
          </div>
           
        </div>

        </div>
    </div>
    <div>
        
    </div>
<div className="w-4/5 fixed ml-[17rem]">
<div className="navbar pb-1 border-b border-slate-800 h-[4rem]"> 
  <div className="navbar-start text-slate-800 text-xl font-semibold">
    {/* <h1 className="text-black text-xl font-semibold pl-5">Admin</h1> */}
    <a href="#" className="px-4 hover:text-slate-500 transition duration-300 ease-in-out">Dashboard</a>
    <a href="#" className="hover:text-slate-500 transition duration-300 ease-in-out">Daftar Film</a>
    
   </div>
   <div className="navbar-end">
    <button>
    <FontAwesomeIcon icon={faUser} className="text-slate-800"/>
      
    </button>
   </div>
  
</div>

    <div className="flex justify-between items-center mt-3">
        <h1 className="mr-auto ml-5 text-2xl font-semibold">Daftar Film</h1>
        <button className="bg-slate-800 text-white p-2 w-32 font-semibold text-base ml-auto mr-5">
            Tambah Film
        </button>  
       
    </div>

    </div>

  
</div>
          
  
{/* 4 kotak */}
    
    </>
  )
}

export default DaftarFilm 