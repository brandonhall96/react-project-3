import axios from 'axios';
//we will be talking to our api 

// This utility will add the authorized user's JWT to the request header
// Any routes that are protected will require the JWT in order to access them.

const setAuthToken = (token) => {
    if (token) {
        //apply the token to every request header
        axios.defaults.headers.common['Authorization'] = token;
        console.log('---Headers----------');
        console.log(axios.defaults.headers.common)


    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;

// axios.post('url', data)
// .then(res => {
//console.log(res.data)
//})