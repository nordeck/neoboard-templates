// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

/**
 * Colour theme of the gallery. Dark is the default (design handoff) and is also used on
 * neoboard.io; GALLERY_THEME=light switches to the light tokens. Previews always stay light.
 */
export const THEME: 'dark' | 'light' = process.env.GALLERY_THEME === 'light' ? 'light' : 'dark';
