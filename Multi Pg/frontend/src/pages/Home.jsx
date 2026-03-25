import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Wifi, Coffee, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            Now accepting admissions for 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Your Home <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Away From Home
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted mb-10 leading-relaxed">
            Premium boys hostel in Kurnool offering world-class amenities, 
            hygienic food, and a perfect environment for study and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/book" 
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Book a Room <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="#facilities" 
              className="bg-surface border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all w-full sm:w-auto justify-center flex"
            >
              Explore Facilities
            </a>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Premium Facilities</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">Everything you need for a comfortable and productive stay.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: "High-Speed WiFi", desc: "Unlimited 100Mbps fiber internet connection 24/7." },
              { icon: Coffee, title: "Hygienic Mess", desc: "Nutritious and delicious meals cooked in a clean hygienic kitchen." },
              { icon: Wind, title: "AC / Non-AC", desc: "Well-ventilated rooms with custom air conditioning options." },
              { icon: Shield, title: "24/7 Security", desc: "CCTV surveillance and round-the-clock security personnel." }
            ].map((facility, idx) => (
              <div key={idx} className="glass-panel p-8 hover-card">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <facility.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-muted leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Designed for <br/>Student Excellence</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Venkateswara Boys Hostel is not just a place to sleep. It is an ecosystem built to support students. We take care of your living needs so you can focus 100% on your studies and career.
              </p>
              <ul className="space-y-4">
                {[
                  "Daily room cleaning service",
                  "RO purified drinking water",
                  "Power backup (Inverter/Generator)",
                  "Attached bathrooms with geysers",
                  "Dedicated study areas"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-3xl aspect-square flex items-center justify-center bg-surface/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="text-center">
                    <p className="text-2xl font-light text-muted italic">"Space for actual images of the hostel"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
