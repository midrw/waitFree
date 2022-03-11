import './App.css';
import Welcome from './componet/welcome/Welcome';
import PartySize from './componet/partySize/PartySize';
import Phone from './componet/phone/Phone'
import {Routes , Route ,NavLink} from 'react-router-dom' 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/partySize" element={<PartySize />}></Route>
        <Route path="/phone" element={<Phone/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
