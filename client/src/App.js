import Card from './components/animalCard';
import NavBar from './components/NavBar';
import './App.css';

function App() {

  async function handleClick() {
    let results = await fetch('http://localhost:9000/other')
    console.log(await results.json())
  }

  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
          <div className="wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <button onClick={handleClick} >Click me</button>
        </div>

      </header>

    </div>
  );
}

export default App;
