
//=========================ASTRONAUT APPLICATION===================================//
import setAuthToken from '../utils/setAuthToken'
import { useState } from "react";
import axios from 'axios';
const CONNECTION_URI = process.env.DB_URI || "http://localhost:8000";

const Form = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [favAstronaut, setFavAstronaut] = useState('');
    const [favSpaceMovie, setFavSpaceMovie] = useState('');
    const [question, setQuestion] = useState('');
    
//============function to take in value====================//
const handleName = (e) => {
setName(e.target.value)
}

const handleAge = (e) => {
    setAge(e.target.value)
}

const handleFavAstronaut = (e) => {
    setFavAstronaut(e.target.value)   
}

const handleFavSpaceMovie = (e) => {
    setFavSpaceMovie(e.target.value)   
}

const handleQuestion = (e) => {
    setQuestion(e.target.value)
}


//===========SUBMIT-FORM=====================//
const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {name, age, favAstronaut, favSpaceMovie, question }
    let url = CONNECTION_URI+"/api/astros"
    console.log(`Yo - database ${url} is working!!`)
    // console.log(localStorage.getItem("jwtToken"))
    await setAuthToken(localStorage.getItem("jwtToken"))
    axios.post(url, payload)
    .then( res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err)
    })
}

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">CREATE YOUR OWN ASTRONAUT</h2>
                    <form onSubmit={handleSubmit}>
-b 
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' value={name} onChange={handleName} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type='number' name='age' value={age} onChange={handleAge} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favAstronaut">Favorite Astronaut</label>
                            <input type='text' name='favAstronaut' value={favAstronaut} onChange={handleFavAstronaut} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favSpaceMovie">Favorite Space Movie</label>
                            <input type='text' name='favSpaceMovie' value={favSpaceMovie} onChange={handleFavSpaceMovie} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="question">What qualifies you to be an ASTRONAUT?</label>
                            <input type='text' name='question' value={question} onChange={handleQuestion} className='form-control' />
                        </div>
                        <button type='submit' className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form