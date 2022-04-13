import { useContext, useEffect, useState } from 'react';
import { Container, Form , Button} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';


export default function EditUser () {
    const [selectedUser, setSelectedUser] = useState({
        name:'',
        lastname:'',
        city:'',
    });

    let navigate = useNavigate();
    let params = useParams();
    const { users, editUser } = useContext(GlobalContext);
    

    useEffect(() => {
        const userId = params.id;
        const selectedUser = users.find(user => user.id === userId )
        setSelectedUser(selectedUser)
    },[params.id,users]);

    const handleEditUser = (e) => {
        let obj=Object.assign ({},selectedUser);
        obj[e.target.name] = e.target.value;
        setSelectedUser(obj);
    };

    const updateUser = () =>{
     editUser(selectedUser)
     navigate('/users')
    }
    

    return (
        <>
        <Container fluid="sm">
         <h1 className='App'>Edit User  </h1>
        <Form>
        <Form.Group className="my-3 " >
        <Form.Label>Name</Form.Label>
        <Form.Control size="sm" type="text" name="name"  value={selectedUser.name} onChange={handleEditUser} />
        <br />
        <Form.Label>Lastname</Form.Label>
        <Form.Control size="sm" type="text" name="lastname" value={selectedUser.lastname} onChange={handleEditUser} />
        <br />
        <Form.Label>Email</Form.Label>
        <Form.Control size="sm" type="text" name="email" value={selectedUser.email}  onChange={handleEditUser} />
        <br />
        <Form.Label>City</Form.Label>
        <Form.Control size="sm" type="text" name="city" value={selectedUser.city} onChange={handleEditUser} />
        <br />
        </Form.Group>
        <Button variant="primary my-3" className="form-control" onClick={updateUser} >Update user</Button>
        </Form>
        </Container>
      </>
    )
}