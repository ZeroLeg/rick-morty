import './App.css';
import { Characters } from './components/Characters/Characters';
import { Character } from './components/Character/Character';
import { Locations } from './components/Locations/Locations';
import { NavBar } from './components/NavBar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      
      <div className='container'>
        <div className='row'>
          <div className='col-12 py-5'>
            <Routes>
                <Route path="characters" element={<Characters />} />
                <Route path="/characters/:characterId" element={<Character />} />
                <Route path="locations" element={<Locations />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
