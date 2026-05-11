/*
usage : 
*/


import { Axios } from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Contact = () => {
  let [data,setData] = useState({})

  useEffect(()=>{
    let url="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    Axios.get(url)
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
      {
        data.length > 0  ?  <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </> : <h1>No data available</h1>
      }


      
    </div>
  )
}

export default Contact
