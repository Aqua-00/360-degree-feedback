import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="App">
      <header>
        <h1>360-Degree Feedback System</h1>
        <div className="profile">
          {/* <img src="https://via.placeholder.com/30" alt="Profile" /> */}
          {/* <span>John Doe</span> */}
          👤 Profile
        </div>
        <button className="logout-btn" title="Logout">⎋ Logout</button>
        <button onClick={toggleTheme} style={{marginLeft: 10}}>
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <nav>
        <a href="#dashboard">Dashboard</a>
        <a href="#give">Give Feedback</a>
        <a href="#review">Review</a>
      </nav>
      <main>
        <section id="dashboard">
          <h2>Feedback Dashboard</h2>
          <p>Summary of received/given feedback.</p>
          <div className="progress-ring">
            <div className="progress-circle">
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="#ccc"></circle>
                <circle cx="50" cy="50" r="40" stroke="#3f51b5" strokeDasharray="251.2" strokeDashoffset="75.4"></circle>
                <text x="50" y="55" textAnchor="middle">70%</text>
              </svg>
              <p>Feedback Received</p>
            </div>
            <div className="progress-circle">
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="#ccc"></circle>
                <circle cx="50" cy="50" r="40" stroke="#ffc107" strokeDasharray="251.2" strokeDashoffset="100.4"></circle>
                <text x="50" y="55" textAnchor="middle">60%</text>
              </svg>
              <p>Feedback Given</p>
            </div>
          </div>
          {/* Chart.js integration should be done with a React wrapper, not a <script> tag */}
        </section>
        <section id="give">
          <h2>Give Feedback</h2>
          <form>
            <div className="form-group">
              <label htmlFor="user">Select User</label>
              <input type="text" id="user" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label htmlFor="relationship">Relationship</label>
              <select id="relationship">
                <option>Peer</option>
                <option>Manager</option>
                <option>Subordinate</option>
                <option>Self</option>
              </select>
            </div>
            <div className="form-group">
              <label>Rating</label>
              <div className="star-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <input type="hidden" id="ratingValue" name="rating" />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea id="comments" rows="4"></textarea>
            </div>
            <button type="submit">Submit Feedback</button>
          </form>
        </section>
        <section id="review">
          <h2>Feedback Review</h2>
          <div>
            <h3>Peer Feedback</h3>
            <p>“Great collaborator.” ⭐⭐⭐⭐</p>
            <h3>Manager Feedback</h3>
            <p>“Excellent leadership.” ⭐⭐⭐⭐⭐</p>
            <h3>Self Feedback</h3>
            <p>“Need to improve on time management.” ⭐⭐⭐</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;