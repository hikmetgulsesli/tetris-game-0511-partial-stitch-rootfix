import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { GameBoard } from './GameBoard';
import { renderWithProviders } from '../test/utils';
import { createEmptyBoard, TetrominoType } from '../types/domain';

function makeBoard(rows: (TetrominoType | null)[]): ReturnType<typeof createEmptyBoard> {
  const board = createEmptyBoard();
  for (let i = 0; i < rows.length && i < board.length; i++) {
    board[board.length - 1 - i] = rows[i] === undefined
      ? Array(10).fill(null)
      : rows[i] === null
        ? Array(10).fill(null)
        : Array(10).fill(rows[i]);
  }
  return board;
}

describe('GameBoard', () => {
  it('renders with default props', () => {
    renderWithProviders(<GameBoard />);
    expect(screen.getByText('TETRA_CORE')).toBeInTheDocument();
    expect(screen.getByText('SCORE')).toBeInTheDocument();
    expect(screen.getByText('LEVEL')).toBeInTheDocument();
    expect(screen.getByText('LINES')).toBeInTheDocument();
  });

  it('displays score, level, and lines', () => {
    renderWithProviders(
      <GameBoard score={14200} level={5} lines={30} />
    );
    expect(screen.getByText('14,200')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('renders the game board grid', () => {
    renderWithProviders(<GameBoard />);
    const cells = document.querySelectorAll('.tetris-cell');
    expect(cells.length).toBe(200);
  });

  it('renders a filled piece on the board', () => {
    const board = createEmptyBoard();
    board[19][0] = 'I';
    board[19][1] = 'I';
    renderWithProviders(<GameBoard board={board} />);
    const filled = document.querySelectorAll('.tetris-cell.filled');
    expect(filled.length).toBe(2);
  });

  it('renders current piece and ghost piece', () => {
    renderWithProviders(
      <GameBoard
        currentPiece={{ type: 'T', x: 4, y: 0, rotation: 0 }}
        ghostY={18}
      />
    );
    const filled = document.querySelectorAll('.tetris-cell.filled');
    const ghost = document.querySelectorAll('.tetris-cell.ghost');
    expect(filled.length).toBeGreaterThan(0);
    expect(ghost.length).toBeGreaterThan(0);
  });

  it('shows next piece preview', () => {
    renderWithProviders(<GameBoard nextPiece="O" />);
    const nextGrid = document.querySelectorAll('.next-grid .next-cell');
    expect(nextGrid.length).toBeGreaterThan(0);
  });

  it('shows hold piece when provided', () => {
    renderWithProviders(<GameBoard holdPiece="L" />);
    const holdGrid = document.querySelectorAll('.next-grid .next-cell');
    expect(holdGrid.length).toBeGreaterThan(0);
  });

  it('shows empty hold placeholder when no hold piece', () => {
    renderWithProviders(<GameBoard />);
    expect(screen.getByText('HOLD')).toBeInTheDocument();
  });

  it('triggers pause action', () => {
    const pause = vi.fn();
    renderWithProviders(
      <GameBoard actions={{ 'pause-pause-3': pause }} />
    );
    const pauseBtn = screen.getByText('PAUSE');
    fireEvent.click(pauseBtn);
    expect(pause).toHaveBeenCalledTimes(1);
  });

  it('triggers new game action', () => {
    const newGame = vi.fn();
    renderWithProviders(
      <GameBoard actions={{ 'new-game-2': newGame }} />
    );
    const btn = screen.getByText('NEW GAME');
    fireEvent.click(btn);
    expect(newGame).toHaveBeenCalledTimes(1);
  });

  it('triggers account action', () => {
    const account = vi.fn();
    renderWithProviders(
      <GameBoard actions={{ 'account-circle-1': account }} />
    );
    const btn = document.querySelector('[data-action-id="account-circle-1"]');
    expect(btn).not.toBeNull();
    fireEvent.click(btn!);
    expect(account).toHaveBeenCalledTimes(1);
  });

  it('shows operator info with level', () => {
    renderWithProviders(<GameBoard level={7} />);
    expect(screen.getByText(/LVL 7 PRESTIGE/)).toBeInTheDocument();
  });

  it('renders with a full board without crashing', () => {
    const board = makeBoard(['I']);
    renderWithProviders(<GameBoard board={board} />);
    const cells = document.querySelectorAll('.tetris-cell');
    expect(cells.length).toBe(200);
  });
});
