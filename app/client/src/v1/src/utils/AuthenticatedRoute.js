import React from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {cookie, instance} from "../api";
import jwt_decode from "jwt-decode"


const useAuth =  () => {
    try{
        const token = cookie.get('RefreshToken')
        const decodedToken =  jwt_decode(token);
        const currentDate = new Date()

        if (decodedToken.exp * 1000 < currentDate.getTime()){
            return {loggedIn: false, user: decodedToken}
        }

        return {loggedIn: true, user: decodedToken}
    }catch(error){
        console.log(error)
        return {loggedIn: false, user: null}
    }
}

const AuthenticatedRoute = () => {

    const isAuth = useAuth()
    console.log(isAuth)
  return (
      isAuth.loggedIn ? (
          <Outlet />
      ) : (
          <Navigate to="/auth" />
      )
  )
};

export default AuthenticatedRoute;
