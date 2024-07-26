import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hey Chat</span>
        <span className="title">Login</span>
        <form action="">
        
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password"/>
          
          <button>Sign in</button>
          <p>You don't have an acount </p>
        </form>
      </div>
    </div>
  );
}
export default Login;