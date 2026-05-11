import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { PauseOverlay } from './PauseOverlay';
import { renderWithProviders } from '../test/utils';

describe('PauseOverlay', () => {
  it('renders with default props', () => {
    renderWithProviders(<PauseOverlay />);
    expect(screen.getByText('GAME PAUSED')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Restart')).toBeInTheDocument();
    expect(screen.getByText('Main Menu')).toBeInTheDocument();
  });

  it('displays score, level, and lines', () => {
    renderWithProviders(
      <PauseOverlay score={14200} level={5} lines={30} />
    );
    expect(screen.getByTestId('current-score')).toHaveTextContent('14,200');
    // The pause overlay does not show level/lines directly in separate labels,
    // only score and time are shown in the contextual stats snippet.
  });

  it('shows elapsed time', () => {
    renderWithProviders(
      <PauseOverlay elapsedTime="08:42" />
    );
    expect(screen.getByTestId('elapsed-time')).toHaveTextContent('08:42');
  });

  it('triggers resume action', () => {
    const resume = vi.fn();
    renderWithProviders(
      <PauseOverlay actions={{ 'resume-1': resume }} />
    );
    const btn = screen.getByText('Resume');
    fireEvent.click(btn);
    expect(resume).toHaveBeenCalledTimes(1);
  });

  it('triggers restart action', () => {
    const restart = vi.fn();
    renderWithProviders(
      <PauseOverlay actions={{ 'restart-2': restart }} />
    );
    const btn = screen.getByText('Restart');
    fireEvent.click(btn);
    expect(restart).toHaveBeenCalledTimes(1);
  });

  it('triggers main menu action', () => {
    const menu = vi.fn();
    renderWithProviders(
      <PauseOverlay actions={{ 'main-menu-3': menu }} />
    );
    const btn = screen.getByText('Main Menu');
    fireEvent.click(btn);
    expect(menu).toHaveBeenCalledTimes(1);
  });

  it('displays current score label', () => {
    renderWithProviders(<PauseOverlay />);
    expect(screen.getByText('Current Score')).toBeInTheDocument();
  });

  it('displays time label', () => {
    renderWithProviders(<PauseOverlay />);
    expect(screen.getByText('Time')).toBeInTheDocument();
  });
});
