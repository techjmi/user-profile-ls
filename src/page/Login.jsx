import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/loginSlice";
import { useNavigate } from "react-router-dom";
const intitalState = {
  email: "",
  password: "",
};
const Login = () => {
  const [data, setData] = useState(intitalState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setData({
        ...data,[name]:value
    })
  }
  const handleSubmit= ()=>{
dispatch(login(data))
localStorage.setItem('isLoggedIn', true);
setIsLoggedIn(true)
navigate('/details')
  }
  return (
    <div className="login_page">
      <div className="login_header" style={{textAlign:'center', marginBottom:"10px"}}>
        <h2>Login Here</h2>
      </div>
      <div className="login_page">
      <form className="login_form">
  <div className="label">
    <label htmlFor="email">Email:</label>
    <input
      placeholder="please Enter Your Email"
      type="email"
      id="email"
      name="email"
      value={data.email}
      onChange={handleChange}
    />
  </div>
  <div className="label">
    <label htmlFor="password">Password:</label>
    <input
      placeholder="please Enter Your Password"
      type="password"
      id="password"
      name="password"
      value={data.password}
      onChange={handleChange}
    />
  </div>
  <div className="button" style={{textAlign:"center"}}>
  <button onClick={handleSubmit}>Login</button>
  </div>
  
</form>

      </div>
    </div>
  );
};

export default Login;
