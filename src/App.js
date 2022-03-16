import './App.css';
import Welcome from './componet/welcome/Welcome';
import PartySize from './componet/partySize/PartySize';
import Phone from './componet/phone/Phone'
import {Routes , Route } from 'react-router-dom' 
import { useState } from 'react';



export function App() {
  const [id ,setId] =useState(1);

  const idChange = () =>{
    var newId = id + 1;
    setId(newId);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/partySize" element={<PartySize />}></Route>
        <Route path="/phone" element={<Phone idChange={idChange} id={id}/>}></Route>
      </Routes>
    </div>
  );
}


