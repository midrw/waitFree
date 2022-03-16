import React from 'react';
import './Phone.css';
import { NavLink, useLocation ,useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Phone(props) {

  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  let location = useLocation();
  const sessionStorage = window.sessionStorage;

  const saveData = () => {
    if (phoneNumber.length < 13) {
      alert('电话号码需要13位数');
      return;
    } else {
      if (window.confirm('准备提交，确认信息正确？')) {
        var obj = {
          people: location.state.people,
          stroller: location.state.stroller,
          highChair: location.state.highChair,
          wheelChair: location.state.stroller,
          carSeat: location.state.stroller,
          phoneNumber: phoneNumber
        }
        sessionStorage.setItem(props.id, JSON.stringify(obj));
        props.idChange();
        navigate('/');
      }else{
        return;
      }
    }

  }

  const phoneNuemberChange = (e) => {
    if (phoneNumber.length < 13) {
      if (phoneNumber.length === 3 || phoneNumber.length === 8) {
        const newPhoneNumber = phoneNumber + '-' + e.target.innerHTML
        setPhoneNumber(newPhoneNumber);
      } else {
        const newPhoneNumber = phoneNumber + e.target.innerHTML;
        setPhoneNumber(newPhoneNumber);
      }
    }
  }


  const numberDelete = (e) => {
    if (phoneNumber.length > 0) {
      if (phoneNumber.length === 5 || phoneNumber.length === 10) {
        const newPhoneNumber = phoneNumber.slice(0, [phoneNumber.length - 2])
        setPhoneNumber(newPhoneNumber);
      } else {
        const newPhoneNumber = phoneNumber.slice(0, [phoneNumber.length - 1])
        setPhoneNumber(newPhoneNumber);
      }
    }
  }

  return (
    <div className="textGb">
      <div className="headerPh">
        <div className="headerCt">Phone Number</div>
      </div>
      <div className="phoneKeyboardContainer">
        <div className="stepBack textColor">
          <a href="#" className="textColor">
            <svg className="am-icon am-icon-back am-icon-md textColor">
              <use xlinkHref="#back"></use>
            </svg>
            <NavLink className="textColor" to="/partySize">Back</NavLink>
          </a>
        </div>
        <div onClick={saveData} className="stepNext textColor">
          Done
          <svg className="am-icon am-icon-forward am-icon-md textColor">
            <use xlinkHref="#forward"></use>
          </svg>
        </div>
        <div className="phoneKeyboard">
          <div className="inputResultp">
            <div className="phoneIcon">
              <svg className="am-icon am-icon-phone am-icon-md textColor">
                <use xlinkHref="#phone"></use>
              </svg>
            </div>
            <div className="phoneShow">
              <div className="phoneShowShadow">
                000-0000-0000
              </div>
              <div className="inputPhoneShow">
                {phoneNumber}
              </div>
            </div>
          </div>
          <div className="separateLine"></div>
          <div className="keyboardNumber">
            <table className="NumberTable">
              <tbody>
                <tr>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">1</div>
                  </td>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">2</div>
                  </td>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">3</div>
                  </td>
                </tr>
                <tr>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">4</div>
                  </td>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">5</div>
                  </td>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">6</div>
                  </td>
                </tr>
                <tr>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">7</div>
                  </td>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">8</div>
                  </td>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">9</div>
                  </td>
                </tr>
                <tr>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle"></div>
                  </td>
                  <td className="keyBoardCol">
                    <div onClick={phoneNuemberChange} className="keyboardColCircle">0</div>
                  </td>
                  <td onClick={numberDelete} className="keyBoardCol keyboardDelete">
                    <div className="keyboardColCircle">
                      <svg className="am-icon am-icon-delete am-icon-md keyboardDeleteIcon">
                        <use xlinkHref="#delete"></use>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phone;