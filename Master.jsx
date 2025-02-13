import React from 'react'
import {Routes , Route} from "react-router-dom"
import Login from './Login.jsx'
import Dashboard from './Dashboard'
const Master = () => {
  return (
    <div>
<Routes>
   
         <Route path = '/'  element={<Login></Login>}> </Route>
         <Route path = '/Dashboard' element={<Dashboard></Dashboard>}> </Route>
         <Route path ='/Error' element= {<Error></Error>}></Route>
         
</Routes>
    </div>
  )
}

export default Master