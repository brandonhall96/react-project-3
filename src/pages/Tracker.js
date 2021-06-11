import { Viewer, Entity } from 'resium';
import React, { useState } from "react";
import { Cartesian3 } from 'cesium'
import '../App.css'
import { NavLink, Link } from 'react-router-dom';
import Color from 'cesium/Source/Core/Color';





const Tracker = () => {

   
    



   

    return(

 
        <Viewer style={{position: 'absolute', top:55, left:0, right:0, bottom:1}}className='globe'>
            {/* <NavLink className="nav-link"  to="/rockets">Rockets</NavLink> */}
            <Entity
            
                name="FakeX HeadQuarters"
                description="FakeX"
                position={Cartesian3.fromDegrees(-118.35247, 33.92309, 1900000)}
                //props.satData
                point={{
                    pixelSize: 10,
                    color: Color.RED
                    
                }}
            />
            <div>
                <h1>HELLO</h1>
            </div>
        </Viewer>
    )
}

  export default Tracker;