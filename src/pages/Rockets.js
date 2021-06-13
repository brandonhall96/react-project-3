import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'
import setAuthToken from '../utils/setAuthToken'
const CONNECTION_URI = process.env.DB_URI || "http://localhost:8080";


const Rockets = (props) => {
    

    const [rocketData, setRocketData] = useState([]);
    
    
    useEffect(() =>{
        let url = CONNECTION_URI+'/api/rockets'
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.get(url)
        .then((res) =>{
            setRocketData(res.data.rockets)
            
        })
    }, [])
    
    useEffect(() => {
        
        
        
    },[rocketData])
    
    
   
    const allRockets = rocketData.map((rock, idx)=> {
        return <div className="rockets" key={idx}>
            <h1>{rock.name}</h1>
            <br></br>
            <h3>{rock.first_flight}</h3>
            <br></br>
            <h3>{rock.description}</h3>
          
            </div>
    })
        


    return(
        <div>
            {allRockets}
        </div>
    )
}

export default Rockets;