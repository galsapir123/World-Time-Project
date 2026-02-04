import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCityTime, getCityByName, TimeData } from '../services/timeService';
import LoadingSpinner from '../components/LoadingSpinner';
import Header from '../components/Header';
import '../styles/CityDetails.css';

function CityDetails() {
  const { cityName } = useParams<{ cityName: string }>();
  const navigate = useNavigate();
  const [timeData, setTimeData] = useState<TimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const city = cityName ? getCityByName(cityName) : null;

  useEffect(() => {
    if (!city) {
      setError('City not found');
      setLoading(false);
      return;
    }

    loadTimeData();
    const interval = setInterval(loadTimeData, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, [city]);

  const loadTimeData = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError(null);
      const data = await fetchCityTime(city.timezone);
      setTimeData(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load city data');
      setLoading(false);
    }
  };

  const formatTime = (datetime: string): string => {
    const timeMatch = datetime.match(/T(\d{2}):(\d{2}):(\d{2})/);
    if (!timeMatch) return 'N/A';
    const hour = timeMatch[1];
    const minute = timeMatch[2];
    const second = timeMatch[3];
    return `${hour}:${minute}:${second}`;
  };

  const formatDate = (datetime: string): string => {
    const dateMatch = datetime.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (!dateMatch) return 'N/A';
    const year = dateMatch[1];
    const monthNum = parseInt(dateMatch[2]);
    const day = dateMatch[3];
    
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Calculate day of week
    const d = new Date(parseInt(year), monthNum - 1, parseInt(day));
    const dayName = dayNames[d.getDay()];
    const month = monthNames[monthNum - 1];
    
    return `${dayName}, ${day} ${month} ${year}`;
  };

  const getDayNightEmoji = (datetime: string): string => {
    const timeMatch = datetime.match(/T(\d{2}):/);
    if (!timeMatch) return '🌙';
    const hour = parseInt(timeMatch[1]);
    if (hour >= 6 && hour < 18) {
      return '☀️';
    }
    return '🌙';
  };

  return (
    <div className="app-container">
      <Header />
      <main className="city-details-page">
        {error ? (
          <div className="error-message">{error}</div>
        ) : loading ? (
          <LoadingSpinner />
        ) : timeData ? (
          <div className="details-container">
            <div className="back-button-container">
              <button className="back-button" onClick={() => navigate('/')}>
                ← Back to Home
              </button>
              <button className="refresh-button" onClick={loadTimeData}>
                🔄 Refresh
              </button>
            </div>

            <div className="city-details-header">
              <h1>{cityName} <span className="emoji-no-gradient">{getDayNightEmoji(timeData.datetime)}</span></h1>
            </div>

            <div className="details-content">
              <div className="detail-card large">
                <h3>Current Time</h3>
                <div className="large-time">{formatTime(timeData.datetime)}</div>
              </div>

              <div className="detail-card">
                <h3>Date</h3>
                <div className="detail-value">{formatDate(timeData.datetime)}</div>
              </div>

              <div className="detail-card">
                <h3>Timezone</h3>
                <div className="detail-value">{timeData.timezone}</div>
              </div>

              <div className="detail-card">
                <h3>Abbreviation</h3>
                <div className="detail-value">{timeData.abbreviation}</div>
              </div>

              <div className="detail-card">
                <h3>UTC Offset</h3>
                <div className="detail-value">{`GMT ${timeData.utc_offset}`}</div>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default CityDetails;
