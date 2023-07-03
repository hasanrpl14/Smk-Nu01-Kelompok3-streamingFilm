import {BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import { useEffect, useState} from "react";
import Intro from "./Pages/Intro";
import Login from "./Pages/Login";
import Daftar from "./Pages/Daftar";
import Home from "./Pages/Home";
import Vide from "./Pages/Vide"
import Rincian from "./pages/Rincian";
import Admin from "./pages/Admin";
import DaftarFilm from "./Component/Admin/DaftarFilm";


const App = () => {
    // const [backendData, setBackendData] = useState([{}])

    // useEffect(() => {
    //   fetch("/api").then(
    //     response => response.json()
    //   ).then(
    //     data => {
    //       setBackendData(data)
    //     }
    //   )
    // }, [])


  return (
    <>

    {/* <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : ( 
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div> */}

    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video" element={<Vide />} />
        <Route path="/rincian" element={<Rincian />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admindatafilm" element={<DaftarFilm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
