// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

export type GameOverActionId = "replay-play-again-1" | "share-share-score-2" | "home-main-menu-3";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* OVERLAY BACKGROUND (Blurred out game board simulation) */}
      <div className="fixed inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
      <div className="w-board-width h-[640px] border border-outline-variant bg-surface-container-low grid grid-cols-10 grid-rows-20 gap-[1px] p-[1px]">
      {/* Simulated grid lines */}
      <div className="col-span-10 row-span-20 grid grid-cols-10 grid-rows-20 gap-[1px]">
      
      </div>
      </div>
      </div>
      {/* MAIN OVERLAY UI */}
      <div className="relative z-10 flex-grow flex items-center justify-center p-md bg-[#0F172A]/70 backdrop-blur-[12px]">
      <div className="w-full max-w-md bg-surface border border-outline-variant rounded-lg shadow-2xl flex flex-col items-center pt-xl pb-xl px-lg">
      {/* HEADER */}
      <div className="text-center mb-xl">
      <h1 className="text-display font-display text-primary tracking-tighter mb-sm">GAME OVER</h1>
      <p className="text-body-md font-body-md text-on-surface-variant uppercase tracking-widest">End of Simulation</p>
      </div>
      {/* HIGH SCORE BADGE */}
      <div className="bg-secondary-container/20 border border-secondary text-secondary rounded-full px-md py-xs flex items-center gap-sm mb-lg">
      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>trophy</span>
      <span className="text-label-sm font-label-sm uppercase tracking-wider">New Personal Best</span>
      </div>
      {/* STATS BENTO GRID */}
      <div className="w-full grid grid-cols-2 gap-sm mb-xl">
      {/* FINAL SCORE (Large spanning top) */}
      <div className="col-span-2 bg-surface-container border border-outline-variant rounded p-md flex flex-col items-center justify-center h-[120px]">
      <span className="text-label-sm font-label-sm text-on-surface-variant mb-xs">FINAL SCORE</span>
      <span className="text-headline-lg font-label-mono text-primary">142,850</span>
      </div>
      {/* LEVEL */}
      <div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col items-center justify-center h-[96px]">
      <span className="text-label-sm font-label-sm text-on-surface-variant mb-xs">LEVEL REACHED</span>
      <span className="text-headline-md font-label-mono text-primary">12</span>
      </div>
      {/* LINES */}
      <div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col items-center justify-center h-[96px]">
      <span className="text-label-sm font-label-sm text-on-surface-variant mb-xs">LINES CLEARED</span>
      <span className="text-headline-md font-label-mono text-primary">114</span>
      </div>
      </div>
      {/* ACTIONS */}
      <div className="w-full flex flex-col gap-sm">
      {/* Primary Action */}
      <button className="w-full bg-primary text-on-primary h-touch-target rounded flex items-center justify-center gap-sm hover:brightness-110 active:scale-95 transition-all" type="button" data-action-id="replay-play-again-1" onClick={actions?.["replay-play-again-1"]}>
      <span className="material-symbols-outlined">replay</span>
      <span className="text-label-sm font-label-sm">PLAY AGAIN</span>
      </button>
      <div className="flex gap-sm">
      {/* Secondary Actions */}
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface h-touch-target rounded flex items-center justify-center gap-sm hover:bg-surface-container-high transition-colors" type="button" data-action-id="share-share-score-2" onClick={actions?.["share-share-score-2"]}>
      <span className="material-symbols-outlined">share</span>
      <span className="text-label-sm font-label-sm">SHARE SCORE</span>
      </button>
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface h-touch-target rounded flex items-center justify-center gap-sm hover:bg-surface-container-high transition-colors" type="button" data-action-id="home-main-menu-3" onClick={actions?.["home-main-menu-3"]}>
      <span className="material-symbols-outlined">home</span>
      <span className="text-label-sm font-label-sm">MAIN MENU</span>
      </button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
