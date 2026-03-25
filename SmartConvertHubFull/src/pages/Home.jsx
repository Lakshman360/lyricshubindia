import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Clock, ArrowRight, Filter } from 'lucide-react';
import { TOOLS, TOOL_CATEGORIES } from '../data/tools';
import './Home.css';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  
  // Filter tools based on search and category
  const filteredTools = TOOLS.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Simplified Popular Tools (first 4 for demo)
  const popularTools = TOOLS.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            All the tools you need to <span className="gradient-text">Convert & Utility</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            More than 30+ tools to manage your PDF, images, documents, and media files online. 
            Fast, secure, and 100% free.
          </motion.p>

          <motion.div 
            className="hero-search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for a tool (e.g. Merge PDF, Resize Image...)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="tools-section">
        <div className="container">
          {/* Categories bar */}
          <div className="category-filters">
            <button 
              className={`cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Tools
            </button>
            {Object.values(TOOL_CATEGORIES).map(cat => (
              <button 
                key={cat.id} 
                className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <cat.icon size={16} /> {cat.label}
              </button>
            ))}
          </div>

          <div className="tools-layout">
            <div className="tools-grid-container">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  className="tools-grid"
                  layout
                >
                  {filteredTools.length > 0 ? (
                    filteredTools.map(tool => (
                      <motion.div 
                        key={tool.id} 
                        className="tool-card-wrapper"
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to={`/${tool.id}`} className="tool-card">
                          <div className="tool-card-icon" style={{ 
                            backgroundColor: TOOL_CATEGORIES[tool.category.toUpperCase().split('-')[0]].color + '10', 
                            color: TOOL_CATEGORIES[tool.category.toUpperCase().split('-')[0]].color 
                          }}>
                            <tool.icon size={28} />
                          </div>
                          <div className="tool-card-info">
                            <h3>{tool.name}</h3>
                            <p>{tool.description}</p>
                          </div>
                          <div className="tool-card-arrow">
                            <ArrowRight size={18} />
                          </div>
                        </Link>
                      </motion.div>
                    ))
                  ) : (
                    <div className="no-results">
                      <Search size={48} />
                      <p>No tools found matching "{searchQuery}"</p>
                      <button className="secondary-btn" onClick={() => {setSearchQuery(''); setActiveCategory('all');}}>Clear all filters</button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar Ad & Popular */}
            <aside className="home-sidebar">
              <div className="sidebar-section">
                <div className="sidebar-header">
                  <Star size={16} /> <h3>Popular Tools</h3>
                </div>
                <div className="popular-list">
                  {popularTools.map(tool => (
                    <Link key={tool.id} to={`/${tool.id}`} className="popular-item">
                      <tool.icon size={16} />
                      <span>{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="ad-placeholder sidebar-ad">
                <span className="ad-label">Advertisement</span>
                <div className="ad-content">Your Image Ad Here</div>
              </div>

              <div className="sidebar-section">
                <div className="sidebar-header">
                  <Clock size={16} /> <h3>Recently Used</h3>
                </div>
                <p className="sidebar-muted">No recent tools yet.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="container banner-content">
          <div className="banner-item">
            <CheckCircle2 size={24} />
            <div>
              <h4>Secure Processing</h4>
              <p>Your files are deleted automatically after 2 hours.</p>
            </div>
          </div>
          <div className="banner-item">
            <CheckCircle2 size={24} />
            <div>
              <h4>100% Free</h4>
              <p>Professional grade tools with no hidden costs.</p>
            </div>
          </div>
          <div className="banner-item">
            <CheckCircle2 size={24} />
            <div>
              <h4>Multi-platform</h4>
              <p>Works on Windows, Mac, Linux, and Mobile browsers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
