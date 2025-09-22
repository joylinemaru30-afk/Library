import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css'
import Secondcomponent from './components/Secondcomponent';
import Notfound from './components/Notfound';
import Signincomponent from './components/Signincomponent';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path="/signin"element={<Signincomponent/>}/>
          <Route path="/about"element={<Secondcomponent/>}/>
          <Route path="*"element={<Notfound/>}/>
          {/* <Route path="/navbar" element={<Navbar/>}/> */}

        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
