import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Contact = () => {

  let [data, setData] = useState([])

  useEffect(() => {

    axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")

      .then((res) => {
        setData(res.data)
      })

      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (

    <div className='container mt-5'>

      <h1>Contact Page</h1>

      {
        data.length > 0 ?

          <table className='table table-bordered'>

            <thead>

              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>

            </thead>

            <tbody>

              {
                data.map((contact,index) => (

                  <tr key={index}>

                    <td>{contact.name}</td>

                    <td>{contact.email}</td>

                    <td>{contact.phone}</td>

                  </tr>

                ))
              }

            </tbody>

          </table>

          :

          <h2>No Data Available</h2>
      }

    </div>
  )
}

export default Contact