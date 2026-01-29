import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();   // 🔹 Redux
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/flexify/login",
        { email, password }
      );

      const user = response.data;

      // 🔹 Save to Redux
      dispatch(
        loginSuccess({
          user: user,
          role: user.role.rid, // role id
        })
      );

      // optional: still keep localStorage if needed
      localStorage.setItem("user", JSON.stringify(user));

      // 🔹 Role-based navigation
      if (user.role.rid === 1) {
        navigate("/admin");
      } else if (user.role.rid === 2) {
        navigate("/trainer/trainer-dashboard");
      } else {
        navigate("/member/member-dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ maxWidth: '900px', width: '90%', display: 'flex', flexDirection: 'row' }}>

        {/* Left Side - Image/Brand */}
        <div className="d-none d-md-flex flex-column justify-content-center align-items-center bg-primary text-white p-5" style={{ width: '50%' }}>
          <h2 className="display-4 fw-bold mb-3">Flexify</h2>
          <p className="lead text-center">Your journey to a healthier lifestyle starts here.</p>
        </div>

        {/* Right Side - Form */}
        <div className="p-5" style={{ flex: 1 }}>
          <div className="text-center mb-4">
            <h3 className="fw-bold text-primary">Welcome Back!</h3>
            <p className="text-muted">Please login to your account</p>
          </div>

          <form onSubmit={handleLogin}>
            {error && <div className="alert alert-danger rounded-3">{error}</div>}

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control rounded-3"
                id="floatingEmail"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="floatingEmail">Email Address</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control rounded-3"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm hover-scale" type="submit">
              Login
            </button>

            <div className="mt-4 text-center">
              <span className="text-muted">Don't have an account? </span>
              <a href="/common/register" className="text-primary fw-bold text-decoration-none">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
