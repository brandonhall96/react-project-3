import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

const API = () => {

    const [starlink, setStarlink] = useState([])
    const [selectedStarlink, setSelectedStarlink] = useState([])
    const [isLoaded, setIsLoaded] = useState(false); 

useEffect(async() => {
    let allStarlinks = []
    
        let url = 'https://api.spacexdata.com/v4/rockets'
        await axios.get(url)
        .then (res => {
            let starlink = res.data.results
            allStarlinks.push(...starlink)
           setStarlink(allStarlinks)

        })
    
    setIsLoaded(true);
}, [])

const select = (e, index) => {
    console.log('clicked', e.target);
    setSelectedStarlink([])
  setSelectedStarlink({ name: e.target.TLE_LINE0, longitude: e.target.longitude, latitude: e.target.latitude });
  };









    return (
        <div>
          <Router>
              {/* <StarLink /> */}

            </Router>
        
        </div>
    )
}

export default API;