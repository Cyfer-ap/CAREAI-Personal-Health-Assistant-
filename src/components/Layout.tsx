import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, FileText, Bell, Stethoscope, AlertTriangle, HeartPulse } from 'lucide-react';

export const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="brand">
          <HeartPulse size={32} weight="fill" />
          CareAI
        </div>
        
        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
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
      </aside>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
