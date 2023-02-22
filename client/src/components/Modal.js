import React from 'react';


function Modal(props) {
    return (
        <div>
            <div className="darkBG" onClick={() => props.setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Dialog</h5>
                    </div>
                    <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
                        Close
                    </button>
                    <div className="modalContent">
                        <img src="https://serebii.net/pokearth/sprites/dp/113.png" alt="Pokemon" />
                        <p>Name: {props.name}</p>
                        <p>Pokedex number: {props.pokedex}</p>
                        <p>Type: {props.type}</p>
                        <p>Attack: {props.attack}</p>
                        <p>Defense: {props.defense}</p>
                        <p>Generation: {props.gen}</p>
                        <p>Stats Against:</p>
                        <p>Bug:{props.bug}, Dark:{props.dark},Dragon: {props.dragon}, Electricity: {props.electricity}, </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;