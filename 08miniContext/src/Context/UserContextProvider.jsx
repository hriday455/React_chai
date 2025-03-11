import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'
const UserContextProvider =({children})=>{
    const [user,Setuser]=useState(null)
    return(
        <UserContext.Provider value={{user,Setuser}}>
        {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider
/* Wraps all child components {children} */
/*This component creates a React Context to store and share user data globally.
 Provides user and Setuser globally using <UserContext.Provider>. */