import './App.css';
import Nav from './component/Nav/Nav';
import Startpage from './component/Startpage/Startpage';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mainpage from './component/Mainpage/Main';

function App(){
  return(
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Startpage/>}/>
          <Route path="/main" element={<Mainpage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
