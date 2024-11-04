import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Dashboard from './components/Dashboard';


function App() {
  return (
    // <div className="App">
    // <h1><Home/></h1> 
    // </div>
    <Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
    </Router>
  );
}

export default App;