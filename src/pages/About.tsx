import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Header />
      <main className="about-page">
        <div className="back-button-container">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>

        <div className="about-content">
          <h1>About World Time</h1>

          <div className="about-section">
            <h2>What is World Time?</h2>
            <p>
              World Time is a simple and elegant application designed to help you stay connected with time zones across the globe. Whether you're scheduling meetings with international teams, planning travel, or simply curious about what time it is in different parts of the world, World Time has you covered.
            </p>
          </div>

          <div className="about-section">
            <h2>Features</h2>
            <ul>
              <li>View current local times in 12 major cities worldwide</li>
              <li>See day/night indicators for each city</li>
              <li>Access detailed city information including full date and timezone</li>
              <li>Automatic time updates every 60 seconds</li>
              <li>Manual refresh option on city detail pages</li>
              <li>Clean and intuitive user interface</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Data Source</h2>
            <p>
              All time and timezone data is provided by the <strong>time.now Developer API</strong>. This reliable API ensures accurate and up-to-date time information from around the world.
            </p>
            <p>
              API Reference: <a href="https://time.now/developer" target="_blank" rel="noopener noreferrer">https://time.now/developer</a>
            </p>
          </div>

          <div className="about-section">
            <h2>Technology Stack</h2>
            <ul>
              <li>React 19 with TypeScript</li>
              <li>Vite - Modern build tool</li>
              <li>React Router - Client-side routing</li>
              <li>Custom CSS with dark blue and white theme</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Supported Cities</h2>
            <p>
              We currently support local times for 12 major cities: Tel Aviv, London, New York, Tokyo, Paris, Sydney, Dubai, Singapore, Hong Kong, Bangkok, Los Angeles, and Toronto.
            </p>
          </div>

          <div className="about-footer">
            <p>Made with ❤️ using React and Vite</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
