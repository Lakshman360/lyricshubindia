import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, DoorOpen, CalendarCheck, CreditCard, LogOut, X, Building2 } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
  const role = user?.role || 'owner';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    if (role === 'admin') navigate('/admin/login');
    else if (role === 'owner') navigate('/owner/login');
    else navigate('/hostel/venkateswara-boys-hostel/login');
  };

  const navItems = role === 'admin' ? [
    { name: 'Global Dash', path: '/admin', icon: LayoutDashboard },
  ] : [
    { name: 'Dashboard', path: '/owner', icon: LayoutDashboard },
    { name: 'Rooms', path: '/owner/rooms', icon: DoorOpen },
    { name: 'Students', path: '/owner/students', icon: Users },
    { name: 'Attendance', path: '/owner/attendance', icon: CalendarCheck },
    { name: 'Fees', path: '/owner/fees', icon: CreditCard },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      <aside className={`w-64 fixed inset-y-0 left-0 bg-surface/95 md:bg-surface/80 backdrop-blur-xl border-r border-white/10 flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold truncate bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {role === 'admin' ? 'System Admin' : 'Hostel Owner'}
            </span>
          </div>
          <button 
            className="md:hidden text-muted hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/owner' || item.path === '/admin'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(20,184,166,0.15)]'
                    : 'text-muted hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
