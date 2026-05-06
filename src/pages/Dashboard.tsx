import React, { useState } from 'react';
import { User, Activity, Bell, Droplet, Thermometer, ArrowUp, ArrowDown, CheckCircle2, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Dashboard: React.FC = () => {
  const { profile, setProfile, medicines, setMedicines, checkups, records } = useAppContext();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState(profile);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(editForm);
    setIsEditingProfile(false);
  };

  const handleMedicineTaken = (id: string) => {
    setMedicines(prev => prev.map(m => m.id === id ? { ...m, isTaken: true } : m));
  };

  const todaysMedicines = medicines;
  const upcomingCheckups = checkups.filter(c => !c.isCompleted);
  
  // Get latest 3 records for trends
  const latestRecords = [...records].reverse().slice(0, 3);

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Welcome back, {profile.name.split(' ')[0]}</h1>
        <p>Here is your health overview for today.</p>
      </header>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="card" style={{ width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Edit Patient Profile</h2>
            <form onSubmit={handleProfileSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="label">Full Name</label>
                <input type="text" className="input-field" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} required />
              </div>
              <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <div>
                  <label className="label">Age</label>
                  <input type="text" className="input-field" value={editForm.age} onChange={e => setEditForm({...editForm, age: e.target.value})} required />
                </div>
                <div>
                  <label className="label">Gender</label>
                  <input type="text" className="input-field" value={editForm.gender} onChange={e => setEditForm({...editForm, gender: e.target.value})} required />
                </div>
              </div>
              <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <div>
                  <label className="label">Blood Group</label>
                  <input type="text" className="input-field" value={editForm.bloodGroup} onChange={e => setEditForm({...editForm, bloodGroup: e.target.value})} />
                </div>
                <div>
                  <label className="label">Emergency Contact</label>
                  <input type="text" className="input-field" value={editForm.emergencyContact} onChange={e => setEditForm({...editForm, emergencyContact: e.target.value})} required />
                </div>
              </div>
              <div>
                <label className="label">Allergies</label>
                <input type="text" className="input-field" value={editForm.allergies} onChange={e => setEditForm({...editForm, allergies: e.target.value})} />
              </div>
              <div>
                <label className="label">Existing Diseases</label>
                <input type="text" className="input-field" value={editForm.existingDiseases} onChange={e => setEditForm({...editForm, existingDiseases: e.target.value})} />
              </div>
              <div>
                <label className="label">Preferred Hospital/Doctor</label>
                <input type="text" className="input-field" value={editForm.preferredHospital} onChange={e => setEditForm({...editForm, preferredHospital: e.target.value})} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setIsEditingProfile(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Profile</button>
              </div>
            </form>
          </div>
        </div>
      )}

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
              <span style={{ fontWeight: 500 }}>{profile.age} / {profile.gender}</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Blood Group</span>
              <span style={{ fontWeight: 500, color: 'var(--danger)' }}>{profile.bloodGroup}</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Allergies</span>
              <span style={{ fontWeight: 500 }}>{profile.allergies || 'None'}</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Existing Conditions</span>
              <span style={{ fontWeight: 500 }}>{profile.existingDiseases || 'None'}</span>
            </li>
          </ul>
          <button className="btn btn-outline" style={{ width: '100%', marginTop: '1.5rem' }} onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
        </div>

        {/* Health Trends */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Activity size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Recent Health Trends</h2>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {latestRecords.length === 0 ? (
              <p style={{ color: 'var(--text-muted)' }}>No health records added yet. Add records in the Medical Records tab.</p>
            ) : (
              latestRecords.map((record) => (
                <div key={record.id} style={{ flex: 1, padding: '1rem', backgroundColor: record.status === 'High' || record.status === 'Low' ? (record.status === 'High' ? 'var(--danger-light)' : 'var(--warning-light)') : 'var(--success-light)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>
                      <Activity size={18} /> {record.parameter}
                    </span>
                    <span className={`badge ${record.status === 'Normal' ? 'badge-success' : (record.status === 'High' ? 'badge-danger' : 'badge-warning')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      {record.status === 'Normal' ? <CheckCircle2 size={14}/> : (record.status === 'High' ? <ArrowUp size={14}/> : <ArrowDown size={14}/>)} {record.status}
                    </span>
                  </div>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>{record.value}</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Date: {record.date}</p>
                </div>
              ))
            )}
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
            {todaysMedicines.length === 0 && <p style={{ color: 'var(--text-muted)' }}>No medicines scheduled.</p>}
            {todaysMedicines.map(med => (
              <li key={med.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: `1px solid ${med.isTaken ? 'var(--border)' : 'var(--primary-light)'}`, backgroundColor: med.isTaken ? 'transparent' : 'var(--primary-light)', borderRadius: 'var(--radius)' }}>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: med.isTaken ? 'var(--text-main)' : 'var(--primary-dark)' }}>{med.name} {med.dose}</p>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>{med.time}</p>
                </div>
                {med.isTaken ? (
                  <span className="badge badge-success">Taken</span>
                ) : (
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => handleMedicineTaken(med.id)}>Mark Taken</button>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Next Checkup Widget */}
        <div className="card" style={{ backgroundColor: 'var(--text-main)', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Bell size={24} color="var(--primary-light)" />
            <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>Upcoming Checkup</h2>
          </div>
          <div style={{ marginTop: '2rem' }}>
            {upcomingCheckups.length > 0 ? (
              <>
                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>{upcomingCheckups[0].title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Location: {upcomingCheckups[0].location}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Date</p>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '1.125rem' }}>{upcomingCheckups[0].date}</p>
                  </div>
                  <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Time</p>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '1.125rem' }}>{upcomingCheckups[0].time}</p>
                  </div>
                </div>
              </>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>No upcoming checkups scheduled.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
