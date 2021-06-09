// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    //we are declaring these to use in our form as empty text boxes!
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleName = (e) => { //when this text box is changed do this with the user input
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

    }

    
    const handleSubmit = (e) => { 
        e.preventDefault();

        //check passwords match
        if (password === confirmPassword && password.length >= 8) {
            const payload = {name, email, password}

            let url = `${REACT_APP_SERVER_URL}/api/users/signup`;
            axios.post(url, payload)
            .then (res => {
                console.log(res.data);
                setRedirect(true)
            })
            .catch(err => {
                console.log(err)
            })
            
            
            
        }
        else {
            alert('Password must be atleast 8 characters or more, try again..')
        }

    }

    if (redirect) return <Redirect to='/login' />

    //async away method

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // check to make sure passwords match
    //     if (password === confirmPassword && password.length >= 8) {
    //         const payload = { name, email, password };
    //         let url = `${REACT_APP_SERVER_URL}/api/users/signup`;
    //         try {
    //             let response = await axios.post(url, payload);
    //             let { data } = response;
    //             console.log(data);
    //             setRedirect(true);
    //         } catch (error) {
    //             alert('Error occurred, please try again...');
    //         }
    //     } else {
    //         if (!password === confirmPassword) {
    //             alert('Password and Confirm Password need to match. Please try again...');
    //         } else {
    //             alert('Password needs to be at least 8 characters or more. Please try again...');
    //         }
    //     }
    // }
    
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' value={name} onChange={handleName} className='form-control'/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' value={email} onChange={handleEmail} className='form-control'/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' value={password} onChange={handlePassword} className='form-control'/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type='password' name='confirmPassword' value={confirmPassword} onChange={handleConfirmPassword} className='form-control'/>
                        </div>

                        <button type='submit' className="btn btn-primary float-right">Submit</button>

                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Signup;
