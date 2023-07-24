import './App.css';
import Homepage from './pages/Homepage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Homepage}/>
        <Route path='/signin' Component={Signin}/>
        <Route path='/signup' Component={Signup}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
