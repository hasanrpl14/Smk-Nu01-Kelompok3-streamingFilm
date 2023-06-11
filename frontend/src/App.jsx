import {BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Intro from "./Pages/Intro";
import Login from "./Pages/Login";
import Daftar from "./Pages/Daftar";
import Home from "./Pages/Home";
import Vide from "./Pages/Vide"
import Rincian from "./pages/Rincian";


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
      </Routes>
    </Router>
    </>
  )
}

export default App
