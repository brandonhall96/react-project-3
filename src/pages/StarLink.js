import axios from 'axios';
import API from '../API';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'







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
//  const [lon] = useState('')


 useEffect(() => {
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7716096e590006985825'
     axios.get(url).then(res => {
         console.log(res.data)
         setName(res.data.spaceTrack.OBJECT_NAME)
         setLongitude(res.data.longitude)
         setLatitude(res.data.latitude)
         setLaunchDate(res.data.spaceTrack.LAUNCH_DATE)
     })
 })


 useEffect(() => {
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985623'
     axios.get(url).then(res => {
         console.log(res.data)
         setName2(res.data.spaceTrack.OBJECT_NAME)
         setLongitude2(res.data.longitude)
         setLatitude2(res.data.latitude)
         setLaunchDate2(res.data.spaceTrack.LAUNCH_DATE)
     })
 })

 useEffect(() => {
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985634'
     axios.get(url).then(res => {
         console.log(res.data)
         setName3(res.data.spaceTrack.OBJECT_NAME)
         setLongitude3(res.data.longitude)
         setLatitude3(res.data.latitude)
         setLaunchDate3(res.data.spaceTrack.LAUNCH_DATE)
     })
 })

 useEffect(() => {
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e59000698563f'
     axios.get(url).then(res => {
         console.log(res.data)
         setName4(res.data.spaceTrack.OBJECT_NAME)
         setLongitude4(res.data.longitude)
         setLatitude4(res.data.latitude)
         setLaunchDate4(res.data.spaceTrack.LAUNCH_DATE)
     })
 })

 useEffect(() => {
     let url = 'https://api.spacexdata.com/v4/starlink/5eed7714096e590006985648'
     axios.get(url).then(res => {
         console.log(res.data)
         setName5(res.data.spaceTrack.OBJECT_NAME)
         setLongitude5(res.data.longitude)
         setLatitude5(res.data.latitude)
         setLaunchDate5(res.data.spaceTrack.LAUNCH_DATE)
     })
 })




// const satList = props.sats.map((sat,idx) => {
//     return <div className="starlinks"><Link to={{pathname: '/sats'}} className="button btn btn-secondary"
//     onClick={(e) => props.select(e, idx)}
//     name={sat.name} 
//     id={sat.model}
//     key={idx}><p className='bCards'>{sat.name}</p></Link></div>

// })





    return(
        <div>
            <h1>This is starlink</h1>
            <div>
                {name}
                <br></br>
                Longitude: {longitude}
                <br></br>
                Latitude: {latitude}
                <br></br>
                Launch Date: {launchDate}
            </div> 
            <br></br>
            <div>
                {name2}
                <br></br>
                Longitude: {longitude2}
                <br></br>
                Latitude: {latitude2}
                <br></br>
                Launch Date: {launchDate2}
            </div> 
            <br></br>
            <div>
                {name3}
                <br></br>
                Longitude: {longitude3}
                <br></br>
                Latitude: {latitude3}
                <br></br>
                Launch Date: {launchDate3}
            </div> 
            <br></br>
            <div>
                {name4}
                <br></br>
                Longitude: {longitude4}
                <br></br>
                Latitude: {latitude4}
                <br></br>
                Launch Date: {launchDate4}
            </div> 
                <br></br>
            <div>
                {name5}
                <br></br>
                Longitude: {longitude5}
                <br></br>
                Latitude: {latitude5}
                <br></br>
                Launch Date: {launchDate5}
            </div> 
                
                
       
           
          


        </div>
    )
}

export default StarLink;