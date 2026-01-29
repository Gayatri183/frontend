import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import logo from "../../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 shadow-sm sticky-top">
      <div className="container-fluid">
        {/* LEFT : Logo */}
        <a href="/" className="navbar-brand fw-bold d-flex align-items-center text-primary">
          <img src={logo} alt="Flexify" style={{ width: '40px', height: '40px', objectFit: 'contain' }} className="me-2" />
          Flexify
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* CENTER : Nav items */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="/" onClick={(e) => handleClick(e, "/")} className="nav-link text-primary fw-semibold">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary hover-primary">Plans</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary hover-primary">Trainers</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary hover-primary">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-secondary hover-primary">Contact Us</a>
            </li>
          </ul>

          {/* RIGHT : Login / Logout */}
          <div className="d-flex">
            {!user ? (
              <button
                className="btn btn-primary text-white fw-bold px-4 rounded-pill shadow-sm"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            ) : (
              <div className="d-flex align-items-center">
                <span className="text-dark me-3 fw-medium">Hello, {user.name || 'User'}</span>
                <button
                  className="btn btn-outline-primary rounded-pill px-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
