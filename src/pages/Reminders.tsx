import React, { useState } from 'react';
import { Pill, CalendarClock, Plus, CheckCircle2, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { Medicine, Checkup } from '../context/AppContext';

export const Reminders: React.FC = () => {
  const { medicines, setMedicines, checkups, setCheckups } = useAppContext();
  const [activeTab, setActiveTab] = useState<'medicine' | 'checkups'>('medicine');
  
  const [showMedForm, setShowMedForm] = useState(false);
  const [showCheckupForm, setShowCheckupForm] = useState(false);

  const [newMed, setNewMed] = useState({ name: '', dose: '', time: '' });
  const [newCheckup, setNewCheckup] = useState({ title: '', location: '', date: '', time: '' });

  const handleAddMed = (e: React.FormEvent) => {
    e.preventDefault();
    const med: Medicine = { id: Date.now().toString(), name: newMed.name, dose: newMed.dose, time: newMed.time, isTaken: false };
    setMedicines([...medicines, med]);
    setNewMed({ name: '', dose: '', time: '' });
    setShowMedForm(false);
  };

  const handleAddCheckup = (e: React.FormEvent) => {
    e.preventDefault();
    const checkup: Checkup = { id: Date.now().toString(), title: newCheckup.title, location: newCheckup.location, date: newCheckup.date, time: newCheckup.time, isCompleted: false };
    setCheckups([...checkups, checkup]);
    setNewCheckup({ title: '', location: '', date: '', time: '' });
    setShowCheckupForm(false);
  };

  const toggleMed = (id: string) => {
    setMedicines(medicines.map(m => m.id === id ? { ...m, isTaken: !m.isTaken } : m));
  };

  const toggleCheckup = (id: string) => {
    setCheckups(checkups.map(c => c.id === id ? { ...c, isCompleted: !c.isCompleted } : c));
  };

  return (
    <div>
      <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Reminders</h1>
          <p>Never miss a dose or an important checkup.</p>
        </div>
        <button className="btn btn-primary" onClick={() => activeTab === 'medicine' ? setShowMedForm(true) : setShowCheckupForm(true)}>
          <Plus size={20} /> Add {activeTab === 'medicine' ? 'Medicine' : 'Checkup'}
        </button>
      </header>

      {/* Forms */}
      {showMedForm && (
        <div className="card" style={{ marginBottom: '2rem', border: '1px solid var(--primary)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Add New Medicine</h3>
          <form onSubmit={handleAddMed} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
            <div style={{ flex: 2 }}>
              <label className="label">Medicine Name</label>
              <input type="text" className="input-field" placeholder="e.g., Amlodipine" value={newMed.name} onChange={e => setNewMed({...newMed, name: e.target.value})} required />
            </div>
            <div style={{ flex: 1 }}>
              <label className="label">Dose</label>
              <input type="text" className="input-field" placeholder="e.g., 5mg" value={newMed.dose} onChange={e => setNewMed({...newMed, dose: e.target.value})} required />
            </div>
            <div style={{ flex: 1 }}>
              <label className="label">Time</label>
              <input type="time" className="input-field" value={newMed.time} onChange={e => setNewMed({...newMed, time: e.target.value})} required />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-outline" onClick={() => setShowMedForm(false)}>Cancel</button>
          </form>
        </div>
      )}

      {showCheckupForm && (
        <div className="card" style={{ marginBottom: '2rem', border: '1px solid var(--warning)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Add New Checkup</h3>
          <form onSubmit={handleAddCheckup} className="grid grid-cols-2">
            <div>
              <label className="label">Title</label>
              <input type="text" className="input-field" placeholder="e.g., Blood Test" value={newCheckup.title} onChange={e => setNewCheckup({...newCheckup, title: e.target.value})} required />
            </div>
            <div>
              <label className="label">Location/Doctor</label>
              <input type="text" className="input-field" placeholder="e.g., City Hospital" value={newCheckup.location} onChange={e => setNewCheckup({...newCheckup, location: e.target.value})} required />
            </div>
            <div>
              <label className="label">Date</label>
              <input type="date" className="input-field" value={newCheckup.date} onChange={e => setNewCheckup({...newCheckup, date: e.target.value})} required />
            </div>
            <div>
              <label className="label">Time</label>
              <input type="time" className="input-field" value={newCheckup.time} onChange={e => setNewCheckup({...newCheckup, time: e.target.value})} required />
            </div>
            <div style={{ gridColumn: 'span 2', display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Checkup</button>
              <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowCheckupForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

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
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Your Medicines</h3>
            {medicines.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No medicines added yet.</p> : (
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {medicines.map(med => (
                  <li key={med.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: `1px solid ${med.isTaken ? 'var(--border)' : 'var(--primary-light)'}`, backgroundColor: med.isTaken ? 'transparent' : 'var(--primary-light)', borderRadius: 'var(--radius)' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ backgroundColor: med.isTaken ? 'var(--success-light)' : 'white', color: med.isTaken ? 'var(--success)' : 'var(--primary)', padding: '0.75rem', borderRadius: '50%' }}>
                        <Pill size={24} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.125rem', color: med.isTaken ? 'var(--text-main)' : 'var(--primary-dark)' }}>{med.name} {med.dose}</h4>
                        <p style={{ margin: 0, color: 'var(--text-main)' }}>Scheduled: {med.time}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      {med.isTaken ? (
                        <>
                          <span className="badge badge-success"><CheckCircle2 size={16} style={{ marginRight: '0.25rem' }}/> Taken</span>
                          <button className="btn btn-outline" style={{ padding: '0.5rem', fontSize: '0.875rem' }} onClick={() => toggleMed(med.id)}>Undo</button>
                        </>
                      ) : (
                        <button className="btn btn-primary" onClick={() => toggleMed(med.id)}>Mark as Taken</button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Your Checkups</h3>
            {checkups.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No checkups scheduled.</p> : (
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {checkups.map(checkup => (
                  <li key={checkup.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', opacity: checkup.isCompleted ? 0.6 : 1 }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ backgroundColor: checkup.isCompleted ? 'var(--success-light)' : 'var(--warning-light)', color: checkup.isCompleted ? 'var(--success)' : '#b45309', padding: '0.75rem', borderRadius: '50%' }}>
                        <CalendarClock size={24} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.125rem', textDecoration: checkup.isCompleted ? 'line-through' : 'none' }}>{checkup.title}</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>{checkup.location}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: 0, fontWeight: 600 }}>{checkup.date}</p>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>{checkup.time}</p>
                      </div>
                      {checkup.isCompleted ? (
                        <button className="btn btn-outline" style={{ padding: '0.5rem', fontSize: '0.875rem' }} onClick={() => toggleCheckup(checkup.id)}>Undo</button>
                      ) : (
                        <button className="btn btn-primary" onClick={() => toggleCheckup(checkup.id)}>Mark Done</button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
