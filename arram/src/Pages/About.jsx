import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>About Arram Old Age Home</h1>
          <p>
            Providing compassionate care and a loving home for our elderly
            community since 1995
          </p>
        </div>
      </div>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Arram Old Age Home, our mission is to provide exceptional
                care and support to elderly individuals, ensuring they live
                their golden years with dignity, respect, and joy. We believe
                that every senior deserves to be surrounded by love, care, and a
                supportive community.
              </p>
              <p>
                We are committed to creating a warm, nurturing environment where
                residents feel valued, safe, and at home. Our dedicated team
                works tirelessly to meet the physical, emotional, and social
                needs of each resident.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <span>❤️</span>
                <p>Compassionate Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Respect</h3>
              <p>
                We treat every resident with dignity and respect, honoring their
                life experiences and individual preferences.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💝</div>
              <h3>Compassion</h3>
              <p>
                Our care is driven by genuine compassion and understanding of
                the unique needs of elderly individuals.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3>Family</h3>
              <p>
                We create a family-like environment where residents feel loved,
                supported, and connected to others.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>
                We maintain the highest standards of care and continuously
                strive for excellence in all our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <h2>Our History</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1995</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>
                  Arram Old Age Home was founded with a vision to provide
                  quality care for elderly individuals in need.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2000</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>
                  We expanded our facility to accommodate more residents and
                  added specialized medical care services.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Modernization</h3>
                <p>
                  Complete renovation and modernization of our facility with
                  state-of-the-art amenities and technology.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Excellence Award</h3>
                <p>
                  Received the National Excellence Award for Outstanding Elderly
                  Care Services.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>25 Years of Service</h3>
                <p>
                  Celebrating 25 years of dedicated service to the elderly
                  community with enhanced care programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <div className="image-placeholder">👨‍⚕️</div>
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p className="team-role">Medical Director</p>
              <p>
                20+ years of experience in geriatric care and medical
                supervision.
              </p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="image-placeholder">👩‍⚕️</div>
              </div>
              <h3>Maria Rodriguez</h3>
              <p className="team-role">Head Nurse</p>
              <p>
                Specialized in elderly care with 15 years of nursing experience.
              </p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="image-placeholder">👨‍🍳</div>
              </div>
              <h3>Chef Michael Chen</h3>
              <p className="team-role">Head Chef</p>
              <p>
                Creates nutritious and delicious meals tailored to dietary
                needs.
              </p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="image-placeholder">👩‍🎨</div>
              </div>
              <h3>Lisa Thompson</h3>
              <p className="team-role">Activities Coordinator</p>
              <p>
                Organizes engaging activities and social events for residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="facility-section">
        <div className="container">
          <h2>Our Facility</h2>
          <div className="facility-content">
            <div className="facility-text">
              <p>
                Our modern facility spans over 50,000 square feet and includes:
              </p>
              <ul>
                <li>Spacious private and semi-private rooms</li>
                <li>24/7 medical supervision and emergency response</li>
                <li>Beautiful gardens and outdoor recreation areas</li>
                <li>Dining hall with restaurant-quality meals</li>
                <li>Activity rooms for games, crafts, and social events</li>
                <li>Physical therapy and rehabilitation center</li>
                <li>Library and reading room</li>
                <li>Prayer room and meditation space</li>
              </ul>
            </div>
            <div className="facility-image">
              <div className="image-placeholder">
                <span>🏢</span>
                <p>Modern Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
