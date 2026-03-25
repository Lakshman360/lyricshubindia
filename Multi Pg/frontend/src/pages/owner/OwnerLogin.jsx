import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, ShieldCheck, Briefcase } from 'lucide-react';

const OwnerLogin = () => {
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
      // Mock Owner Login
      if (email === 'owner@hostel.com' && password === 'owner123') {
          localStorage.setItem('token', 'owner-token');
          localStorage.setItem('user', JSON.stringify({ name: 'Venkateswara Boys Hostel Owner', role: 'owner' }));
          navigate('/owner');
      } else {
          setError('Invalid owner credentials (Try owner@hostel.com : owner123)');
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="glass-panel p-10 w-full max-w-md relative z-10 border-white/20 shadow-2xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-6 shadow-xl shadow-primary/10">
            <Briefcase className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl font-black italic tracking-tight">Owner <span className="text-primary">Portal</span></h2>
          <p className="text-muted mt-3 font-medium">Manage Venkateswara Boys Hostel</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-2xl mb-8 text-sm font-bold flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-muted uppercase tracking-widest ml-1">Owner Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20 font-medium"
              placeholder="owner@hostel.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-muted uppercase tracking-widest ml-1">Master Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-white/20 font-medium"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-accent text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 disabled:opacity-50 mt-4 active:scale-95"
          >
            {loading ? 'Verifying Access...' : (
              <>Access Dashboard <LogIn className="h-5 w-5" /></>
            )}
          </button>
        </form>

        <div className="mt-10 text-center">
            <button onClick={() => navigate('/')} className="text-sm text-muted hover:text-white transition-colors font-medium">
                ← Back to Main Portal
            </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerLogin;
