import logo from './logo.svg';
import './App.css';
// index.js or main.jsx
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

function App() {
  // const [value,setvalue] = useState(90)
  return (
    <div className="App ">
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
