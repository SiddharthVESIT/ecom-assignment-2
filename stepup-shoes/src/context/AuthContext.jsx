import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

const DEMO_USER = {
  name: "Demo User",
  email: "user@stepup.com",
  tier: "Silver",
  avatar: null
};

const DEMO_EMAIL = "user@stepup.com";
const DEMO_PASSWORD = "demo1234";

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('stepup_auth') === 'true';
  });
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('stepup_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = useCallback((email, password) => {
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setIsLoggedIn(true);
      setUser(DEMO_USER);
      localStorage.setItem('stepup_auth', 'true');
      localStorage.setItem('stepup_user', JSON.stringify(DEMO_USER));
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('stepup_auth');
    localStorage.removeItem('stepup_user');
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
