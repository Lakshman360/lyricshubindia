import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Building2, User } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('student'); // 'student', 'owner', 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (role === 'admin') {
        if (email === 'admin@multi-pg.com' && password === 'admin123') {
          localStorage.setItem('token', 'admin-token');
          localStorage.setItem('user', JSON.stringify({ name: 'System Administrator', role: 'admin' }));
          navigate('/admin');
        } else {
          setError('Invalid admin credentials');
        }
      } else if (role === 'owner') {
        if (email === 'owner@hostel.com' && password === 'owner123') {
          localStorage.setItem('token', 'owner-token');
          localStorage.setItem('user', JSON.stringify({ name: 'Venkateswara Boys Hostel Owner', role: 'owner' }));
          navigate('/owner');
        } else {
          setError('Invalid owner credentials');
        }
      } else {
        // Mock Student Login
        if (email === 'student@hostel.com' && password === 'student123') {
            localStorage.setItem('token', 'student-token');
            localStorage.setItem('user', JSON.stringify({ 
              name: 'Rohit Kumar', 
              role: 'student', 
              uniqueQrId: 'STU-45922',
              roomNumber: '204',
              floorNumber: 2
            }));
            navigate('/hostel/venkateswara-boys-hostel/dashboard');
        } else {
            setError('Invalid student credentials');
        }
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const roles = [
    { id: 'student', label: 'Student', icon: User },
    { id: 'owner', label: 'Hostel Owner', icon: Building2 },
    { id: 'admin', label: 'System Admin', icon: LogIn }
  ];

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4">
      <div className="glass-panel p-10 w-full max-w-md relative overflow-hidden border-white/20 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black italic">Platform <span className="text-primary">Login</span></h2>
            <p className="text-muted mt-2 font-medium">Select your role to continue</p>
          </div>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-2 mb-8 p-1 bg-white/5 rounded-xl border border-white/10">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  setRole(r.id);
                  setError('');
                }}
                className={`flex flex-col items-center gap-1.5 py-3 rounded-lg transition-all ${
                  role === r.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                <r.icon className="h-5 w-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{r.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-8 text-sm font-bold flex items-center gap-2">
               <div className="h-1 w-1 rounded-full bg-red-500"></div>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted ml-1">{role.charAt(0).toUpperCase() + role.slice(1)} Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
                  placeholder={`Enter your ${role} email`}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted ml-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-accent text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(20, 184, 166, 0.4)] hover:-translate-y-0.5 disabled:opacity-50 mt-4 active:scale-95"
            >
              {loading ? 'Authenticating...' : (
                <>Sign In <LogIn className="h-4 w-4" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
