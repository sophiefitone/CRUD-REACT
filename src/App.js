import { Route, Routes } from 'react-router';
import './App.css';
import EditUser from './components/Edituser';
import Header from './components/Header';
import Home from './components/Home';
import NewUser  from './components/NewUser';
import Users from './components/user';
import { GlobalProvider } from './context/GlobalState';




function App() {
  return (
      <> <Header />
    <div className='bg'>
      <GlobalProvider>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/users" element={<Users />} />
          <Route path ="/users/new" element={<NewUser />} />
          <Route path ="/users/:id/edit" element={<EditUser />} />
       </Routes>
     </GlobalProvider>
    </div>
    </>
      
    
  );
}

export default App;
