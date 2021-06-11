// Imports
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import StarLink from './pages/StarLink';
import Rockets from './pages/Rockets';
import Tracker from './pages/Tracker';
import Favorites from './components/Favorites';
import axios from 'axios';
import Form from './components/Form';
import Astronaut from './pages/Astronaut';
import Edit from './pages/Edit';



//private route component
const PrivateRoute = ({ component: Component, ...rest}) => {
    console.log('this is a private route')
    let user = localStorage.getItem('jwtToken')

    return <Route {...rest} render={(props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to = '/login' />
    }} />

}


function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(()=> {
      let token;
      //if there is no token inside localstorage, then user is not authenticated
      if (!localStorage.getItem('jwtToken')) {
          console.log('is not authenticated')
          setIsAuthenticated(false);
      } else {
          token = jwt_decode(localStorage.getItem('jwtToken'))
          console.log('token', token);
          setAuthToken(token);
          setCurrentUser(token)
      }
  }, []);

  const nowCurrentUser = userData => {
      console.log('inside now current user')
      setCurrentUser(userData)
      setIsAuthenticated(true);

  }

  const handleLogout = () => {
      //determine if there is a json web token jwt
      //if so we need to remove it
      //set current user to null
      //set is auth to false

      if (localStorage.getItem('jwtToken')) { //if there is a token
          localStorage.removeItem('jwtToken') //we removew it
          setCurrentUser(null) // and give it a value of null
          setIsAuthenticated(false) //set is auth to false 
      }
  }


//   const [sats, setSats] = useState([]);
//   const [selectedSat, setSelectedSat] = useState({})

//   useEffect(() => {
//       async function fetchSatData() {
//           const request = await axios.get('https://api.spacexdata.com/v4/starlink')
//           const results = await request.data
//         //   console.log(results)
//           setSats(results)
          
//       }
//       fetchSatData();
//   }, [])

//   const select = (e, idx) => {
//       setSelectedSat([])
//       setSelectedSat({ name: e.target.OBJECT_NAME, model: e.target.OBJECT_ID})
   
//   }


  return (
    <div className="App">
      <Navbar isAuth={isAuthenticated} handleLogout={handleLogout}  />
      <div className='container mt-5'>
        <Switch>

            <Route path='/signup' component={ Signup } />
            <Route path='/login' render={(props) => <Login {...props} user={currentUser} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} /> } />
            <Route path='/about' component={About} />
            <Route exact path='/' component={Welcome} />
            <PrivateRoute path = '/profile' component={Profile} user={currentUser} handleLogout={handleLogout} />
            <Route path='/tracker' component={Tracker} />
            <Route path='/starlink' component={StarLink} />
            <Route path='/rockets' component={Rockets} />
            <PrivateRoute path='/form' component={Form} user={currentUser} />
            <Route path='/astronauts' component={Astronaut} />
            <Route path='/edit' component={Edit} />

        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
  
}

export default App;
