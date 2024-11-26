import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/contact' element={<ContactUs/>}></Route>
          </Routes>  
        
       </Router>  
    </div>
  );
}

export default App;
