
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrBeep from './components/DrBeep/DrBeep';
import Navbar from "./components/Header/Navbar.jsx";
import Bees from './pages/Bees/Bees';
import Continent from './pages/Continent/Continent';
import Exchange from './pages/Exchange/Exchange';
import Garden from './pages/Garden/Garden';
import Hive from './pages/Hive/Hive';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Ladeboard from './pages/Ladeboard/Ladeboard';
import Market from './pages/Market/Market';


//Desert
import cDesertGarden from './assets/mediaContinents/Desert/1.png'
import cDesertGarden1 from './assets/mediaContinents/Desert/2.png'
import bgDesert from './assets/mediaContinents/Desert/bg1.jpg'
import bgDesert1 from './assets/mediaContinents/Desert/bg2.jpg'

//Green
import cGreenGarden from './assets/mediaContinents/Green/garden04.jpg'
import cGreenGarden1 from './assets/mediaContinents/Green/hive_bgcard.jpg'
import bgGreen from './assets/mediaContinents/Green/bgGarden.jpg'
import bgGreen1 from './assets/mediaContinents/Green/bghive.jpg'

//Ice
import cIceGarden from './assets/mediaContinents/Ice/3.png'
import cIceGarden1 from './assets/mediaContinents/Ice/4.png'
import bgIce from './assets/mediaContinents/Ice/bg1.jpg'
import bgIce1 from './assets/mediaContinents/Ice/bg2.jpg'

//Volcan
import cVolcanGarden from './assets/mediaContinents/Volcan/5.png'
import cVolcanGarden1 from './assets/mediaContinents/Volcan/6.png'
import bgVolcan from './assets/mediaContinents/Volcan/bg1.jpg'
import bgVolcan1 from './assets/mediaContinents/Volcan/bg2.jpg'
import Preloader from './pages/Preloader/Preloader';
import { useEffect, useState } from 'react';
import icon from './assets/smartphone (1).png'



function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },8000);
  }, [])

  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={loading ? <Preloader /> : <Home />}/>

          <Route path='/continents' element={<Continent />}>

            
          </Route>

          <Route path='/continents/gardenGreen' element={<Garden img={{card: cGreenGarden, bg: bgGreen}} link={"Green"}/>} />
          <Route path='/continents/hiveGreen' element={<Hive img={{card: cGreenGarden1, bg: bgGreen1}} link={"Green"}/>} />
          <Route path='/continents/beesGreen' element={<Bees img={{bg: bgGreen}} link={"Green"}/>} />

          <Route path='/continents/gardenIce' element={<Garden img={{card: cIceGarden, bg: bgIce}} link={"Ice"}/>} />
          <Route path='/continents/hiveIce' element={<Hive img={{card: cIceGarden1, bg:bgIce1}} link={"Ice"}/>} />
          <Route path='/continents/beesIce' element={<Bees img={{ bg:bgIce}} link={"Ice"}/>} />

          <Route path='/continents/gardenDesert' element={<Garden img={{card: cDesertGarden, bg: bgDesert}} link={"Desert"}/>} />
          <Route path='/continents/hiveDesert' element={<Hive img={{card: cDesertGarden1, bg:bgDesert1}} link={"Desert"}/>} />
          <Route path='/continents/beesDesert' element={<Bees img={{ bg: bgDesert}} link={"Desert"}/>} />

          <Route path='/continents/gardenVolcan' element={<Garden img={{card: cVolcanGarden, bg:bgVolcan}} link={"Volcan"}/>} />
          <Route path='/continents/hiveVolcan' element={<Hive img={{card: cVolcanGarden1, bg: bgVolcan1}} link={"Volcan"}/>} />
          <Route path='/continents/beesVolcan' element={<Bees img={{ bg: bgVolcan}} link={"Volcan"}/>} />


          <Route path='/inventory' element={<Inventory />}/>
          {/* <Route path='/garden' element={<Garden />}/>
          <Route path='/hive' element={<Hive />}/>
          <Route path='/bees' element={<Bees />}/> */}
          
          <Route path='/market' element={<Market />}/>
          <Route path='/exchange' element={<Exchange />}/>

          <Route path='/ladeboard' element={<Ladeboard />}/>

        </Routes>

        
      </div>
      <span className='message'>
          <img src={icon} className="iconMessage" />
          <p>"Rotate your phone to view content"</p>
      </span>
    </>
  );
}

export default App;
