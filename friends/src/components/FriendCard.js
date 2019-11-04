import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';


function FriendCard(props) {
  return (
    <div className="p-3 my-2 rounded bg-docs-transparent-grid">
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
