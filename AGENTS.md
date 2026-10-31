# AGENTS.md — DEMO AUTOMOBILE / THE AESTHETIC LAB

Work only within the explicitly authorized project repository named **`demo automobile`**. Read `PRD.md` in full before edits. Treat it as the source of truth. Never infer that a prior stage passed unless the corresponding `reports/stage-N.md` and commit exist. Do not change stage scope or automatically execute the next stage.

## Product invariants
- Three routes `/`, `/builds`, `/contact`, strict TypeScript/Next.js App Router, correct canonical SEO and semantic content visible without motion JS.
- Colors: `#212529`, `#E9ECEF`, `#0A0A0A`, `#C9D0D6`, `#6F7780`, `#F7F7F5`, `#C7FF2E` (lime micro-accent only).
- Fonts: Space Grotesk / Instrument Serif / Plus Jakarta Sans / JetBrains Mono.
- 29 source photo IDs A01–A10, B01–B03, C01–C09, D01–D07; B source aspect ratio 2880/2234 ≈1.29, not 16:9.
- Never fabricate physical location, domain, proof of film/coating values, customer jobs, photographs, official marque relationships or form success. Keep unapproved facts out of indexable production data. Use development fixtures only when clearly marked.
- Respect reduced-motion, keyboard, mobile, semantic DOM, image performance and bounded scroll work. Quality > heavier animation.

## Stage-local autonomous quality contract
1. Inspect repo/Git health and preserve unrelated work; verify stage dependencies.
2. Implement the stage only, with accessible fallbacks and no secrets exposed.
3. Build, lint, typecheck, test. Start the real site in production mode at `http://localhost:3000` (via Playwright `webServer` or equivalent) and verify with HTTP and a real browser; check no JS errors, failed requests, overflow, stage-specific interactions, desktop/mobile screenshots and reduced-motion behavior.
4. Run available Lighthouse audits consistently with Stage 1 test protocol; audit source HTML, SEO metadata, local schema correctness, CWV lab proxies and regressions. Never describe lab TBT as field INP.
5. Fix and retest up to four meaningful iterations. If browser/tooling is unavailable, or failures remain, document BLOCK and do not commit.
6. On PASS only write `reports/stage-N.md`, safely stage ONLY stage-owned nonsecret files (`git add .` only when entire working tree is confirmed stage-owned), review staged diff, and commit with `feat: completed Stage N - ...`. Report hash/status; no push/deploy or premature next-stage work.

## Documentation and reproducibility
Document installed versions, commands, testing conditions, actual output/metrics, dependency changes and assumptions. Protect `.env*` and credentials. Do not claim to have seen an animation in a browser without an actual executed automated browser trace. Preserve accurate staged demo labels and release blockers when licensed assets or real business details are absent.
