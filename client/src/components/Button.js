import React from 'react';

function Button(props) {
    return (
        <div>
            <button className={props.name} onClick={props.handler}>{props.title}</button>
        </div>
    );
}

export default Button;