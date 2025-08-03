import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us for any questions, concerns, or to schedule a
            visit
          </p>
        </div>
      </div>

      <section className="contact-info-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>Main Office: (555) 123-4567</p>
              <p>Emergency: (555) 911-0000</p>
              <p>Admissions: (555) 123-4568</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>General: info@arramoldagehome.com</p>
              <p>Admissions: admissions@arramoldagehome.com</p>
              <p>Support: support@arramoldagehome.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>123 Elder Care Street</p>
              <p>City, State 12345</p>
              <p>United States</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🕒</div>
              <h3>Hours</h3>
              <p>Office: Mon-Fri 8AM-6PM</p>
              <p>Visiting: Daily 9AM-8PM</p>
              <p>Emergency: 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-details">
              <h2>Send Us a Message</h2>
              <p>
                Have questions about our services, want to schedule a tour, or
                need more information? Fill out the form and we'll get back to
                you within 24 hours.
              </p>

              <div className="contact-features">
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div>
                    <h4>Quick Response</h4>
                    <p>We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <div>
                    <h4>Expert Staff</h4>
                    <p>Our team is here to answer all your questions</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🏠</div>
                  <div>
                    <h4>Schedule a Tour</h4>
                    <p>Visit our facility and meet our residents</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="admission">Admission Information</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="donation">Donation Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="complaint">Complaint or Concern</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <h2>Visit Our Facility</h2>
          <div className="location-content">
            <div className="location-info">
              <h3>How to Find Us</h3>
              <div className="directions">
                <div className="direction-item">
                  <div className="direction-icon">🚗</div>
                  <div>
                    <h4>By Car</h4>
                    <p>
                      Take Highway 101 and exit at Elder Care Street. We're
                      located 2 blocks from the exit.
                    </p>
                  </div>
                </div>
                <div className="direction-item">
                  <div className="direction-icon">🚌</div>
                  <div>
                    <h4>By Bus</h4>
                    <p>
                      Bus routes 15, 22, and 45 stop within walking distance of
                      our facility.
                    </p>
                  </div>
                </div>
                <div className="direction-item">
                  <div className="direction-icon">🚇</div>
                  <div>
                    <h4>By Train</h4>
                    <p>
                      Take the Metro Line to Central Station, then transfer to
                      bus route 15.
                    </p>
                  </div>
                </div>
              </div>

              <div className="parking-info">
                <h4>Parking</h4>
                <p>
                  Free parking is available on-site for visitors. Handicap
                  accessible parking is located near the main entrance.
                </p>
              </div>
            </div>

            <div className="location-map">
              <div className="map-placeholder">
                <span>🗺️</span>
                <p>Interactive Map</p>
                <p className="map-description">
                  Click to view our location on Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are your visiting hours?</h3>
              <p>
                Visiting hours are daily from 9:00 AM to 8:00 PM. We encourage
                family visits and have comfortable visiting areas throughout the
                facility.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I schedule a tour?</h3>
              <p>
                You can schedule a tour by calling our admissions office at
                (555) 123-4568 or by filling out the contact form above. Tours
                are available Monday through Friday.
              </p>
            </div>
            <div className="faq-item">
              <h3>What medical services do you provide?</h3>
              <p>
                We provide 24/7 medical supervision, medication management,
                physical therapy, and emergency response. Our medical team
                includes doctors, nurses, and specialists.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I bring my pet to visit?</h3>
              <p>
                Yes, we welcome well-behaved pets for visits. Please ensure your
                pet is on a leash and has current vaccinations. Some areas may
                have restrictions.
              </p>
            </div>
            <div className="faq-item">
              <h3>What activities are available for residents?</h3>
              <p>
                We offer a wide range of activities including arts and crafts,
                music therapy, exercise classes, games, social events, and
                outdoor activities in our garden.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I apply for admission?</h3>
              <p>
                You can apply by calling our admissions office, visiting our
                facility, or filling out the application form on our "Join Us"
                page. We'll guide you through the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
