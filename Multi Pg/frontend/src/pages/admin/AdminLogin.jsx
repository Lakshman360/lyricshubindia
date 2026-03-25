import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, ShieldAlert, Cpu } from 'lucide-react';

const AdminLogin = () => {
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
      // Mock Admin Login
      if (email === 'admin@multi-pg.com' && password === 'admin123') {
          localStorage.setItem('token', 'admin-token');
          localStorage.setItem('user', JSON.stringify({ name: 'System Administrator', role: 'admin' }));
          navigate('/admin');
      } else {
          setError('Invalid system admin credentials (Try admin@multi-pg.com : admin123)');
      }
    } catch (err) {
      setError('System login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-text flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Matrix/Grid effect */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent/5 to-transparent"></div>

      <div className="bg-slate-900 border border-white/5 p-12 w-full max-w-md relative z-10 rounded-3xl shadow-[0_0_100px_rgba(20,184,166,0.1)]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20 mb-6 shadow-2xl shadow-accent/20 animate-pulse">
            <ShieldAlert className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-4xl font-bold tracking-tighter">System <span className="text-accent underline decoration-4 underline-offset-8">Admin</span></h2>
          <p className="text-muted mt-5 font-mono text-sm">Platform Management Systems [v1.0.4]</p>
        </div>

        {error && (
          <div className="bg-red-500/5 border border-red-500/20 text-red-400 p-4 rounded-xl mb-8 text-xs font-mono uppercase tracking-widest text-center">
            [Error] {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] ml-1">Secure Identity</label>
            <div className="relative">
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-white placeholder-white/10 font-mono"
                placeholder="admin@multi-pg.com"
                required
                />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] ml-1">Access Protocol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-white placeholder-white/10 font-mono"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-white hover:text-black text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-accent/10 active:scale-95 group"
          >
            {loading ? 'Decrypting Access...' : (
              <>Execute Login <Cpu className="h-5 w-5 group-hover:rotate-90 transition-transform" /></>
            )}
          </button>
        </form>

        <div className="mt-12 text-center opacity-40">
            <p className="text-[10px] font-mono">AUTHORIZED PERSONNEL ONLY. SYSTEM MONITORING IN EFFECT.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
