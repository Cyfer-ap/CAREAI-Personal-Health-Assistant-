import React, { useState } from 'react';
// Lucide icons:
import { UploadCloud, FileText as FileIcon, AlertCircle, AlertTriangle, CheckCircle2, Info as InfoIcon, Sparkles } from 'lucide-react';

export const Records: React.FC = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUpload = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsUploaded(true);
    }, 1500);
  };

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Medical Records</h1>
        <p>Upload your health reports to get a simple, AI-powered explanation.</p>
      </header>

      {!isUploaded && !isAnalyzing && (
        <div 
          className="card" 
          style={{ 
            border: '2px dashed var(--border)', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '4rem 2rem',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={handleUpload}
        >
          <UploadCloud size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Upload Blood Report or Prescription</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Drag and drop files here, or click to browse. PDF, JPG, PNG supported.</p>
          <button className="btn btn-primary">Browse Files</button>
        </div>
      )}

      {isAnalyzing && (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
          <Sparkles size={48} color="var(--primary)" className="animate-pulse" style={{ marginBottom: '1rem', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>CareAI is analyzing your report...</h3>
          <p style={{ color: 'var(--text-muted)' }}>Translating medical terms into simple language.</p>
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: .5; transform: scale(1.1); }
            }
          `}</style>
        </div>
      )}

      {isUploaded && (
        <div className="grid grid-cols-1">
          {/* Summary Box */}
          <div className="card" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--primary-light)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--primary)', padding: '0.5rem', borderRadius: '50%', color: 'white', display: 'flex' }}>
                <Sparkles size={24} />
              </div>
              <div>
                <h3 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>CareAI Summary</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                  "Your blood sugar (HbA1c) appears higher than the usual range. This does not confirm a disease, but you should discuss it with a physician or diabetologist. Your Kidney function (Creatinine) is completely normal."
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Suggest Doctor</button>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', borderColor: 'var(--primary)', color: 'var(--primary)' }}>Add Reminder</button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Findings Table */}
          <div className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Detailed Findings</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '1rem 0', fontWeight: 500 }}>Test Parameter</th>
                    <th style={{ padding: '1rem 0', fontWeight: 500 }}>Result</th>
                    <th style={{ padding: '1rem 0', fontWeight: 500 }}>Status / Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1rem 0', fontWeight: 500 }}>Hemoglobin</td>
                    <td style={{ padding: '1rem 0' }}>11.2 g/dL</td>
                    <td style={{ padding: '1rem 0' }}>
                      <span className="badge badge-warning" style={{ display: 'inline-flex', gap: '0.25rem', alignItems: 'center' }}>
                        <AlertTriangle size={14} /> Low (Needs attention)
                      </span>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1rem 0', fontWeight: 500 }}>HbA1c</td>
                    <td style={{ padding: '1rem 0', fontWeight: 700 }}>7.8 %</td>
                    <td style={{ padding: '1rem 0' }}>
                      <span className="badge badge-danger" style={{ display: 'inline-flex', gap: '0.25rem', alignItems: 'center' }}>
                        <AlertCircle size={14} /> High (Consult doctor)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem 0', fontWeight: 500 }}>Creatinine</td>
                    <td style={{ padding: '1rem 0' }}>0.9 mg/dL</td>
                    <td style={{ padding: '1rem 0' }}>
                      <span className="badge badge-success" style={{ display: 'inline-flex', gap: '0.25rem', alignItems: 'center' }}>
                        <CheckCircle2 size={14} /> Normal
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <InfoIcon size={20} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <strong>Disclaimer:</strong> CareAI provides information to help you understand your reports. It does not diagnose diseases or prescribe medication. Always consult a qualified healthcare professional.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
