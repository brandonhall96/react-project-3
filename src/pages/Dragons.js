import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'
import setAuthToken from '../utils/setAuthToken'
const CONNECTION_URI = process.env.DB_URI || process.env.REACT_APP_SERVER_URL;

const Dragons = (props) => {

    const [dragonData, setDragonData] = useState([]);
    
    
    useEffect(() =>{
        let url = CONNECTION_URI+'/api/dragons'
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.get(url)
        .then((res) =>{
            setDragonData(res.data.dragons)
            
        })
    }, [])
    
    useEffect(() => {
        
        
        
    },[dragonData])


    const allDragons = dragonData.map((drag, idx)=> {
        return <div  className="rockets" key={idx}>
            <h1>{drag.name}</h1>
            <br></br>
            <h3>Crew Capacity: {drag.crew_capacity}</h3>
            <br></br>
            <h3>First Flight: {drag.first_flight}</h3>
            <br></br>
            <img className='dragimg' src={drag.flickr_images}></img>
            <h3>{drag.description}</h3>
           
          
            </div>
    })

    return(
    <div>
        <div className="rocket">
            {allDragons[0]}
        </div>
        <br></br>
        <div className='rocket'>
            {allDragons[1]}
        </div>
    </div>
    )
}

export default Dragons;
