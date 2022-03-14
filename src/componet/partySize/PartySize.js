import React from 'react';
import './PartySize.css';
import { NavLink } from 'react-router-dom' 

class NumberKeyboard extends React.Component{
  
  state={
    count:'0',
  }

  countChange=(e)=>{
    if(this.state.count==0){
      this.setState({count:e.target.innerHTML});
    }else{
      const newCount=this.state.count+e.target.innerHTML;
      this.setState({count:newCount});
    }
  }

  countDelete=(e)=>{
    if(this.state.count==0){
      return;
    }else{
       if(this.state.count.length==1){
          this.setState({count:0})
       }else{
          const newCount=this.state.count.slice(0,[this.state.count.length-1])
          this.setState({count:newCount});
       }     
    }
  }
  
  render(){
    return(
      <div className="numberKeyboard">
         <div className="inputResult">{this.state.count}</div>
         <div className="keyboard">
          <table className="keyboardTable">
            <tbody >
              <tr>
                <td onClick={this.countChange} className="keyboardCol">1</td>
                <td onClick={this.countChange} className="keyboardCol">2</td>
                <td onClick={this.countChange} className="keyboardCol">3</td>
              </tr>
              <tr>
                <td onClick={this.countChange} className="keyboardCol">4</td>
                <td onClick={this.countChange} className="keyboardCol">5</td>
                <td onClick={this.countChange} className="keyboardCol">6</td>
              </tr>
              <tr>
                <td onClick={this.countChange} className="keyboardCol">7</td>
                <td onClick={this.countChange} className="keyboardCol">8</td>
                <td onClick={this.countChange} className="keyboardCol">9</td>
              </tr>
              <tr>
                <td onClick={this.countChange} className="keyboardCol">0</td>
                <td onClick={this.countDelete} className="keyboardCol keyboardDelete" colSpan="2">DELETE</td>
              </tr>
            </tbody>
          </table>
         </div>
      </div>
    )
  }
}

class Counter extends React.Component{
  
  state={
    count:0,
  }

  decrease=()=>{
    if(this.state.count>0){
      const newCount=this.state.count-1;
      this.setState({count:newCount});
    }
  }

  increase=()=>{
    if(this.state.count<9){
      const newCount=this.state.count+1;
      this.setState({count:newCount});
    }
  }


  render(){  
    return(
      <div className="counter normal">
        <div className="counterLaber">{this.props.operate}</div>
        <div className="counterContent">
          <div onClick={this.decrease} className="counterOperate">
            <svg className="am-icon am-icon-increase am-icon-md">
              <use xlinkHref="#decrease"></use>
            </svg>
          </div>
          <div className="counterNum">
            <input type="text" pattern="[0-9]*" value={this.state.count} placeholder="Please Inupt" />
          </div>
          <div onClick={this.increase} className="counterOperate">
            <svg className="am-icon am-icon-increase am-icon-md">
              <use xlinkHref="#increase"></use>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  
}

class PartySize extends React.Component{

  onFinish = () => {
    
  }
  
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
            <div onClick={this.onFinish} className="button ghost">
              <NavLink to="/phone">Next</NavLink>
            </div>
          </div>
          <div className="headerContent">Party Size</div>
        </div>
        <div className="numberInput">
          <NumberKeyboard></NumberKeyboard>
          <div className="counterContainer">
            <Counter ref="stroller" onRef={(el)=>this.stroller=el } operate="Stroller(s)"></Counter>
            <Counter ref="highChair" operate="High Chair(s)"></Counter>
            <Counter ref="wheelChair" operate="Wheel Chair(s)"></Counter>
            <Counter ref="carSeat" operate="Car Seat(s)"></Counter>
          </div>
        </div>
      </div>
    )
  }
}


export default PartySize;