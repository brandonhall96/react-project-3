import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'


const Rockets = (props) => {
    
    const CONNECTION_URI = process.env.DB_URI || "http://localhost:8080";

    const [rocketData, setRocketData] = useState([]);


    useEffect(() =>{
        let url = CONNECTION_URI+'/api/rockets'
        axios.get(url)
        .then(response => {
            setRocketData(response.data)
            console.log(response.data)

        })
    })

    // const rocketList = rocketData.map((roc, index) => {
        
    //         return <div key={index}>{roc.rockets.name}</div>
        
    // })






    return(
        <div>
            {/* <h1>{rocketList}</h1> */}
        </div>
    )
}

export default Rockets;