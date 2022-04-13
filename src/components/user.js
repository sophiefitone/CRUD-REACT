
import React, { useContext } from 'react'
import { Container, Table , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export default function Users() {

   /*const [users, setUsers] = useState([]);

   useEffect(() => {
       
       axios.get('http://localhost:3002/users')
       .then( res => setUsers (res.data));
       return () =>{
           console.log('useEffect users')
       }
   }, [])

let removeUser = (user) => {
        axios.delete('http://localhost:3002/users/'+user.id).then(res => console.log(res))
    }*/
    const {users, removeUser} =  useContext(GlobalContext);
    console.log(users)

    return (
        <>
        <Container>
            <h1 className='App'> Table of Users</h1>
          <Table striped bordered hover size responsive = 'sm' variant="dark">
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>City</th>
                  <th colSpan="2">Azioni</th>
                </tr>
            </thead>
                <tbody>
                   {users.map((user, index)  => <tr key= {index} > 

                       <td>{user.name}</td>
                       <td>{user.lastname}</td>
                       <td>{user.email}</td>
                       <td>{user.city}</td>
                       <td><Button variant="danger" onClick={() => removeUser(user.id)}>Elimina</Button></td>
                       <td><Link to = {`/users/${user.id}/edit`} className="btn btn-success">Update</Link></td>
                   </tr>)}
                </tbody>
            </Table>
        </Container>
        </>
     )
    
}
