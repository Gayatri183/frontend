import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function AdminLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname.includes(path);

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "bi-speedometer2" },
    { name: "Members", path: "/admin/members", icon: "bi-people" },
    { name: "Trainers", path: "/admin/trainers", icon: "bi-person-badge" },
    { name: "Plans", path: "/admin/plans", icon: "bi-clipboard-check" },
    { name: "Payments", path: "/admin/payments", icon: "bi-currency-dollar" },
    { name: "Feedback", path: "/admin/feedback", icon: "bi-chat-left-text" },
  ];

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <div
        className="bg-white shadow-lg d-flex flex-column flex-shrink-0"
        style={{ width: "260px", zIndex: 1000 }}
      >
        <div className="p-4 border-bottom d-flex align-items-center justify-content-center">
          <Link to="/" className="text-decoration-none">
            <img src={logo} alt="Flexify" height="32" />
          </Link>
        </div>

        <div className="p-3">
          <h6 className="text-uppercase text-muted fw-bold small ms-3 mb-3">Menu</h6>
          <nav className="nav nav-pills flex-column gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link d-flex align-items-center px-3 py-2 ${isActive(item.path)
                    ? "bg-primary text-white shadow-sm"
                    : "text-secondary hover-bg-light"
                  }`}
                style={{ borderRadius: "8px" }}
              >
                <i className={`bi ${item.icon} me-3 fs-5`}></i>
                <span className="fw-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-3 border-top">
          <button
            onClick={handleLogout}
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
          >
            <i className="bi bi-box-arrow-right"></i>
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 overflow-auto">
        <header className="bg-white border-bottom shadow-sm px-4 py-3 d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0 text-secondary">Admin Portal</h4>
          <div className="d-flex align-items-center gap-3">
            <div className="bg-light rounded-circle p-2">
              <i className="bi bi-bell text-secondary"></i>
            </div>
            <div className="h6 mb-0 text-secondary">Administrator</div>
          </div>
        </header>

        <main className="px-4 pb-5 fade-in-up">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
