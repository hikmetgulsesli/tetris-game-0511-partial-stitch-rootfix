// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

export type GameBoardActionId = "account-circle-1" | "new-game-2" | "pause-pause-3";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface text-primary dark:text-primary flex justify-between items-center w-full px-lg py-md max-w-full z-50 h-[64px] border-b border-outline-variant dark:border-outline-variant fixed top-0 docked full-width top-0">
      <div className="text-headline-md font-headline-md tracking-tighter text-primary dark:text-primary">
                  TETRA_CORE
              </div>
      <div className="hidden md:flex items-center gap-lg">
      <a className="text-primary dark:text-primary border-b-2 border-primary pb-1 font-bold font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">GAME</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">LEADERBOARD</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">SETTINGS</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium font-label-sm text-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">HELP</a>
      </div>
      <div className="flex items-center">
      <button className="hover:text-primary dark:hover:text-primary transition-colors duration-200 scale-95 transition-transform duration-150 focus:ring-2 focus:ring-secondary rounded-full p-xs" type="button" data-action-id="account-circle-1" onClick={actions?.["account-circle-1"]}>
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </nav>
      <div className="flex flex-1 pt-[64px]">
      {/* SideNavBar */}
      <aside className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-[64px] pb-lg w-[280px] z-40 border-r border-outline-variant dark:border-outline-variant docked left-0 h-full w-board-width">
      <div className="p-lg border-b border-outline-variant dark:border-outline-variant mb-md">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      <div>
      <div className="font-label-sm text-label-sm text-primary">OPERATOR_01</div>
      <div className="font-label-mono text-label-mono text-on-surface-variant text-[10px]">LVL 42 PRESTIGE</div>
      </div>
      </div>
      </div>
      <nav className="flex flex-col gap-xs flex-1">
      <a className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-all translate-x-1 duration-200 font-label-sm text-label-sm" href="#">
      <span className="material-symbols-outlined" data-icon="videogame_asset">videogame_asset</span>
                          SOLO MODE
                      </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-all font-label-sm text-label-sm" href="#">
      <span className="material-symbols-outlined" data-icon="swords">swords</span>
                          VERSUS
                      </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-all font-label-sm text-label-sm" href="#">
      <span className="material-symbols-outlined" data-icon="exercise">exercise</span>
                          PRACTICE
                      </a>
      <a className="text-on-surface-variant hover:text-on-surface mx-2 flex items-center gap-md p-md hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-all font-label-sm text-label-sm" href="#">
      <span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
                          ZEN
                      </a>
      </nav>
      <div className="p-md mt-auto">
      <button className="w-full bg-primary text-on-primary py-sm px-md rounded-DEFAULT font-label-sm text-label-sm hover:brightness-110 transition-all flex justify-center items-center gap-xs" type="button" data-action-id="new-game-2" onClick={actions?.["new-game-2"]}>
                          NEW GAME
                      </button>
      </div>
      </aside>
      {/* Main Game Canvas */}
      <main className="flex-1 lg:ml-[280px] bg-background flex items-center justify-center p-lg relative">
      {/* Floating Pause Button */}
      <button className="absolute top-lg right-lg flex items-center gap-xs px-md py-sm bg-surface-container text-on-surface border border-outline-variant rounded-md hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-secondary z-10" type="button" data-action-id="pause-pause-3" onClick={actions?.["pause-pause-3"]}>
      <span className="material-symbols-outlined text-[18px]">pause</span>
      <span className="font-label-sm text-label-sm">PAUSE</span>
      </button>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-lg lg:gap-xl">
      {/* Left Panel: HOLD & Status */}
      <div className="flex flex-row md:flex-col gap-md">
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col items-center">
      <div className="font-label-sm text-label-sm text-on-surface-variant mb-sm w-full text-left uppercase tracking-wider">HOLD</div>
      {/* Empty Hold Box */}
      <div className="w-[80px] h-[80px] bg-surface-container-lowest border border-surface-variant flex items-center justify-center">
      {/* Ghost piece representation */}
      <div className="grid grid-cols-4 grid-rows-2 gap-[1px] opacity-20">
      <div className="col-start-2 w-4 h-4 border border-primary"></div>
      <div className="col-start-3 w-4 h-4 border border-primary"></div>
      <div className="row-start-2 col-start-2 w-4 h-4 border border-primary"></div>
      <div className="row-start-2 col-start-3 w-4 h-4 border border-primary"></div>
      </div>
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
      {/* Assuming a 30px per block scale for visual clarity on web */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant relative overflow-hidden game-grid w-[250px] h-[500px] sm:w-[300px] sm:h-[600px] shadow-2xl flex-shrink-0">
      {/* Active Piece (T-Tetromino in Purple) */}
      <div className="absolute top-[20%] left-[40%] w-[30%] h-[10%] flex flex-col gap-[1px]">
      <div className="flex justify-center w-full h-1/2 gap-[1px]">
      <div className="w-1/3 h-full bg-[#a855f7] border border-[#d8b4fe]"></div>
      </div>
      <div className="flex w-full h-1/2 gap-[1px]">
      <div className="w-1/3 h-full bg-[#a855f7] border border-[#d8b4fe]"></div>
      <div className="w-1/3 h-full bg-[#a855f7] border border-[#d8b4fe]"></div>
      <div className="w-1/3 h-full bg-[#a855f7] border border-[#d8b4fe]"></div>
      </div>
      </div>
      {/* Ghost Piece (at the bottom) */}
      <div className="absolute bottom-[15%] left-[40%] w-[30%] h-[10%] flex flex-col gap-[1px] opacity-40">
      <div className="flex justify-center w-full h-1/2 gap-[1px]">
      <div className="w-1/3 h-full border border-primary"></div>
      </div>
      <div className="flex w-full h-1/2 gap-[1px]">
      <div className="w-1/3 h-full border border-primary"></div>
      <div className="w-1/3 h-full border border-primary"></div>
      <div className="w-1/3 h-full border border-primary"></div>
      </div>
      </div>
      {/* Stacked Pieces (Bottom) */}
      {/* L-Piece Orange */}
      <div className="absolute bottom-0 right-[10%] w-[20%] h-[15%] flex gap-[1px]">
      <div className="w-1/2 h-full flex flex-col gap-[1px] justify-end">
      <div className="w-full h-1/3 bg-[#f97316] border border-[#fdba74]"></div>
      </div>
      <div className="w-1/2 h-full flex flex-col gap-[1px]">
      <div className="w-full h-1/3 bg-[#f97316] border border-[#fdba74]"></div>
      <div className="w-full h-1/3 bg-[#f97316] border border-[#fdba74]"></div>
      <div className="w-full h-1/3 bg-[#f97316] border border-[#fdba74]"></div>
      </div>
      </div>
      {/* Square Yellow */}
      <div className="absolute bottom-0 left-[20%] w-[20%] h-[10%] flex flex-wrap gap-[1px]">
      <div className="w-[calc(50%-0.5px)] h-[calc(50%-0.5px)] bg-[#eab308] border border-[#fde047]"></div>
      <div className="w-[calc(50%-0.5px)] h-[calc(50%-0.5px)] bg-[#eab308] border border-[#fde047]"></div>
      <div className="w-[calc(50%-0.5px)] h-[calc(50%-0.5px)] bg-[#eab308] border border-[#fde047]"></div>
      <div className="w-[calc(50%-0.5px)] h-[calc(50%-0.5px)] bg-[#eab308] border border-[#fde047]"></div>
      </div>
      {/* Line Cyan */}
      <div className="absolute bottom-[10%] left-0 w-[40%] h-[5%] flex gap-[1px]">
      <div className="w-1/4 h-full bg-[#06b6d4] border border-[#67e8f9]"></div>
      <div className="w-1/4 h-full bg-[#06b6d4] border border-[#67e8f9]"></div>
      <div className="w-1/4 h-full bg-[#06b6d4] border border-[#67e8f9]"></div>
      <div className="w-1/4 h-full bg-[#06b6d4] border border-[#67e8f9]"></div>
      </div>
      </div>
      {/* Right Panel: NEXT & Stats */}
      <div className="flex flex-row md:flex-col gap-md">
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col items-center">
      <div className="font-label-sm text-label-sm text-on-surface-variant mb-sm w-full text-left uppercase tracking-wider">NEXT</div>
      <div className="w-[80px] h-[80px] bg-surface-container-lowest border border-surface-variant flex items-center justify-center relative">
      {/* Next Piece (Z-Tetromino Red) */}
      <div className="w-12 h-8 flex flex-col gap-[1px]">
      <div className="flex w-full h-1/2 gap-[1px] justify-start">
      <div className="w-1/2 h-full bg-[#ef4444] border border-[#fca5a5]"></div>
      <div className="w-1/2 h-full bg-[#ef4444] border border-[#fca5a5]"></div>
      </div>
      <div className="flex w-full h-1/2 gap-[1px] justify-end">
      <div className="w-1/2 h-full bg-[#ef4444] border border-[#fca5a5]"></div>
      <div className="w-1/2 h-full bg-[#ef4444] border border-[#fca5a5]"></div>
      </div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md w-[120px] lg:w-[140px] flex flex-col gap-md">
      <div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">SCORE</div>
      <div className="font-label-mono text-label-mono text-primary text-xl">042,950</div>
      </div>
      <div className="h-[1px] w-full bg-outline-variant"></div>
      <div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">LEVEL</div>
      <div className="font-label-mono text-label-mono text-primary text-xl text-secondary">14</div>
      </div>
      <div className="h-[1px] w-full bg-outline-variant"></div>
      <div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">LINES</div>
      <div className="font-label-mono text-label-mono text-primary text-xl">142</div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
