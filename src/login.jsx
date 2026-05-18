import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Replace with real login logic as needed.
    alert(`Logging in with ${email}`)
  }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-md-8'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <h2 className='card-title mb-4 text-center'>Login</h2>

              <form onSubmit={handleSubmit}>
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
                  <label htmlFor='password' className='form-label'>Password</label>
                  <div className='input-group'>
                    <input
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      className='form-control'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter your password'
                      required
                    />
                    <button
                      type='button'
                      className='btn btn-outline-secondary'
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <div className='form-check mb-4'>
                  <input
                    id='accept'
                    type='checkbox'
                    className='form-check-input'
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <label htmlFor='accept' className='form-check-label'>
                    I agree to the terms and enable login
                  </label>
                </div>

                <button type='submit' className='btn btn-primary w-100' disabled={!accepted}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
