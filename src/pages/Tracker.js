import { Viewer, Entity } from 'resium';
import React, { useState } from "react";
import { Cartesian3 } from 'cesium'
import '../App.css'


function Tracker() {

    return(
        <Viewer className='globe'>
            <Entity
                name="FakeX HQ"
                description="FakeX HQ"
                position={Cartesian3.fromDegrees(-118.35247, 33.92309)}
                point={{
                    pixelSize: 20,
           
                }}
            />
        </Viewer>
    )
}

  export default Tracker;