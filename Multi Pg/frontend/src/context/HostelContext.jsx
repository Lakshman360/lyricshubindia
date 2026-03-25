import React, { createContext, useContext, useState, useEffect } from 'react';

const HostelContext = createContext();

export const useHostel = () => useContext(HostelContext);

export const HostelProvider = ({ children }) => {
  // Try to load from localStorage first
  const [floors, setFloors] = useState(() => {
    const saved = localStorage.getItem('hostel_floors');
    return saved ? JSON.parse(saved) : [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 }
    ];
  });

  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem('hostel_rooms');
    return saved ? JSON.parse(saved) : [
        { id: '101', number: '101', floorId: 1, capacity: 4, occupants: 3 },
        { id: '102', number: '102', floorId: 1, capacity: 3, occupants: 1 },
        { id: '201', number: '201', floorId: 2, capacity: 4, occupants: 4 },
        { id: '202', number: '202', floorId: 2, capacity: 2, occupants: 1 },
        { id: '301', number: '301', floorId: 3, capacity: 4, occupants: 2 },
    ];
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('hostel_floors', JSON.stringify(floors));
  }, [floors]);

  useEffect(() => {
    localStorage.setItem('hostel_rooms', JSON.stringify(rooms));
  }, [rooms]);

  const addFloor = () => {
    const nextNumber = floors.length > 0 ? Math.max(...floors.map(f => f.number)) + 1 : 1;
    setFloors([...floors, { id: Date.now(), number: nextNumber }]);
  };

  const removeFloor = (floorId) => {
    setFloors(floors.filter(f => f.id !== floorId));
    setRooms(rooms.filter(r => r.floorId !== floorId));
  };

  const addRoom = (floorId, roomNumber) => {
    setRooms([...rooms, { 
      id: Date.now().toString(), 
      number: roomNumber, 
      floorId: floorId, 
      capacity: 4, 
      occupants: 0 
    }]);
  };

  const removeRoom = (roomId) => {
    setRooms(rooms.filter(r => r.id !== roomId));
  };

  const updateRoom = (roomId, updates) => {
    setRooms(rooms.map(r => r.id === roomId ? { ...r, ...updates } : r));
  };

  return (
    <HostelContext.Provider value={{ 
      floors, 
      rooms, 
      addFloor, 
      removeFloor, 
      addRoom, 
      removeRoom, 
      updateRoom 
    }}>
      {children}
    </HostelContext.Provider>
  );
};
