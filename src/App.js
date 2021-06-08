// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';

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

  return (
    <div className="App">
      <Navbar isAuth={isAuthenticated} handleLogout={handleLogout}  />
      <div className='container mt-5'>
        <Switch>
            {/* routes will go inside of here */}
            <Route path='/signup' component={ Signup } />
            <Route path='/login' render={(props) => <Login {...props} user={currentUser} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} /> } />
            <Route path='/about' component={About} />
            <Route exact path='/' component={Welcome} />
            <PrivateRoute path = '/profile' component={Profile} user={currentUser} handleLogout={handleLogout} />
          
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
