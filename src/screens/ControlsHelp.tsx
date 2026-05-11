// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

export type ControlsHelpActionId = "account-circle-1" | "new-game-2";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg py-md max-w-full z-50 h-[64px] fixed top-0 left-0">
      <div className="flex items-center gap-xl">
      <h1 className="text-headline-md font-headline-md tracking-tighter text-primary">TETRA_CORE</h1>
      <nav className="hidden md:flex gap-lg">
      <a className="text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary transition-colors duration-200" href="#">GAME</a>
      <a className="text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary transition-colors duration-200" href="#">LEADERBOARD</a>
      <a className="text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary transition-colors duration-200" href="#">SETTINGS</a>
      {/* Active Item */}
      <a className="text-primary border-b-2 border-primary pb-1 font-bold text-label-sm font-label-sm scale-95 transition-transform duration-150 focus:ring-2 focus:ring-secondary" href="#">HELP</a>
      </nav>
      </div>
      <div className="flex items-center">
      <button className="flex items-center justify-center w-touch-target h-touch-target text-on-surface hover:text-primary transition-colors" type="button" data-action-id="account-circle-1" onClick={actions?.["account-circle-1"]}>
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container border-r border-outline-variant hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-[64px] pb-lg w-[280px] z-40">
      <div className="p-lg border-b border-outline-variant flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-outline border-opacity-50">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-primary">OPERATOR_01</div>
      <div className="text-label-mono font-label-mono text-on-surface-variant text-[10px]">LVL 42 PRESTIGE</div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-md flex flex-col gap-sm">
      <a className="flex items-center gap-md px-lg py-sm text-on-surface-variant hover:text-on-surface mx-2 hover:bg-surface-container-highest transition-all rounded" href="#">
      <span className="material-symbols-outlined text-[20px]">videogame_asset</span>
      <span className="text-label-sm font-label-sm">SOLO MODE</span>
      </a>
      <a className="flex items-center gap-md px-lg py-sm text-on-surface-variant hover:text-on-surface mx-2 hover:bg-surface-container-highest transition-all rounded" href="#">
      <span className="material-symbols-outlined text-[20px]">swords</span>
      <span className="text-label-sm font-label-sm">VERSUS</span>
      </a>
      <a className="flex items-center gap-md px-lg py-sm text-on-surface-variant hover:text-on-surface mx-2 hover:bg-surface-container-highest transition-all rounded" href="#">
      <span className="material-symbols-outlined text-[20px]">exercise</span>
      <span className="text-label-sm font-label-sm">PRACTICE</span>
      </a>
      <a className="flex items-center gap-md px-lg py-sm text-on-surface-variant hover:text-on-surface mx-2 hover:bg-surface-container-highest transition-all rounded" href="#">
      <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
      <span className="text-label-sm font-label-sm">ZEN</span>
      </a>
      </div>
      <div className="p-lg">
      <button className="w-full bg-primary text-on-primary text-label-sm font-label-sm py-3 rounded hover:brightness-110 transition-all font-bold" type="button" data-action-id="new-game-2" onClick={actions?.["new-game-2"]}>NEW GAME</button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="pt-[64px] lg:pl-[280px] min-h-screen p-lg lg:p-xl flex justify-center bg-background">
      <div className="w-full max-w-5xl flex flex-col gap-xl">
      {/* Header */}
      <div className="flex flex-col gap-xs">
      <h2 className="text-display font-display text-primary">SYSTEM PROTOCOLS</h2>
      <p className="text-body-md font-body-md text-on-surface-variant">Review technical controls and engagement rules before initialization.</p>
      </div>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
      {/* Rules Card (Spans 2 cols on lg) */}
      <div className="lg:col-span-2 bg-surface-container border border-outline-variant rounded-xl p-lg flex flex-col gap-md relative overflow-hidden group hover:border-outline transition-colors">
      <div className="flex items-center gap-sm mb-sm">
      <span className="material-symbols-outlined text-primary">gavel</span>
      <h3 className="text-headline-md font-headline-md text-primary">ENGAGEMENT RULES</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="bg-surface-container-high border border-outline-variant border-opacity-50 p-md rounded flex items-start gap-md">
      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-1">
      <span className="material-symbols-outlined text-[18px]">view_timeline</span>
      </div>
      <div>
      <h4 className="text-label-sm font-label-sm text-primary mb-1">OBJECTIVE: CLEAR LINES</h4>
      <p className="text-body-md font-body-md text-on-surface-variant leading-tight">Complete solid horizontal rows to clear lines and level up. Increased levels yield higher score multipliers.</p>
      </div>
      </div>
      <div className="bg-surface-container-high border border-outline-variant border-opacity-50 p-md rounded flex items-start gap-md">
      <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0 mt-1">
      <span className="material-symbols-outlined text-[18px]">warning</span>
      </div>
      <div>
      <h4 className="text-label-sm font-label-sm text-primary mb-1">CRITICAL FAILURE</h4>
      <p className="text-body-md font-body-md text-on-surface-variant leading-tight">Game ends immediately if stacked pieces breach the top boundary of the containment grid.</p>
      </div>
      </div>
      </div>
      </div>
      {/* Touch Controls Diagram (Spans 1 col, tall) */}
      <div className="lg:col-span-1 lg:row-span-2 bg-surface-container border border-outline-variant rounded-xl p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm mb-sm">
      <span className="material-symbols-outlined text-primary">touch_app</span>
      <h3 className="text-headline-md font-headline-md text-primary">TOUCH INPUT</h3>
      </div>
      <p className="text-body-md font-body-md text-on-surface-variant mb-4">Optimized for mobile terminals. Zones enforce minimum 44px hitboxes.</p>
      {/* Diagram Container */}
      <div className="flex-1 bg-surface border border-outline-variant rounded-lg p-unit relative flex flex-col gap-unit min-h-[300px]">
      {/* Top Zone: Rotate */}
      <div className="flex-1 bg-surface-container-highest border border-dashed border-outline-variant rounded flex items-center justify-center text-on-surface-variant group hover:bg-surface-bright transition-colors relative min-h-[touch-target]">
      <div className="flex flex-col items-center gap-xs">
      <span className="material-symbols-outlined">rotate_right</span>
      <span className="text-label-mono font-label-mono text-[10px]">TAP / ROTATE</span>
      </div>
      </div>
      {/* Middle Zones: Left / Right */}
      <div className="flex-[2] flex gap-unit">
      <div className="flex-1 bg-surface-container-highest border border-dashed border-outline-variant rounded flex items-center justify-center text-on-surface-variant group hover:bg-surface-bright transition-colors relative min-w-[touch-target] min-h-[touch-target]">
      <div className="flex flex-col items-center gap-xs">
      <span className="material-symbols-outlined">arrow_left</span>
      <span className="text-label-mono font-label-mono text-[10px]">TAP L / MOVE L</span>
      </div>
      </div>
      <div className="flex-1 bg-surface-container-highest border border-dashed border-outline-variant rounded flex items-center justify-center text-on-surface-variant group hover:bg-surface-bright transition-colors relative min-w-[touch-target] min-h-[touch-target]">
      <div className="flex flex-col items-center gap-xs">
      <span className="material-symbols-outlined">arrow_right</span>
      <span className="text-label-mono font-label-mono text-[10px]">TAP R / MOVE R</span>
      </div>
      </div>
      </div>
      {/* Bottom Zone: Hard Drop */}
      <div className="flex-1 bg-surface-container-highest border border-dashed border-outline-variant rounded flex items-center justify-center text-on-surface-variant group hover:bg-surface-bright transition-colors relative min-h-[touch-target]">
      <div className="flex flex-col items-center gap-xs">
      <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
      <span className="text-label-mono font-label-mono text-[10px]">SWIPE DOWN / HARD DROP</span>
      </div>
      </div>
      </div>
      </div>
      {/* Keyboard Controls Card (Spans 2 cols on lg) */}
      <div className="lg:col-span-2 bg-surface-container border border-outline-variant rounded-xl p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm mb-sm">
      <span className="material-symbols-outlined text-primary">keyboard</span>
      <h3 className="text-headline-md font-headline-md text-primary">HARDWARE BINDINGS</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-xl gap-y-md">
      {/* Directional */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center border-b border-outline-variant border-opacity-30 pb-2">
      <div className="flex gap-2">
      <kbd className="min-w-[28px] h-[28px] flex items-center justify-center px-1 bg-surface-bright border border-outline-variant rounded text-label-mono font-label-mono text-primary shadow-[0_2px_0_0_#444749]">↑</kbd>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface">Rotate Piece</span>
      </div>
      <div className="flex justify-between items-center border-b border-outline-variant border-opacity-30 pb-2">
      <div className="flex gap-2">
      <kbd className="min-w-[28px] h-[28px] flex items-center justify-center px-1 bg-surface-bright border border-outline-variant rounded text-label-mono font-label-mono text-primary shadow-[0_2px_0_0_#444749]">←</kbd>
      <kbd className="min-w-[28px] h-[28px] flex items-center justify-center px-1 bg-surface-bright border border-outline-variant rounded text-label-mono font-label-mono text-primary shadow-[0_2px_0_0_#444749]">→</kbd>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface">Lateral Movement</span>
      </div>
      <div className="flex justify-between items-center border-b border-outline-variant border-opacity-30 pb-2">
      <div className="flex gap-2">
      <kbd className="min-w-[28px] h-[28px] flex items-center justify-center px-1 bg-surface-bright border border-outline-variant rounded text-label-mono font-label-mono text-primary shadow-[0_2px_0_0_#444749]">↓</kbd>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface">Soft Drop</span>
      </div>
      </div>
      {/* Action Keys */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center border-b border-outline-variant border-opacity-30 pb-2">
      <div className="flex gap-2">
      <kbd className="min-w-[64px] h-[28px] flex items-center justify-center px-2 bg-surface-bright border border-outline-variant rounded text-label-mono font-label-mono text-primary shadow-[0_2px_0_0_#444749]">SPACE</kbd>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface">Hard Drop</span>
      </div>
      <div className="flex justify-between items-center border-b border-outline-variant border-opacity-30 pb-2">
      <div className="flex gap-2">
      <kbd className="min-w-[28px] h-[28px] flex items-center justify-center px-1 bg-surface-bright border border-outline-variant rounded text-label-mono font-label-mono text-primary shadow-[0_2px_0_0_#444749]">P</kbd>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface">Pause Session</span>
      </div>
      <div className="flex justify-between items-center border-b border-outline-variant border-opacity-30 pb-2">
      <div className="flex gap-2">
      <kbd className="min-w-[28px] h-[28px] flex items-center justify-center px-1 bg-surface-bright border border-outline-variant rounded text-label-mono font-label-mono text-primary shadow-[0_2px_0_0_#444749]">R</kbd>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface">Restart Matrix</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
