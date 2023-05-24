import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import "./style/landingpage.css";
import Home from './pages/Home';
import Daftar from './pages/Daftar';
import Login from './pages/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </Router>
  )
}

export default App

