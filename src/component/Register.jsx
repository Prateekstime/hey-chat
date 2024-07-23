import React from "react";


const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hey Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password"/>
          <input type="file" />
          <button>Sign Up</button>
          <p>You do have an acount Login</p>
        </form>
      </div>
    </div>
  );
}
export default Register;