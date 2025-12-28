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
  return (
    <div className="App ">

      <HandDetection onHandMove= {setHandPos}/>
      <div style={{
        position: 'fixed',
        left: handPos.x,
        top: handPos.y,
        width: '30px',
        height: '30px',
        background: 'red',
        borderRadius: '59%',
        pointerEvents: 'none',
        transform: 'translate(-5%,-5%)',
        zIndex: 9999
        
        }}/>


      <Mercury/>
      <Venus/>
      <Earth/>
      <Mars/>
      <Sun/>
      <Jupiter/>
      <Saturn/>
      <Uranus/>
      <Neptune/>

      </div>
    
  );
}

export default App;
