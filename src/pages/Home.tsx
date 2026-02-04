import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllCities, CityTime } from '../services/timeService';
import LoadingSpinner from '../components/LoadingSpinner';
import Header from '../components/Header';
import '../styles/Home.css';

function Home() {
  const [cities, setCities] = useState<CityTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCities();
    const interval = setInterval(loadCities, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  const loadCities = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllCities();
      setCities(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load cities');
    } finally {
      setLoading(false);
    }
  };

  const handleCityClick = (cityName: string) => {
    navigate(`/city/${cityName}`);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="home-page">
        <div className="home-header">
          <h1>World Time</h1>
          <p>Check local times in major cities around the world</p>
        </div>

        {loading && <LoadingSpinner />}
        {error && <div className="error-message">{error}</div>}

        {!loading && !error && (
          <div className="cities-grid">
            {cities.map((city) => (
              <div
                key={city.city}
                className="city-card"
                onClick={() => handleCityClick(city.city)}
              >
                <div className="city-card-content">
                  <div className="day-night-indicator">{city.dayNight}</div>
                  <h2>{city.city}</h2>
                  <div className="city-time">{city.time}</div>
                  <div className="city-gmt">{city.gmt}</div>
                  <div className="city-timezone">{city.timezone}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
