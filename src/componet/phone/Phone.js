import React from 'react';
import './Phone.css';

class Phone extends React.Component{
  render(){
    return(
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
                Back
              </a>
            </div>
            <div className="stepNext textColor">
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
                      
                   </div>
          
                </div>
              </div>
              <div className="separateLine"></div>
              <div className="keyboardNumber">
                <table className="NumberTable">
                  <tbody>
                    <tr>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">1</div>
                      </td>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">2</div>
                      </td>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">3</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">4</div>
                      </td>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">5</div>
                      </td>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">6</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">7</div>
                      </td>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">8</div>
                      </td>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">9</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle"></div>
                      </td>
                      <td className="keyBoardCol">
                        <div className="keyboardColCircle">0</div>
                      </td>
                      <td className="keyBoardCol keyboardDelete">
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
}

export default Phone;