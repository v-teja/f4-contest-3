
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 import { Navigate } from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';




const  App = ()=> {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="" element={<SignUpForm/>}/>
      <Route path="/signup" element={<SignUpForm />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
