// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

export type PauseOverlayActionId = "resume-1" | "restart-2" | "main-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
  score?: number;
  level?: number;
  lines?: number;
  elapsedTime?: string;
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export function PauseOverlay({ actions, score = 0, level = 1, lines = 0, elapsedTime = '00:00' }: PauseOverlayProps) {
  return (
    <>
      {/* Mock Game Background (Blurred) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 blur-[12px]">
      <div className="w-board-width h-[640px] border border-outline-variant bg-surface-container relative">
      {/* Simulated Tetrominoes */}
      <div className="absolute bottom-0 left-[80px] w-[80px] h-[40px] bg-secondary-fixed opacity-60"></div>
      <div className="absolute bottom-[40px] left-[120px] w-[40px] h-[40px] bg-primary-fixed opacity-60"></div>
      <div className="absolute top-[200px] left-[160px] w-[40px] h-[160px] bg-tertiary-fixed opacity-60"></div>
      </div>
      </div>
      {/* Pause Overlay Canvas */}
      <main className="relative z-50 flex-grow flex items-center justify-center w-full h-full p-lg backdrop-blur-[12px] bg-[#0F172A]/70">
      {/* Pause Dialog Container */}
      <div className="bg-surface-container border border-outline flex flex-col items-center justify-center p-xl w-full max-w-[400px]">
      {/* Header */}
      <div className="mb-xl text-center">
      <span className="material-symbols-outlined text-display text-primary mb-md block" style={{fontVariationSettings: "'FILL' 1"}}>pause_circle</span>
      <h1 className="text-display font-display text-primary tracking-tighter">GAME PAUSED</h1>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-md">
      {/* Primary Action: Resume */}
      <button className="w-full h-touch-target bg-primary text-on-primary flex items-center justify-center border border-primary hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-0 focus:ring-offset-surface-container" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <span className="text-label-mono font-label-mono uppercase">Resume</span>
      </button>
      {/* Secondary Action: Restart */}
      <button className="w-full h-touch-target bg-transparent text-primary flex items-center justify-center border border-outline-variant hover:bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-0 focus:ring-offset-surface-container" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <span className="text-label-mono font-label-mono uppercase">Restart</span>
      </button>
      {/* Tertiary Action: Main Menu */}
      <button className="w-full h-touch-target bg-transparent text-on-surface-variant flex items-center justify-center border border-outline-variant hover:text-on-surface hover:border-outline focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-0 focus:ring-offset-surface-container mt-md" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <span className="text-label-mono font-label-mono uppercase">Main Menu</span>
      </button>
      </div>
      {/* Contextual Stats Snippet (Optional but adds to the high-performance feel) */}
      <div className="mt-xl w-full flex justify-between border-t border-outline-variant pt-md">
      <div className="flex flex-col">
      <span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Current Score</span>
      <span className="text-label-mono font-label-mono text-primary" data-testid="current-score">{formatNumber(score)}</span>
      </div>
      <div className="flex flex-col text-right">
      <span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Time</span>
      <span className="text-label-mono font-label-mono text-primary" data-testid="elapsed-time">{elapsedTime}</span>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
