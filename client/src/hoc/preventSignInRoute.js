import React from 'react';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const PreventSignInRoute = (props) => {
    const users = useSelector(state => state.users);

    return(
        <>
            { users.auth ?
                <Navigate to="/dashboard"/>
            :
                props.children
            }

        </>
    )

}

export default PreventSignInRoute;