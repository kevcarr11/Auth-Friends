import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';


function FriendCard(props) {
  return (
    <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
            {props.friend.name}
          </ToastHeader>
          <ToastBody>
            <div>Age: {props.friend.age}</div>
            <div>Email: {props.friend.email}</div>
          </ToastBody>
        </Toast>
      </div>
  )
}

export default FriendCard
