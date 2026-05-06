import React from 'react';
import { User, Activity, Bell, Droplet, Thermometer, ArrowUp, ArrowDown } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Welcome back, John</h1>
        <p>Here is your health overview for today.</p>
      </header>

      <div className="grid grid-cols-3">
        {/* Patient Profile Snippet */}
        <div className="card" style={{ gridColumn: 'span 1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <User size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Patient Profile</h2>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Age / Gender</span>
              <span style={{ fontWeight: 500 }}>42 / Male</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Blood Group</span>
              <span style={{ fontWeight: 500, color: 'var(--danger)' }}>O+</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Allergies</span>
              <span style={{ fontWeight: 500 }}>Penicillin</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Existing Conditions</span>
              <span style={{ fontWeight: 500 }}>Mild Hypertension</span>
            </li>
          </ul>
          <button className="btn btn-outline" style={{ width: '100%', marginTop: '1.5rem' }}>Edit Profile</button>
        </div>

        {/* Health Trends */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Activity size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Recent Health Trends</h2>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ flex: 1, padding: '1rem', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)', fontWeight: 500 }}>
                  <Droplet size={18} /> HbA1c
                </span>
                <span className="badge badge-warning" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ArrowUp size={14}/> 7.8</span>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>7.8 %</p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Previous: 6.8% (Increased)</p>
            </div>

            <div style={{ flex: 1, padding: '1rem', backgroundColor: 'var(--danger-light)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b91c1c', fontWeight: 500 }}>
                  <Activity size={18} /> Blood Pressure
                </span>
                <span className="badge badge-danger" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ArrowUp size={14}/> High</span>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>150/95</p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Previous: 130/85 (Increased)</p>
            </div>

            <div style={{ flex: 1, padding: '1rem', backgroundColor: 'var(--success-light)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857', fontWeight: 500 }}>
                  <Thermometer size={18} /> Weight
                </span>
                <span className="badge badge-success" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ArrowDown size={14}/> Good</span>
              </div>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>75 kg</p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Previous: 78 kg (Decreased)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginTop: '1.5rem' }}>
        {/* Reminders Widget */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Bell size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Today's Medicines</h2>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)' }}>Amlodipine 5mg</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>1 Tablet • After Breakfast</p>
              </div>
              <span className="badge badge-success">Taken</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--primary-light)', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius)' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--primary-dark)' }}>Metformin 500mg</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>1 Tablet • After Dinner</p>
              </div>
              <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Mark Taken</button>
            </li>
          </ul>
        </div>
        
        {/* Next Checkup Widget */}
        <div className="card" style={{ backgroundColor: 'var(--text-main)', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Bell size={24} color="var(--primary-light)" />
            <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>Upcoming Checkup</h2>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>Dr. Smith (Cardiologist)</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Follow-up for Blood Pressure</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', flex: 1 }}>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Date</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.125rem' }}>Oct 24, 2026</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', flex: 1 }}>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Time</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.125rem' }}>10:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
