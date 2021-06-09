
//=========================ASTRONAUT APPLICATION===================================//
import { useState } from "react";
const CONNECTION_URI = process.env.DB_URI || "http://localhost:8000";

function Form(props) {
    //initial state of astronaut application

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
    let url = CONNECTION_URI+"/spacexAPI"
}





    return(
        <div>
            <form action=""></form>
        </div>
    )
}

export default Form