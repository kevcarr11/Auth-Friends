import React, { useState } from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function EditFriend(props) {
  const [editFriend, setEditedFriend] = useState({
    name: '',
    age: "",
    email: "",
    id: Date.now()
  })

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChanges = e => {
    setEditedFriend({
      ...editFriend,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    AuthWithAxios().put(`/api/friends/${props.friendId}`, editFriend)
    .then(() => {
      AuthWithAxios().get("api/friends")
      .then((res) => props.setUser(res.data))
    })
    .catch(err => console.log(err))
    setEditedFriend({
      name: "",
      age: "",
      email: "",
      id: Date.now()
    })
    toggle()
  }

  return (
    <div>
    <Button color="link" onClick={toggle}>Edit</Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a new friend</ModalHeader>
      <ModalBody>
        <form>
          <input  placeholder="Name" type="text" name="name" value={editFriend.name} onChange={handleChanges} />
          <input  placeholder="Age" type="number" name="age" value={editFriend.age} onChange={handleChanges} />
          <input  placeholder="Email" type="email" name="email" value={editFriend.email} onChange={handleChanges} />
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={handleSubmit}>Submit</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default EditFriend
