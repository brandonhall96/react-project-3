//================= IMPORTS ===============================//
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
//================= COMPONENTS IMPORT ===============================//
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
import Form from './components/Form';
import Astronaut from './pages/Astronaut';
import Edit from './pages/Edit';
import UpdateForm from './pages/UpdateForm';
import Dragons from './pages/Dragons';
import Crew from './pages/Crew';

//================= PRIVATE ROUTE COMPONENT ===============================//
const PrivateRoute = ({ component: Component, ...rest}) => {
    console.log('this is a private route')
    let user = localStorage.getItem('jwtToken')

    return <Route {...rest} render={(props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to = '/login' />
    }} />

}

//================= APP FUNCTION ===============================//
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
      if (localStorage.getItem('jwtToken')) { //if there is a token
          localStorage.removeItem('jwtToken') //we removew it
          setCurrentUser(null) // and give it a value of null
          setIsAuthenticated(false) //set is auth to false 
      }
  }

//================= RETURN (JSX) ===============================//
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
            <PrivateRoute path='/tracker' component={Tracker} user={currentUser}/>
            <PrivateRoute path='/starlink' component={StarLink} user={currentUser}/>
            <PrivateRoute path='/rockets'  component={Rockets} user={currentUser} />
            <PrivateRoute path='/dragons'  component={Dragons} user={currentUser}/>
            <PrivateRoute path='/form' component={Form} user={currentUser} />
            <PrivateRoute path='/astronauts' component={Astronaut} user={currentUser} />
            <PrivateRoute path='/crew' component={Crew} user={currentUser} />
            <Route path='/edit/:id' component={Edit} />

        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
  
}

export default App;
