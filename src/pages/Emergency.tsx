import React from 'react';
import { Phone, AlertTriangle, Navigation, HeartPulse, ShieldAlert } from 'lucide-react';

export const Emergency: React.FC = () => {
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

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ backgroundColor: 'var(--danger)', borderColor: 'var(--danger)', color: 'white', textAlign: 'center', padding: '3rem 2rem' }}>
            <Phone size={48} style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white' }}>Call Ambulance</h2>
            <p style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1.5rem 0' }}>911</p>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--danger)', width: '100%', fontSize: '1.25rem', padding: '1rem' }}>
              Call Now
            </button>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
            <button className="card btn" style={{ display: 'flex', flexDirection: 'column', padding: '2rem 1rem', height: 'auto', backgroundColor: 'var(--card-bg)', color: 'var(--text-main)', borderColor: 'var(--border)' }}>
              <Phone size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Emergency Contact</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Wife: +1 234-567-8900</span>
            </button>
            <button className="card btn" style={{ display: 'flex', flexDirection: 'column', padding: '2rem 1rem', height: 'auto', backgroundColor: 'var(--card-bg)', color: 'var(--text-main)', borderColor: 'var(--border)' }}>
              <Navigation size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Nearby Hospitals</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Open Maps</span>
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
