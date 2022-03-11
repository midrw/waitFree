import './App.css';
import Welcome from './componet/welcome/Welcome';
import PartySize from './componet/partySize/PartySize';
import Phone from './componet/phone/Phone'
function App() {
  return (
    <div>
      <Router>
        <Route path="welcome" componet={Welcome}></Route>
        <Route path="partySize" componet={PartySize}></Route>
        <Route path="Phone" componet={Phone}></Route>
      </Router>
    </div>
  );
}

export default App;
