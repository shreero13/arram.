import React, { useState } from "react";
import "./Joinus.css";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    medicalConditions: "",
    emergencyContact: "",
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
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
  };

  return (
    <div className="join-us">
      <div className="join-hero">
        <div className="container">
          <h1>Join Our Family</h1>
          <p>
            Give your loved ones the care and attention they deserve in a warm,
            loving environment
          </p>
        </div>
      </div>

      <section className="admission-section">
        <div className="container">
          <h2>Admission Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>
                Schedule a visit to tour our facility and meet our staff. We'll
                discuss your needs and answer all your questions.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Application & Assessment</h3>
              <p>
                Complete the application form and undergo a comprehensive health
                assessment to ensure we can meet your needs.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Review & Approval</h3>
              <p>
                Our team reviews your application and medical assessment to
                ensure the best care plan for you.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Welcome Home</h3>
              <p>
                Once approved, we'll help you move in and settle comfortably
                into your new home with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="requirements-section">
        <div className="container">
          <h2>Requirements & Eligibility</h2>
          <div className="requirements-content">
            <div className="requirements-text">
              <h3>Who Can Join?</h3>
              <ul>
                <li>Seniors aged 60 and above</li>
                <li>Individuals requiring assisted living care</li>
                <li>Those needing medical supervision</li>
                <li>People seeking a supportive community</li>
              </ul>

              <h3>What We Provide</h3>
              <ul>
                <li>24/7 medical care and supervision</li>
                <li>Comfortable accommodation</li>
                <li>Nutritious meals and dietary support</li>
                <li>Social activities and recreation</li>
                <li>Personal care assistance</li>
                <li>Emergency response system</li>
              </ul>
            </div>
            <div className="requirements-image">
              <div className="image-placeholder">
                <span>🏠</span>
                <p>Your New Home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2>Pricing & Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Basic Care</h3>
                <div className="price">
                  $2,500<span>/month</span>
                </div>
              </div>
              <ul>
                <li>Private room</li>
                <li>Three meals daily</li>
                <li>Basic medical care</li>
                <li>Housekeeping</li>
                <li>Social activities</li>
                <li>24/7 staff support</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-header">
                <h3>Premium Care</h3>
                <div className="price">
                  $3,500<span>/month</span>
                </div>
              </div>
              <ul>
                <li>Luxury private room</li>
                <li>Gourmet meals</li>
                <li>Comprehensive medical care</li>
                <li>Personal care assistant</li>
                <li>Premium activities</li>
                <li>Transportation services</li>
                <li>Specialized therapy</li>
              </ul>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Memory Care</h3>
                <div className="price">
                  $4,000<span>/month</span>
                </div>
              </div>
              <ul>
                <li>Specialized dementia care</li>
                <li>Secure environment</li>
                <li>Memory therapy programs</li>
                <li>Enhanced supervision</li>
                <li>Family support services</li>
                <li>Specialized activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="application-section">
        <div className="container">
          <h2>Apply Now</h2>
          <div className="application-content">
            <div className="application-info">
              <h3>Ready to Join Our Family?</h3>
              <p>
                Fill out the form below and our team will contact you within 24
                hours to schedule a consultation and tour of our facility.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span>📞</span>
                  <div>
                    <h4>Call Us</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span>📧</span>
                  <div>
                    <h4>Email Us</h4>
                    <p>admissions@arramoldagehome.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span>📍</span>
                  <div>
                    <h4>Visit Us</h4>
                    <p>123 Elder Care Street, City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="application-form">
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
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="age">Age *</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min="60"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="medicalConditions">Medical Conditions</label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Please describe any medical conditions or special care needs..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emergencyContact">Emergency Contact</label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    placeholder="Name and phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any additional information or questions..."
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
