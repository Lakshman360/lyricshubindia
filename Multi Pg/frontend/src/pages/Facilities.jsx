import React from 'react';
import { Wifi, Coffee, Wind, Shield, CheckCircle2, Zap, Droplets, UtensilsCrossed } from 'lucide-react';

const Facilities = () => {
  const mainFacilities = [
    { icon: Wifi, title: "High-Speed WiFi", desc: "Unlimited 100Mbps fiber internet connection available 24/7 across all floors." },
    { icon: Coffee, title: "Hygienic Mess", desc: "Nutritious and delicious home-style meals cooked in a clean, professional kitchen." },
    { icon: Wind, title: "AC / Non-AC Rooms", desc: "Well-ventilated, spacious rooms with options for individual air conditioning." },
    { icon: Shield, title: "24/7 Security", desc: "Advanced CCTV surveillance and round-the-clock security personnel for safety." },
    { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply with heavy-duty inverters and generators." },
    { icon: Droplets, title: "Purified Water", desc: "24/7 access to RO purified drinking water and continuous water supply." },
    { icon: UtensilsCrossed, title: "Dining Area", desc: "Spacious and clean dining hall with comfortable seating for all students." },
    { icon: CheckCircle2, title: "Attached Washrooms", desc: "Modern attached bathrooms in every room with geyser facilities." }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Premium Facilities</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto font-medium">
            We provide world-class amenities to ensure you have a comfortable stay and can focus 100% on your studies and career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainFacilities.map((facility, idx) => (
            <div key={idx} className="glass-panel p-8 hover-card group border-white/10">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <facility.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{facility.title}</h3>
              <p className="text-muted leading-relaxed font-medium opacity-80">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-panel p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Beyond Just a Room</h2>
              <p className="text-lg text-muted mb-10 leading-relaxed font-medium">
                Venkateswara Boys Hostel is designed as an ecosystem for academic excellence. We take care of all your daily chores so your time remains yours.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Daily professional room cleaning",
                  "Weekly laundry services",
                  "Dedicated silent study zones",
                  "Common recreation area",
                  "First aid & emergency support",
                  "Guest waiting lounge"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-lg font-bold opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/3 aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center border border-white/10 shadow-inner">
               <span className="text-muted text-xl italic font-medium opacity-50">Facility Showcase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
