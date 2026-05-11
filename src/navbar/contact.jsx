/*
usage : 
*/


import { Axios } from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

const Contact = () => {
  let [data,setData] = useState({})

  useEffect(()=>{
    Axios.get("")
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })    
  },[])

   
  return (
    <div>
      <h1>Contact page</h1>
      <pre>{JSON.stringify(data)}</pre>


      
    </div>
  )
}

export default Contact
