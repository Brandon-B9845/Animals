import React from 'react';

function Card(props) {
    // const [animalList, setAnimalList] = React.useState([])


    return (
        <div className="card-container">
            <img src={props.picture} alt="Movie Poster" />
            <p>{props.name}</p>
            <p>{props.gender}</p>
            <p>{props.email}</p>
            <p>{props.date}</p>
            <p>{props.phone}</p>
            <button className="info-btn" onClick={console.log('nah')}>More details...</button>

        </div>

    );
}



export default Card;