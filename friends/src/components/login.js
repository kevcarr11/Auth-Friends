import React, { useState } from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"

function Login(props) {
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)

    AuthWithAxios().post("/api/login", userInfo)
      .then(res => {
        setIsLoading(false)
        console.log(res.data)
        localStorage.setItem("token", res.data.payload)
        props.history.push("/friends")
      })
      .catch(err => {
        setIsLoading(false)
        setError(err.response.data.error)
      })
  }

  return (
    <>
      {isLoading ? (
        <div className="lds-ring"></div>
      ) : (
          <div>
            <form onSubmit={handleSubmit}>
              {error && <div className="error">{error}</div>}

              <input type="text" name="username" placeholder="User Name" value={userInfo.username} onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" value={userInfo.password} onChange={handleChange} />

              <button type="submit">Login</button>
            </form>
          </div>
        )}
    </>
  )
}

export default Login
