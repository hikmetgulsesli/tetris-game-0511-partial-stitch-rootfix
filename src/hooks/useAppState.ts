import { useCallback, useEffect, useRef, useState } from 'react';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  Cell,
  createEmptyBoard,
  GameMode,
  GameState,
  getRandomTetromino,
  getShape,
  getTetromino,
  LINE_SCORES,
  Position,
  TetrominoType,
} from '../types/domain';
import { getHighScore, saveHighScore } from '../utils/storage';

export interface AppActions {
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restartGame: () => void;
  goToMenu: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  rotate: () => void;
  softDrop: () => void;
  hardDrop: () => void;
  hold: () => void;
  togglePause: () => void;
}

export interface UseAppStateReturn {
  state: GameState;
  actions: AppActions;
  ghostY: number;
}

function isValidPosition(
  board: Cell[][],
  type: TetrominoType,
  rotation: number,
  x: number,
  y: number
): boolean {
  const shape = getShape(type, rotation);
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        const newX = x + col;
        const newY = y + row;
        if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
          return false;
        }
        if (newY >= 0 && board[newY][newX] !== null) {
          return false;
        }
      }
    }
  }
  return true;
}

function lockPiece(
  board: Cell[][],
  type: TetrominoType,
  rotation: number,
  x: number,
  y: number
): Cell[][] {
  const newBoard = board.map((row) => [...row]);
  const shape = getShape(type, rotation);
  const color = type;
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        const newX = x + col;
        const newY = y + row;
        if (newY >= 0 && newY < BOARD_HEIGHT && newX >= 0 && newX < BOARD_WIDTH) {
          newBoard[newY][newX] = color;
        }
      }
    }
  }
  return newBoard;
}

function clearLines(board: Cell[][]): { board: Cell[][]; linesCleared: number } {
  const newBoard: Cell[][] = [];
  let linesCleared = 0;
  for (let row = 0; row < BOARD_HEIGHT; row++) {
    if (board[row].every((cell) => cell !== null)) {
      linesCleared++;
    } else {
      newBoard.push(board[row]);
    }
  }
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array.from({ length: BOARD_WIDTH }, () => null));
  }
  return { board: newBoard, linesCleared };
}

function calculateGhostY(
  board: Cell[][],
  type: TetrominoType,
  rotation: number,
  x: number,
  y: number
): number {
  let ghostY = y;
  while (isValidPosition(board, type, rotation, x, ghostY + 1)) {
    ghostY++;
  }
  return ghostY;
}

export function createInitialState(): GameState {
  return {
    mode: 'menu',
    board: createEmptyBoard(),
    currentPiece: null,
    nextPiece: null,
    holdPiece: null,
    score: 0,
    level: 1,
    lines: 0,
    highScore: getHighScore(),
    canHold: true,
    lastDropTime: 0,
  };
}

