import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'
import setAuthToken from '../utils/setAuthToken'
const CONNECTION_URI = process.env.DB_URI || "http://localhost:8080";

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
        return <div className="rockets" key={idx}>
            <h2>{drag.name}</h2>
            <br></br>
            <h2>{drag.crew_capacity}</h2>
            <br></br>
            <h2>{drag.first_flight}</h2>
          
            </div>
    })






    return(
        <div>
            {allDragons}

        </div>
    )
}

export default Dragons;
