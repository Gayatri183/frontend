import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-center justify-content-center text-center text-white"
        style={{
          background: "linear-gradient(rgba(37, 99, 235, 0.9), rgba(30, 64, 175, 0.9)), url('https://source.unsplash.com/1600x900/?gym,fitness')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Welcome to Flexify</h1>
          <p className="lead mb-5 fs-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Your ultimate companion for Gym Management & Workout Tracking.
            Achieve your fitness goals with professional guidance.
          </p>
          <div>
            <Link to="/login" className="btn btn-lg btn-light text-primary fw-bold px-5 py-3 rounded-pill shadow me-3">
              Get Started
            </Link>
            <Link to="#" className="btn btn-lg btn-outline-light px-5 py-3 rounded-pill fw-bold">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview (Optional Placeholder) */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm border h-100 card-hover">
                <h3 className="h5 fw-bold text-primary">Track Progress</h3>
                <p className="text-muted">Monitor your daily workouts and improvements over time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm border h-100 card-hover">
                <h3 className="h5 fw-bold text-primary">Expert Trainers</h3>
                <p className="text-muted">Connect with certified trainers for personalized guidance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded shadow-sm border h-100 card-hover">
                <h3 className="h5 fw-bold text-primary">Nutrition Plans</h3>
                <p className="text-muted">Get customized meal plans to fuel your body correctly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
