import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Guest / Public Pages
import Home from './pages/Home';
import Booking from './pages/Booking';
import Login from './pages/Login'; // Unified Login for all roles
import StudentDashboard from './pages/StudentDashboard';
import Facilities from './pages/Facilities';
import Rooms from './pages/Rooms';

// Portal Page
import MultiPGPortal from './pages/MultiPGPortal';

// Admin / Owner Pages
import DashboardOverview from './pages/admin/DashboardOverview'; // Reusing as generic dashboard
import RoomManagement from './pages/admin/RoomManagement'; // Reusing for Owner
import StudentManagement from './pages/admin/StudentManagement';
import AttendanceRecords from './pages/admin/AttendanceRecords';
import FeeTracking from './pages/admin/FeeTracking';

import { HostelProvider } from './context/HostelContext';

function App() {
  return (
    <HostelProvider>
      <Router>
        <Routes>
          {/* Main Selection Portal */}
          <Route path="/" element={<MultiPGPortal />} />

          {/* Public / Student Routes for Specific Hostel */}
          <Route path="/hostel/venkateswara-boys-hostel" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="login" element={<Login />} />
            <Route path="book" element={<Booking />} />
            {/* Student Dashboard is protected and separate */}
            <Route path="dashboard" element={<StudentDashboard />} />
          </Route>

          {/* OWNER PANEL - Specific to Hostel Owner */}
          <Route path="/owner/login" element={<Login />} />
          <Route path="/owner" element={<AdminLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="rooms" element={<RoomManagement />} />
            <Route path="students" element={<StudentManagement />} />
            <Route path="attendance" element={<AttendanceRecords />} />
            <Route path="fees" element={<FeeTracking />} />
          </Route>

          {/* ADMIN PANEL - Global Platform Admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
             <Route index element={<div className="p-8"><h1 className="text-3xl font-bold">Global Admin Dashboard</h1><p className="mt-4 text-muted">Manage all hostels and platform settings here.</p></div>} />
             {/* Admin specific routes can be added here */}
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </HostelProvider>
  );
}

export default App;
