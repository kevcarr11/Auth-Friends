import React, { useState } from 'react'
import AuthWithAxios from "../utils/AuthWithAxios"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function AddFriend(props) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
    id: Date.now()
  })
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    AuthWithAxios().post("/api/friends", newFriend)
    .then((res) => {
      props.setUser(res.data)
    })
    .catch(err => console.log(err))
    setNewFriend({
      name: "",
      age: "",
      email: "",
    })
    toggle()
  }

  return (
    <div>
    <Button color="info" onClick={toggle}>Add Friend</Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a new friend</ModalHeader>
      <ModalBody>
        <form>
          <input  placeholder="Name" type="text" name="name" value={newFriend.name} onChange={handleChanges} />
          <input  placeholder="Age" type="number" min="1" name="age" value={newFriend.age} onChange={handleChanges} />
          <input  placeholder="Email" type="email" name="email" value={newFriend.email} onChange={handleChanges} />
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

export default AddFriend
