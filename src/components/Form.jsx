
//=========================ASTRONAUT APPLICATION===================================//
import { useState } from "react";
const CONNECTION_URI = process.env.DB_URI || "http://localhost:8000";



function Form(props) {
    //initial state of astronaut application
    //add useState based on schema
    //add functions to handle each one of them
    //const payload adding all the details
    //add axios.post
const initialState =
{
    name: "",
    age: "",
    favAstronaut: "",
    faveSpaceMovie: "",
    question: ""
}
// console.log(props)
const [state, setState] = useState(initialState)
console.log(initialState)

//===========SUBMIT-FORM=====================//
const submitForm = async (e) => {
    e.preventDefault()
    let url = CONNECTION_URI+"/api/astros"
    console.log(`database ${url}`)
}

    //take in user input 
    //take data -> add it to database
    //display data on Astronaut page? 




    return(
        <div>
            <form onSubmit= {submitForm}>
            <label htmlFor=""></label>





            </form>
        </div>
    )
}

export default Form