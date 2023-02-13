import React from 'react';

function animalCard(props) {
    const [animalList, setAnimalList] = React.useState([])
    
    return (
        <div>
            <img src={props}    />
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default animalCard;