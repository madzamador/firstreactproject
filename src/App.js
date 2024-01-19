import './App.css';
import { User } from './User';

function App() {
  const planets = [
    { planetName: "Earth", isRockPlanet: true },
    { planetName: "Mars", isRockPlanet: true },
    { planetName: "Venus", isRockPlanet: true },
    { planetName: "Jupiter", isRockPlanet: false },
    { planetName: "Neptune", isRockPlanet: false },
    { planetName: "Uranus", isRockPlanet: false },
    { planetName: "Mercury", isRockPlanet: true },
  ];
  
  return <div className='App'>
    {users.map((user, key) => {
      return <User name={user.name} age={user.age} />
    })}
  </div>
}



export default App;
