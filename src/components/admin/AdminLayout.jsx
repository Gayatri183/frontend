import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
        <h4>Admin</h4>
        <a href="/admin/dashboard" className="text-white d-block">Dashboard</a>
        <a href="/admin/members" className="text-white d-block">Members</a>
        <a href="/admin/trainers" className="text-white d-block">Trainers</a>
        <a href="/admin/plans" className="text-white d-block">Plans</a>
        <a href="/admin/payments" className="text-white d-block">Payments</a>
        <a href="/admin/feedback" className="text-white d-block">Feedback</a>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
