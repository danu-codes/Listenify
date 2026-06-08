import React, { useState } from "react";
import "./Auth.css";
import { Navbar } from "../../components/Navbar/Navbar";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 STRONG PASSWORD CHECK
  const isStrongPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (!isStrongPassword(form.password)) {
        setError(
          "Password must be 8+ chars, include number & special character"
        );
        return;
      }
    }

    setError("");
    console.log(isLogin ? "LOGIN DATA" : "REGISTER DATA", form);
    alert(isLogin ? "Login success (UI only)" : "Register success (UI only)");
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">

          <h2>
            {isLogin ? "Welcome Back 🎧" : "Create Account 🎤"}
          </h2>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
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
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />

              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* ERROR */}
            {error && <p className="error">{error}</p>}

            {/* FORGOT PASSWORD (LOGIN ONLY) */}
            {isLogin && (
              <p className="forgot">Forgot Password?</p>
            )}

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