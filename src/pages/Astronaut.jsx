import setAuthToken from '../utils/setAuthToken'
import Form from '../components/Form'
import { useState, useEffect } from "react";
import axios from 'axios';
const CONNECTION_URI = process.env.DB_URI || "http://localhost:8000";


const Astronaut =  () =>{

const [astronauts, setAstronauts] = useState('')

    useEffect(()=> {
        let url = CONNECTION_URI+"/api/astros"
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.get(url)
        .then((res)=> {
//add response here?
        })

    },[])



    return (

        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">

                    <h1>Astronauts shown here</h1>
                </div>
            </div>
        </div>
    )
}

export default Astronaut