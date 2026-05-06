import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, profile } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login by keeping the current profile name or a default
    login(profile.name || 'User');
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
            <HeartPulse size={32} weight="fill" /> CareAI
          </Link>
          <h2 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Enter your details to log in.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label className="label">Email Address</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Log In
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            Don't have an account? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: 500 }}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
