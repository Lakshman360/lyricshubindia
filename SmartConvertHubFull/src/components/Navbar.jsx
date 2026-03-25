import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { TOOL_CATEGORIES } from '../data/tools';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <div className="logo-icon">S</div>
          <span>SmartConvert Hub</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-dropdown">
            <button className="nav-link-btn">
              Tools <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              {Object.values(TOOL_CATEGORIES).map(cat => (
                <Link key={cat.id} to={`/?category=${cat.id}`} className="dropdown-item">
                  <cat.icon size={16} /> {cat.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Pricing</Link>
          
          <form className="nav-search" onSubmit={handleSearch}>
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search tools..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="primary-btn hide-mobile">Get Started</button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
