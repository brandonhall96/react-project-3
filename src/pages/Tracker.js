import { Viewer, Entity } from 'resium';
import React, { useState } from "react";
import { Cartesian3 } from 'cesium'
import '../App.css'


function Tracker() {

    return(
        <Viewer className='globe'>
            <Entity
                name="tokyo"
                description="test"
                position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
                point={{
                    pixelSize: 10,
                   

                }}
            />
        </Viewer>
    )
}

  export default Tracker;