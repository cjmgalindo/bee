
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrBeep from './components/DrBeep/DrBeep';
import Navbar from "./components/Header/Navbar.jsx";
import Continent from './pages/Continent/Continent';
import Exchange from './pages/Exchange/Exchange';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Market from './pages/Market/Market';



function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/continents' element={<Continent />}/>
          <Route path='/inventory' element={<Inventory />}/>
          <Route path='/market' element={<Market />}/>
          <Route path='/exchange' element={<Exchange />}/>
        </Routes>

        
      </div>
      <span className='message'>

      </span>
    </>
  );
}

export default App;
