import React from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import EditFriend from "./EditFriend"

function FriendCard(props) {

  const handleDelete = e => {
    e.preventDefault()
    AuthWithAxios()
    .delete(`/api/friends/${props.friend.id}`)
      .then(() => AuthWithAxios().get("/api/friends"))
        .then((res) => props.setUser(res.data))
      .catch((err) => console.log(err))
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
          <EditFriend setUser={props.setUser} friendId={props.friend.id} />
          <Button color="link"onClick={handleDelete}>Delete</Button>
        </Toast>
      </div>
  )
}

export default FriendCard
