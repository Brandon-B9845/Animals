import React from 'react';
import {useState, useEffect} from 'react';

function Dropdown(props) {
let key = 1

    return (
        <div>
            <label>{props.options.label}</label>
            <select onChange={props.handleChange}>
                {props.options.map((option) => (
                    <option key={key++} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;