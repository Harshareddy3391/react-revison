import { useEffect, useState } from 'react'
import axios from 'axios'

const Contact = () => {

  let [data, setData] = useState([])
  let [selectedContact, setSelectedContact] = useState(null)

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
      <h1 className='mb-4'>Contact Page</h1>
      
      <div className='row'>
        <div className='col-lg-7 col-md-6'>
          {
            data.length > 0 ?
              <table className='table table-striped table-hover'>
                <thead className='table-dark'>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((contact, index) => (
                      <tr key={index} onClick={() => setSelectedContact(contact)} style={{ cursor: 'pointer' }}>
                        <td>{index + 1}</td>
                        <td>{contact.name.first} {contact.name.last}</td>
                        <td>{contact.email}</td>
                        <td>{contact.cell}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              :
              <div className='alert alert-info'>
                <h2>No Data Available</h2>
              </div>
          }
        </div>
        
        <div className='col-lg-5 col-md-6'>
          {
            selectedContact ? (
              <div className='card'>
                <div className='card-header'>
                  <h2>Contact Information</h2>
                </div>
                <div className='card-body'>
                  <img src={selectedContact.picture.large} alt='contact' className='img-fluid rounded-circle mb-3' />
                  <p><strong>Name:</strong> {selectedContact.name.first} {selectedContact.name.last}</p>
                  <p><strong>Email:</strong> {selectedContact.email}</p>
                  <p><strong>Phone:</strong> {selectedContact.cell}</p>
                  <p><strong>Location:</strong> {selectedContact.location.city}, {selectedContact.location.state}</p>
                </div>
              </div>
            ) : (
              <div className='alert alert-secondary'>
                <h2>Please click on a contact to see details</h2>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Contact