import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { NextPiecePreview } from './NextPiecePreview';
import { renderWithProviders } from '../test/utils';

describe('NextPiecePreview', () => {
  it('renders with default props', () => {
    renderWithProviders(<NextPiecePreview />);
    expect(screen.getByText('TETRA_CORE')).toBeInTheDocument();
    expect(screen.getByText('NEXT')).toBeInTheDocument();
    expect(screen.getByText('NEW GAME')).toBeInTheDocument();
  });

  it('renders next pieces when provided', () => {
    renderWithProviders(
      <NextPiecePreview nextPieces={['T', 'S', 'I']} />
    );
    const grids = document.querySelectorAll('.next-grid');
    expect(grids.length).toBe(3);
  });

  it('renders fewer pieces when queue is short', () => {
    renderWithProviders(
      <NextPiecePreview nextPieces={['O']} />
    );
    const grids = document.querySelectorAll('.next-grid');
    expect(grids.length).toBe(1);
  });

  it('triggers new game action', () => {
    const newGame = vi.fn();
    renderWithProviders(
      <NextPiecePreview actions={{ 'new-game-2': newGame }} />
    );
    const btn = screen.getByText('NEW GAME');
    fireEvent.click(btn);
    expect(newGame).toHaveBeenCalledTimes(1);
  });

  it('triggers account action', () => {
    const account = vi.fn();
    renderWithProviders(
      <NextPiecePreview actions={{ 'account-circle-1': account }} />
    );
    const btn = screen.getByRole('button', { name: /account/i });
    expect(btn).not.toBeNull();
    fireEvent.click(btn);
    expect(account).toHaveBeenCalledTimes(1);
  });

  it('shows side nav items', () => {
    renderWithProviders(<NextPiecePreview />);
    expect(screen.getByText('SOLO MODE')).toBeInTheDocument();
    expect(screen.getByText('VERSUS')).toBeInTheDocument();
    expect(screen.getByText('PRACTICE')).toBeInTheDocument();
    expect(screen.getByText('ZEN')).toBeInTheDocument();
  });
});
