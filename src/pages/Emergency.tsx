import React from 'react';
import { Phone, AlertTriangle, Navigation, HeartPulse, ShieldAlert, AlertCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Emergency: React.FC = () => {
  const { profile } = useAppContext();

  return (
    <div>
      <header className="page-header" style={{ borderBottom: '2px solid var(--danger-light)', paddingBottom: '1rem' }}>
        <h1 className="page-title" style={{ color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertTriangle size={32} weight="fill" /> Emergency Mode
        </h1>
        <p style={{ color: 'var(--danger)', fontWeight: 500, fontSize: '1.125rem' }}>
          If you are experiencing a medical emergency, seek immediate help.
        </p>
      </header>
      
      {/* Disclaimer */}
      <div style={{ backgroundColor: 'var(--danger-light)', color: '#7f1d1d', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
        <AlertCircle size={20} />
        This page is for emergency support only. It does not provide medical diagnosis.
      </div>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ backgroundColor: 'var(--danger)', borderColor: 'var(--danger)', color: 'white', textAlign: 'center', padding: '2rem' }}>
            <Phone size={40} style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Call Ambulance</h2>
            <p style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem 0' }}>108</p>
            <a href="tel:108" className="btn" style={{ backgroundColor: 'white', color: 'var(--danger)', width: '100%', fontSize: '1.125rem', padding: '0.75rem' }}>
              Call 108
            </a>
          </div>

          <div className="card" style={{ backgroundColor: 'var(--warning)', borderColor: 'var(--warning)', color: 'white', textAlign: 'center', padding: '2rem' }}>
            <Phone size={32} style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>National Emergency Response</h2>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 1rem 0' }}>112</p>
            <a href="tel:112" className="btn" style={{ backgroundColor: 'white', color: '#b45309', width: '100%', fontSize: '1.125rem', padding: '0.75rem' }}>
              Call 112
            </a>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
            <a href={`tel:${profile.emergencyContact}`} className="card btn" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 1rem', height: 'auto', backgroundColor: 'var(--card-bg)', color: 'var(--text-main)', borderColor: 'var(--border)' }}>
              <Phone size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Emergency Contact</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{profile.emergencyContact || 'Not set'}</span>
            </a>
            <button className="card btn" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 1rem', height: 'auto', backgroundColor: 'var(--card-bg)', color: 'var(--text-main)', borderColor: 'var(--border)' }}>
              <Navigation size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Nearby Hospitals</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{profile.preferredHospital || 'Open Maps'}</span>
            </button>
          </div>
        </div>

        {/* Warning & Symptoms */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ backgroundColor: 'var(--danger-light)', borderColor: '#fca5a5', borderLeft: '4px solid var(--danger)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <ShieldAlert size={24} color="var(--danger)" style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{ color: '#991b1b', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Critical Warning</h3>
                <p style={{ color: '#7f1d1d', margin: 0, fontSize: '1.125rem', lineHeight: 1.5 }}>
                  "If you have severe chest pain, breathing difficulty, unconsciousness, stroke symptoms, heavy bleeding, or seizure, seek emergency medical help immediately."
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--text-main)' }}>
              <HeartPulse size={24} color="var(--danger)" /> Emergency Symptoms
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1rem', listStyleType: 'disc', color: 'var(--text-main)', fontSize: '1.125rem' }}>
              <li>Severe or crushing chest pain</li>
              <li>Sudden difficulty breathing</li>
              <li>Sudden weakness, numbness, or inability to speak</li>
              <li>Uncontrolled or heavy bleeding</li>
              <li>Loss of consciousness or seizures</li>
              <li>Severe allergic reactions (swelling of face/throat)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
