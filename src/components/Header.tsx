import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <h1>🌍 World Time</h1>
            <h3 style={{marginLeft: '30px'}}>💎By Gal Sapir💎</h3>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
