import { useState, useEffect } from 'react';
import Card from './components/animalCard';
import NavBar from './components/NavBar';
import './App.css';

function App() {

  const [people, setPeople] = useState([])

  useEffect(() => {
    console.log(people)
  }, []);
  
  async function handleClick() {
    let results = await fetch('https://randomuser.me/api/?results=25')
    let returnPeople = await results.json()
    console.log(returnPeople)
    setPeople(returnPeople.results)
    
}



  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
          <div className="wrapper">
          {people ? people.map((person) => <Card key={person} picture={person.picture.medium} name={person.name.first} gender={person.gender} email={person.email} date={person.dob.date} phone={person.phone} />) : <p>Click the button</p>}
          </div>

          <button onClick={handleClick} >Click me</button>
        </div>

      </header>

    </div>
  );
}

export default App;
