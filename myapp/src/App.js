import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
import Login from './components/Login';
import Dasboard from './components/Dashboard';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (  
   
    <Router>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dash' element={<Dasboard/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Router>
  );
}

export default App;