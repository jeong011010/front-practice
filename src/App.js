import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
    <div className='App'>
      <Header>
      <div className='nav'>
        <div>MBTI 테스트</div>
      </div>
      </Header>
      <switch>
      <div>
        <img onClick={()=>{}} src='start-button.png'/>
      </div>
      </switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
