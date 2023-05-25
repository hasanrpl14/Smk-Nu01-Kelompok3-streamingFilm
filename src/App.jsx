import {BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Intro from "./Pages/Intro";
import Login from "./Pages/Login";
import Daftar from "./Pages/Daftar";
import Home from "./Pages/Home";
import Vide from "./Pages/Vide"
// importdeVid from "./Pages/Vid";


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
      </Routes>
    </Router>
    </>
  )
}

export default App
