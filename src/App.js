import './App.css';
import Navigationbar from './components/Navigationbar';
import Intro from './components/Intro';
import Trending from'./components/Trending';
import Superhero from'./components/Superhero';
import Anime from'./components/Anime';
import Foter from'./components/Foter';

import "./style/landingpage.css";

function App() {
  return (
   <div>
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
      {/* <div className="anime">
        <Anime/>
      </div> */}
      {/* <div className="foter">
        <Anime/>
      </div> */}
   </div>
  );
}

export default App
