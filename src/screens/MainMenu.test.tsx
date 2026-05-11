import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { MainMenu } from './MainMenu';
import { renderWithProviders } from '../test/utils';

describe('MainMenu', () => {
  it('renders with default props', () => {
    renderWithProviders(<MainMenu />);
    expect(screen.getByText('TETRA_CORE')).toBeInTheDocument();
    expect(screen.getByText('New Game')).toBeInTheDocument();
  });

  it('displays high score', () => {
    renderWithProviders(<MainMenu highScore={98765} />);
    expect(screen.getByText('98,765')).toBeInTheDocument();
  });

  it('displays level prestige', () => {
    renderWithProviders(<MainMenu level={5} />);
    expect(screen.getByText(/LVL 5 PRESTIGE/)).toBeInTheDocument();
  });

  it('triggers new game action', () => {
    const newGame = vi.fn();
    renderWithProviders(
      <MainMenu actions={{ 'play-arrow-new-game-1': newGame }} />
    );
    const btn = screen.getByText('New Game');
    fireEvent.click(btn);
    expect(newGame).toHaveBeenCalledTimes(1);
  });

  it('triggers options action', () => {
    const options = vi.fn();
    renderWithProviders(
      <MainMenu actions={{ 'settings-options-3': options }} />
    );
    const btn = screen.getByText('Options');
    fireEvent.click(btn);
    expect(options).toHaveBeenCalledTimes(1);
  });

  it('triggers help action', () => {
    const help = vi.fn();
    renderWithProviders(
      <MainMenu actions={{ 'help-help-4': help }} />
    );
    const btn = screen.getByText('Help');
    fireEvent.click(btn);
    expect(help).toHaveBeenCalledTimes(1);
  });

  it('shows resume button when resume action is provided', () => {
    const resume = vi.fn();
    renderWithProviders(
      <MainMenu actions={{ 'resume-resume-2': resume }} />
    );
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  it('does not show resume button when resume action is missing', () => {
    renderWithProviders(<MainMenu />);
    expect(screen.queryByText('Resume')).not.toBeInTheDocument();
  });

  it('triggers resume action when clicked', () => {
    const resume = vi.fn();
    renderWithProviders(
      <MainMenu actions={{ 'resume-resume-2': resume }} />
    );
    const btn = screen.getByText('Resume');
    fireEvent.click(btn);
    expect(resume).toHaveBeenCalledTimes(1);
  });

  it('displays version label', () => {
    renderWithProviders(<MainMenu />);
    expect(screen.getByText(/v2\.1\.4_stable/)).toBeInTheDocument();
  });

  it('shows keyboard hint', () => {
    renderWithProviders(<MainMenu />);
    expect(screen.getByText(/PRESS/)).toBeInTheDocument();
    expect(screen.getByText('ENTER')).toBeInTheDocument();
  });
});
