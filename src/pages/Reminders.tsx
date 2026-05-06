import React, { useState } from 'react';
import { Pill, CalendarClock, Plus, CheckCircle2, Clock } from 'lucide-react';

export const Reminders: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'medicine' | 'checkups'>('medicine');

  return (
    <div>
      <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Reminders</h1>
          <p>Never miss a dose or an important checkup.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} /> Add Reminder
        </button>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button 
          onClick={() => setActiveTab('medicine')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            borderRadius: 'var(--radius)', 
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: activeTab === 'medicine' ? 'var(--primary)' : 'var(--card-bg)',
            color: activeTab === 'medicine' ? 'white' : 'var(--text-main)',
            border: `1px solid ${activeTab === 'medicine' ? 'var(--primary)' : 'var(--border)'}`,
          }}
        >
          <Pill size={20} /> Medicine Reminders
        </button>
        <button 
          onClick={() => setActiveTab('checkups')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            borderRadius: 'var(--radius)', 
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: activeTab === 'checkups' ? 'var(--primary)' : 'var(--card-bg)',
            color: activeTab === 'checkups' ? 'white' : 'var(--text-main)',
            border: `1px solid ${activeTab === 'checkups' ? 'var(--primary)' : 'var(--border)'}`,
          }}
        >
          <CalendarClock size={20} /> Checkups & Follow-ups
        </button>
      </div>

      <div className="card">
        {activeTab === 'medicine' ? (
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Today's Schedule</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ backgroundColor: 'var(--success-light)', color: 'var(--success)', padding: '0.75rem', borderRadius: '50%' }}>
                    <Pill size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.125rem' }}>Amlodipine 5mg</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>1 Tablet • Morning (After Breakfast)</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><Clock size={16} /> 08:30 AM</span>
                  <span className="badge badge-success"><CheckCircle2 size={16} style={{ marginRight: '0.25rem' }}/> Taken</span>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--primary-light)', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '0.75rem', borderRadius: '50%' }}>
                    <Pill size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--primary-dark)' }}>Metformin 500mg</h4>
                    <p style={{ margin: 0, color: 'var(--text-main)' }}>1 Tablet • Night (After Dinner)</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)' }}><Clock size={16} /> 08:00 PM</span>
                  <button className="btn btn-primary">Mark as Taken</button>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Upcoming Appointments</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ backgroundColor: 'var(--warning-light)', color: '#b45309', padding: '0.75rem', borderRadius: '50%' }}>
                    <CalendarClock size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.125rem' }}>Dr. Smith - Follow-up</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>Cardiologist • City Hospital</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>Oct 24, 2026</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>10:30 AM</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '50%' }}>
                    <CalendarClock size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.125rem' }}>Repeat HbA1c Blood Test</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>Pathology Lab</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>Nov 15, 2026</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Fasting required</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
