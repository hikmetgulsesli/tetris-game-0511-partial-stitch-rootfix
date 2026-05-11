import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../contexts/AppContext';

export function renderWithProviders(ui: React.ReactElement) {
  return render(React.createElement(AppProvider, null, ui));
}
