import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppContext } from './contexts/AppContext';
import {
  ControlsHelp,
  GameBoard,
  GameOptions,
  GameOver,
  MainMenu,
  PauseOverlay,
} from './screens';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  Cell,
  getShape,
  getTetromino,
  TetrominoType,
} from './types/domain';
import './App.css';

function renderBoardWithPiece(
  board: Cell[][],
  piece: { type: TetrominoType; x: number; y: number; rotation: number } | null,
  ghostY: number
): Cell[][] {
  const rendered = board.map((row) => [...row]);
  if (!piece) return rendered;
  const shape = getShape(piece.type, piece.rotation);
  // Render ghost
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        const gx = piece.x + col;
        const gy = ghostY + row;
        if (gy >= 0 && gy < BOARD_HEIGHT && gx >= 0 && gx < BOARD_WIDTH && rendered[gy][gx] === null) {
          rendered[gy][gx] = `ghost-${piece.type}` as Cell;
        }
      }
    }
  }
  // Render piece
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col]) {
        const px = piece.x + col;
        const py = piece.y + row;
        if (py >= 0 && py < BOARD_HEIGHT && px >= 0 && px < BOARD_WIDTH) {
          rendered[py][px] = piece.type;
        }
      }
    }
  }
  return rendered;
}

function MiniPiece({ type }: { type: TetrominoType }) {
  const tetromino = getTetromino(type);
  const shape = tetromino.shape;
  const rows = shape.length;
  const cols = shape[0].length;
  return (
    <div
      className="next-grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: '100%',
        height: '100%',
      }}
    >
      {shape.map((row, ri) =>
        row.map((cell, ci) => (
          <div
            key={`${ri}-${ci}`}
            className="next-cell"
            style={{
              backgroundColor: cell ? tetromino.color : 'transparent',
              border: cell ? `1px solid ${tetromino.borderColor}` : 'none',
            }}
          />
        ))
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
        {label}
      </div>
      <div className="font-label-mono text-label-mono text-primary text-xl">{value}</div>
    </div>
  );
}