export function useAppState(): UseAppStateReturn {
  const [state, setState] = useState<GameState>(createInitialState);
  const stateRef = useRef(state);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const ghostY = state.currentPiece
    ? calculateGhostY(
        state.board,
        state.currentPiece.type,
        state.currentPiece.rotation,
        state.currentPiece.x,
        state.currentPiece.y
      )
    : 0;

  const spawnPiece = useCallback(
    (prev: GameState, nextType: TetrominoType): GameState | null => {
      const newPiece = {
        type: nextType,
        x: Math.floor((BOARD_WIDTH - getShape(nextType, 0)[0].length) / 2),
        y: 0,
        rotation: 0,
      };
      if (!isValidPosition(prev.board, newPiece.type, newPiece.rotation, newPiece.x, newPiece.y)) {
        const newHigh = Math.max(prev.score, prev.highScore);
        saveHighScore(newHigh);
        return {
          ...prev,
          mode: 'gameover',
          highScore: newHigh,
        };
      }
      return {
        ...prev,
        currentPiece: newPiece,
        nextPiece: getRandomTetromino(),
        canHold: true,
      };
    },
    []
  );

  const lockAndClear = useCallback((prev: GameState): GameState => {
    if (!prev.currentPiece) return prev;
    let newBoard = lockPiece(
      prev.board,
      prev.currentPiece.type,
      prev.currentPiece.rotation,
      prev.currentPiece.x,
      prev.currentPiece.y
    );
    const { board: clearedBoard, linesCleared } = clearLines(newBoard);
    newBoard = clearedBoard;
    const newLines = prev.lines + linesCleared;
    const newLevel = Math.floor(newLines / 10) + 1;
    const points =
      (LINE_SCORES[linesCleared] ?? 0) * prev.level * (linesCleared > 0 ? 1 : 0);
    const newScore = prev.score + points;
    const newHigh = Math.max(newScore, prev.highScore);
    if (newHigh > prev.highScore) {
      saveHighScore(newHigh);
    }
    const nextState: GameState = {
      ...prev,
      board: newBoard,
      currentPiece: null,
      score: newScore,
      lines: newLines,
      level: newLevel,
      highScore: newHigh,
    };
    const spawned = spawnPiece(nextState, prev.nextPiece!);
    return spawned ?? nextState;
  }, [spawnPiece]);

  const tick = useCallback(
    (dt: number) => {
      setState((prev) => {
        if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
        const dropInterval = Math.max(50, 1000 - (prev.level - 1) * 80);
        const newLastDropTime = prev.lastDropTime + dt;
        if (newLastDropTime < dropInterval) {
          return { ...prev, lastDropTime: newLastDropTime };
        }
        const dropDistance = Math.floor(newLastDropTime / dropInterval);
        let newY = prev.currentPiece.y;
        for (let i = 0; i < dropDistance; i++) {
          if (isValidPosition(prev.board, prev.currentPiece.type, prev.currentPiece.rotation, prev.currentPiece.x, newY + 1)) {
            newY++;
          } else {
            break;
          }
        }
        if (newY !== prev.currentPiece.y) {
          return {
            ...prev,
            currentPiece: { ...prev.currentPiece, y: newY },
            lastDropTime: newLastDropTime % dropInterval,
          };
        }
        const locked = lockAndClear({
          ...prev,
          currentPiece: { ...prev.currentPiece, y: newY },
        });
        return locked;
      });
    },
    [lockAndClear]
  );

  useEffect(() => {
    let lastTime = 0;
    function loop(timestamp: number) {
      if (lastTime === 0) lastTime = timestamp;
      const dt = Math.min((timestamp - lastTime) / 1000, 0.05);
      lastTime = timestamp;
      const current = stateRef.current;
      if (current.mode === 'playing') {
        tick(dt * 1000);
      }
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const startGame = useCallback(() => {
    const next = getRandomTetromino();
    setState((prev) => {
      const base: GameState = {
        ...createInitialState(),
        mode: 'playing',
        nextPiece: next,
        highScore: prev.highScore,
      };
      const spawned = spawnPiece(base, next);
      return spawned ?? base;
    });
  }, [spawnPiece]);

  const pauseGame = useCallback(() => {
    setState((prev) =>
      prev.mode === 'playing' ? { ...prev, mode: 'paused' } : prev
    );
  }, []);

  const resumeGame = useCallback(() => {
    setState((prev) =>
      prev.mode === 'paused' ? { ...prev, mode: 'playing' } : prev
    );
  }, []);

  const restartGame = useCallback(() => {
    const next = getRandomTetromino();
    setState((prev) => {
      const base: GameState = {
        ...createInitialState(),
        mode: 'playing',
        nextPiece: next,
        highScore: prev.highScore,
      };
      const spawned = spawnPiece(base, next);
      return spawned ?? base;
    });
  }, [spawnPiece]);

  const goToMenu = useCallback(() => {
    setState((prev) => ({
      ...createInitialState(),
      highScore: prev.highScore,
    }));
  }, []);

  const moveLeft = useCallback(() => {
    setState((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      const { type, rotation, x, y } = prev.currentPiece;
      if (isValidPosition(prev.board, type, rotation, x - 1, y)) {
        return { ...prev, currentPiece: { ...prev.currentPiece, x: x - 1 } };
      }
      return prev;
    });
  }, []);

  const moveRight = useCallback(() => {
    setState((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      const { type, rotation, x, y } = prev.currentPiece;
      if (isValidPosition(prev.board, type, rotation, x + 1, y)) {
        return { ...prev, currentPiece: { ...prev.currentPiece, x: x + 1 } };
      }
      return prev;
    });
  }, []);

  const rotate = useCallback(() => {
    setState((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      const { type, x, y, rotation } = prev.currentPiece;
      const newRotation = (rotation + 1) % 4;
      // Simple wall kick: try original, then left, then right
      const kicks = [0, -1, 1, -2, 2];
      for (const kick of kicks) {
        if (isValidPosition(prev.board, type, newRotation, x + kick, y)) {
          return {
            ...prev,
            currentPiece: {
              ...prev.currentPiece,
              rotation: newRotation,
              x: x + kick,
            },
          };
        }
      }
      return prev;
    });
  }, []);

  const softDrop = useCallback(() => {
    setState((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      const { type, rotation, x, y } = prev.currentPiece;
      if (isValidPosition(prev.board, type, rotation, x, y + 1)) {
        return { ...prev, currentPiece: { ...prev.currentPiece, y: y + 1 }, score: prev.score + 1 };
      }
      return prev;
    });
  }, []);

  const hardDrop = useCallback(() => {
    setState((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      const { type, rotation, x, y } = prev.currentPiece;
      let dropY = y;
      while (isValidPosition(prev.board, type, rotation, x, dropY + 1)) {
        dropY++;
      }
      const dropDistance = dropY - y;
      const locked = lockAndClear({
        ...prev,
        currentPiece: { ...prev.currentPiece, y: dropY },
        score: prev.score + dropDistance * 2,
      });
      return locked;
    });
  }, [lockAndClear]);

  const hold = useCallback(() => {
    setState((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece || !prev.canHold) return prev;
      const currentType = prev.currentPiece.type;
      if (prev.holdPiece === null) {
        return {
          ...prev,
          holdPiece: currentType,
          currentPiece: null,
          canHold: false,
        };
      }
      const held = prev.holdPiece;
      const spawn = spawnPiece(
        { ...prev, holdPiece: currentType, currentPiece: null },
        held
      );
      if (spawn) {
        return { ...spawn, canHold: false };
      }
      return prev;
    });
  }, [spawnPiece]);

  const togglePause = useCallback(() => {
    setState((prev) => {
      if (prev.mode === 'playing') return { ...prev, mode: 'paused' };
      if (prev.mode === 'paused') return { ...prev, mode: 'playing' };
      return prev;
    });
  }, []);

  // Keyboard controls
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const gameKeys = [
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Space',
        'KeyP',
        'KeyR',
        'KeyC',
        'Enter',
      ];
      if (gameKeys.includes(e.code)) {
        e.preventDefault();
      }
      const current = stateRef.current;
      if (e.code === 'ArrowLeft') moveLeft();
      if (e.code === 'ArrowRight') moveRight();
      if (e.code === 'ArrowUp') rotate();
      if (e.code === 'ArrowDown') softDrop();
      if (e.code === 'Space') hardDrop();
      if (e.code === 'KeyC') hold();
      if (e.code === 'KeyP') togglePause();
      if (e.code === 'Enter') {
        if (current.mode === 'menu') startGame();
        if (current.mode === 'paused') resumeGame();
        if (current.mode === 'gameover') restartGame();
      }
      if (e.code === 'KeyR') {
        if (current.mode === 'playing' || current.mode === 'paused' || current.mode === 'gameover') {
          restartGame();
        }
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [moveLeft, moveRight, rotate, softDrop, hardDrop, hold, togglePause, startGame, resumeGame, restartGame]);

  // Expose test bridge
  useEffect(() => {
    window.render_game_to_text = () => {
      const current = stateRef.current;
      return JSON.stringify({
        mode: current.mode,
        player: current.currentPiece
          ? { x: current.currentPiece.x, y: current.currentPiece.y, rotation: current.currentPiece.rotation }
          : null,
        board: current.board,
        score: current.score,
        level: current.level,
        lines: current.lines,
        nextPiece: current.nextPiece,
        holdPiece: current.holdPiece,
      });
    };
    window.advanceTime = (ms: number) => {
      const steps = Math.max(1, Math.round(ms / (1000 / 60)));
      for (let i = 0; i < steps; i++) {
        tick(1000 / 60);
      }
    };
    window.game = {
      get state() {
        return stateRef.current;
      },
      get score() {
        return stateRef.current.score;
      },
      get level() {
        return stateRef.current.level;
      },
      get lines() {
        return stateRef.current.lines;
      },
      get mode() {
        return stateRef.current.mode;
      },
    };
  }, [tick]);

  const actions: AppActions = {
    startGame,
    pauseGame,
    resumeGame,
    restartGame,
    goToMenu,
    moveLeft,
    moveRight,
    rotate,
    softDrop,
    hardDrop,
    hold,
    togglePause,
  };

  return { state, actions, ghostY };
}

// Augment Window for test bridge
declare global {
  interface Window {
    render_game_to_text: () => string;
    advanceTime: (ms: number) => void;
    game: {
      state: GameState;
      score: number;
      level: number;
      lines: number;
      mode: GameMode;
    };
  }
}
