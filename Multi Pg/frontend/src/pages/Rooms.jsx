import React from 'react';
import { useHostel } from '../context/HostelContext';
import { Users, DoorOpen, LayoutGrid } from 'lucide-react';

const Rooms = () => {
  const { floors, rooms } = useHostel();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Room <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Availability</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto font-medium">
            Browse our floors and rooms to find your perfect stay. Real-time availability shown below.
          </p>
        </div>

        <div className="space-y-16">
          {floors.map((floor) => (
            <div key={floor.id} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <LayoutGrid className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-black">Floor {floor.number}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {rooms
                  .filter((room) => room.floorId === floor.id)
                  .map((room) => {
                    const remaining = room.capacity - room.occupants;
                    const isFull = remaining === 0;

                    return (
                      <div 
                        key={room.id} 
                        className={`glass-panel p-6 border transition-all ${
                          isFull 
                            ? 'border-red-500/30 opacity-80' 
                            : 'border-white/10 hover:border-primary/50'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-2xl font-black font-mono">Room {room.number}</h3>
                            <span className="text-sm text-muted font-medium italic">Shared Accommodation</span>
                          </div>
                          {isFull ? (
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-black rounded-full uppercase tracking-wider border border-red-500/20">Full</span>
                          ) : (
                            <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-black rounded-full uppercase tracking-wider border border-secondary/20">Available</span>
                          )}
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-muted">
                              <Users className="h-4 w-4" />
                              <span className="text-sm font-bold">Total Capacity</span>
                            </div>
                            <span className="font-black text-lg">{room.capacity}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-primary">
                              <DoorOpen className="h-4 w-4" />
                              <span className="text-sm font-bold">Remaining Beds</span>
                            </div>
                            <span className={`font-black text-2xl ${remaining > 0 ? 'text-primary' : 'text-red-400'}`}>
                              {remaining}
                            </span>
                          </div>

                          <div className="relative pt-2">
                             <div className="overflow-hidden h-2 text-xs flex rounded bg-white/5 border border-white/5">
                                <div 
                                    style={{ width: `${(room.occupants / room.capacity) * 100}%` }}
                                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${isFull ? 'bg-red-500' : 'bg-primary'}`}
                                ></div>
                             </div>
                             <p className="mt-2 text-xs text-muted text-right font-bold uppercase tracking-widest">{room.occupants} Occupied</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
