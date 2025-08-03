import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryData = [
    {
      id: 1,
      category: "facility",
      title: "Main Building",
      description: "Beautiful exterior of our main facility",
      emoji: "🏢",
    },
    {
      id: 2,
      category: "facility",
      title: "Dining Hall",
      description: "Spacious dining area with restaurant-quality meals",
      emoji: "🍽️",
    },
    {
      id: 3,
      category: "facility",
      title: "Garden Area",
      description: "Peaceful garden with walking paths",
      emoji: "🌳",
    },
    {
      id: 4,
      category: "activities",
      title: "Arts & Crafts",
      description: "Residents enjoying creative activities",
      emoji: "🎨",
    },
    {
      id: 5,
      category: "activities",
      title: "Music Therapy",
      description: "Live music sessions for residents",
      emoji: "🎵",
    },
    {
      id: 6,
      category: "activities",
      title: "Exercise Class",
      description: "Group exercise sessions for fitness",
      emoji: "🏃‍♂️",
    },
    {
      id: 7,
      category: "rooms",
      title: "Private Room",
      description: "Comfortable private accommodation",
      emoji: "🛏️",
    },
    {
      id: 8,
      category: "rooms",
      title: "Common Area",
      description: "Cozy common living space",
      emoji: "🪑",
    },
    {
      id: 9,
      category: "medical",
      title: "Medical Center",
      description: "On-site medical care facility",
      emoji: "🏥",
    },
    {
      id: 10,
      category: "medical",
      title: "Physical Therapy",
      description: "Modern rehabilitation equipment",
      emoji: "🩺",
    },
    {
      id: 11,
      category: "events",
      title: "Birthday Celebration",
      description: "Special birthday celebrations for residents",
      emoji: "🎂",
    },
    {
      id: 12,
      category: "events",
      title: "Family Day",
      description: "Family gatherings and events",
      emoji: "👨‍👩‍👧‍👦",
    },
  ];

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "facility", name: "Facility" },
    { id: "activities", name: "Activities" },
    { id: "rooms", name: "Rooms" },
    { id: "medical", name: "Medical" },
    { id: "events", name: "Events" },
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery">
      <div className="gallery-hero">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>
            Take a virtual tour of our beautiful facility and see our residents
            enjoying their daily activities
          </p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <div className="image-placeholder">
                    <span>{item.emoji}</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <h2>Virtual Tour</h2>
          <div className="video-container">
            <div className="video-placeholder">
              <span>🎥</span>
              <p>Virtual Tour Video</p>
              <p className="video-description">
                Take a guided tour of our facility and see all the amenities we
                offer
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Residents Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="image-placeholder">👴</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "The staff here is wonderful. They treat us like family and
                  the facilities are excellent."
                </p>
                <h4>Mr. Robert Johnson</h4>
                <span>Resident since 2020</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="image-placeholder">👵</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "I love the activities and the beautiful garden. It's truly a
                  home away from home."
                </p>
                <h4>Mrs. Sarah Williams</h4>
                <span>Resident since 2019</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="image-placeholder">👨‍🦳</div>
              </div>
              <div className="testimonial-content">
                <p>
                  "The medical care is excellent and the food is delicious. I
                  couldn't be happier here."
                </p>
                <h4>Mr. David Chen</h4>
                <span>Resident since 2021</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
