import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Secondcomponent from './components/Secondcomponent';
import Notfound from './components/Notfound';
import Signincomponent from './components/Signincomponent';
import Navbar from './components/Navbar'; 
import Lending from './components/Lending';
import Location from './components/Location';
import Dashboard from './components/Borrowed';
import Home from './components/Home';
import { SellBook } from 'react-icons/gi';
import Sellbook from './components/Sellbook';
import BrowsePage from './components/Browse';
import EventsPage from './components/Event';


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
          <Route path="/borrow" element={<Dashboard/>}/>
          <Route path="/sell" element={<Sellbook/>}/>
          <Route path='/browse' element={<BrowsePage/>}/>
          <Route path='/events' element={<EventsPage/>}/>

          

        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
