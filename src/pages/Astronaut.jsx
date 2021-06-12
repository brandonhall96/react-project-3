// import setAuthToken from '../utils/setAuthToken'
import Form from '../components/Form'
import setAuthToken from '../utils/setAuthToken'    
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
const CONNECTION_URI = process.env.DB_URI || "http://localhost:8080";

    

const Astronaut =  (props) =>{
//
const [astronauts, setAstronauts] = useState([])

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

    const allAstronauts = astronauts.map((astronaut, i)=> {
        return <div key={i}>
            <h2>{astronaut.name}</h2>
            <li>Favorite Space Movie: {astronaut.favSpaceMovie}</li>
            <li>Favorite Astronaut: {astronaut.favAstronaut}</li>
            <li>Age: {astronaut.age}</li>
            <button onClick={()=> deleteAstro(astronaut._id)}>Delete this Astronaut</button>
            <Link to={`/edit/${astronaut._id}`}>Edit {astronaut.name}</Link>
            {/* <li><strong>What qualifies you to be an ASTRONAUT?</strong> {astronaut.question}</li> */}
            <hr></hr>
            </div>
    })


    const deleteAstro = (id) => {

        axios.delete(`http://localhost:8080/api/astros/${id}`)
        .then(console.log(id))
        
        
        // fetch(`http://localhost:8080/api/astros/${id}`, {
        //   method: "DELETE",
        // }).then((res) => {
        //     console.log("inside delete")
        //     console.log(id)
        // //   props.reload();
        // //   props.history.push("/");
        // });
      };
    return (

        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                  {allAstronauts}
                  {/* <button onClick={deleteAstro}>Delete this Astronaut</button> */}
                </div>
            </div>
        </div>
    )
}

export default Astronaut