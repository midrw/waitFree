import React, { useState } from 'react';
import './PartySize.css';
import { NavLink, useNavigate } from 'react-router-dom'

class NumberKeyboard extends React.Component {

  state = {
    count: '0',
  }

  triggerChange = (newCount) => {
    this.props.onChange(newCount);
  }

  countChange = (e) => {
    if (this.state.count == 0) {
      const newCount = e.target.innerHTML;
      this.setState({ count: newCount });
      this.triggerChange(newCount);
    } else {
      if (this.state.count.length < 3) {
        const newCount = this.state.count + e.target.innerHTML;
        this.setState({ count: newCount });
        this.triggerChange(newCount);
      } else {
        return;
      }
    }
  }

  countDelete = (e) => {
    if (this.state.count == 0) {
      return;
    } else {
      if (this.state.count.length === 1) {
        this.setState({ count: '0' });
        this.triggerChange('0');
      } else {
        const newCount = this.state.count.slice(0, [this.state.count.length - 1]);
        this.setState({ count: newCount });
        this.triggerChange(newCount);
      }
    }
  }

  render() {
    return (
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

class Counter extends React.Component {
  state = {
    count: 0,
  }

  triggerChange = (newCount) => {
    this.props.onChange(newCount);
  }

  decrease = () => {
    if (this.state.count > 0) {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount });
      this.triggerChange(newCount);
    }
  }

  increase = () => {
    if (this.state.count < 9) {
      const newCount = this.state.count + 1;
      this.setState({ count: newCount });
      this.triggerChange(newCount);
    }
  }

  render() {
    return (
      <div className="counter normal">
        <div className="counterLaber">{this.props.value}</div>
        <div className="counterContent">
          <div onClick={this.decrease} className="counterOperate">
            <svg className="am-icon am-icon-increase am-icon-md">
              <use xlinkHref="#decrease"></use>
            </svg>
          </div>
          <div className="counterNum">
            <input type="text" pattern="[0-9]*" value={this.state.count} readOnly={true} placeholder="Please Inupt" />
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

const PartySize = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState('0');
  const [stroller, setStroller] = useState(0);
  const [highChair, setHighchair] = useState(0);
  const [wheelChair, setWheelChair] = useState(0);
  const [carSeat, setChairSeat] = useState(0);

  const onPeopleChange = (newPeople) => {
    setPeople(newPeople);
  }

  const onStrollerChange = (newStrollerChange) => {
    setStroller(newStrollerChange);
  }

  const onHighChairChange = (newHighChair) => {
    setHighchair(newHighChair);
  }

  const onWheelChairChange = (newWheelChair) => {
    setWheelChair(newWheelChair);
  }

  const onCarSeatChange = (newCarSeat) => {
    setChairSeat(newCarSeat);
  }

  const onFinish = () => {
    if (people === '0') {
      alert('人数不能为0');
      return;
    } else {
      if (window.confirm('确认提交？')) {
        navigate('/phone', {
          state: {
            people: people,
            stroller: stroller,
            highChair: highChair,
            wheelChair: wheelChair,
            carSeat: carSeat
          }
        })
      } else {
        return;
      }
    }
  }

  return (
    <div className="global">
      <div className="header">
        <div className="leftBtn">
          <div className="button">
            <NavLink to="/">Back</NavLink>
          </div>
        </div>
        <div className="rightBtn">
          <div onClick={onFinish} className="button ghost">
            Next
          </div>
        </div>
        <div className="headerContent">Party Size</div>
      </div>
      <div className="numberInput">
        <NumberKeyboard onChange={onPeopleChange}></NumberKeyboard>
        <div className="counterContainer">
          <Counter value="Stroller(s)" onChange={onStrollerChange}></Counter>
          <Counter value="High Chair(s)" onChange={onHighChairChange}></Counter>
          <Counter value="Wheel Chair(s)" onChange={onWheelChairChange}></Counter>
          <Counter value="Car Seat(s)" onChange={onCarSeatChange}></Counter>
        </div>
      </div>
    </div>
  )
}

export default PartySize;
