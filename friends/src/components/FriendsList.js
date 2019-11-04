import React from 'react'
import { useState, useEffect } from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"
import FriendCard from "./FriendCard"

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
      {user.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
    </>
  )
}

export default FriendsList
