import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Welcome = () => {





    return (
        <div>
            <h1>This is our Dashboard</h1>
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
                        
        
        </div>
    )
}

export default Welcome;