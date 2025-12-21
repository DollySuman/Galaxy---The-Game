import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setvalue] = useState(0)
  return (
    <div className="App">
      {value}
    </div>
  );
}

export default App;
