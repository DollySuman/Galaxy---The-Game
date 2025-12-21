import logo from './logo.svg';
// import './App.css';
// index.js or main.jsx
import './input.css';  // Tailwind CSS imported here

import { useState } from 'react';
import Earth from './components/Earth';

function App() {
  const [value,setvalue] = useState(0)
  return (
    <div className="App ">
      <Earth/>
      <div className='value bg-blue-500'>

      {value}
      </div>
      <button onClick={()=> {setvalue(value + 5)}}>Click me</button>
    </div>
  );
}

export default App;
