import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { WebchatLauncher, type WebchatLauncherHandle } from '@withub-ai/webchat-react-native';

import { WEBCHAT_CONFIG } from '../config';
import type { ScreenProps } from '../navigation/Tabs';
import { SupportHome, type Palette } from '../ui/SupportHome';

export function CustomScreen({ onChatOpenChange }: ScreenProps) {
  const chat = useRef<WebchatLauncherHandle>(null);
  const [unread, setUnread] = useState(0);

  return (
    <View style={styles.root}>
      <SupportHome
        palette={PALETTE}
        onTopic={(context) => chat.current?.open(context)}
        note="Sem balão flutuante: quem abre é o botão do cabeçalho."
        headerSlot={
          <Pressable
            onPress={() => chat.current?.open()}
            accessibilityRole="button"
            accessibilityLabel={
              unread > 0 ? `Ajuda, ${unread} mensagens não lidas` : 'Ajuda'
            }
            style={({ pressed }) => [styles.helpButton, pressed && styles.pressed]}
          >
            <Text style={styles.helpText}>Ajuda</Text>
            {unread > 0 ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{unread > 9 ? '9+' : unread}</Text>
              </View>
            ) : null}
          </Pressable>
        }
      />

      <WebchatLauncher
        ref={chat}
        chatKey={WEBCHAT_CONFIG.chatKey}
        showBubble={false}
        onUnreadChange={setUnread}
        onOpenChange={onChatOpenChange}
        greeting="Veio do app, aba customizada"
        appearance={{ chatColor: '#7C3AED' }}
      />
    </View>
  );
}

const PALETTE: Palette = {
  background: '#F7F5FF',
  surface: '#FFFFFF',
  border: '#E9E3FF',
  text: '#1E1B2E',
  muted: '#6B6480',
  accent: '#7C3AED',
  positive: '#22D3A7',
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  helpButton: {
    height: 44,
    paddingHorizontal: 18,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PALETTE.accent,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.85,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#F7F5FF',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
});
