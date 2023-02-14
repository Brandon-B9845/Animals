import React from 'react';

function Card(props) {
    // const [animalList, setAnimalList] = React.useState([])

    function handleClick() {
        console.log('I was clicked')
    }

    return (
        <div className="card-container">
            <img src={props.image} alt="Movie Poster" />
            <p>{props.name}holder</p>
            <p>{props.genre}holder</p>
            <p>{props.plot}holder</p>
            <p>{props.runtime}holder</p>
            <p>{props.rating}holder</p>
            <button id="info-btn" onClick={handleClick}>More details...</button>

        </div>

    );
}



export default Card;