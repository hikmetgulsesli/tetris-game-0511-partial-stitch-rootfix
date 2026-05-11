// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Next Piece Preview
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

export type NextPiecePreviewActionId = "account-circle-1" | "new-game-2";

export interface NextPiecePreviewProps {
  actions?: Partial<Record<NextPiecePreviewActionId, () => void>>;
}

export function NextPiecePreview({ actions }: NextPiecePreviewProps) {
  return (
    <>
      {/* Top Navigation Bar (Shared Component) */}
      <nav className="bg-surface dark:bg-surface flex justify-between items-center w-full px-lg py-md max-w-full z-50 h-[64px] border-b border-outline-variant dark:border-outline-variant docked full-width top-0 absolute top-0 left-0">
      <div className="flex items-center gap-lg">
      <span className="text-headline-md font-headline-md tracking-tighter text-primary dark:text-primary">TETRA_CORE</span>
      <div className="hidden md:flex gap-md">
      <a className="text-primary dark:text-primary border-b-2 border-primary pb-1 font-bold text-label-sm font-label-sm scale-95 transition-transform duration-150 focus:ring-2 focus:ring-secondary" href="#">GAME</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">LEADERBOARD</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">SETTINGS</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">HELP</a>
      </div>
      </div>
      <div className="flex items-center">
      <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center justify-center h-touch-target w-touch-target" type="button" data-action-id="account-circle-1" onClick={actions?.["account-circle-1"]}>
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto flex gap-xl mt-[64px]">
      {/* Side Navigation Bar (Shared Component) */}
      <aside className="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-[64px] pb-lg w-[280px] z-40 bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant">
      <div className="p-md mb-md border-b border-outline-variant flex items-center gap-md">
      <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      <div>
      <h2 className="text-label-sm font-label-sm text-primary">OPERATOR_01</h2>
      <p className="text-label-mono font-label-mono text-on-surface-variant text-[10px]">LVL 42 PRESTIGE</p>
      </div>
      </div>
      <nav className="flex-1 flex flex-col gap-xs py-md">
      <a className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm translate-x-1 duration-200" href="#">
      <span className="material-symbols-outlined">videogame_asset</span>
                          SOLO MODE
                      </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined">swords</span>
                          VERSUS
                      </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined">exercise</span>
                          PRACTICE
                      </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-sm text-label-sm font-label-sm hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-all" href="#">
      <span className="material-symbols-outlined">auto_awesome</span>
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
      {/* T-Piece Grid Representation */}
      <div className="grid grid-cols-3 gap-[2px]">
      <div className="w-6 h-6 bg-[#A855F7] border border-white/20"></div>
      <div className="w-6 h-6 bg-[#A855F7] border border-white/20"></div>
      <div className="w-6 h-6 bg-[#A855F7] border border-white/20"></div>
      <div className="w-6 h-6 col-start-2 bg-[#A855F7] border border-white/20"></div>
      </div>
      </div>
      {/* Next Piece 2 (Smaller, secondary) */}
      <div className="w-full aspect-square bg-surface-container-lowest border border-[#334155] rounded flex items-center justify-center relative p-xs opacity-80">
      {/* S-Piece Grid Representation */}
      <div className="grid grid-cols-3 gap-[2px]">
      <div className="w-4 h-4 col-start-2 bg-[#22C55E] border border-white/20"></div>
      <div className="w-4 h-4 bg-[#22C55E] border border-white/20"></div>
      <div className="w-4 h-4 col-start-1 bg-[#22C55E] border border-white/20"></div>
      <div className="w-4 h-4 bg-[#22C55E] border border-white/20"></div>
      </div>
      </div>
      {/* Next Piece 3 (Smallest, tertiary) */}
      <div className="w-full aspect-square bg-surface-container-lowest border border-[#334155] rounded flex items-center justify-center relative p-xs opacity-60">
      {/* I-Piece Grid Representation */}
      <div className="grid grid-rows-4 gap-[2px]">
      <div className="w-4 h-4 bg-[#06B6D4] border border-white/20"></div>
      <div className="w-4 h-4 bg-[#06B6D4] border border-white/20"></div>
      <div className="w-4 h-4 bg-[#06B6D4] border border-white/20"></div>
      <div className="w-4 h-4 bg-[#06B6D4] border border-white/20"></div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
