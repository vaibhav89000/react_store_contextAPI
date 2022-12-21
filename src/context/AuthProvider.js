import React, { createContext, useState } from 'react';

const AuthContext = createContext({
    token: "",
    isLoggedIn: false,
    login:(token)=>{},
    logout:()=>{}
})

export const  AuthProvider = (props) => {
  
    const [token, setToken] = useState(null);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(null);

    const loginHandler = (tok) => {
        console.log('login')
        setUserIsLoggedIn(true);
        setToken(tok);
    }

    const logoutHandler = () => {
        console.log('logout')
        setUserIsLoggedIn(false);
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

