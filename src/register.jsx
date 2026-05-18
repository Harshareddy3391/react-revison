import React, { useState } from 'react'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [verifyMessage, setVerifyMessage] = useState('')

  const handleVerifyPhone = () => {
    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      setPhoneVerified(false)
      setVerifyMessage('Enter a valid 10-digit phone number before verifying.')
      return
    }

    setPhoneVerified(true)
    setVerifyMessage('Phone number verified successfully.')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!phoneVerified) return

    alert(`Registered ${firstName} ${lastName} with email ${email}`)
  }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-7 col-md-8'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <h2 className='card-title mb-4 text-center'>Register</h2>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='firstName' className='form-label'>First Name</label>
                    <input
                      id='firstName'
                      type='text'
                      className='form-control'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder='John'
                      required
                    />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='lastName' className='form-label'>Last Name</label>
                    <input
                      id='lastName'
                      type='text'
                      className='form-control'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder='Doe'
                      required
                    />
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>Email address</label>
                  <input
                    id='email'
                    type='email'
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='name@example.com'
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>Phone Number</label>
                  <div className='input-group'>
                    <input
                      id='phone'
                      type='tel'
                      className='form-control'
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value)
                        setPhoneVerified(false)
                        setVerifyMessage('')
                      }}
                      placeholder='123-456-7890'
                      required
                    />
                    <button
                      type='button'
                      className={`btn ${phoneVerified ? 'btn-success' : 'btn-outline-primary'}`}
                      onClick={handleVerifyPhone}
                    >
                      {phoneVerified ? 'Verified' : 'Verify'}
                    </button>
                  </div>
                  {verifyMessage && (
                    <div className='form-text text-muted'>{verifyMessage}</div>
                  )}
                </div>

                <div className='mb-3'>
                  <label htmlFor='location' className='form-label'>Location</label>
                  <input
                    id='location'
                    type='text'
                    className='form-control'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='City, State'
                    required
                  />
                </div>

                <button type='submit' className='btn btn-primary w-100' disabled={!phoneVerified}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
