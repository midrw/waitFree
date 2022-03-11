import React from 'react';
import './PartySize.css';
import {Routes , Route ,NavLink} from 'react-router-dom' 

class NumberKeyboard extends React.Component{

  render(){
    return(
      <div className="numberKeyboard">
         <div className="inputResult">0</div>
         <div className="keyboard">
          <table class="keyboardTable">
            <tbody >
              <tr>
                <td className="keyboardCol">1</td>
                <td className="keyboardCol">2</td>
                <td className="keyboardCol">3</td>
              </tr>
              <tr>
                <td className="keyboardCol">4</td>
                <td className="keyboardCol">5</td>
                <td className="keyboardCol">6</td>
              </tr>
              <tr>
                <td className="keyboardCol">7</td>
                <td className="keyboardCol">8</td>
                <td className="keyboardCol">9</td>
              </tr>
              <tr>
                <td className="keyboardCol">0</td>
                <td className="keyboardCol keyboardDelete" colSpan="2">DELETE</td>
              </tr>
            </tbody>
          </table>
         </div>
      </div>
    )
  }
}

class Counter extends React.Component{
  render(){
    return(
      <div className="counter normal">
        <div className="counterLaber"></div>
        <div className="counterContent">
          <div className="counterOperate">
            <svg class="am-icon am-icon-increase am-icon-md">

            </svg>
          </div>
          <div className="counterNum">
            <input type="text" pattern="[0-9]*" value="0" placeholder="Please Inupt" />
          </div>
          <div className="counterOperate">
            <svg class="am-icon am-icon-increase am-icon-md">
             <use xlinkHref="#back"></use>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  
}

class PartySize extends React.Component{

  render(){
    return(
      <div className="global">
        <div className="header">
          <div className="leftBtn">
            <div className="button">
              <NavLink to="/">Back</NavLink>
            </div>
          </div>
          <div className="rightBtn">
            <div className="button ghost">Next</div>
          </div>
          <div className="headerContent">Party Size</div>
        </div>
        <div className="numberInput">
          <NumberKeyboard></NumberKeyboard>
          <div className="counterContainer">
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
          </div>
        </div>
      </div>
    )
  }
}


export default PartySize