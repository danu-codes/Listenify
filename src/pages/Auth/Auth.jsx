import React, { useState } from "react";
import "./Auth.css";
import { Navbar } from "../../components/Navbar/Navbar";

const Auth = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "LOGIN DATA" : "REGISTER DATA", form);
    alert(isLogin ? "Login success (UI only)" : "Register success (UI only)");
  };

  return (<><Navbar />
    <div className="auth-container">

      <div className="auth-box">

        {/* TITLE */}
        <h2>
          {isLogin ? "Welcome Back 🎧" : "Create Account 🎤"}
        </h2>

        <form onSubmit={handleSubmit}>

          {/* NAME (only register) */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          )}

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {/* BUTTON */}
          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        {/* SWITCH */}
        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>

      </div>

    </div>
  </>
  );
};

export default Auth;