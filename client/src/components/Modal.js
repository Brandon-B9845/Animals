import React from 'react';


function Modal(props) {
    return (
        <div>
            <div className="darkBG" onClick={() => props.setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Details</h5>
                    </div>
                    <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
                        Close
                    </button>
                    <div className="modalContent">
                        <img src={props.picture} alt="Pokemon" />
                        <p>Name: {props.pokemon.name}</p>
                        <p>Pokedex number: {props.pokemon.pokedex_number}</p>
                        <p>Type One: {props.pokemon.type1}</p>
                        <p>Type Two: {props.pokemon.type2}</p>
                        <p>Attack: {props.pokemon.attack}</p>
                        <p>Defense: {props.pokemon.defense}</p>
                        <p>Health: {props.pokemon.hp}</p>
                        <p>Base Happiness: {props.pokemon.base_happiness}</p>
                        <p>Generation: {props.pokemon.generation}</p>
                        <p>Classification {props.pokemon.classification}</p>
                        <p>Capture Rate: {props.pokemon.capture_rate}</p>
                        <p>Weight (In Kilos): {props.pokemon.weight_kg}</p>
                        <p>Height (In Meters): {props.pokemon.height}</p>
                        <p>Stats Against:</p>
                        <p>Bug: {props.pokemon.against_bug}, Dark: {props.pokemon.against_dark},Dragon: {props.pokemon.against_dragon}, Electricity: {props.pokemon.against_electricity}, Fairy: {props.pokemon.against_fairy}, Fight: {props.pokemon.against_fight}, Fire: {props.pokemon.against_fire}, Flying: {props.pokemon.against_flying}, Ghost: {props.pokemon.against_ghost}, Grass: {props.pokemon.against_grass}</p>
                        <p>Ground: {props.pokemon.against_ground}, Ice: {props.pokemon.against_ice}, Normal: {props.pokemon.against_normal}, Poison: {props.pokemon.against_poison}, Psychic: {props.pokemon.against_psychic}, Rock: {props.pokemon.against_rock}, Steel: {props.pokemon.against_steel}, Water: {props.pokemon.against_water} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

