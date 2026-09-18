const svg = (body: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

export const SIGNAL_ICON = svg(`
  <path d="M4 19v-3" />
  <path d="M9.3 19v-7" />
  <path d="M14.7 19v-11" />
  <path d="M20 19V5" />
`);

export const HEADSET_ICON = svg(`
  <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
  <rect x="2" y="13" width="4.5" height="7" rx="2.25" />
  <rect x="17.5" y="13" width="4.5" height="7" rx="2.25" />
`);

export const TRUCK_ICON = svg(`
  <path d="M2.5 6.5h10.5v9H2.5z" />
  <path d="M13 10h3.8l3.7 3.4v2.1H13z" />
  <circle cx="6.5" cy="18.3" r="1.9" />
  <circle cx="16.6" cy="18.3" r="1.9" />
`);

export const DOCUMENT_ICON = svg(`
  <path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z" />
  <path d="M13.5 3v5.5H19" />
  <path d="M9 13.5h6" />
  <path d="M9 17h4" />
`);

