import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'
import Tracker from './Tracker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken'


const StarLink = (props) => {

 const [name, setName] = useState('')
 const [longitude, setLongitude] = useState('')
 const [latitude, setLatitude] = useState('')
 const [launchDate, setLaunchDate] = useState('')

 const [name2, setName2] = useState('')
 const [longitude2, setLongitude2] = useState('')
 const [latitude2, setLatitude2] = useState('')
 const [launchDate2, setLaunchDate2] = useState('')

 const [name3, setName3] = useState('')
 const [longitude3, setLongitude3] = useState('')
 const [latitude3, setLatitude3] = useState('')
 const [launchDate3, setLaunchDate3] = useState('')

 const [name4, setName4] = useState('')
 const [longitude4, setLongitude4] = useState('')
 const [latitude4, setLatitude4] = useState('')
 const [launchDate4, setLaunchDate4] = useState('')

 const [name5, setName5] = useState('')
 const [longitude5, setLongitude5] = useState('')
 const [latitude5, setLatitude5] = useState('')
 const [launchDate5, setLaunchDate5] = useState('')

//  const [satData, setSatData] = useState([]);



 useEffect(() => {
     setAuthToken(localStorage.getItem("jwtToken"))
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7716096e590006985825'
     axios.get(url).then(res => {
        
         setName(res.data.spaceTrack.OBJECT_NAME)
         setLongitude(res.data.longitude)
         setLatitude(res.data.latitude)
         setLaunchDate(res.data.spaceTrack.LAUNCH_DATE)
     })
 })


 useEffect(() => {
     setAuthToken(localStorage.getItem("jwtToken"))
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985623'
     axios.get(url).then(res => {
         
         setName2(res.data.spaceTrack.OBJECT_NAME)
         setLongitude2(res.data.longitude)
         setLatitude2(res.data.latitude)
         setLaunchDate2(res.data.spaceTrack.LAUNCH_DATE)
     })
 })

 useEffect(() => {
    setAuthToken(localStorage.getItem("jwtToken"))
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985634'
     axios.get(url).then(res => {
        
         setName3(res.data.spaceTrack.OBJECT_NAME)
         setLongitude3(res.data.longitude)
         setLatitude3(res.data.latitude)
         setLaunchDate3(res.data.spaceTrack.LAUNCH_DATE)
     })
 })

 useEffect(() => {
    setAuthToken(localStorage.getItem("jwtToken"))
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e59000698563f'
     axios.get(url).then(res => {
        
         setName4(res.data.spaceTrack.OBJECT_NAME)
         setLongitude4(res.data.longitude)
         setLatitude4(res.data.latitude)
         setLaunchDate4(res.data.spaceTrack.LAUNCH_DATE)
     })
 })

 useEffect(() => {
    setAuthToken(localStorage.getItem("jwtToken"))
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985648'
     axios.get(url).then(res => {
         
         setName5(res.data.spaceTrack.OBJECT_NAME)
         setLongitude5(res.data.longitude)
         setLatitude5(res.data.latitude)
         setLaunchDate5(res.data.spaceTrack.LAUNCH_DATE)
     })
 })
//  useEffect(() => {
//      let url = 'https://api.spacexdata.com/v4/starlink/'
//      axios.get(url).then(res => {
//          setSatData(res.data)
         
//         //  console.log(res.data)
         
//      })
     
//  })

 





    return(
        
        <div id="star">
            <div className="sats">
                <h1>{name}</h1>
                
                Latitude: {latitude}
                <br></br>
                Longitude: {longitude}
                <br></br>
                Launch Date: {launchDate}
                <br></br>
            
            </div> 
            <br></br>
            <div>
                <h1>{name2}</h1>
                
                Latitude: {latitude2}
                <br></br>
                Longitude: {longitude2}
                <br></br>
                Launch Date: {launchDate2}
                <br></br>
               
            </div> 
            <br></br>
            <div>
                <h1>{name3}</h1>
                
                Latitude: {latitude3}
                <br></br>
                Longitude: {longitude3}
                <br></br>
                Launch Date: {launchDate3}
                <br></br>
             
            </div> 
            <br></br>
            <div>
                <h1>{name4}</h1>
                Latitude: {latitude4}
                <br></br>
                Longitude: {longitude4}
                <br></br>
                Launch Date: {launchDate4}
                <br></br>
              
            </div> 
                <br></br>
            <div>
                <h1>{name5}</h1>
                Latitude: {latitude5}
                <br></br>
                Longitude: {longitude5}
                <br></br>
                Launch Date: {launchDate5}
                <br></br>
                
            </div> 

        
            {/* <Tracker /> */}

            <div id="aboutstar">
            Starlink is a satellite internet constellation being constructed by FakeX providing satellite Internet access. 
            The constellation will consist of thousands of mass-produced 
            small satellites in low Earth orbit, which communicate with designated ground transceivers.
            </div>

            
            <button class='starbutton'><a href='/tracker'>View in Tracker</a></button>
                
                
       
           
          


        </div>
    )
}

export default StarLink;