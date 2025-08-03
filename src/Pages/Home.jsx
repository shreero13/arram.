import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Arram Old Age Home</h1>
          <p>
            Providing compassionate care and a loving home for our elderly
            community since 1995
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Arram?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>24/7 Medical Care</h3>
              <p>
                Round-the-clock medical supervision and emergency response
                system
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Compassionate Staff</h3>
              <p>
                Experienced and caring professionals dedicated to elderly care
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Comfortable Living</h3>
              <p>
                Spacious rooms with modern amenities and beautiful surroundings
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Activities & Recreation</h3>
              <p>
                Engaging activities, games, and social events for mental
                wellness
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Nutritious Meals</h3>
              <p>
                Healthy, balanced meals prepared by professional nutritionists
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚑</div>
              <h3>Emergency Support</h3>
              <p>Quick emergency response and ambulance services available</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Arram Old Age Home</h2>
              <p>
                Founded in 1995, Arram Old Age Home has been providing
                exceptional care and support to elderly individuals for over 25
                years. Our mission is to create a warm, loving environment where
                seniors can live with dignity, respect, and joy.
              </p>
              <p>
                We believe that every senior deserves to live their golden years
                in comfort, surrounded by caring professionals and a supportive
                community. Our facility offers modern amenities while
                maintaining the warmth and personal touch that makes it feel
                like home.
              </p>
              <Link to="/about" className="btn btn-primary">
                Read More
              </Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🏠</span>
                <p>Beautiful Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>25+</h3>
              <p>Years of Service</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Happy Residents</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Dedicated Staff</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Care Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Join Our Family</h2>
          <p>Give your loved ones the care and attention they deserve</p>
          <div className="cta-buttons">
            <Link to="/join-us" className="btn btn-primary">
              Join Us
            </Link>
            <Link to="/donate" className="btn btn-secondary">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
