import './App.css';
import Welcome from './componet/welcome/Welcome';
import PartySize from './componet/partySize/PartySize';
import Phone from './componet/phone/Phone'
import { Routes, Route } from 'react-router-dom'

export function App() {
  const sessionStorage = window.sessionStorage;
  sessionStorage.setItem('id', 1);

  return (
    <div className="select">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/partySize" element={<PartySize />}></Route>
        <Route path="/phone" element={<Phone />}></Route>
      </Routes>
    </div>
  );
}


