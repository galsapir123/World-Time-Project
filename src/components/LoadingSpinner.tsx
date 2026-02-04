import '../styles/LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="hourglass">
        <div className="hourglass-top"></div>
        <div className="hourglass-middle"></div>
        <div className="hourglass-bottom"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingSpinner;
