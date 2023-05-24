import {BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Intro from "./Pages/Intro";
import Login from "./Pages/Login";
import Daftar from "./Pages/Daftar";
import Home from "./Pages/Home";


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
