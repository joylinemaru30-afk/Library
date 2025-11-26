import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Secondcomponent from './components/About';
import Notfound from './components/Notfound';
import Signincomponent from './components/Signincomponent';
import Navbar from './components/Navbar'; 
import Lending from './components/Lending';
import Location from './components/Location';
import Home from './components/Home';
import Sellbook from './components/Sellbook';
import Signupcomponent from './components/Signup';
import Mpesapayment from './components/Mpesapayment';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin"element={<Signincomponent/>}/>
          <Route path="/about"element={<Secondcomponent/>}/>
          <Route path="*"element={<Notfound/>}/>
          {/* <Route path="/navbar" element={<Navbar/>}/> */}
          <Route path="/lend"element={<Lending/>}/>
          <Route path="/location"element={<Location/>}/>
          <Route path="/sell" element={<Sellbook/>}/>
          <Route path="/mpesapayment"element={<Mpesapayment/>}/>
          <Route path='/signup'element={<Signupcomponent/>}/>
         

          

        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
