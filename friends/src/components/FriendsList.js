import React from 'react'
import { useState, useEffect } from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"
import FriendCard from "./FriendCard"
import AddFriend from "./AddFriend"
import { Spinner } from 'reactstrap';


function FriendsList(props) {
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AuthWithAxios().get("/api/friends")
      .then(res => {
        console.log(res.data)
        setUser(res.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
      setIsLoading(false)
  }, [])



  return (
    <>
      {isLoading ? (
        <div>
          <Spinner color="dark" />
        </div>
      ) : (
          <div className="wrapper">
            <h1>My Friends List</h1>
            <AddFriend setUser={setUser} />
            {user.map((friend, index) => (
              <FriendCard key={index} friend={friend} setUser={setUser} />
            ))}
          </div>
        )}
    </>
  )
}

export default FriendsList
