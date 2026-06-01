import type { GameManifest } from "@open-party-lab/game-core";

export const magicDuellManifest = {
  id: "magic-duell",
  displayName: "Magic Duell",
  description: "Statisches 3D-Magierduell mit gezeichneten Handy-Zaubern.",
  minPlayers: 2,
  maxPlayers: 2,
  hostView: "MageDuel3dHostScene",
  controllerView: "magic-duell",
  controllerLayout: "spell_casting",
  supportsTeams: false,
  estimatedRoundDurationMs: 120_000,
  roundCompletionMode: "wait_for_ready",
  phaseDurations: {
    roundIntroMs: 1_600,
    countdownMs: 2_200,
    lockedMs: 2_200,
    resultMs: 5_000,
    scoreboardMs: 5_000
  }
} as const satisfies GameManifest;

export const manifest = magicDuellManifest;
