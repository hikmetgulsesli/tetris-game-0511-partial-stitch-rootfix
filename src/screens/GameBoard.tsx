// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useMemo } from 'react';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  Cell,
  createEmptyBoard,
  getShape,
  getTetromino,
  TetrominoType,
} from '../types/domain';

export type GameBoardActionId = "account-circle-1" | "new-game-2" | "pause-pause-3";

export interface GameBoardProps {
  board?: Cell[][];
  currentPiece?: { type: TetrominoType; x: number; y: number; rotation: number } | null;
  nextPiece?: TetrominoType | null;
  holdPiece?: TetrominoType | null;
  ghostY?: number;
  score?: number;
  level?: number;
  lines?: number;
  highScore?: number;
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

/* Inline SVG icons */
function IconAccount({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconPerson({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconGame({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4" />
      <path d="M8 10v4" />
      <circle cx="17" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function IconSwords({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
      <path d="m13 19 6-6" />
      <path d="m16 16 4 4" />
      <path d="m19 21 2-2" />
    </svg>
  );
}

function IconExercise({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 6.5h11" />
      <path d="M6.5 17.5h11" />
      <path d="M6 20v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
      <path d="M6 4v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4" />
    </svg>
  );
}

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function IconPause({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

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
          rendered[gy][gx] = `ghost-${piece.type}`;
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
        aspectRatio: `${cols} / ${rows}`,
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

export function GameBoard({
  board = createEmptyBoard(),
  currentPiece,
  nextPiece,
  holdPiece,
  ghostY = 0,
  score = 0,
  level = 1,
  lines = 0,
  highScore = 0,
  actions,
}: GameBoardProps) {
  const renderedBoard = useMemo(
    () => renderBoardWithPiece(board, currentPiece ?? null, ghostY),
    [board, currentPiece, ghostY]
  );

  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface text-primary dark:text-primary flex justify-between items-center w-full px-lg py-md max-w-full z-50 h-[64px] border-b border-outline-variant dark:border-outline-variant docked full-width top-0 fixed top-0">
      <div className="text-headline-md font-headline-md tracking-tighter text-primary dark:text-primary">
                  TETRA_CORE
              </div>
      <div className="hidden md:flex items-center gap-lg">
      <a href="#" className="text-primary dark:text-primary border-b-2 border-primary pb-1 font-bold font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200">GAME</a>
      <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-medium font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200">LEADERBOARD</a>
      <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-medium font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200">SETTINGS</a>
      <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-medium font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200">HELP</a>
      </div>
      <div className="flex items-center">
      <button className="hover:text-primary dark:hover:text-primary transition-colors duration-200 scale-95 transition-transform duration-150 focus:ring-2 focus:ring-secondary rounded-full p-xs" type="button" data-action-id="account-circle-1" onClick={actions?.["account-circle-1"]} aria-label="Account">
      <IconAccount className="w-6 h-6" />
      </button>
      </div>
      </nav>
      <div className="flex flex-1 pt-[64px]">
      {/* SideNavBar */}
      <aside className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-[64px] pb-lg w-[280px] z-40 border-r border-outline-variant dark:border-outline-variant docked left-0 h-full w-board-width">
      <div className="p-lg border-b border-outline-variant dark:border-outline-variant mb-md">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
      <IconPerson className="w-5 h-5 text-on-surface-variant" />
      </div>
      <div>
      <div className="font-label-sm text-label-sm text-primary">OPERATOR_01</div>
      <div className="font-label-mono text-label-mono text-on-surface-variant text-[10px]">LVL {level} PRESTIGE</div>
      </div>
      </div>
      </div>
      <nav className="flex flex-col gap-xs flex-1">
      <a href="#" className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors transition-transform translate-x-1 duration-200 font-label-sm text-label-sm" onClick={(e) => e.preventDefault()}>
      <IconGame className="w-5 h-5" />
                          SOLO MODE
                      </a>
      <a href="#" className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 font-label-sm text-label-sm" onClick={(e) => e.preventDefault()}>
      <IconSwords className="w-5 h-5" />
                          VERSUS
                      </a>
      <a href="#" className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 font-label-sm text-label-sm" onClick={(e) => e.preventDefault()}>
      <IconExercise className="w-5 h-5" />
                          PRACTICE
                      </a>
      <a href="#" className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 font-label-sm text-label-sm" onClick={(e) => e.preventDefault()}>
      <IconSparkles className="w-5 h-5" />
                          ZEN
                      </a>
      </nav>
      <div className="p-md mt-auto">
      <button className="w-full bg-primary text-on-primary py-sm px-md rounded-DEFAULT font-label-sm text-label-sm hover:brightness-110 transition-[filter] duration-200 flex justify-center items-center gap-xs" type="button" data-action-id="new-game-2" onClick={actions?.["new-game-2"]}>
                          NEW GAME
                      </button>
      </div>
      </aside>
      {/* Main Game Canvas */}
      <main className="flex-1 lg:ml-[280px] bg-background flex items-center justify-center p-lg relative">
      {/* Floating Pause Button */}
      <button className="absolute top-lg right-lg flex items-center gap-xs px-md py-sm bg-surface-container text-on-surface border border-outline-variant rounded-md hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-secondary z-10" type="button" data-action-id="pause-pause-3" onClick={actions?.["pause-pause-3"]}>
      <IconPause className="w-[18px] h-[18px]" />
      <span className="font-label-sm text-label-sm">PAUSE</span>
      </button>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-lg lg:gap-xl">
      {/* Left Panel: HOLD & Status */}
      <div className="flex flex-row md:flex-col gap-md">
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col items-center">
      <div className="font-label-sm text-label-sm text-on-surface-variant mb-sm w-full text-left uppercase tracking-wider">HOLD</div>
      <div className="w-[80px] h-[80px] bg-surface-container-lowest border border-surface-variant flex items-center justify-center">
        {holdPiece ? (
          <MiniPiece type={holdPiece} />
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
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">STATUS</div>
      <div className="font-label-mono text-label-mono text-secondary flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                  ACTIVE
                              </div>
      </div>
      </div>
      {/* Center: Game Board (10x20) */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant relative overflow-hidden game-grid w-[250px] h-[500px] sm:w-[300px] sm:h-[600px] shadow-2xl flex-shrink-0">
        <div className="tetris-board">
          {renderedBoard.map((row, ri) =>
            row.map((cell, ci) => {
              const isGhost = typeof cell === 'string' && cell.startsWith('ghost-');
              const type: TetrominoType | null = cell === null ? null : isGhost ? cell.replace('ghost-', '') as TetrominoType : cell as TetrominoType;
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
      <div className="font-label-sm text-label-sm text-on-surface-variant mb-sm w-full text-left uppercase tracking-wider">NEXT</div>
      <div className="w-[80px] h-[80px] bg-surface-container-lowest border border-surface-variant flex items-center justify-center relative">
        {nextPiece ? (
          <MiniPiece type={nextPiece} />
        ) : null}
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col gap-md">
        <StatCard label="SCORE" value={score.toLocaleString()} />
        <div className="h-[1px] w-full bg-outline-variant"></div>
        <StatCard label="LEVEL" value={level} />
        <div className="h-[1px] w-full bg-outline-variant"></div>
        <StatCard label="LINES" value={lines} />
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
