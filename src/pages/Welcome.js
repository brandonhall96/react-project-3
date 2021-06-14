import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css'

const Welcome = () => {

    return (
        <div>
            <div className="container">
                <button id="butt1" className="button">
                    <NavLink id="butttext" className="nav-link" exact to="/tracker">Live Tracker</NavLink>
                </button>
                <button id="butt2" className="button">
                    <NavLink id="butttext" className="nav-link" exact to="/starlink">Starlink</NavLink>
                </button>
                <button id="butt3" className="button"> 
                    <NavLink id="butttext" className="nav-link" exact to="/rockets">Rockets</NavLink>
                </button>
            </div>
            <div className="container">
                <button id="butt4" className="button">
                    <NavLink id="butttext" className="nav-link" exact to="/astronauts">Astronauts</NavLink>
                </button>
                <button id="butt5" className="button">
                    <NavLink id="butttext" className="nav-link" exact to="/dragons">Dragons</NavLink>
                </button>
                <button id="butt6" className="button"> 
                    <NavLink id="butttext" className="nav-link" exact to="/crew">Crew</NavLink>
                </button>
            </div>
            <br />     
            <h1 id="bio" class="text-center">Welcome to FakeX! This is your opportunity to learn about many of SpaceX's crew and technologies as well as to view a live tracker of SpaceX's Starlink satelites. Not just that, you can also apply to become a SpaceX astronaut and if you have what it takes, maybe you will get to crew the next Dragon!</h1>
            </div>
    )
}

export default Welcome;