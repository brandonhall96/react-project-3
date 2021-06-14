import setAuthToken from '../utils/setAuthToken'
import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'
const CONNECTION_URI = process.env.DB_URI || process.env.REACT_APP_SERVER_URL;


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
        setAuthToken(localStorage.getItem("jwtToken"))   
        
        
    },[rocketData])
    
    
   
    const allRockets = rocketData.map((rock, idx)=> {
        return <div className="rockets" key={idx}>
            <h1>{rock.name}</h1>
            <br></br>
            <h3>{rock.first_flight}</h3>
            <br></br>
            <h3>{rock.description}</h3>
            <img src={rock.flickr_images}></img>
          
            </div>
    })
        


    return(
    <div>
        <div>
            {allRockets[0]}
        </div>
        <div>
            {allRockets[1]}
        </div>
        <div>
            {allRockets[2]}
        </div>
        <div>
            {allRockets[3]}
        </div>
    </div>
    )
}

export default Rockets;