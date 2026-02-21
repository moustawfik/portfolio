import { createContext, useContext, useState } from 'react';

const EmailContext = createContext();

export function EmailGateProvider({ children }) {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return localStorage.getItem('ra_email_submitted') === 'true';
    } catch {
      return false;
    }
  });

  const unlock = (email) => {
    try {
      localStorage.setItem('ra_email_submitted', 'true');
      localStorage.setItem('ra_email', email);
    } catch { /* localStorage unavailable */ }
    setUnlocked(true);
  };

  return (
    <EmailContext.Provider value={{ unlocked, unlock }}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmailGate() {
  return useContext(EmailContext);
}
