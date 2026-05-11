// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

export type MainMenuActionId = "play-arrow-new-game-1" | "resume-resume-2" | "settings-options-3" | "help-help-4";

export interface MainMenuProps {
  highScore?: number;
  level?: number;
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ highScore = 0, level = 1, actions }: MainMenuProps) {
  const canResume = !!actions?.["resume-resume-2"];

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-surface-container-lowest opacity-80" style={{backgroundImage: "radial-gradient(circle at center, rgba(34, 211, 238, 0.05) 0%, transparent 70%)"}}>
      </div>
      <main className="relative z-10 w-full max-w-2xl px-lg py-xl flex flex-col items-center gap-xl">
      <div className="flex flex-col items-center gap-sm">
      <h1 className="text-display font-display text-primary tracking-tighter">TETRA_CORE</h1>
      <p className="text-label-mono font-label-mono text-on-surface-variant uppercase tracking-widest">v2.1.4_stable</p>
      </div>
      <div className="w-full max-w-sm bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col items-center gap-xs shadow-lg">
      <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wide">High Score</span>
      <span className="text-headline-lg font-headline-lg text-primary font-bold">{highScore.toLocaleString()}</span>
      <span className="text-label-mono font-label-mono text-secondary text-[10px]">LVL {level} PRESTIGE</span>
      </div>
      <nav className="w-full max-w-sm flex flex-col gap-md">
      <button className="w-full min-h-[44px] bg-primary text-on-primary rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:brightness-110 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="play-arrow-new-game-1" onClick={actions?.["play-arrow-new-game-1"]}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
      <span className="text-body-lg font-body-lg font-bold">New Game</span>
      </button>
      {canResume && (
        <button className="w-full min-h-[44px] bg-transparent text-primary border border-primary rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:bg-surface-container-highest active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="resume-resume-2" onClick={actions?.["resume-resume-2"]}>
        <span className="material-symbols-outlined text-[20px]">resume</span>
        <span className="text-body-lg font-body-lg font-semibold">Resume</span>
        </button>
      )}
      <div className="grid grid-cols-2 gap-md w-full mt-sm">
      <button className="min-h-[44px] bg-surface-container text-on-surface border border-outline-variant rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:bg-surface-container-highest hover:border-outline active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="settings-options-3" onClick={actions?.["settings-options-3"]}>
      <span className="material-symbols-outlined text-[18px]">settings</span>
      <span className="text-label-sm font-label-sm uppercase">Options</span>
      </button>
      <button className="min-h-[44px] bg-surface-container text-on-surface border border-outline-variant rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:bg-surface-container-highest hover:border-outline active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="help-help-4" onClick={actions?.["help-help-4"]}>
      <span className="material-symbols-outlined text-[18px]">help</span>
      <span className="text-label-sm font-label-sm uppercase">Help</span>
      </button>
      </div>
      </nav>
      <div className="absolute bottom-lg w-full text-center">
      <p className="text-label-sm font-label-sm text-on-surface-variant/50">PRESS <kbd className="border border-outline-variant rounded px-1 font-label-mono text-[10px]">ENTER</kbd> TO START</p>
      </div>
      </main>
    </>
  );
}
