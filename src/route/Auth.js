import React from 'react';
import { Navigate } from 'react-router-dom';

function Auth({authenticated,component}) {
    if(!authenticated){
        return <Navigate to='/signin'/>
    }else{
        return <Navigate to='/todo' />
    }
}

export default Auth;