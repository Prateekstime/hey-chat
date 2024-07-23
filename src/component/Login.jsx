import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hey Chat</span>
        <span className="title">Register</span>
        <form action="">
          
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password"/>
        
          <button>Sign In</button>
          <p>Don't have an acount? Register</p>
        </form>
      </div>
    </div>
  );
}
export default Login;