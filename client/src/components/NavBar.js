import React from 'react';

function NavBar(props) {


    return (
        <div>
            <header className="main-header">
                <img className="header-img" src={process.env.PUBLIC_URL + 'turkey.jpeg.png'} alt="a turkey" />
                <h2 className="header-title">Poke-mans</h2>
                <ul className="nav">
                    <li><a href="temporary">Home</a></li>
                    <li><a href="temporary">Random pokemon!</a></li>
                    <li><a href="h123">About Us</a></li>
                </ul>
            </header>
        </div>
    );
}

export default NavBar;