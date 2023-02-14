import AnimalCard from './components/animalCard';
import './App.css';

function App() {
  
  async function handleClick(){
    let results = await fetch('http://localhost:9000/other')
    console.log(await results.json())
  }
  
  return (
    <div className="App">
      <header>
        <div>
          <AnimalCard />
          <button onClick={handleClick} >Click me</button>
        </div>

      </header>
      
    </div>
  );
}

export default App;
