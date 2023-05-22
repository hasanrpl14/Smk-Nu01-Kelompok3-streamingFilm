import './App.css';
import Navigationbar from './components/Navigationbar';
import Intro from './components/Intro';
import Trending from'./components/Trending';
import Superhero from'./components/Superhero';
import Anime from'./components/Anime';
import Foter from'./components/Foter';
import Form from'./components/Form';
// import Login from'./components/Login';

import "./style/landingpage.css";

function App() {
  return (
   <div className='bg-dark'>
      {/* { awal intro} */}
      <div className="myBG">
        <Navigationbar/>
        {/* </Intro> */}
        <Intro/>
      </div>
      {/* akhir intro */}
      <div className="trending">
        <Trending/>
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
  );
}

export default App

