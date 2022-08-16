import React from 'react';
import { useSelector } from 'react-redux';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
 const token = useSelector(state =>state.Auth.token)

 if(token){
      return true
    } else {
      return false
    }
  }
  
  const  PublicRoutes=(props) =>{
  
    const auth=useAuth()
    return auth?<Navigate to="/doctor"/>: <Outlet/>
  }
  
 export default PublicRoutes;