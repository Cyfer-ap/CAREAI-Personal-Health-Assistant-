import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Bell, Stethoscope, AlertTriangle, HeartPulse, LogOut } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Layout: React.FC = () => {
  const { logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="brand">
          <HeartPulse size={32} weight="fill" />
          CareAI
        </div>
        
        <nav className="nav-menu">
          <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink to="/records" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FileText size={20} />
            <span>Medical Records</span>
          </NavLink>
          
          <NavLink to="/reminders" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Bell size={20} />
            <span>Reminders</span>
          </NavLink>
          
          <NavLink to="/specialist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Stethoscope size={20} />
            <span>Consult & Care</span>
          </NavLink>
          
          <NavLink to="/emergency" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginTop: 'auto', color: 'var(--danger)' }}>
            <AlertTriangle size={20} />
            <span>Emergency Mode</span>
          </NavLink>
        </nav>

        <button 
          onClick={handleLogout} 
          className="btn btn-outline" 
          style={{ marginTop: '2rem', width: '100%', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <LogOut size={20} /> Log Out
        </button>
      </aside>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
