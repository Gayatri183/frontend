import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import logo from "../../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Flexify Logo"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link px-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-3">
                Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-3">
                Trainers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-3">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-3">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex">
            {!user ? (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2 px-4">
                  Login
                </Link>
                <Link to="/common/register" className="btn btn-primary px-4">
                  Join Now
                </Link>
              </>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2 h6 mb-0"
                    style={{ width: "32px", height: "32px" }}
                  >
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="fw-medium">{user.name || "User"}</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow border-0 mt-2"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <Link
                      to={`/${user.role === "ADMIN"
                          ? "admin"
                          : user.role === "TRAINER"
                            ? "trainer/trainer-dashboard"
                            : "member/member-dashboard"
                        }`}
                      className="dropdown-item"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
