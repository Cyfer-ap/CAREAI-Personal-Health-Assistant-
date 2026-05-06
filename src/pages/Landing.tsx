import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, Clock, Stethoscope, ArrowRight } from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="brand" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 700 }}>
          <HeartPulse size={32} weight="fill" /> CareAI
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/login" className="btn btn-outline" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>Log In</Link>
          <Link to="/register" className="btn btn-primary" style={{ textDecoration: 'none' }}>Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2, background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Your Personal Health Assistant
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}>
          Organize medical records, track health trends, manage reminders, and find the right specialists—all in one secure place.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', textDecoration: 'none' }}>
            Get Started <ArrowRight size={20} />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3" style={{ marginTop: '6rem', maxWidth: '1000px', gap: '2rem', textAlign: 'left' }}>
          <div className="card" style={{ backgroundColor: 'var(--card-bg)' }}>
            <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Secure Records</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Upload and organize your medical reports securely. Track key health parameters over time.</p>
          </div>
          <div className="card" style={{ backgroundColor: 'var(--card-bg)' }}>
            <Clock size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Smart Reminders</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Never miss a dose or an appointment. Set customizable medicine and checkup schedules.</p>
          </div>
          <div className="card" style={{ backgroundColor: 'var(--card-bg)' }}>
            <Stethoscope size={32} color="var(--warning)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Find Specialists</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Describe your symptoms and let CareAI guide you to the right type of medical specialist.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}>
        <p style={{ margin: 0 }}>© 2026 CareAI MVP. Built for demonstration purposes.</p>
      </footer>
    </div>
  );
};
