// import React from 'react'
// import Navigationbar from '../components/Navigationbar'
// import Intro from '../components/Intro'

// import './App.css';
import Navigationbar from '../components/Navigationbar';
import Intro from '../components/Intro';
import Horor from '../components/Horor';
import Superhero from'../components/Superhero';
import Anime from'../components/Anime';
import Foter from'../components/Foter';

// import "./style/landingpage.css";


const Home = () => {
  return (
    // <div>
    // <Navigationbar />
    // <Intro />
    // </div>
    <div>
    {/* { awal intro} */}
    <div className="myBG">
      <Navigationbar/>
      {/* </Intro> */}
      <Intro/>
    </div>
    {/* akhir intro */}
    <div className="horor">
      <Horor/>
    </div>
    <div className="superhero">
      <Superhero/>
    </div>
    <div className="anime">
      <Anime/>
    <br/><br/>
    </div>
    <div className="foter">
      <Foter/>
    </div>
 </div>

  )
}

export default Home