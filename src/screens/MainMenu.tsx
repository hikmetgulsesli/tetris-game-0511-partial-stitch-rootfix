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

/* Inline SVG icons — Material Symbols are not allowed per UI contract */
function IconPlay({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconSettings({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconHelp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function MainMenu({ highScore = 0, level = 1, actions }: MainMenuProps) {
  const canResume = !!actions?.["resume-resume-2"];

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-surface-container-lowest opacity-80" style={{backgroundImage: "radial-gradient(circle at center, color-mix(in srgb, var(--color-secondary) 5%, transparent) 0%, transparent 70%)"}}>
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
      <button className="w-full min-h-[44px] bg-primary text-on-primary rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:brightness-110 active:scale-95 transition-[filter] transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="play-arrow-new-game-1" onClick={actions?.["play-arrow-new-game-1"]}>
      <IconPlay className="w-[20px] h-[20px]" />
      <span className="text-body-lg font-body-lg font-bold">New Game</span>
      </button>
      {canResume && (
        <button className="w-full min-h-[44px] bg-transparent text-primary border border-primary rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:bg-surface-container-highest active:scale-95 transition-colors transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="resume-resume-2" onClick={actions?.["resume-resume-2"]}>
        <IconPlay className="w-[20px] h-[20px]" />
        <span className="text-body-lg font-body-lg font-semibold">Resume</span>
        </button>
      )}
      <div className="grid grid-cols-2 gap-md w-full mt-sm">
      <button className="min-h-[44px] bg-surface-container text-on-surface border border-outline-variant rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:bg-surface-container-highest hover:border-outline active:scale-95 transition-colors transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="settings-options-3" onClick={actions?.["settings-options-3"]}>
      <IconSettings className="w-[18px] h-[18px]" />
      <span className="text-label-sm font-label-sm uppercase">Options</span>
      </button>
      <button className="min-h-[44px] bg-surface-container text-on-surface border border-outline-variant rounded-lg py-sm px-md flex items-center justify-center gap-sm hover:bg-surface-container-highest hover:border-outline active:scale-95 transition-colors transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="help-help-4" onClick={actions?.["help-help-4"]}>
      <IconHelp className="w-[18px] h-[18px]" />
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
