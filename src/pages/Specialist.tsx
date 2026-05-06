import React, { useState } from 'react';
import { Search, Stethoscope, CalendarPlus, MapPin, Star } from 'lucide-react';

export const Specialist: React.FC = () => {
  const [symptom, setSymptom] = useState('');
  const [suggestedDoctor, setSuggestedDoctor] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const s = symptom.toLowerCase();
    
    // Simple mock logic
    if (s.includes('chest') || s.includes('heart')) setSuggestedDoctor('Cardiologist');
    else if (s.includes('urine') || s.includes('kidney')) setSuggestedDoctor('Urologist');
    else if (s.includes('sugar') || s.includes('diabetes')) setSuggestedDoctor('Diabetologist');
    else if (s.includes('skin') || s.includes('rash')) setSuggestedDoctor('Dermatologist');
    else if (s.includes('joint') || s.includes('bone')) setSuggestedDoctor('Orthopedic Doctor');
    else if (s.includes('anxiety') || s.includes('sleep') || s.includes('mind')) setSuggestedDoctor('Psychiatrist');
    else if (s.includes('eye') || s.includes('vision')) setSuggestedDoctor('Ophthalmologist');
    else if (s.includes('stomach') || s.includes('digestion')) setSuggestedDoctor('Gastroenterologist');
    else setSuggestedDoctor('General Physician');
    
    setShowBooking(false);
  };

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Consult & Care</h1>
        <p>Describe your problem, and CareAI will suggest the right specialist.</p>
      </header>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="input-field" 
              placeholder="E.g., chest pain, skin rash, high sugar..." 
              style={{ paddingLeft: '3rem' }}
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Suggest Specialist</button>
        </form>
      </div>

      {suggestedDoctor && !showBooking && (
        <div className="card" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--primary-light)', textAlign: 'center', padding: '3rem 2rem' }}>
          <Stethoscope size={48} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>CareAI Suggests</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Based on "{symptom}", you should consult a <strong>{suggestedDoctor}</strong>.
          </p>
          <button className="btn btn-primary" onClick={() => setShowBooking(true)}>
            <CalendarPlus size={20} /> View Available {suggestedDoctor}s
          </button>
        </div>
      )}

      {showBooking && (
        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Available {suggestedDoctor}s near you</h3>
          <div className="grid grid-cols-2">
            {[1, 2].map((doc) => (
              <div key={doc} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stethoscope size={32} color="var(--text-muted)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', margin: '0 0 0.25rem 0' }}>Dr. {doc === 1 ? 'Sarah Jenkins' : 'Michael Chang'}</h4>
                    <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 500 }}>{suggestedDoctor}</p>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Star size={14} weight="fill" color="var(--warning)" /> 4.{8 + doc} (120+ reviews)
                    </p>
                  </div>
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} color="var(--text-muted)" /> City Health Clinic ({doc + 1} miles away)
                  </p>
                </div>
                <button className="btn btn-outline" style={{ width: '100%', marginTop: 'auto', color: 'var(--primary)', borderColor: 'var(--primary)' }}>
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
