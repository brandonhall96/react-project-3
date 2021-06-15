import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../App.css';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id='navbar1'>
            <div className="container" id="navbar2">
                <Link className="navbar-brand" id="navbarheader" to="/">FakeX</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" id='navs'  exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='navs'  to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='navs'  to="/tracker">Tracker</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='navs'  to="/starlink">Starlink</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='navs'  to="/rockets">Rockets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='navs'  to="/astronauts">Astronaut Applicants</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='navs'  to="/dragons">Dragons</NavLink>
                        </li>
                    </ul>
                    {
                        props.isAuth 
                        ? <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" id='navs'  to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="nav-link logout-link" id='navs'>Logout</span>
                            </li>
                        </ul>
                        : <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" id='navs'  to="/signup">Create Account</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id='navs'  to="/login">Login</NavLink>
                            </li>
                          </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
