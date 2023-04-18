import React from 'react';
import { Navigate } from 'react-router-dom';
function NotFoundPage({authenticated}) {

    if(!authenticated){
        return <Navigate to="/signin"/>;
    }else{
        return <Navigate to="/todo"/>;
    }
}

export default NotFoundPage;