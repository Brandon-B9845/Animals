import React from 'react';

function NavBar(props) {


    return (
        <div>
            <header className="main-header">
                <img className="header-img" src={process.env.PUBLIC_URL + 'turkey.jpeg.png'} alt="a turkey" />
                <h2 className="header-title">Turkish Movie Central</h2>
                <div classname="nav-btn-container">
                    <p classname="nav-btn">Home</p>
                </div>
                <div classname="nav-btn-container">
                    <p classname="nav-btn">Random Movie!</p>
                </div >
                <div classname="nav-btn-container">
                    <p classname="nav-btn">About us</p>
                </div>

            </header>
        </div>
    );
}

export default NavBar;