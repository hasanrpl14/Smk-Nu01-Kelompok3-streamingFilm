import {BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Intro from "./Pages/Intro";
import Login from "./Pages/Login";
import Daftar from "./Pages/Daftar";
import Home from "./Pages/Home";
import Vide from "./Pages/Vide"
import Rincian from "./pages/Rincian";
import Admin from "./pages/Admin";
import DaftarFilm from "./Component/Admin/DaftarFilm";
import Tv from "./pages/Tv";
import Movies from "./pages/Movies";
import Search from "./pages/Search";

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video" element={<Vide />} />
        <Route path="/rincian" element={<Rincian />} />
        <Route path="/tvshow" element={<Tv />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admindatafilm" element={<DaftarFilm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
