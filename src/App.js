import './App.css';
import Homepage from './pages/Homepage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { Authprovider } from './context/Authcontext';
import Privateroute from './utils/Privateroute';
import AadharCard from './components/aadhar/AadharCard';
import PanCard from './components/pan/PanCard';

function App() {
  return (
    <BrowserRouter>
    <Authprovider>
      <Routes>
        <Route path='/' Component={Homepage}/>
        <Route Component={Privateroute}>
        <Route path='/aadhaar' Component={AadharCard}/>
        <Route path='/pan' Component={PanCard}/>
        <Route path='/home' Component={Home}/>
        </Route>
        <Route path='/signin' Component={Signin}/>
        <Route path='/signup' Component={Signup}/>
      </Routes>
    </Authprovider>
    </BrowserRouter>
  );
}

export default App;
