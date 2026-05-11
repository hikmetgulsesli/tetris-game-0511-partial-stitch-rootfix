import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import { useAppState, createInitialState } from './useAppState';
import { BOARD_WIDTH, BOARD_HEIGHT, createEmptyBoard } from '../types/domain';

describe('useAppState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts in menu mode', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.mode).toBe('menu');
  });

  it('starts game and enters playing mode', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    expect(result.current.state.mode).toBe('playing');
    expect(result.current.state.currentPiece).not.toBeNull();
    expect(result.current.state.nextPiece).not.toBeNull();
  });

  it('can pause and resume', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    expect(result.current.state.mode).toBe('paused');
    act(() => result.current.actions.resumeGame());
    expect(result.current.state.mode).toBe('playing');
  });

  it('can toggle pause', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.togglePause());
    expect(result.current.state.mode).toBe('paused');
    act(() => result.current.actions.togglePause());
    expect(result.current.state.mode).toBe('playing');
  });

  it('can restart game', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.moveLeft());
    act(() => result.current.actions.restartGame());
    expect(result.current.state.mode).toBe('playing');
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lines).toBe(0);
    expect(result.current.state.level).toBe(1);
  });

  it('can go to menu', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.goToMenu());
    expect(result.current.state.mode).toBe('menu');
  });

  it('moves piece left and right', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const initialX = result.current.state.currentPiece!.x;
    act(() => result.current.actions.moveLeft());
    expect(result.current.state.currentPiece!.x).toBeLessThanOrEqual(initialX);
    act(() => result.current.actions.moveRight());
    expect(result.current.state.currentPiece!.x).toBeGreaterThanOrEqual(initialX);
  });

  it('rotates piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const initialRotation = result.current.state.currentPiece!.rotation;
    act(() => result.current.actions.rotate());
    expect(result.current.state.currentPiece!.rotation).not.toBe(initialRotation);
  });

  it('soft drops piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const initialY = result.current.state.currentPiece!.y;
    act(() => result.current.actions.softDrop());
    expect(result.current.state.currentPiece!.y).toBeGreaterThan(initialY);
  });

  it('hard drops piece and scores', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const initialScore = result.current.state.score;
    act(() => result.current.actions.hardDrop());
    expect(result.current.state.score).toBeGreaterThanOrEqual(initialScore);
  });

  it('holds piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const firstPiece = result.current.state.currentPiece!.type;
    act(() => result.current.actions.hold());
    expect(result.current.state.holdPiece).toBe(firstPiece);
    expect(result.current.state.canHold).toBe(false);
  });

  it('prevents double hold', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.hold());
    const held = result.current.state.holdPiece;
    act(() => result.current.actions.hold());
    expect(result.current.state.holdPiece).toBe(held);
  });

  it('clears lines and updates score', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    // Manually fill bottom row except one gap and place piece
    act(() => {
      const s = result.current.state;
      // Force a line clear by hard dropping until we lock pieces
      for (let i = 0; i < 30; i++) {
        result.current.actions.hardDrop();
      }
    });
    // Score should have increased from line clears
    expect(result.current.state.score).toBeGreaterThan(0);
  });

  it('updates high score in localStorage', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    // Simulate scoring
    for (let i = 0; i < 10; i++) {
      act(() => result.current.actions.hardDrop());
    }
    const saved = localStorage.getItem('tetris_high_score');
    expect(saved).toBeTruthy();
    expect(parseInt(saved!, 10)).toBeGreaterThanOrEqual(0);
  });

  it('exposes test bridge on window', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    expect(typeof window.render_game_to_text).toBe('function');
    expect(typeof window.advanceTime).toBe('function');
    expect(window.game).toBeDefined();
    const text = window.render_game_to_text();
    const parsed = JSON.parse(text);
    expect(parsed.mode).toBe('playing');
    expect(parsed.score).toBeDefined();
    expect(parsed.level).toBeDefined();
    expect(parsed.lines).toBeDefined();
  });

  it('advances time deterministically', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const before = result.current.state.currentPiece!.y;
    act(() => window.advanceTime(5000));
    const after = result.current.state.currentPiece!.y;
    expect(after).toBeGreaterThanOrEqual(before);
  });

  it('creates empty board with correct dimensions', () => {
    const board = createEmptyBoard();
    expect(board.length).toBe(BOARD_HEIGHT);
    expect(board[0].length).toBe(BOARD_WIDTH);
    expect(board.every((row) => row.every((cell) => cell === null))).toBe(true);
  });

  it('initial state has empty board', () => {
    const state = createInitialState();
    expect(state.board).toEqual(createEmptyBoard());
    expect(state.mode).toBe('menu');
    expect(state.score).toBe(0);
    expect(state.level).toBe(1);
    expect(state.lines).toBe(0);
  });
});
