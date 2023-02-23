import React,{ useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import Loader from 'utils/loader';
import { useNavigate  } from "react-router-dom";

// import { Routes, Route, BrowserRouter } from 'react-router-dom';

// export default function AuthGuard(ComposedComponent){
    const AuthenticationCheck = (props) => {
        let navigate = useNavigate();
        const [isAuth,setIsAuth] = useState(false);
        const users  = useSelector( state => state.users );


        useEffect(()=>{
            if(!users.auth){
                navigate("/")
                // props.history.push('/')
            }else{
                setIsAuth(true);
            }
        },[props,users, navigate]);


        if(!isAuth){
            return(
                //  <Navigate to="/" replace={true} />
                <Loader full={true}/>
            )
        } else {
            return(
                props.children
                // <Route path={props.path} element={props.component}/>
                // <ComposedComponent users={users} {...props}/>
            )
        }




    }
    // return AuthenticationCheck;
// }
export default AuthenticationCheck