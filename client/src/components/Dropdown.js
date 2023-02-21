import React from 'react';
import {useState, useEffect} from 'react';

function Dropdown(props) {
  const [value, setValue] = useState("")
  const options = [
    { label: 'By number', value: 'By number' },
    { label: 'Legendaries', value: 'Legendaries' },
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  props.handler(value)

  console.log(value)
    return (
        <div>
            <label>{options.label}</label>
            <select onChange={handleChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;