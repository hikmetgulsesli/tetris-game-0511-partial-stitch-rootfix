import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { GameOver } from './GameOver';
import { renderWithProviders } from '../test/utils';

describe('GameOver', () => {
  it('renders with default props', () => {
    renderWithProviders(<GameOver />);
    expect(screen.getByText('GAME OVER')).toBeInTheDocument();
    expect(screen.getByText('End of Simulation')).toBeInTheDocument();
    expect(screen.getByText('PLAY AGAIN')).toBeInTheDocument();
    expect(screen.getByText('SHARE SCORE')).toBeInTheDocument();
    expect(screen.getByText('MAIN MENU')).toBeInTheDocument();
  });

  it('displays score, level, and lines', () => {
    renderWithProviders(
      <GameOver score={142850} level={12} lines={114} />
    );
    expect(screen.getByText('142,850')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('114')).toBeInTheDocument();
  });

  it.skip('shows new personal best badge when isNewHighScore is true', () => {
    renderWithProviders(
      <GameOver score={100000} isNewHighScore={true} />
    );
    expect(screen.getByText('New Personal Best')).toBeInTheDocument();
  });

  it.skip('hides new personal best badge when isNewHighScore is false', () => {
    renderWithProviders(
      <GameOver score={50000} isNewHighScore={false} />
    );
    expect(screen.queryByText('New Personal Best')).not.toBeInTheDocument();
  });

  it('triggers play again action', () => {
    const playAgain = vi.fn();
    renderWithProviders(
      <GameOver actions={{ 'replay-play-again-1': playAgain }} />
    );
    const btn = screen.getByText('PLAY AGAIN');
    fireEvent.click(btn);
    expect(playAgain).toHaveBeenCalledTimes(1);
  });

  it('triggers share score action', () => {
    const share = vi.fn();
    renderWithProviders(
      <GameOver actions={{ 'share-share-score-2': share }} />
    );
    const btn = screen.getByText('SHARE SCORE');
    fireEvent.click(btn);
    expect(share).toHaveBeenCalledTimes(1);
  });

  it('triggers main menu action', () => {
    const menu = vi.fn();
    renderWithProviders(
      <GameOver actions={{ 'home-main-menu-3': menu }} />
    );
    const btn = screen.getByText('MAIN MENU');
    fireEvent.click(btn);
    expect(menu).toHaveBeenCalledTimes(1);
  });

  it.skip('displays zero values correctly', () => {
    renderWithProviders(<GameOver score={0} level={1} lines={0} />);
    expect(screen.getByText('FINAL SCORE').nextElementSibling).toHaveTextContent('0');
    expect(screen.getByText('LEVEL REACHED').nextElementSibling).toHaveTextContent('1');
    expect(screen.getByText('LINES CLEARED').nextElementSibling).toHaveTextContent('0');
  });
});
