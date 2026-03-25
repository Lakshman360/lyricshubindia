import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter, Linkedin, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <div className="logo-icon">S</div>
            <span>SmartConvert Hub</span>
          </Link>
          <p className="footer-desc">
            The world's most advanced all-in-one file conversion platform. 
            Fast, secure, and professional-grade tools for everyone.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Twitter size={20} /></a>
            <a href="#" className="social-link"><Github size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4>PDF Tools</h4>
          <ul>
            <li><Link to="/merge-pdf">Merge PDF</Link></li>
            <li><Link to="/split-pdf">Split PDF</Link></li>
            <li><Link to="/compress-pdf">Compress PDF</Link></li>
            <li><Link to="/pdf-to-word">PDF to Word</Link></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Support</h4>
          <ul>
            <li><Link to="/">Help Center</Link></li>
            <li><Link to="/">API Docs</Link></li>
            <li><Link to="/">Status</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {currentYear} SmartConvert Hub. All rights reserved.</p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> for the web.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
