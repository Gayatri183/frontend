import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    uname: "",
    password: "",
    confirmPassword: "",
    email: "",
    contact: "",
    gender: "",
    roleid: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  /* =======================
     VALIDATIONS
     ======================= */
  const isValidName = (name, min) => name.trim().length >= min;

  /* Email validation – ANY domain */
  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|rediff|hotmail)\.com$/.test(email);

  const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const isValidContact = (contact) => /^[6-9]\d{9}$/.test(contact);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATION CHECKS
    if (!isValidName(user.fname, 3)) return setError("First name must be at least 3 characters");
    if (!isValidName(user.lname, 2)) return setError("Last name must be at least 2 characters");
    if (!isValidEmail(user.email)) return setError("Email must be a valid provider (Gmail, Yahoo, etc.)");
    if (!isValidContact(user.contact)) return setError("Contact number must be 10 digits and start with 6–9");
    if (!isValidPassword(user.password)) return setError("Password must have 8 chars, 1 uppercase, 1 number & 1 special char");
    if (user.password !== user.confirmPassword) return setError("Passwords do not match");

    setLoading(true);

    try {
      await axios.post("http://localhost:8081/flexify/register", {
        fname: user.fname,
        lname: user.lname,
        uname: user.uname,
        password: user.password,
        email: user.email,
        contact: user.contact,
        gender: user.gender,
        roleid: Number(user.roleid),
      });

      setSuccess("User registered successfully! You can now login.");

      // Reset form
      setUser({
        fname: "", lname: "", uname: "", password: "", confirmPassword: "",
        email: "", contact: "", gender: "", roleid: "",
      });
    } catch (err) {
      setError(err.response?.data || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-header bg-primary text-white text-center py-4 rounded-top">
                <h3 className="mb-0 fw-bold">Create Account</h3>
                <p className="mb-0 opacity-75">Join the Flexify community today</p>
              </div>
              <div className="card-body p-5">

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Name Fields */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" name="fname" value={user.fname} onChange={handleChange} placeholder="First Name" required />
                        <label>First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" name="lname" value={user.lname} onChange={handleChange} placeholder="Last Name" required />
                        <label>Last Name</label>
                      </div>
                    </div>

                    {/* Username & Email */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" name="uname" value={user.uname} onChange={handleChange} placeholder="Username" required />
                        <label>Username</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
                        <label>Email</label>
                      </div>
                    </div>

                    {/* Contact & Gender */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" name="contact" value={user.contact} onChange={handleChange} placeholder="Contact" required />
                        <label>Contact Number</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" name="gender" value={user.gender} onChange={handleChange} required>
                          <option value="">Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                        <label>Gender</label>
                      </div>
                    </div>

                    {/* Role Selection */}
                    <div className="col-12">
                      <div className="form-floating">
                        <select className="form-select" name="roleid" value={user.roleid} onChange={handleChange} required>
                          <option value="">Select Role</option>
                          <option value="1">Admin</option>
                          <option value="2">Trainer</option>
                          <option value="3">Member</option>
                        </select>
                        <label>Register As</label>
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
                        <label>Password</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
                        <label>Confirm Password</label>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid mt-4">
                    <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    <p className="text-muted mb-0">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary text-decoration-none fw-medium">
                        Login here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
