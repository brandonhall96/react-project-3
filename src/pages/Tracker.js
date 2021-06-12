import { Viewer, Entity } from 'resium';
import { Cartesian3 } from 'cesium'
import '../App.css'
import { NavLink, Link } from 'react-router-dom';
import Color from 'cesium/Source/Core/Color';
import axios from 'axios';
import React , {useState, useEffect} from 'react'
import PointGraphics from 'cesium/Source/DataSources/PointGraphics';





const Tracker = (props) => {

    const [name, setName] = useState('')
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [launchDate, setLaunchDate] = useState('')
   
    const [name2, setName2] = useState('')
    const [longitude2, setLongitude2] = useState(0)
    const [latitude2, setLatitude2] = useState(0)
    const [launchDate2, setLaunchDate2] = useState('')
   
    const [name3, setName3] = useState('')
    const [longitude3, setLongitude3] = useState(0)
    const [latitude3, setLatitude3] = useState(0)
    const [launchDate3, setLaunchDate3] = useState('')
   
    const [name4, setName4] = useState('')
    const [longitude4, setLongitude4] = useState(0)
    const [latitude4, setLatitude4] = useState(0)
    const [launchDate4, setLaunchDate4] = useState('')
   
    const [name5, setName5] = useState('')
    const [longitude5, setLongitude5] = useState(0)
    const [latitude5, setLatitude5] = useState(0)
    const [launchDate5, setLaunchDate5] = useState('')
   //  const [lon] = useState('')
   
   
    useEffect(() => {
        let url = 'https://api.spacexdata.com/v4/starlink/5eed7716096e590006985825'
        axios.get(url).then(res => {
            setName(res.data.spaceTrack.OBJECT_NAME)
            setLongitude(res.data.longitude)
            setLatitude(res.data.latitude)
            setLaunchDate(res.data.spaceTrack.LAUNCH_DATE)
        })
    })
   
   
    useEffect(() => {
        let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985623'
        axios.get(url).then(res => {
            setName2(res.data.spaceTrack.OBJECT_NAME)
            setLongitude2(res.data.longitude)
            setLatitude2(res.data.latitude)
            setLaunchDate2(res.data.spaceTrack.LAUNCH_DATE)
        })
    })
   
    useEffect(() => {
        let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985634'
        axios.get(url).then(res => {
            setName3(res.data.spaceTrack.OBJECT_NAME)
            setLongitude3(res.data.longitude)
            setLatitude3(res.data.latitude)
            setLaunchDate3(res.data.spaceTrack.LAUNCH_DATE)
        })
    })
   
    useEffect(() => {
        let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e59000698563f'
        axios.get(url).then(res => {
            setName4(res.data.spaceTrack.OBJECT_NAME)
            setLongitude4(res.data.longitude)
            setLatitude4(res.data.latitude)
            setLaunchDate4(res.data.spaceTrack.LAUNCH_DATE)
        })
    })
   
    useEffect(() => {
        let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985648'
        axios.get(url).then(res => {
            setName5(res.data.spaceTrack.OBJECT_NAME)
            setLongitude5(res.data.longitude)
            setLatitude5(res.data.latitude)
            setLaunchDate5(res.data.spaceTrack.LAUNCH_DATE)
        })
    })

   
    



   

    return(

 
        <Viewer style={{position: 'absolute', top:55, left:5, right:5, bottom:5}}>
            {/* <NavLink className="nav-link"  to="/rockets">Rockets</NavLink> */}
            <Entity
            
            
                name={name}

                description={name}
                description={launchDate}
                    
                
                

                // description=
                position={Cartesian3.fromDegrees(longitude, latitude, 2000000)}
                
                point={{
                    pixelSize: 10,
                    color: Color.RED
                    
                }}
            />
            <Entity
            
                name={name2}
               
                position={Cartesian3.fromDegrees(longitude2, latitude2, 2000000)}
                
                point={{
                    pixelSize: 10,
                    color: Color.RED
                    
                }}
            />
            <Entity
            
                name={name3}
             
                position={Cartesian3.fromDegrees(longitude3, latitude3, 2000000)}
                
                point={{
                    pixelSize: 10,
                    color: Color.RED
                    
                }}
            />
            <Entity
            
                name={name4}
              
                position={Cartesian3.fromDegrees(longitude4, latitude4, 2000000)}
                
                point={{
                    pixelSize: 10,
                    color: Color.RED
                    
                }}
            />
            <Entity
            
                name={name5}
                
              

                
                position={Cartesian3.fromDegrees(longitude5, latitude5, 2000000)}
                
                point={{
                    pixelSize: 10,
                    color: Color.RED
                    
                }}
            />

        </Viewer>
    )
}

  export default Tracker;