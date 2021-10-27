import { useLayoutEffect } from 'react';
import './App.css';
import Developer from './components/Developer';
import './components/developer-style.css';


function App() {

  const devs = [
    {name: "Gabriel", age: 19, country: "Brasil"},
    {name: "Felipe", age: 28, country: "Brasil"},
    {name: "Mariana", age: 24, country: "Itália",}
]

  return (

  <ul>
    {devs.map((dev, index) =>(
      <Developer name = {dev.name} age = {dev.age} country = {dev.country} />
    ))}
  </ul>

  );
}

export default App;
