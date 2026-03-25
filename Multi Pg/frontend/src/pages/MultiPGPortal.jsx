import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, MapPin, Building2, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const statesData = [
  {
    name: "Andhra Pradesh",
    districts: [
      {
        name: "Kurnool",
        pgs: [
          { name: "Venkateswara Boys Hostel", id: "venkateswara-boys-hostel" }
        ]
      },
      {
        name: "Nandyal",
        pgs: [
          { name: "Venkateswara Boys Hostel", id: "venkateswara-boys-hostel" }
        ]
      }
    ]
  },
  {
    name: "Telangana",
    districts: [
      {
        name: "Hyderabad",
        pgs: [
          { name: "Sri Sai PG for Gents", id: "sri-sai-pg" },
          { name: "Premium Living Hostel", id: "premium-living" }
        ]
      }
    ]
  },
  {
    name: "Karnataka",
    districts: [
      {
        name: "Bangalore",
        pgs: [
          { name: "Green View PG", id: "green-view" }
        ]
      }
    ]
  }
];

const MultiPGPortal = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPG, setSelectedPG] = useState("");

  const [districts, setDistricts] = useState([]);
  const [pgs, setPgs] = useState([]);

  useEffect(() => {
    if (selectedState) {
      const state = statesData.find(s => s.name === selectedState);
      setDistricts(state ? state.districts : []);
      setSelectedDistrict("");
      setSelectedPG("");
    } else {
      setDistricts([]);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      const district = districts.find(d => d.name === selectedDistrict);
      setPgs(district ? district.pgs : []);
      setSelectedPG("");
    } else {
      setPgs([]);
    }
  }, [selectedDistrict, districts]);

  const handleGo = () => {
    if (selectedPG) {
      // Find the PG object to get the ID
      const pgObj = pgs.find(p => p.name === selectedPG);
      if (pgObj && pgObj.id === "venkateswara-boys-hostel") {
        navigate('/hostel/venkateswara-boys-hostel');
      } else {
        alert("This hostel website is currently under development.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl z-10 flex flex-col items-center"
      >
        {/* Large Logo */}
        <div className="mb-8 p-1 rounded-3xl bg-surface/40 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
            <img src="/portal-logo.jpg" alt="Multi PG Logo" className="h-48 w-48 object-cover rounded-2xl filter drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]" />
        </div>

        {/* Large Bold Title */}
        <h1 className="text-4xl md:text-6xl font-black text-center mb-4 tracking-tight">
          Multi PG <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Management</span>
        </h1>
        <p className="text-muted text-lg md:text-xl text-center mb-12 max-w-lg font-medium opacity-80">
          Find and manage your premium hostel stay with ease. Select your location to begin.
        </p>

        {/* Selection Interface */}
        <div className="w-full glass-panel p-8 md:p-12 space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/20">
          <div className="grid grid-cols-1 gap-6">
            
            {/* State Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted ml-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Select State
              </label>
              <div className="relative group">
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full appearance-none bg-white/5 border border-white/10 hover:border-primary/50 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium cursor-pointer"
                >
                  <option value="" disabled className="bg-surface">-- Choose State --</option>
                  {statesData.map(state => (
                    <option key={state.name} value={state.name} className="bg-surface">{state.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted pointer-events-none transition-transform group-hover:text-white" />
              </div>
            </div>

            {/* District Selection */}
            <div className={`space-y-2 transition-all duration-300 ${!selectedState ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
              <label className="text-sm font-semibold text-muted ml-1 flex items-center gap-2">
                <Search className="h-4 w-4 text-accent" /> Select District
              </label>
              <div className="relative group">
                <select 
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full appearance-none bg-white/5 border border-white/10 hover:border-accent/50 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium cursor-pointer"
                >
                  <option value="" disabled className="bg-surface">-- Choose District --</option>
                  {districts.map(dist => (
                    <option key={dist.name} value={dist.name} className="bg-surface">{dist.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted pointer-events-none transition-transform group-hover:text-white" />
              </div>
            </div>

            {/* PG Selection */}
            <div className={`space-y-2 transition-all duration-300 ${!selectedDistrict ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
              <label className="text-sm font-semibold text-muted ml-1 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-secondary" /> Select PG / Hostel
              </label>
              <div className="relative group">
                <select 
                  value={selectedPG}
                  onChange={(e) => setSelectedPG(e.target.value)}
                  className="w-full appearance-none bg-white/5 border border-white/10 hover:border-secondary/50 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium cursor-pointer"
                >
                  <option value="" disabled className="bg-surface">-- Choose PG --</option>
                  {pgs.map(pg => (
                    <option key={pg.name} value={pg.name} className="bg-surface">{pg.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted pointer-events-none transition-transform group-hover:text-white" />
              </div>
            </div>

          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGo}
            disabled={!selectedPG}
            className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl
              ${selectedPG 
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-primary/20 hover:shadow-primary/40' 
                : 'bg-white/5 text-muted cursor-not-allowed border border-white/5'}
            `}
          >
            Visit Website <ArrowRight className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="mt-12 text-muted text-sm font-medium opacity-60">
          © {new Date().getFullYear()} Multi PG Management Platform • All India Network
        </div>
      </motion.div>
    </div>
  );
};

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default MultiPGPortal;
