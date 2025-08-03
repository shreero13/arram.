import React from "react";
import "./Facilities.css";

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="facilities-hero">
        <div className="container">
          <h1>Our Facilities</h1>
          <p>
            State-of-the-art amenities designed for comfort, care, and community
          </p>
        </div>
      </div>

      <section className="accommodation-section">
        <div className="container">
          <h2>Accommodation</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">🛏️</div>
              <h3>Private Rooms</h3>
              <p>
                Spacious private rooms with modern amenities, comfortable beds,
                and personal storage space. Each room includes a private
                bathroom and beautiful views.
              </p>
              <ul>
                <li>Single occupancy</li>
                <li>Private bathroom</li>
                <li>Personal storage</li>
                <li>Beautiful views</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🏠</div>
              <h3>Semi-Private Rooms</h3>
              <p>
                Comfortable shared rooms for those who prefer companionship.
                Each room accommodates two residents with shared bathroom
                facilities.
              </p>
              <ul>
                <li>Two-person occupancy</li>
                <li>Shared bathroom</li>
                <li>Personal space</li>
                <li>Companionship</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">♿</div>
              <h3>Accessible Rooms</h3>
              <p>
                Specially designed rooms for residents with mobility challenges,
                featuring wheelchair accessibility and safety features.
              </p>
              <ul>
                <li>Wheelchair accessible</li>
                <li>Safety features</li>
                <li>Emergency call system</li>
                <li>Adaptive equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="medical-section">
        <div className="container">
          <h2>Medical Care</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">🏥</div>
              <h3>Medical Center</h3>
              <p>
                On-site medical center with qualified doctors and nurses
                providing round-the-clock care and emergency response.
              </p>
              <ul>
                <li>24/7 medical supervision</li>
                <li>Qualified medical staff</li>
                <li>Emergency response</li>
                <li>Regular health checkups</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">💊</div>
              <h3>Pharmacy</h3>
              <p>
                In-house pharmacy ensuring timely medication distribution and
                proper medication management for all residents.
              </p>
              <ul>
                <li>Medication management</li>
                <li>Timely distribution</li>
                <li>Prescription services</li>
                <li>Health monitoring</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🩺</div>
              <h3>Physical Therapy</h3>
              <p>
                Modern physical therapy center with specialized equipment for
                rehabilitation and mobility improvement.
              </p>
              <ul>
                <li>Rehabilitation programs</li>
                <li>Mobility training</li>
                <li>Pain management</li>
                <li>Strength building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="dining-section">
        <div className="container">
          <h2>Dining & Nutrition</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">🍽️</div>
              <h3>Dining Hall</h3>
              <p>
                Beautiful dining hall serving restaurant-quality meals prepared
                by professional chefs with attention to dietary needs.
              </p>
              <ul>
                <li>Restaurant-quality meals</li>
                <li>Dietary accommodations</li>
                <li>Social dining experience</li>
                <li>Flexible meal times</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🥗</div>
              <h3>Nutrition Planning</h3>
              <p>
                Personalized nutrition plans developed by registered dietitians
                to meet individual health requirements and preferences.
              </p>
              <ul>
                <li>Personalized meal plans</li>
                <li>Dietary restrictions</li>
                <li>Health monitoring</li>
                <li>Nutritional counseling</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">☕</div>
              <h3>Café & Lounge</h3>
              <p>
                Cozy café area for residents to enjoy coffee, snacks, and social
                interaction in a relaxed atmosphere.
              </p>
              <ul>
                <li>Casual dining</li>
                <li>Social gathering space</li>
                <li>Refreshments</li>
                <li>Relaxed atmosphere</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="recreation-section">
        <div className="container">
          <h2>Recreation & Activities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">🎨</div>
              <h3>Activity Rooms</h3>
              <p>
                Dedicated spaces for arts, crafts, games, and social activities
                to keep residents engaged and entertained.
              </p>
              <ul>
                <li>Arts and crafts</li>
                <li>Board games</li>
                <li>Social activities</li>
                <li>Creative workshops</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">📚</div>
              <h3>Library</h3>
              <p>
                Well-stocked library with books, magazines, and comfortable
                reading areas for intellectual stimulation and relaxation.
              </p>
              <ul>
                <li>Extensive book collection</li>
                <li>Comfortable reading areas</li>
                <li>Magazines and newspapers</li>
                <li>Book clubs</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🎵</div>
              <h3>Entertainment Center</h3>
              <p>
                Multi-purpose entertainment center for movies, music,
                performances, and special events for residents and families.
              </p>
              <ul>
                <li>Movie screenings</li>
                <li>Live performances</li>
                <li>Music therapy</li>
                <li>Family events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="outdoor-section">
        <div className="container">
          <h2>Outdoor Spaces</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">🌳</div>
              <h3>Garden Areas</h3>
              <p>
                Beautifully landscaped gardens with walking paths, seating
                areas, and therapeutic gardening spaces for outdoor enjoyment.
              </p>
              <ul>
                <li>Walking paths</li>
                <li>Seating areas</li>
                <li>Therapeutic gardening</li>
                <li>Fresh air access</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🏃‍♂️</div>
              <h3>Exercise Area</h3>
              <p>
                Outdoor exercise area with age-appropriate equipment for
                physical activity and fitness maintenance.
              </p>
              <ul>
                <li>Age-appropriate equipment</li>
                <li>Supervised exercise</li>
                <li>Fitness programs</li>
                <li>Safety features</li>
              </ul>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🪑</div>
              <h3>Patio & Deck</h3>
              <p>
                Comfortable outdoor patio and deck areas for relaxation,
                socializing, and enjoying the natural surroundings.
              </p>
              <ul>
                <li>Relaxation spaces</li>
                <li>Social gathering</li>
                <li>Natural surroundings</li>
                <li>Shaded areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Additional Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🚗</div>
              <h3>Transportation</h3>
              <p>
                Regular transportation services for medical appointments,
                shopping, and recreational outings.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">🧺</div>
              <h3>Laundry Service</h3>
              <p>
                Professional laundry service to keep residents' clothing clean
                and well-maintained.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">💇‍♀️</div>
              <h3>Beauty Salon</h3>
              <p>
                On-site beauty salon for haircuts, styling, and personal
                grooming services.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">🛒</div>
              <h3>Convenience Store</h3>
              <p>
                Small convenience store for personal items, snacks, and daily
                necessities.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">📞</div>
              <h3>Communication Center</h3>
              <p>
                Computer and phone facilities for residents to stay connected
                with family and friends.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">🙏</div>
              <h3>Prayer Room</h3>
              <p>
                Peaceful prayer room and meditation space for spiritual
                activities and reflection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
