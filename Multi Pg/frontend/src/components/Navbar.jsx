import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 bg-surface/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Venkateswara Boys Hostel
            </span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-muted hover:text-white transition-colors px-3 py-1.5 border border-white/10 rounded-lg hover:bg-white/5 active:scale-95 transition-all text-sm font-medium"
            >
              Portal
            </Link>
            <button 
                onClick={() => {
                    if (window.location.pathname === '/hostel/venkateswara-boys-hostel') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        window.location.href = '/hostel/venkateswara-boys-hostel';
                    }
                }}
                className="text-muted hover:text-white transition-colors text-sm font-medium"
            >
                Home
            </button>
            <Link to="/hostel/venkateswara-boys-hostel/facilities" className="text-muted hover:text-white transition-colors text-sm font-medium">Facilities</Link>
            <Link to="/hostel/venkateswara-boys-hostel/rooms" className="text-muted hover:text-white transition-colors text-sm font-medium">Rooms</Link>
            <Link to="/hostel/venkateswara-boys-hostel/login" className="text-muted hover:text-white transition-colors text-sm font-medium">Login</Link>
            <Link 
              to="/hostel/venkateswara-boys-hostel/book" 
              className="bg-primary hover:bg-accent text-white px-5 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/40"
            >
              Book Now
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-muted hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 absolute top-16 left-0 w-full bg-surface">
          <div className="px-4 py-6 space-y-4 flex flex-col shadow-2xl">
            <Link to="/" onClick={toggleMenu} className="block text-lg font-medium text-muted hover:text-primary transition-colors">← Back to Portal</Link>
            <Link to="/hostel/venkateswara-boys-hostel" onClick={toggleMenu} className="block text-lg font-medium text-white hover:text-primary transition-colors">Home</Link>
            <Link to="/hostel/venkateswara-boys-hostel/facilities" onClick={toggleMenu} className="block text-lg font-medium text-white hover:text-primary transition-colors">Facilities</Link>
            <Link to="/hostel/venkateswara-boys-hostel/rooms" onClick={toggleMenu} className="block text-lg font-medium text-white hover:text-primary transition-colors">Rooms</Link>
            <Link to="/hostel/venkateswara-boys-hostel/login" onClick={toggleMenu} className="block text-lg font-medium text-white hover:text-primary transition-colors">Student Login</Link>
            <Link 
              to="/hostel/venkateswara-boys-hostel/book"
              onClick={toggleMenu} 
              className="mt-4 bg-primary text-center text-white px-5 py-3 rounded-xl font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
