// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

export type GameOptionsActionId = "account-circle-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "rebind-controls-6" | "reset-defaults-7" | "apply-changes-8";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant w-full px-lg py-md z-50 h-[64px] flex justify-between items-center fixed top-0">
      <div className="text-headline-md font-headline-md tracking-tighter text-primary dark:text-primary">
                  TETRA_CORE
              </div>
      <nav className="hidden md:flex space-x-lg">
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">GAME</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">LEADERBOARD</a>
      <a className="text-primary dark:text-primary border-b-2 border-primary pb-1 font-bold text-label-sm font-label-sm scale-95 transition-transform duration-150 focus:ring-2 focus:ring-secondary" href="#">SETTINGS</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-medium text-label-sm font-label-sm hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">HELP</a>
      </nav>
      <div className="flex items-center">
      <button className="text-primary dark:text-primary hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center justify-center w-touch-target h-touch-target" type="button" data-action-id="account-circle-1" onClick={actions?.["account-circle-1"]}>
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      <div className="flex flex-1 pt-[64px]">
      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-lg py-xl">
      <h1 className="text-display font-display text-primary mb-xl">System Setup</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Audio Settings Panel */}
      <section className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm mb-sm border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-secondary" data-icon="volume_up">volume_up</span>
      <h2 className="text-headline-md font-headline-md text-primary">Audio</h2>
      </div>
      {/* Master Volume */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="text-label-sm font-label-sm text-on-surface-variant">Master Volume</label>
      <span className="text-label-mono font-label-mono text-primary">100%</span>
      </div>
      <input className="w-full h-1 bg-surface-variant rounded-full appearance-none slider-thumb outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-surface-container" max="100" min="0" type="range" value="100" />
      </div>
      {/* Music Toggle */}
      <div className="flex justify-between items-center mt-sm">
      <label className="text-body-md font-body-md text-on-surface">Music</label>
      <button aria-pressed="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-surface transition-transform"></span>
      </button>
      </div>
      {/* SFX Toggle */}
      <div className="flex justify-between items-center">
      <label className="text-body-md font-body-md text-on-surface">Sound Effects</label>
      <button aria-pressed="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-surface transition-transform"></span>
      </button>
      </div>
      </section>
      {/* Difficulty Settings Panel */}
      <section className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm mb-sm border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-secondary" data-icon="speed">speed</span>
      <h2 className="text-headline-md font-headline-md text-primary">Difficulty</h2>
      </div>
      {/* Starting Level */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="text-label-sm font-label-sm text-on-surface-variant">Starting Level</label>
      <span className="text-label-mono font-label-mono text-primary">LVL 01</span>
      </div>
      <input className="w-full h-1 bg-surface-variant rounded-full appearance-none slider-thumb outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-surface-container" max="15" min="1" type="range" value="1" />
      <div className="flex justify-between text-label-mono font-label-mono text-on-surface-variant text-xs opacity-50 mt-1">
      <span>1</span>
      <span>15</span>
      </div>
      </div>
      {/* Ghost Piece Toggle */}
      <div className="flex justify-between items-center mt-sm">
      <div className="flex flex-col">
      <label className="text-body-md font-body-md text-on-surface">Ghost Piece</label>
      <span className="text-label-sm font-label-sm text-on-surface-variant">Show drop preview</span>
      </div>
      <button aria-pressed="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-surface transition-transform"></span>
      </button>
      </div>
      </section>
      {/* Controls Settings Panel */}
      <section className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md md:col-span-2">
      <div className="flex items-center gap-sm mb-sm border-b border-outline-variant pb-sm">
      <span className="material-symbols-outlined text-secondary" data-icon="gamepad">gamepad</span>
      <h2 className="text-headline-md font-headline-md text-primary">Controls</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      <div className="flex flex-col gap-md">
      {/* Sensitivity */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <label className="text-label-sm font-label-sm text-on-surface-variant">Input Sensitivity</label>
      <span className="text-label-mono font-label-mono text-primary">High</span>
      </div>
      <input className="w-full h-1 bg-surface-variant rounded-full appearance-none slider-thumb outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-surface-container" max="3" min="1" type="range" value="3" />
      </div>
      {/* Vibration Toggle */}
      <div className="flex justify-between items-center mt-sm">
      <div className="flex flex-col">
      <label className="text-body-md font-body-md text-on-surface">Haptic Feedback</label>
      <span className="text-label-sm font-label-sm text-on-surface-variant">Controller vibration</span>
      </div>
      <button aria-pressed="false" className="relative inline-flex h-6 w-11 items-center rounded-full bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-outline-variant transition-transform"></span>
      </button>
      </div>
      </div>
      {/* Keybinding Preview (Static for design) */}
      <div className="bg-surface rounded-lg border border-outline-variant p-md">
      <h3 className="text-label-sm font-label-sm text-on-surface-variant mb-md uppercase tracking-wider">Current Bindings</h3>
      <div className="space-y-sm">
      <div className="flex justify-between items-center py-xs border-b border-surface-variant">
      <span className="text-body-md font-body-md text-on-surface">Move Left</span>
      <kbd className="text-label-mono font-label-mono text-primary bg-surface-container px-2 py-1 rounded border border-outline-variant">Left Arrow</kbd>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-surface-variant">
      <span className="text-body-md font-body-md text-on-surface">Move Right</span>
      <kbd className="text-label-mono font-label-mono text-primary bg-surface-container px-2 py-1 rounded border border-outline-variant">Right Arrow</kbd>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-surface-variant">
      <span className="text-body-md font-body-md text-on-surface">Rotate</span>
      <kbd className="text-label-mono font-label-mono text-primary bg-surface-container px-2 py-1 rounded border border-outline-variant">Up Arrow</kbd>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-surface-variant">
      <span className="text-body-md font-body-md text-on-surface">Hard Drop</span>
      <kbd className="text-label-mono font-label-mono text-primary bg-surface-container px-2 py-1 rounded border border-outline-variant">Spacebar</kbd>
      </div>
      </div>
      <button className="mt-md w-full py-2 border border-outline-variant rounded text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE]" type="button" data-action-id="rebind-controls-6" onClick={actions?.["rebind-controls-6"]}>
                                      REBIND CONTROLS
                                  </button>
      </div>
      </div>
      </section>
      {/* Action Buttons */}
      <div className="md:col-span-2 flex justify-end gap-md mt-md">
      <button className="px-lg py-sm border border-outline-variant text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] min-h-[44px] min-w-[44px]" type="button" data-action-id="reset-defaults-7" onClick={actions?.["reset-defaults-7"]}>
                              RESET DEFAULTS
                          </button>
      <button className="px-lg py-sm bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-surface-tint transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] min-h-[44px] min-w-[44px]" type="button" data-action-id="apply-changes-8" onClick={actions?.["apply-changes-8"]}>
                              APPLY CHANGES
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
