import React,{useState} from 'react';
import './App.css';
import Arrow from "./Arrow";
import FunctionalComp from './FunctionalComp';
import UseState from './UseState';
import Properties from './Properties';
import Input from './Input';
import FormNew from './FormNew';
import IfElse from './IfElse';
import Login from './Login';

function App() {
  
  return (
    <div className="App">
     <FunctionalComp />
     <Arrow />
     <UseState />
     <Properties name={"Sakshi"}/>
     <Input />
     <FormNew />
     <IfElse />
     <Login />
    </div>
  );
}

export default App;
