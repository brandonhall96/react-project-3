import { Viewer, Entity } from 'resium';
import React, { useState } from "react";
import { Cartesian3 } from 'cesium'
import '../App.css'
import { NavLink, Link } from 'react-router-dom';
import Color from 'cesium/Source/Core/Color';

function Tracker() {

    return(
        <Viewer full className='globe'>
            {/* <NavLink className="nav-link"  to="/rockets">Rockets</NavLink> */}
            <Entity
                name="FakeX HQ"
                description="FakeX HQ"
                position={Cartesian3.fromDegrees(-118.35247, 33.92309)}
                point={{
                    pixelSize: 10,
                    color: Color.RED
                    
                }}
            />
        </Viewer>
    )
}

  export default Tracker;