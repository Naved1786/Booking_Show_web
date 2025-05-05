import React from 'react'
import { isLoggedIn } from '../auth'
import Dashboard from '../views/userDashboard'

const ProtectedRoute = () => {
    if(isLoggedIn()){
        return (
            <><Dashboard/></>
        )
    }
    else{
        return
    }
}

export default ProtectedRoute