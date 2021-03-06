import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { handleLogout } = props;
    const { exp, name, email } = props.user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();
    console.log(String(expirationTime));

    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login again.');
    }
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> { name }</p> 
        <p><strong>Email:</strong> { email }</p> 
        <h5><strong>Click below to apply to be an astronaut</strong></h5>
    </div>) : <h4>Loading...</h4>
        

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="row mt-4">
            <div className="col-md-8 offset-md-3">
                <div className="card card-body">
                    <div class="text-center">
                        <div>
                            {props.user ? userData : errorDiv()}

                            <button type="button" class="btn btn-outline-danger"><Link className="edit" to="/form">Apply Here!</Link></button>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default Profile;