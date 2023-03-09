import React from 'react';

function Card(props) {
    
    //This is out main cards prop
    

    return (
        <div className="card-container">
            <img src={props.picture} alt="Pokemon" />
            <p>Name: {props.name}</p>
            <p>Pokedex number: {props.pokedex}</p>
            <p>Type: {props.type}</p>
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
            <p>Generation: {props.gen}</p>
            <button className="info-btn" onClick={props.handler}>More details...</button>
            

        </div>

    );
}



export default Card;