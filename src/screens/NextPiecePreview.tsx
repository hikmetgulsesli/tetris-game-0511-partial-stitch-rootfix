// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Next Piece Preview
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { getTetromino, TetrominoType } from '../types/domain';

export type NextPiecePreviewActionId = "account-circle-1" | "new-game-2";

export interface NextPiecePreviewProps {
  nextPieces?: TetrominoType[];
  actions?: Partial<Record<NextPiecePreviewActionId, () => void>>;
}

/* Inline SVG icons — Material Symbols are not allowed by design contract */
function AccountCircleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 18c0-2 2.5-3 5-3s5 1 5 3" />
    </svg>
  );
}

function PersonIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

function GamepadIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="6" />
      <path d="M6 12h4" />
      <path d="M8 10v4" />
      <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SwordsIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 17.5L3 6l4-4 11.5 11.5" />
      <path d="M13 19l6-6" />
      <path d="M16 16l4 4" />
      <path d="M19 21l2-2" />
    </svg>
  );
}

function ExerciseIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4" r="2" />
      <path d="M10 8l-3 6h2l1 6" />
      <path d="M14 8l3 6h-2l-1 6" />
    </svg>
  );
}

function SparkleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
      <path d="M18 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </svg>
  );
}

function MiniPiece({ type, size = 'md' }: { type: TetrominoType; size?: 'md' | 'sm' | 'xs' }) {
  const tetromino = getTetromino(type);
  if (!tetromino) return null;
  const shape = tetromino.shape;
  const rows = shape.length;
  const cols = shape[0].length;
  const cellSize = size === 'md' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-3 h-3';
  return (
    <div
      className="next-grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '2px',
      }}
    >
      {shape.map((row, ri) =>
        row.map((cell, ci) => (
          <div
            key={`${ri}-${ci}`}
            className={cellSize}
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

export function NextPiecePreview({ nextPieces = [], actions }: NextPiecePreviewProps) {
  const primary = nextPieces[0];
  const secondary = nextPieces[1];
  const tertiary = nextPieces[2];

  return (
    <>
      {/* Top Navigation Bar (Shared Component) */}
      <nav className="bg-surface dark:bg-surface flex justify-between items-center w-full px-lg py-md max-w-full z-50 h-[64px] border-b border-outline-variant dark:border-outline-variant docked full-width top-0 absolute top-0 left-0">
        <div className="flex items-center gap-lg">
          <span className="text-headline-md font-headline-md tracking-tighter text-primary dark:text-primary">TETRA_CORE</span>
          <div className="hidden md:flex gap-md">
            <a href="#" className="text-primary dark:text-primary border-b-2 border-primary pb-1 font-bold text-label-sm font-label-sm scale-95 transition-transform duration-150 focus:ring-2 focus:ring-secondary">GAME</a>
            <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200">LEADERBOARD</a>
            <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200">SETTINGS</a>
            <a href="#" className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200">HELP</a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center justify-center h-touch-target w-touch-target" type="button" data-action-id="account-circle-1" onClick={actions?.["account-circle-1"]} aria-label="Account">
            <AccountCircleIcon />
          </button>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto flex gap-xl mt-[64px]">
        {/* Side Navigation Bar (Shared Component) */}
        <aside className="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-[64px] pb-lg w-[280px] z-40 bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant">
          <div className="p-md mb-md border-b border-outline-variant flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden">
              <PersonIcon className="text-on-surface-variant" />
            </div>
            <div>
              <h2 className="text-label-sm font-label-sm text-primary">OPERATOR_01</h2>
              <p className="text-label-mono font-label-mono text-on-surface-variant text-[10px]">LVL 42 PRESTIGE</p>
            </div>
          </div>
          <nav className="flex-1 flex flex-col gap-xs py-md">
            <a href="#" className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm translate-x-1 duration-200">
              <GamepadIcon />
              SOLO MODE
            </a>
            <a href="#" className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200">
              <SwordsIcon />
              VERSUS
            </a>
            <a href="#" className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200">
              <ExerciseIcon />
              PRACTICE
            </a>
            <a href="#" className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200">
              <SparkleIcon />
              ZEN
            </a>
          </nav>
          <div className="p-md">
            <button className="w-full bg-primary text-on-primary py-sm rounded text-label-sm font-label-sm hover:bg-surface-tint transition-colors focus:ring-2 focus:ring-secondary focus:outline-none" type="button" data-action-id="new-game-2" onClick={actions?.["new-game-2"]}>
              NEW GAME
            </button>
          </div>
        </aside>
        {/* Canvas for Next Queue Widget */}
        <div className="flex-1 flex items-center justify-center lg:ml-[280px]">
          {/* Next Queue Widget Container */}
          <div className="bg-[#111827] border border-[#334155] rounded-lg p-md w-[140px] flex flex-col items-center gap-md shadow-lg shadow-black/50">
            {/* Widget Header */}
            <div className="w-full border-b border-[#334155] pb-sm mb-sm text-center">
              <h3 className="text-label-sm font-label-sm text-on-surface uppercase tracking-widest text-outline">NEXT</h3>
            </div>
            {/* Next Piece 1 (Primary focus, slightly larger/more prominent) */}
            <div className="w-full aspect-square bg-surface-container-lowest border border-[#334155] rounded flex items-center justify-center relative p-sm mb-sm">
              {primary ? (
                <MiniPiece type={primary} size="md" />
              ) : (
                <div className="w-6 h-6 border border-white/20" />
              )}
            </div>
            {/* Next Piece 2 (Smaller, secondary) */}
            <div className="w-full aspect-square bg-surface-container-lowest border border-[#334155] rounded flex items-center justify-center relative p-xs opacity-80">
              {secondary ? (
                <MiniPiece type={secondary} size="sm" />
              ) : (
                <div className="w-4 h-4 border border-white/20" />
              )}
            </div>
            {/* Next Piece 3 (Smallest, tertiary) */}
            <div className="w-full aspect-square bg-surface-container-lowest border border-[#334155] rounded flex items-center justify-center relative p-xs opacity-60">
              {tertiary ? (
                <MiniPiece type={tertiary} size="xs" />
              ) : (
                <div className="w-3 h-3 border border-white/20" />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
