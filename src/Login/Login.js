import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Login</h3>
        <form>
        <div className="input-group">
          <div>
              <label htmlFor="email">Email</label>
            <input type="email" placeholder="Your Email" required/>
          </div>
          <div>
              <label htmlFor="password">Password</label>
            <input type="password" placeholder="Your Password" required/>
          </div>
          
            <input className="form-submit" type="submit" value="Login" />
          
        </div>
        </form>
        <p>Do not have an account? <Link className="form-link" to="/register">Register Here</Link></p>
      </div>
    </div>
  );
};

export default Login;
