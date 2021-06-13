import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css'

const Welcome = () => {

    return (
        <div>
            <h1 id="welheader">This is our Dashboard</h1>
            <div className="container">
                <button className="nav-item">
                    <NavLink className="nav-link" exact to="/tracker">Live Tracker</NavLink>
                </button>
                <button className="nav-item">
                    <NavLink className="nav-link" exact to="/starlink">Starlink</NavLink>
                </button>
                <button className="nav-item">
                    <NavLink className="nav-link" exact to="/rockets">Rockets</NavLink>
                </button>
            </div>
            <br />     
            <h1 className="bio">Welcome to FakeX! This is your opportunity to learn about many of SpaceX's crew and technologies as well as to view a live tracker of SpaceX's Starlink satelites. Not just that, you can also apply to become a SpaceX astronaut and if you have what it takes, maybe you will get to crew the next Dragon!</h1>
            </div>
    )
}

export default Welcome;