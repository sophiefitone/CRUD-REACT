import React, { useContext, useState } from 'react'
import { Container, Form , Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'
import {v4 as uuid} from 'uuid';


export default function NewUser () {

let navigate = useNavigate();
const { addUser} = useContext(GlobalContext);
const [newUser, setNewUser] = useState({});
 
const handleNewUser = (e) => {
    let obj= Object.assign ({},newUser);
    obj[e.target.name] = e.target.value;
    setNewUser(obj);
}
const saveUser = () =>{
    const userNew= {
        id: uuid(),
        name: newUser.name,
        lastname: newUser.lastname,
        email: newUser.email,
        city: newUser.city,
    }
    
     addUser(userNew);
    navigate('/users')
}

    return (
        
        <>
        <Container fluid="sm">
         <h1 className='App'>Registrati </h1>
        <Form>
        <Form.Group className="my-3 " >
        <Form.Label>Name</Form.Label>
        <Form.Control size="sm" type="text" name="name" value={newUser.name} onChange={handleNewUser} />
        <br />
        <Form.Label>Lastname</Form.Label>
        <Form.Control size="sm" type="text" name="lastname" value={newUser.lastname} onChange={handleNewUser} />
        <br />
        <Form.Label>Email</Form.Label>
        <Form.Control size="sm" type="text" name="email" value={newUser.email} onChange={handleNewUser} />
        <br />
        <Form.Label>City</Form.Label>
        <Form.Control size="sm" type="text" name="city" value={newUser.city} onChange={handleNewUser} />
        
        </Form.Group>
        <Button variant="primary my-3" className="form-control" onClick={saveUser}>Add user</Button>
        </Form>
        </Container>
      </>
    )
}
