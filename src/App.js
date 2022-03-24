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
      <Routes>
          <Route path="characters" element={<Characters />} />
          <Route path="/characters/:characterId" element={<Character />} />
          <Route path="locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
