import React from 'react'
import { useState, useEffect } from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"

function FriendsList(props) {
  const [user, setUser] = useState([])

  useEffect(() => {
    AuthWithAxios().get("/api/friends")
    .then(res => {
      console.log(res.data)
      setUser(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>My Friends List</h1>
      
    </>
  )
}

export default FriendsList
