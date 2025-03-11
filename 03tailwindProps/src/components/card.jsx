import React from "react";
function Card({username,cricket}){
    console.log(username);
    const handleClick =()=>{
        alert(`Username: ${username} | Cricket: ${cricket}`);
    }
    
    return(
        <>
        <h1>Lorem ipsum dolor sit amet, consectetur {username}adipisicing elit. Provident, natus {cricket}.</h1>
        <button onClick={handleClick}>Click me</button>
        </>
    )
}
export default Card
