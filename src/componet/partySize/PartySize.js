import React from 'react';
import './PartySize.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { useRef } from 'react';

class NumberKeyboard extends React.Component {

  state = {
    count: '0',
  }

  countChange = (e) => {
    if (this.state.count == 0) {
      this.setState({ count: e.target.innerHTML });
    } else {
      if (this.state.count.length < 3) {
        const newCount = this.state.count + e.target.innerHTML;
        this.setState({ count: newCount });
      } else {
        return;
      }
    }
  }

  countDelete = (e) => {
    if (this.state.count == 0) {
      return;
    } else {
      if (this.state.count.length == 1) {
        this.setState({ count: 0 })
      } else {
        const newCount = this.state.count.slice(0, [this.state.count.length - 1])
        this.setState({ count: newCount });
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

  decrease = () => {
    if (this.state.count > 0) {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount });
    }
  }

  increase = () => {
    if (this.state.count < 9) {
      const newCount = this.state.count + 1;
      this.setState({ count: newCount });
    }
  }


  render() {
    return (
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

const PartySize = () => {

  // const [people, setPeople] = useState('');
  // const [stroller, setStroller] = useState('');
  // const [highChair, setHighChair] = useState('');
  // const [wheelChair, setWheelChair] = useState('');
  // const [carSeat, setCarSeat] = useState('');
  const navigate = useNavigate();
  const peopleRef = useRef();
  const strollerRef = useRef();
  const highChairRef = useRef();
  const wheelChairRef = useRef();
  const carSeatRef = useRef();


  const onFinish = () => {
    // setPeople(peopleRef.current.state.count);
    // setStroller(strollerRef.current.state.count);
    // setHighChair(highChairRef.current.state.count);
    // setWheelChair(wheelChairRef.current.state.count);
    // setCarSeat(carSeatRef.current.state.count);
    let people = peopleRef.current.state.count;
    let stroller = strollerRef.current.state.count;
    let highChair = highChairRef.current.state.count;
    let wheelChair = wheelChairRef.current.state.count;
    let carSeat = carSeatRef.current.state.count;
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


  //  useEffect(() => {
  //    if(window.confirm('确认？')){
  //      navigate('/phone');
  //   }

  //  }, [carSeat,people,stroller,highChair,wheelChair]);


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
        <NumberKeyboard ref={peopleRef}></NumberKeyboard>
        <div className="counterContainer">
          <Counter ref={strollerRef} operate="Stroller(s)"></Counter>
          <Counter ref={highChairRef} operate="High Chair(s)"></Counter>
          <Counter ref={wheelChairRef} operate="Wheel Chair(s)"></Counter>
          <Counter ref={carSeatRef} operate="Car Seat(s)"></Counter>
        </div>
      </div>
    </div>
  )

}


export default PartySize;