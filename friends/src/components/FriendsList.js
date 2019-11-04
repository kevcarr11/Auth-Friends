import React from 'react'
import { useState, useEffect } from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"
import FriendCard from "./FriendCard"
import AddFriend from "./AddFriend"

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
    <div className="wrapper">
      <h1>My Friends List</h1>
      <AddFriend setUser={setUser} />
      {user.map((friend, index) => (
        <FriendCard key={index} friend={friend} setUser={setUser} />
      ))}
    </div>
  )
}

export default FriendsList
