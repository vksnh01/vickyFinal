import React from "react";
import "./Login.css"
// import image from './ad_icon.png'
// import {FaUserAlt} from 'react-icons/fa'
// import {RiLockPasswordLine} from 'react-icons/ri'
import Error from '../Error/Error'

const Login =()=>{
  
    return(<>
    {/* <div className="login-main-container">
        <div className="login-div">
            <img src={image} alt="" />
            <form>
                <div className="user-div">
                <label className="clrwhite" htmlFor="user"><FaUserAlt /></label>
                <input className="b-n btn" type="text" id="user" placeholder="Username" />
                </div>
                <div className="user-password">
                <label className="clrwhite" htmlFor="password"><RiLockPasswordLine /></label>
                <input type="password" className="b-n btn" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="submit-btn" onClick={()=><Error />}  >Login</button>
            </form>
        </div>
    </div> */}
    <Error />
    </>)
}
export default Login;