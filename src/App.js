import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import  Barchart from './Components/Bar/Barchart';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/barchart" element={<Barchart/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
