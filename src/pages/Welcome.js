import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css'

const Welcome = () => {

    return (
        <div>
            <h1 id="bio" class="text-center">Welcome to FakeX!</h1>
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
                    <NavLink id="butttext" className="nav-link" exact to="/astronauts">Astronaut Applicants</NavLink>
                </button>
                <button id="butt5" className="button">
                    <NavLink id="butttext" className="nav-link" exact to="/dragons">Dragons</NavLink>
                </button>
                <button id="butt6" className="button"> 
                    <NavLink id="butttext" className="nav-link" exact to="/crew">Crew</NavLink>
                </button>
            </div>
            <br />     
            {/* <h1 id="bio" class="text-center"> This is your opportunity to learn about many of SpaceX's crew and technologies as well as to view a live tracker of SpaceX's Starlink satelites. Not just that, you can also apply to become a SpaceX astronaut and if you have what it takes, maybe you will get to crew the next Dragon!</h1> */}
            <h1 id="bio" class="text-center"> Log in to learn about SpaceX's crew, rockets, and see real live feed from Starlink's Satellites. You can also apply to be an Astronaut in extremely selective program! </h1>
            </div>
    )
}

export default Welcome;