import React, { useState } from 'react';
import { UploadCloud, AlertCircle, AlertTriangle, CheckCircle2, Info as InfoIcon, Plus, FileText as FileIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { HealthRecord } from '../context/AppContext';

export const Records: React.FC = () => {
  const { records, setRecords } = useAppContext();
  
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(['Blood_Report_May2026.pdf']);
  const [isUploading, setIsUploading] = useState(false);
  
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [newEntry, setNewEntry] = useState({ parameter: '', value: '', status: 'Normal' as 'Normal' | 'High' | 'Low' });

  const handleUploadClick = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadedFiles([...uploadedFiles, `Report_${Date.now().toString().slice(-4)}.pdf`]);
    }, 1500);
  };

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    const record: HealthRecord = {
      id: Date.now().toString(),
      parameter: newEntry.parameter,
      value: newEntry.value,
      status: newEntry.status,
      date: new Date().toISOString().split('T')[0]
    };
    setRecords([...records, record]);
    setNewEntry({ parameter: '', value: '', status: 'Normal' });
    setShowEntryForm(false);
  };

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Medical Records</h1>
        <p>Store files and manually track important health parameters to see trends over time.</p>
      </header>

      <div className="grid grid-cols-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
        {/* Upload Section */}
        <div className="card">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Upload Reports</h3>
          
          <div 
            onClick={handleUploadClick}
            style={{ 
              border: '2px dashed var(--border)', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '2rem 1rem',
              textAlign: 'center',
              cursor: 'pointer',
              borderRadius: 'var(--radius)',
              marginBottom: '1rem',
              backgroundColor: isUploading ? 'var(--primary-light)' : 'transparent'
            }}
          >
            {isUploading ? (
              <p style={{ color: 'var(--primary-dark)', fontWeight: 500 }}>Uploading...</p>
            ) : (
              <>
                <UploadCloud size={32} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                <p style={{ color: 'var(--text-muted)' }}>Click to upload PDF, JPG, PNG</p>
              </>
            )}
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Stored Files</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {uploadedFiles.map((file, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius)', fontSize: '0.875rem' }}>
                  <FileIcon size={16} color="var(--text-muted)" /> {file}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Manual Entry Form */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Track Parameters</h3>
            {!showEntryForm && (
              <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => setShowEntryForm(true)}>
                <Plus size={16} /> Add Entry
              </button>
            )}
          </div>

          {showEntryForm ? (
            <form onSubmit={handleAddEntry} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="label">Parameter Name</label>
                <input type="text" className="input-field" placeholder="e.g., HbA1c, BP" value={newEntry.parameter} onChange={e => setNewEntry({...newEntry, parameter: e.target.value})} required />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label className="label">Value</label>
                  <input type="text" className="input-field" placeholder="e.g., 7.8" value={newEntry.value} onChange={e => setNewEntry({...newEntry, value: e.target.value})} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="label">Status</label>
                  <select className="input-field" value={newEntry.status} onChange={e => setNewEntry({...newEntry, status: e.target.value as any})} required>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowEntryForm(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Entry</button>
              </div>
            </form>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>Enter values from your reports here to track them on your dashboard.</p>
          )}
        </div>
      </div>

      {/* Detailed Findings Table */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Tracked Records</h3>
        {records.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No parameters tracked yet.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '1rem 0', fontWeight: 500 }}>Date</th>
                  <th style={{ padding: '1rem 0', fontWeight: 500 }}>Test Parameter</th>
                  <th style={{ padding: '1rem 0', fontWeight: 500 }}>Result</th>
                  <th style={{ padding: '1rem 0', fontWeight: 500 }}>Status</th>
                  <th style={{ padding: '1rem 0', fontWeight: 500 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {records.map(record => (
                  <tr key={record.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>{record.date}</td>
                    <td style={{ padding: '1rem 0', fontWeight: 500 }}>{record.parameter}</td>
                    <td style={{ padding: '1rem 0', fontWeight: record.status !== 'Normal' ? 700 : 400 }}>{record.value}</td>
                    <td style={{ padding: '1rem 0' }}>
                      {record.status === 'Normal' && <span className="badge badge-success" style={{ display: 'inline-flex', gap: '0.25rem', alignItems: 'center' }}><CheckCircle2 size={14} /> Normal</span>}
                      {record.status === 'High' && <span className="badge badge-danger" style={{ display: 'inline-flex', gap: '0.25rem', alignItems: 'center' }}><AlertCircle size={14} /> High</span>}
                      {record.status === 'Low' && <span className="badge badge-warning" style={{ display: 'inline-flex', gap: '0.25rem', alignItems: 'center' }}><AlertTriangle size={14} /> Low</span>}
                    </td>
                    <td style={{ padding: '1rem 0' }}>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }} onClick={() => setRecords(records.filter(r => r.id !== record.id))}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
          <InfoIcon size={20} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            <strong>Disclaimer:</strong> CareAI provides organization tools to track your health data. It does not diagnose diseases or replace medical advice. Always consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </div>
  );
};
