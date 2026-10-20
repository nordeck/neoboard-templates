// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

/**
 * Colour theme of the gallery. Dark is the default (design handoff); neoboard.io is light-only,
 * so the embedded build there sets GALLERY_THEME=light. Previews always stay light.
 */
export const THEME: 'dark' | 'light' = process.env.GALLERY_THEME === 'light' ? 'light' : 'dark';
