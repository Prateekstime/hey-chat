import React from "react";
import Add from "../images/add-Img.png"


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
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="img  " />
            <span> Add avatar</span>
          </label>
          <button>Sign Up</button>
          <p>You do have an acount Login</p>
        </form>
      </div>
    </div>
  );
}
export default Register;