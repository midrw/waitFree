import React from 'react';
import './Phone.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Phone() {
  let location = useLocation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [defaultNumber, setDefaultNumber] = useState('000-0000-0000')
  const sessionStorage = window.sessionStorage;

  const back = () => {
    navigate('/partySize');
  }

  const saveData = () => {
    var id = sessionStorage.getItem('id');
    var newId = parseInt(id) + 1;

    if (phoneNumber.length < 13) {
      alert('电话号码需要13位数');
      return;
    } else {
      if (window.confirm('准备提交，你的派对大小为' + location.state.people + '人，确认？')) {
        var obj = {
          people: location.state.people,
          stroller: location.state.stroller,
          highChair: location.state.highChair,
          wheelChair: location.state.stroller,
          carSeat: location.state.stroller,
          phoneNumber: phoneNumber
        }

        sessionStorage.setItem(id, JSON.stringify(obj));
        sessionStorage.setItem('id', newId);
        navigate('/');
      } else {
        return;
      }
    }
  }

  const phoneNuemberChange = (e) => {
    const phoneLength = phoneNumber.length;
    
    if (phoneLength < 13) {
      if (phoneLength === 3 || phoneLength === 8) {
        const newPhoneNumber = phoneNumber + '-' + e.target.innerHTML;
        const newDefaultNumber = newPhoneNumber + defaultNumber.slice(phoneLength + 2);

        setPhoneNumber(newPhoneNumber);
        setDefaultNumber(newDefaultNumber);
      } else {
        const newPhoneNumber = phoneNumber + e.target.innerHTML;
        const newDefaultNumber = newPhoneNumber + defaultNumber.slice(phoneLength + 1);

        setPhoneNumber(newPhoneNumber);
        setDefaultNumber(newDefaultNumber);
      }
    }
  }

  const numberDelete = (e) => {
    const phoneLength = phoneNumber.length;

    if (phoneNumber.length > 0) {
      if (phoneNumber.length === 5 || phoneNumber.length === 10) {
        const newPhoneNumber = phoneNumber.slice(0, [phoneLength - 2]);
        const newDefaultNumber = defaultNumber.slice(0, [phoneLength - 1]) + '0' + defaultNumber.slice(phoneLength);

        setPhoneNumber(newPhoneNumber);
        setDefaultNumber(newDefaultNumber);
      } else {
        const newPhoneNumber = phoneNumber.slice(0, [phoneLength - 1]);
        const newDefaultNumber = defaultNumber.slice(0, [phoneLength - 1]) + '0' + defaultNumber.slice(phoneLength);

        setPhoneNumber(newPhoneNumber);
        setDefaultNumber(newDefaultNumber);
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
          <div className="textColor" onClick={back}>
            <svg className="am-icon am-icon-back am-icon-md textColor">
              <use xlinkHref="#back"></use>
            </svg>
            Back
          </div>
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
                {defaultNumber}
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
