
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



function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/continents' element={<Continent />}/>
          <Route path='/inventory' element={<Inventory />}/>
          <Route path='/garden' element={<Garden />}/>
          <Route path='/hive' element={<Hive />}/>
          <Route path='/bees' element={<Bees />}/>
          
          <Route path='/market' element={<Market />}/>
          <Route path='/exchange' element={<Exchange />}/>

          <Route path='/ladeboard' element={<Ladeboard />}/>

        </Routes>

        
      </div>
      <span className='message'>

      </span>
    </>
  );
}

export default App;
