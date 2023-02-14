import React from 'react';

function AnimalCard(props) {
    // const [animalList, setAnimalList] = React.useState([])
   
    function handleClick(){
        console.log('I was clicked')
    }

    return (
        <div className="wrapper">  
          <div className= "card-container">
            <img src={props.image}  alt="Movie Poster"  />
            <p>{props.name}holder</p>
            <p>{props.genre}holder</p>
            <p>{props.plot}holder</p>
            <p>{props.runtime}holder</p>
            <p>{props.rating}holder</p>
            <button id="info-btn" onClick={handleClick}>More details...</button>
            
          </div>
        </div>
    );
}

export default AnimalCard;