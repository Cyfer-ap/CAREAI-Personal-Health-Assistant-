import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PatientProfile {
  name: string;
  age: string;
  gender: string;
  bloodGroup: string;
  allergies: string;
  existingDiseases: string;
  emergencyContact: string;
  preferredHospital: string;
}

export interface Medicine {
  id: string;
  name: string;
  dose: string;
  time: string;
  isTaken: boolean;
}

export interface Checkup {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  isCompleted: boolean;
}

export interface HealthRecord {
  id: string;
  parameter: string;
  value: string;
  status: 'Normal' | 'High' | 'Low';
  date: string;
}

interface AppContextType {
  profile: PatientProfile;
  setProfile: (profile: PatientProfile) => void;
  medicines: Medicine[];
  setMedicines: React.Dispatch<React.SetStateAction<Medicine[]>>;
  checkups: Checkup[];
  setCheckups: React.Dispatch<React.SetStateAction<Checkup[]>>;
  records: HealthRecord[];
  setRecords: React.Dispatch<React.SetStateAction<HealthRecord[]>>;
  isAuthenticated: boolean;
  login: (name: string) => void;
  logout: () => void;
}

const defaultProfile: PatientProfile = {
  name: 'John Doe',
  age: '42',
  gender: 'Male',
  bloodGroup: 'O+',
  allergies: 'Penicillin',
  existingDiseases: 'Mild Hypertension',
  emergencyContact: '+1 234-567-8900',
  preferredHospital: 'City Hospital'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<PatientProfile>(() => {
    const saved = localStorage.getItem('careai_profile');
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  const [medicines, setMedicines] = useState<Medicine[]>(() => {
    const saved = localStorage.getItem('careai_medicines');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Amlodipine', dose: '5mg', time: '08:30 AM', isTaken: true },
      { id: '2', name: 'Metformin', dose: '500mg', time: '08:00 PM', isTaken: false }
    ];
  });

  const [checkups, setCheckups] = useState<Checkup[]>(() => {
    const saved = localStorage.getItem('careai_checkups');
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Cardiologist Follow-up', location: 'City Hospital', date: '2026-10-24', time: '10:30 AM', isCompleted: false }
    ];
  });

  const [records, setRecords] = useState<HealthRecord[]>(() => {
    const saved = localStorage.getItem('careai_records');
    return saved ? JSON.parse(saved) : [
      { id: '1', parameter: 'HbA1c', value: '7.8', status: 'High', date: '2026-05-01' },
      { id: '2', parameter: 'Blood Pressure', value: '150/95', status: 'High', date: '2026-05-01' },
      { id: '3', parameter: 'Weight', value: '75', status: 'Normal', date: '2026-05-01' }
    ];
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('careai_auth') === 'true';
  });

  const login = (name: string) => {
    setProfile(prev => ({ ...prev, name }));
    setIsAuthenticated(true);
    localStorage.setItem('careai_auth', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('careai_auth');
  };

  useEffect(() => { localStorage.setItem('careai_profile', JSON.stringify(profile)); }, [profile]);
  useEffect(() => { localStorage.setItem('careai_medicines', JSON.stringify(medicines)); }, [medicines]);
  useEffect(() => { localStorage.setItem('careai_checkups', JSON.stringify(checkups)); }, [checkups]);
  useEffect(() => { localStorage.setItem('careai_records', JSON.stringify(records)); }, [records]);

  return (
    <AppContext.Provider value={{ profile, setProfile, medicines, setMedicines, checkups, setCheckups, records, setRecords, isAuthenticated, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
