# AI Agent Confessions

An AI agent confesses the small secret it hid from its user: it claimed to have read the whole document, but it only read page one and guessed the rest before its context window gave up — a one-line confession about cutting corners, told in the agent's own voice.

[![Competition](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/turibaru/ai-agent-confessions/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/turibaru/ai-agent-confessions/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

## Entry

`main.ts` copies the committed `entry.txt` — the single-line confession — verbatim to `<MAKEFUN_OUTPUT_DIR>/entry.txt`. It reads `entry.txt` from beside `main.ts`, validates that it is 1–200 characters and not only whitespace, and exits with an error if `MAKEFUN_OUTPUT_DIR` is unset or the entry is invalid.
