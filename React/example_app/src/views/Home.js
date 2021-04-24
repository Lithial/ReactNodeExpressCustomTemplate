import React, {useEffect} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {logDOM} from "@testing-library/react";

//This is a standard home page.
const Home = () => {
    const {getAccessTokenSilently} = useAuth0();

    useEffect(()=>{
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Home;