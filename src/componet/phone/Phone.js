import React from 'react';
import './Phone.css';
import { NavLink } from 'react-router-dom' 

class Phone extends React.Component{

  state={
    phoneNumber:''
  }

  phoneNuemberChange = (e) => {
    if(this.state.phoneNumber.length<13){
      if(this.state.phoneNumber.length==3 || this.state.phoneNumber.length==8){
        const newPhoneNumber=this.state.phoneNumber+'-'+e.target.innerHTML
        this.setState({phoneNumber:newPhoneNumber});  
      }else{
        const newPhoneNumber=this.state.phoneNumber+e.target.innerHTML
        this.setState({phoneNumber:newPhoneNumber});  
      }
    }
  }

  numberDelete = (e) => {
    if(this.state.phoneNumber.length>0){
      const newPhoneNumber=this.state.phoneNumber.slice(0,[this.state.phoneNumber.length-1])
      this.setState({phoneNumber:newPhoneNumber});
    }
  }

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
                <NavLink className="textColor" to="/">Back</NavLink>
              </a>
            </div>
            <div onClick={this.onFinish} className="stepNext textColor">
              <NavLink className="textColor" to="/">Done</NavLink>
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
                      {this.state.phoneNumber}
                   </div>        
                </div>
              </div>
              <div className="separateLine"></div>
              <div className="keyboardNumber">
                <table className="NumberTable">
                  <tbody>
                    <tr>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">1</div>
                      </td>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">2</div>
                      </td>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">3</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">4</div>
                      </td>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">5</div>
                      </td>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">6</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">7</div>
                      </td>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">8</div>
                      </td>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">9</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle"></div>
                      </td>
                      <td className="keyBoardCol">
                        <div onClick={this.phoneNuemberChange} className="keyboardColCircle">0</div>
                      </td>
                      <td onClick={this.numberDelete} className="keyBoardCol keyboardDelete">
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