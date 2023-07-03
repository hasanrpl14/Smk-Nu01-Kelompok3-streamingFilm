import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays} from "@fortawesome/free-regular-svg-icons";
// import logoImage from ".../assets/logo/k3.png";
// import logoImage from "../../assets/logo/k3.png";


const Dasboard = () => {
  return (
   <>
         <div className="flex h-screen">
    <div className=" h-screen w-1/5 bg-slate-800 fixed">
      {/* <img className="w-40" src={ logoImage }/> */}
        <h1 className="pt-4 font-semibold uppercase flex justify-center text-white text-xl">Admin</h1><br />
    <div className="flex flex-col items-start pl-4">
        <div className="w-5/6 p-2 bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faHouseChimney} className="text-slate-800"/>
            <a href="#" className="font-bold text-slate-800 text-base ml-2">Dashboard</a>
        </div>
        <div className="pt-2 w-5/6">
            <div className="hover:bg-white hover:bg-opacity-10 p-2 transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faDatabase} className="text-white" />
            <a href="admindatafilm" className="font-bold text-base text-white ml-2">Daftar Film</a>
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
    <br />
    <h1 className="pl-4 text-2xl font-semi-bold">Dashboard</h1>


<div className="pl-4 pt-3 flex flex-row">
        <div className="bg-blue-500 w-[16rem] h-[8rem] flex  items-center justify-center">
        <h1 className="text-xl font-semi-bold">Genre Film</h1>
          </div>

          <div className="bg-blue-500 w-[16rem] h-[8rem] flex  items-center justify-center ml-5">
          <h1 className="text-xl font-semi-bold">Film</h1>
          </div>

          <div className="bg-blue-500 w-[16rem] h-[8rem] flex  items-center justify-center ml-5">
          <h1 className="text-xl font-semi-bold">Komentar</h1>
          </div>
    </div>

  
</div>
          
  
{/* 4 kotak */}
    
    </div> 
   </>
  )
}

export default Dasboard