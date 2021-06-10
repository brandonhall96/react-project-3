// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import axios from 'axios';
// import StarLink from './pages/StarLink'

// function API() {
//     const [slinkData, setSlinkData] = useState([]);
    
//     async function fetchSlink() {
//         const request = await axios.get('https://api.spacexdata.com/v4/starlink')
//         const result = await request.data
//         setSlinkData(result)
//     }

//     useEffect(() => {
//         fetchSlink();
//     }, [])






//     return(
//         <div>
//             <Router>
//             <Route path = '/explore'>
//                 <StarLink slinkData={slinkData}  />
//             </Route>
//             </Router>

//         </div>

//     )
// }


// export default API;