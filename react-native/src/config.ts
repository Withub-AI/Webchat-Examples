export const WEBCHAT_CONFIG = {
  /** Set in `.env.local` (see `.env.example`). Ask the Customer Success team for yours. */
  chatKey: process.env.EXPO_PUBLIC_WEBCHAT_CHAT_KEY ?? '',
} as const;
