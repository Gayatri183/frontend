import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/hero_bg.png";

function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <div
        className="hero-section d-flex align-items-center position-relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        ></div>
        <div className="container position-relative text-white fade-in-up">
          <div className="col-lg-7">
            <h1 className="display-3 fw-bold mb-4 text-white">
              Unlock Your Full <span className="text-primary">Potential</span>
            </h1>
            <p className="lead mb-5 text-light opacity-75">
              Experience the next generation of fitness management.
              Track your progress, connect with expert trainers,
              and achieve your goals with Flexify.
            </p>
            <div className="d-flex gap-3">
              <Link to="/common/register" className="btn btn-primary btn-lg px-5">
                Join Now
              </Link>
              <Link to="#" className="btn btn-outline-light btn-lg px-5">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase letter-spacing-2">
              Why Choose Us
            </h5>
            <h2 className="display-6 fw-bold">Pushing Limits, Breaking Barriers</h2>
          </div>

          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-person-hearts"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                    />
                  </svg>
                </div>
                <h4 className="card-title fw-bold">Expert Trainers</h4>
                <p className="card-text text-muted">
                  Work with elite coaches who personalize every workout to fit
                  your specific goals and needs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-graph-up-arrow"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                    />
                  </svg>
                </div>
                <h4 className="card-title fw-bold">Smart Analytics</h4>
                <p className="card-text text-muted">
                  Visualize your progress with advanced analytics that track
                  performance improvements over time.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="bi bi-lightning-charge-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                  </svg>
                </div>
                <h4 className="card-title fw-bold">Custom Plans</h4>
                <p className="card-text text-muted">
                  Get nutrition and workout plans tailored to your lifestyle,
                  ensuring sustainable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER PREVIEW */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0 text-muted">&copy; 2026 Flexify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
