import React, { useState } from 'react';
import { useHostel } from '../../context/HostelContext';
import { Plus, Trash2, Edit2, LayoutGrid, DoorOpen, Users, Save, X } from 'lucide-react';

const RoomManagement = () => {
  const { floors, rooms, addFloor, removeFloor, addRoom, removeRoom, updateRoom } = useHostel();
  const [editingRoom, setEditingRoom] = useState(null);
  const [newRoomNumber, setNewRoomNumber] = useState('');
  const [activeFloorField, setActiveFloorField] = useState(null);

  const handleUpdateRoom = (e) => {
    e.preventDefault();
    updateRoom(editingRoom.id, {
      capacity: parseInt(editingRoom.capacity),
      occupants: parseInt(editingRoom.occupants)
    });
    setEditingRoom(null);
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black">Hostel Structure Management</h2>
          <p className="text-muted font-medium">Manage floors, rooms, and bed capacities.</p>
        </div>
        <button 
          onClick={addFloor}
          className="flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/20"
        >
          <Plus className="h-5 w-5" /> Add New Floor
        </button>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {floors.sort((a,b) => a.number - b.number).map((floor) => (
          <div key={floor.id} className="glass-panel p-8 border-white/10 relative group">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <LayoutGrid className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black">Floor {floor.number}</h3>
              </div>
              <button 
                onClick={() => removeFloor(floor.id)}
                className="p-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors opacity-40 group-hover:opacity-100"
                title="Remove Floor"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rooms
                .filter(r => r.floorId === floor.id)
                .map(room => (
                  <div key={room.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative group/room">
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-xl font-black font-mono">Room {room.number}</h4>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setEditingRoom(room)}
                          className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => removeRoom(room.id)}
                          className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted font-bold">Capacity</span>
                        <span className="font-black text-lg">{room.capacity} Beds</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted font-bold">Occupancy</span>
                        <span className={`font-black text-lg ${room.occupants === room.capacity ? 'text-red-400' : 'text-primary'}`}>
                          {room.occupants} Occupied
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              
              {/* Add Room Action Card */}
              <div className="border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 min-h-[160px] hover:border-primary/50 transition-colors group/add">
                {activeFloorField === floor.id ? (
                  <div className="w-full flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Room #"
                      className="flex-1 bg-surface border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary text-sm"
                      value={newRoomNumber}
                      onChange={(e) => setNewRoomNumber(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (addRoom(floor.id, newRoomNumber), setActiveFloorField(null), setNewRoomNumber(''))}
                      autoFocus
                    />
                    <button 
                      onClick={() => {
                        if(newRoomNumber) {
                          addRoom(floor.id, newRoomNumber);
                          setNewRoomNumber('');
                          setActiveFloorField(null);
                        }
                      }}
                      className="p-2 bg-primary text-white rounded-lg"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button onClick={() => setActiveFloorField(null)} className="p-2 bg-white/5 text-muted hover:text-white rounded-lg">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setActiveFloorField(floor.id)}
                    className="flex flex-col items-center gap-2 text-muted group-hover/add:text-primary transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full border border-dashed border-muted group-hover/add:border-primary flex items-center justify-center">
                      <Plus className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold tracking-tight">New Room</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Room Modal */}
      {editingRoom && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[100]">
          <div className="glass-panel p-8 max-w-md w-full border-white/10 shadow-3xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black italic">Room {editingRoom.number} Settings</h3>
              <button onClick={() => setEditingRoom(null)} className="text-muted hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleUpdateRoom} className="space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-muted uppercase tracking-widest flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" /> Total Room Capacity
                </label>
                <div className="flex items-center gap-4">
                   <input 
                    type="range" 
                    min="1" 
                    max="6" 
                    className="flex-1 accent-primary"
                    value={editingRoom.capacity}
                    onChange={(e) => setEditingRoom({...editingRoom, capacity: e.target.value})}
                  />
                  <span className="w-10 text-center font-black text-xl">{editingRoom.capacity}</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black text-muted uppercase tracking-widest flex items-center gap-2">
                  <DoorOpen className="h-4 w-4 text-accent" /> Occupied Beds
                </label>
                <div className="flex items-center gap-4">
                   <input 
                    type="range" 
                    min="0" 
                    max={editingRoom.capacity} 
                    className="flex-1 accent-accent"
                    value={editingRoom.occupants}
                    onChange={(e) => setEditingRoom({...editingRoom, occupants: e.target.value})}
                  />
                  <span className="w-10 text-center font-black text-xl">{editingRoom.occupants}</span>
                </div>
              </div>

              <div className="pt-6 flex gap-3">
                <button 
                  type="submit"
                  className="flex-1 bg-primary hover:bg-accent text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20"
                >
                  <Save className="h-5 w-5" /> Save Changes
                </button>
                <button 
                  type="button"
                  onClick={() => setEditingRoom(null)}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-muted hover:text-white py-4 rounded-xl font-bold transition-all border border-white/5"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;
