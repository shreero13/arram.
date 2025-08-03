import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    console.log("Donation submitted:", {
      donationAmount,
      donationType,
      formData,
    });
    alert("Thank you for your generous donation! We will contact you soon.");
  };

  const impactStories = [
    {
      id: 1,
      title: "Medical Equipment Fund",
      description:
        "Your donations helped us purchase new medical monitoring equipment for our residents.",
      impact: "Improved care for 50+ residents",
      emoji: "🏥",
    },
    {
      id: 2,
      title: "Activity Programs",
      description:
        "Funds were used to expand our recreational activities and therapy programs.",
      impact: "Enhanced quality of life for all residents",
      emoji: "🎨",
    },
    {
      id: 3,
      title: "Facility Improvements",
      description:
        "Donations enabled us to renovate common areas and improve accessibility.",
      impact: "Better living environment for everyone",
      emoji: "🏠",
    },
    {
      id: 4,
      title: "Emergency Fund",
      description:
        "Your support helps us provide care for residents who cannot afford full fees.",
      impact: "Supporting 15+ families in need",
      emoji: "❤️",
    },
  ];

  return (
    <div className="donate">
      <div className="donate-hero">
        <div className="container">
          <h1>Make a Difference</h1>
          <p>
            Your generous donations help us provide exceptional care and support
            to our elderly community
          </p>
        </div>
      </div>

      <section className="impact-section">
        <div className="container">
          <h2>Your Impact</h2>
          <div className="impact-grid">
            {impactStories.map((story) => (
              <div key={story.id} className="impact-card">
                <div className="impact-icon">{story.emoji}</div>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="impact-result">{story.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="donation-options">
        <div className="container">
          <h2>How You Can Help</h2>
          <div className="options-grid">
            <div className="option-card">
              <div className="option-icon">💰</div>
              <h3>Financial Donations</h3>
              <p>
                Your monetary contributions directly support our residents'
                care, activities, and facility improvements.
              </p>
              <ul>
                <li>Medical equipment and supplies</li>
                <li>Recreational activities</li>
                <li>Facility maintenance</li>
                <li>Staff training</li>
              </ul>
            </div>
            <div className="option-card">
              <div className="option-icon">🎁</div>
              <h3>In-Kind Donations</h3>
              <p>
                We welcome donations of items that can improve our residents'
                quality of life.
              </p>
              <ul>
                <li>Books and magazines</li>
                <li>Craft supplies</li>
                <li>Clothing and personal items</li>
                <li>Medical equipment</li>
              </ul>
            </div>
            <div className="option-card">
              <div className="option-icon">🤝</div>
              <h3>Volunteer Your Time</h3>
              <p>
                Share your skills and compassion by volunteering with our
                residents and staff.
              </p>
              <ul>
                <li>Reading to residents</li>
                <li>Leading activities</li>
                <li>Administrative support</li>
                <li>Special events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-form-section">
        <div className="container">
          <h2>Make a Donation</h2>
          <div className="donation-content">
            <div className="donation-info">
              <h3>Every Donation Matters</h3>
              <p>
                Your generosity helps us provide the highest quality care and
                support to our elderly residents. Every contribution, no matter
                the size, makes a real difference in someone's life.
              </p>

              <div className="donation-stats">
                <div className="stat-item">
                  <h4>$50</h4>
                  <p>Provides one week of activities for a resident</p>
                </div>
                <div className="stat-item">
                  <h4>$100</h4>
                  <p>Funds medical supplies for one month</p>
                </div>
                <div className="stat-item">
                  <h4>$250</h4>
                  <p>Supports facility improvements</p>
                </div>
                <div className="stat-item">
                  <h4>$500</h4>
                  <p>Provides emergency care for a resident in need</p>
                </div>
              </div>
            </div>

            <div className="donation-form">
              <form onSubmit={handleSubmit}>
                <div className="donation-type">
                  <h4>Donation Type</h4>
                  <div className="type-options">
                    <label className="type-option">
                      <input
                        type="radio"
                        name="donationType"
                        value="one-time"
                        checked={donationType === "one-time"}
                        onChange={(e) => setDonationType(e.target.value)}
                      />
                      <span>One-time Donation</span>
                    </label>
                    <label className="type-option">
                      <input
                        type="radio"
                        name="donationType"
                        value="monthly"
                        checked={donationType === "monthly"}
                        onChange={(e) => setDonationType(e.target.value)}
                      />
                      <span>Monthly Recurring</span>
                    </label>
                  </div>
                </div>

                <div className="amount-selection">
                  <h4>Select Amount</h4>
                  <div className="amount-options">
                    {[25, 50, 100, 250, 500, 1000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${
                          donationAmount === amount.toString() ? "selected" : ""
                        }`}
                        onClick={() => setDonationAmount(amount.toString())}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="custom-amount">
                    <label htmlFor="customAmount">Custom Amount:</label>
                    <input
                      type="number"
                      id="customAmount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                </div>

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
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Share why you're making this donation..."
                  />
                </div>

                <button type="submit" className="donate-btn">
                  {donationType === "monthly"
                    ? "Start Monthly Donation"
                    : "Make Donation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="transparency-section">
        <div className="container">
          <h2>Transparency & Accountability</h2>
          <div className="transparency-content">
            <div className="transparency-item">
              <div className="transparency-icon">📊</div>
              <h3>Financial Reports</h3>
              <p>
                We publish annual financial reports showing how your donations
                are used to support our residents.
              </p>
            </div>
            <div className="transparency-item">
              <div className="transparency-icon">🎯</div>
              <h3>Impact Tracking</h3>
              <p>
                Regular updates on how your contributions are making a
                difference in our residents' lives.
              </p>
            </div>
            <div className="transparency-item">
              <div className="transparency-icon">📧</div>
              <h3>Donor Communication</h3>
              <p>
                Monthly newsletters and updates to keep you informed about the
                impact of your generosity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
