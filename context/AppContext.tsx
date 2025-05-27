import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themes } from '../themes';

type ThemeName = keyof typeof themes;

interface AppContextProps {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  history: string[];
  addToHistory: (item: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>('chatgpt');  // ✅ valor inicial seguro
  const [history, setHistory] = useState<string[]>([]);

  const addToHistory = (item: string) => {
    setHistory((prev) => [item, ...prev]);
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, history, addToHistory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
