import React, { createContext, useContext } from 'react';
import { GameState } from '../types/domain';
import { AppActions, UseAppStateReturn, useAppState } from '../hooks/useAppState';

export interface AppContextValue {
  state: GameState;
  actions: AppActions;
  ghostY: number;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { state, actions, ghostY }: UseAppStateReturn = useAppState();
  return (
    <AppContext.Provider value={{ state, actions, ghostY }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return ctx;
}