function ActiveGameBoard() {
  const { state, actions, ghostY } = useAppContext();
  const renderedBoard = useMemo(
    () => renderBoardWithPiece(state.board, state.currentPiece, ghostY),
    [state.board, state.currentPiece, ghostY]
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* TopNavBar */}
      <nav className="bg-surface text-primary flex justify-between items-center w-full px-lg py-md max-w-full z-50 h-[64px] border-b border-outline-variant fixed top-0">
        <div className="text-headline-md font-headline-md tracking-tighter text-primary">
          TETRA_CORE
        </div>
        <div className="hidden md:flex items-center gap-lg">
          <span className="text-primary border-b-2 border-primary pb-1 font-bold font-label-sm text-label-sm">
            GAME
          </span>
          <span className="text-on-surface-variant font-medium font-label-sm text-label-sm">
            LEADERBOARD
          </span>
          <span className="text-on-surface-variant font-medium font-label-sm text-label-sm">
            SETTINGS
          </span>
          <span className="text-on-surface-variant font-medium font-label-sm text-label-sm">
            HELP
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="hover:text-primary transition-colors duration-200 scale-95 transition-transform duration-150 focus:ring-2 focus:ring-secondary rounded-full p-xs"
            type="button"
            aria-label="Account"
          >
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>
      <div className="flex flex-1 pt-[64px]">
        {/* SideNavBar */}
        <aside className="bg-surface-container hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-[64px] pb-lg w-[280px] z-40 border-r border-outline-variant">
          <div className="p-lg border-b border-outline-variant mb-md">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-primary">OPERATOR_01</div>
                <div className="font-label-mono text-label-mono text-on-surface-variant text-[10px]">
                  LVL {state.level} PRESTIGE
                </div>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-xs flex-1">
            <span className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-md p-md font-label-sm text-label-sm">
              <span className="material-symbols-outlined">videogame_asset</span>
              SOLO MODE
            </span>
            <span className="text-on-surface-variant mx-2 flex items-center gap-md p-md font-label-sm text-label-sm">
              <span className="material-symbols-outlined">swords</span>
              VERSUS
            </span>
            <span className="text-on-surface-variant mx-2 flex items-center gap-md p-md font-label-sm text-label-sm">
              <span className="material-symbols-outlined">exercise</span>
              PRACTICE
            </span>
            <span className="text-on-surface-variant mx-2 flex items-center gap-md p-md font-label-sm text-label-sm">
              <span className="material-symbols-outlined">auto_awesome</span>
              ZEN
            </span>
          </nav>
          <div className="p-md mt-auto">
            <button
              className="w-full bg-primary text-on-primary py-sm px-md rounded-DEFAULT font-label-sm text-label-sm hover:brightness-110 transition-all flex justify-center items-center gap-xs"
              type="button"
              onClick={actions.restartGame}
            >
              NEW GAME
            </button>
          </div>
        </aside>
        {/* Main Game Area */}
        <main className="flex-1 lg:ml-[280px] bg-background flex items-center justify-center p-lg relative">
          {/* Floating Pause Button */}
          <button
            className="absolute top-lg right-lg flex items-center gap-xs px-md py-sm bg-surface-container text-on-surface border border-outline-variant rounded-md hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-secondary z-10"
            type="button"
            onClick={actions.togglePause}
          >
            <span className="material-symbols-outlined text-[18px]">pause</span>
            <span className="font-label-sm text-label-sm">PAUSE</span>
          </button>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-lg lg:gap-xl">
            {/* Left Panel: HOLD & Status */}
            <div className="flex flex-row md:flex-col gap-md">
              <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col items-center">
                <div className="font-label-sm text-label-sm text-on-surface-variant mb-sm w-full text-left uppercase tracking-wider">
                  HOLD
                </div>
                <div className="w-[80px] h-[80px] bg-surface-container-lowest border border-surface-variant flex items-center justify-center">
                  {state.holdPiece ? (
                    <MiniPiece type={state.holdPiece} />
                  ) : (
                    <div className="w-full h-full opacity-20 grid grid-cols-4 grid-rows-2 gap-[1px]">
                      <div className="col-start-2 w-full h-full border border-primary" />
                      <div className="col-start-3 w-full h-full border border-primary" />
                      <div className="row-start-2 col-start-2 w-full h-full border border-primary" />
                      <div className="row-start-2 col-start-3 w-full h-full border border-primary" />
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col items-start gap-xs hidden md:flex">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  STATUS
                </div>
                <div className="font-label-mono text-label-mono text-secondary flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  ACTIVE
                </div>
              </div>
            </div>
            {/* Center: Game Board */}
            <div className="board-container bg-surface-container-lowest border-2 border-outline-variant relative overflow-hidden shadow-2xl flex-shrink-0">
              <div className="tetris-board">
                {renderedBoard.map((row, ri) =>
                  row.map((cell, ci) => {
                    const isGhost = typeof cell === 'string' && cell.startsWith('ghost-');
                    const type = isGhost ? (cell.replace('ghost-', '') as TetrominoType) : cell;
                    const tetromino = type ? getTetromino(type) : null;
                    return (
                      <div
                        key={`${ri}-${ci}`}
                        className={`tetris-cell ${cell ? 'filled' : ''} ${isGhost ? 'ghost' : ''}`}
                        style={
                          tetromino
                            ? {
                                backgroundColor: tetromino.color,
                                borderColor: tetromino.borderColor,
                              }
                            : undefined
                        }
                      />
                    );
                  })
                )}
              </div>
            </div>
            {/* Right Panel: NEXT & Stats */}
            <div className="flex flex-row md:flex-col gap-md">
              <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col items-center">
                <div className="font-label-sm text-label-sm text-on-surface-variant mb-sm w-full text-left uppercase tracking-wider">
                  NEXT
                </div>
                <div className="w-[80px] h-[80px] bg-surface-container-lowest border border-surface-variant flex items-center justify-center relative">
                  {state.nextPiece ? (
                    <MiniPiece type={state.nextPiece} />
                  ) : null}
                </div>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col gap-md">
                <StatCard label="SCORE" value={state.score.toLocaleString()} />
                <div className="h-[1px] w-full bg-outline-variant" />
                <StatCard label="LEVEL" value={state.level} />
                <div className="h-[1px] w-full bg-outline-variant" />
                <StatCard label="LINES" value={state.lines} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const { state, actions } = useAppContext();
  const modeRef = useRef(state.mode);
  modeRef.current = state.mode;

  // Mobile touch controls
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      const threshold = 30;

      if (absDx < threshold && absDy < threshold) {
        // Tap = rotate
        actions.rotate();
      } else if (absDy > absDx && dy > threshold) {
        // Swipe down = hard drop
        actions.hardDrop();
      } else if (absDx > absDy && dx < -threshold) {
        actions.moveLeft();
      } else if (absDx > absDy && dx > threshold) {
        actions.moveRight();
      }
      touchStartRef.current = null;
    },
    [actions]
  );

  // Prevent context menu on long press
  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener('contextmenu', handler);
    return () => document.removeEventListener('contextmenu', handler);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-on-surface"
      onTouchStart={state.mode === 'playing' ? handleTouchStart : undefined}
      onTouchEnd={state.mode === 'playing' ? handleTouchEnd : undefined}
    >
      {state.mode === 'menu' && (
        <div className="min-h-screen flex items-center justify-center">
          <MainMenu
            actions={{
              'play-arrow-new-game-1': actions.startGame,
              'resume-resume-2':
                state.highScore > 0 ? actions.startGame : undefined,
              'settings-options-3': () => {
                /* options handled by state if needed */
              },
              'help-help-4': () => {
                /* help handled by state if needed */
              },
            }}
          />
        </div>
      )}
      {state.mode === 'playing' && <ActiveGameBoard />}
      {state.mode === 'paused' && (
        <div className="min-h-screen relative">
          <ActiveGameBoard />
          <PauseOverlay
            actions={{
              'resume-1': actions.resumeGame,
              'restart-2': actions.restartGame,
              'main-menu-3': actions.goToMenu,
            }}
          />
        </div>
      )}
      {state.mode === 'gameover' && (
        <div className="min-h-screen relative">
          <ActiveGameBoard />
          <GameOver
            actions={{
              'replay-play-again-1': actions.restartGame,
              'share-share-score-2': () => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: 'TETRA_CORE',
                      text: `I scored ${state.score} in TETRA_CORE!`,
                    })
                    .catch(() => {});
                } else {
                  navigator.clipboard
                    .writeText(`I scored ${state.score} in TETRA_CORE!`)
                    .catch(() => {});
                }
              },
              'home-main-menu-3': actions.goToMenu,
            }}
          />
        </div>
      )}
    </div>
  );
}
