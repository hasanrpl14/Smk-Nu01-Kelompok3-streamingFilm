import './App.css';
import Navigationbar from './components/Navigationbar';
import Intro from './components/Intro';

import "./style/landingpage.css"
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
   </div>
  );
}

export default App
