import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
// index.js or main.jsx
// import './logic.jsx'
import './handTrack.jsx'

//import './input.css';  // Tailwind CSS imported here

import { useState } from 'react';
import Earth from './components/Earth';
import './components/Earth.css';
import './components/Sun.css'
import Sun from './components/Sun';
import Mercury from './components/Mercury';
import './components/Mercury.css'
import Mars from './components/Mars';
import './components/Mars.css'
import Neptune from './components/Neptune';
import './components/Neptune.css'
import Venus from './components/Venus';
import './components/Venus.css'
import Uranus from './components/Uranus';
import './components/Uranus.css'
import Jupiter from './components/Jupiter';
import './components/Jupiter.css'
import Saturn from './components/Saturn';
import './components/Saturn.css'
import HandDetection from './handTrack';

function App() {
  // const [value,setvalue] = useState(90)
  const [handPos, setHandPos] = useState({x:0, y:0})
  const [isPinching, setIsPinching] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [dragOffset, setDragOffset] = useState({x:0,y:0})

  return (
    <div className="App ">

      <HandDetection onHandMove= {setHandPos}
      onPinchChange = {setIsPinching}/>
      <div style={{
        position: 'fixed',
        left: handPos.x,
        top: handPos.y,
        width: '30px',
        height: '30px',
        background: 'red',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%,-50%)',
        zIndex: 9999
        
        }}/>


      <Mercury
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      planetId = "mercury"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Venus
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
     setSelectedPlanet={setSelectedPlanet} 
      planetId = "venus"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Earth
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      planetId = "earth"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Mars
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      planetId = "mars"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Sun
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      planetId = "sun"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Jupiter
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      planetId = "jupiter"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Saturn
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      planetId = "saturn"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Uranus
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      planetId = "uranus"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      <Neptune
      handPos = {handPos}
      isPinching = {isPinching}
      selectedPlanet = {selectedPlanet}
      setSelectedPlanet = {setSelectedPlanet}
      planetId = "neptune"
      dragOffset = {dragOffset}
      setDragOffset = {setDragOffset}
      />
      

      </div>
    
  );
}

export default App;
