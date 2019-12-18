import React from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import EditFriend from "./EditFriend"

function FriendCard(props) {

  const handleDelete = e => {
    e.preventDefault()
  
    // const friend = props.user.find((item) => item.id === props.friend.id )
    if (window.confirm("Are you sure you want to delete this user?")) {
      props.setUser(props.user.filter(item => item.id !== props.friend.id))
    
    AuthWithAxios()
      .delete(`/api/friends/${props.friend.id}`)
      .then(() => console.log("Friend was deleted"))
      .catch((err) => console.log(err))
    }
}

  return (
    <div className="p-3 bg-info my-2 rounded">
      <Toast className="App" >
        <ToastHeader>
          {props.friend.name}
        </ToastHeader>
        <ToastBody>
          <div>Age: {props.friend.age}</div>
          <div>Email: {props.friend.email}</div>
        </ToastBody>
        <EditFriend
          setUser={props.setUser}
          friendId={props.friend.id}
          name={props.friend.name}
          age={props.friend.age}
          email={props.friend.email} />
        <Button color="link" onClick={handleDelete}>Delete</Button>
      </Toast>
    </div>
  )
}

export default FriendCard
