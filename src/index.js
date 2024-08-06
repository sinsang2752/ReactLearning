import StateTest3 from 'day2/StateTest3';
import Home from 'day4/Home';
import Login from 'day4/Login';
import SignUp from 'day4/SignUp';
import SmartHome from 'day4/SmartHome';
import WebBoardHome from 'day4/WebBoardHome';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path="test" element={<StateTest3/>}/>
        <Route path='/webboard/*' element={<WebBoardHome/>} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </div>
);
