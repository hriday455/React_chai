import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Instagram() {
    const data = useLoaderData()
  //  const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
      INSTAGRAM FOLLOWERS:{data?.followers}
    </div>
  )
}

export default Instagram
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
