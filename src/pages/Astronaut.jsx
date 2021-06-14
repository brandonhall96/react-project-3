//========================IMPORTS==================================//
import Form from '../components/Form'
import setAuthToken from '../utils/setAuthToken'    
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'

const CONNECTION_URI = process.env.DB_URI || process.env.REACT_APP_SERVER_URL;

const Astronaut =  (props) =>{
const [astronauts, setAstronauts] = useState([])
const [redirect, setRedirect] = useState(false)

    useEffect(()=> {
        let url = CONNECTION_URI+"/api/astros"
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.get(url)
        .then((res)=> {
            //setAstronauts and setting state in general is an asyncrynous action
            setAstronauts(res.data.astros)
            console.log(res.data.astros)
            console.log(astronauts)
            console.log("here is astronauts in the initial useEffect")
        })

    },[])

    useEffect(() => {
        console.log("here is astronauts in the 2nd useEffect")
        console.log(astronauts)

    },[astronauts])

    //========================MAPPING, EDIT LINK, DELETE BUTTON==================================//
    const allAstronauts = astronauts.map((astronaut, i) => {
        return <div key={i}>
            <h2>{astronaut.name}</h2>
            <p><strong>Age:</strong> {astronaut.age}</p>
            <p><strong>Favorite Space Movie:</strong> {astronaut.favSpaceMovie}</p>
            <p><strong>Favorite Astronaut:</strong> {astronaut.favAstronaut}</p>
            <p><strong>Qualifications:</strong> {astronaut.question}</p>
            
                <button type="button" class="btn btn-outline-danger">
                    <Link className="edit"
                    to={`/edit/${astronaut._id}`}
                    >Edit</Link></button>
                    {' '}
                <button type="button" class="btn btn-outline-danger"
                onClick={() => deleteAstro(astronaut._id)}
                >Delete</button>
                <hr></hr>
            
        </div>
    })
   
//========================DELETE FUNCTION==================================//
    const deleteAstro =  async (id) => {
        //update to .env 
        console.log(id)
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.delete(`{$process.env.REACT_APP_SERVER_URL}/api/astros/${id}`)
        .then(response => {
            setRedirect(true)
            console.log(response.data)
        })
        
      };
      if (redirect) return <Redirect to="/astronauts" />
      
   //========================ASTRONAUTS DISPLAY==================================//   
    return (

        <div className="row mt-4">
            <div className="col-md-8 offset-md-3">
                <div className="card card-body">
                <div class="text-center">
                  {allAstronauts}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Astronaut