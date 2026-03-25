import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Bell, UserCircle, Menu } from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : { name: 'Venkateswara Boys Hostel Owner', role: 'owner' };

  return (
    <div className="min-h-screen bg-background text-text flex relative">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 w-full md:ml-64 flex flex-col min-w-0 transition-all duration-300">
        {/* Top Header */}
        <header className="h-16 border-b border-white/10 bg-surface/50 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
                className="md:hidden text-muted hover:text-white"
                onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative text-muted hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] font-bold flex items-center justify-center rounded-full text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-3 border-l border-white/10 pl-4 md:pl-6 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted">Authorized {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
              </div>
              <UserCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
