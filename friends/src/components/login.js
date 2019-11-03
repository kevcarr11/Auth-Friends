import React, { useState } from 'react'
import axios from "axios"

function Login(props) {
  const [error, setError] = useState()
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    })
  } 

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post("http://localhost:5000/api/login", userInfo)
      .then(res => {
        console.log(res.data)
      })
      .catch(err =>  {
        setError(err.response.data.error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}

        <input type="text" name="username" placeholder="User Name" value={userInfo.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={userInfo.password} onChange={handleChange} />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
