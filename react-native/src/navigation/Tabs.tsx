import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AboutScreen } from '../screens/AboutScreen';
import { CustomScreen } from '../screens/CustomScreen';
import { DefaultScreen } from '../screens/DefaultScreen';

/** Hand-rolled to keep the example focused; in a real app use `expo-router` or `@react-navigation`. */
const TABS = [
  { key: 'sobre', label: 'Sobre', Screen: AboutScreen },
  { key: 'padrao', label: 'Padrão', Screen: DefaultScreen },
  { key: 'custom', label: 'Customizado', Screen: CustomScreen },
] as const;

export type ScreenProps = {
  onChatOpenChange?: (open: boolean) => void;
};

export function Tabs() {
  const insets = useSafeAreaInsets();
  const [active, setActive] = useState<(typeof TABS)[number]['key']>('sobre');
  const [chatOpen, setChatOpen] = useState(false);

  const Screen = TABS.find((tab) => tab.key === active)!.Screen;

  return (
    <View style={styles.root}>
      <View style={styles.screen}>
        <Screen onChatOpenChange={setChatOpen} />
      </View>

      {/*
        While the chat is open the bar is hidden: it would show under the text
        input, and switching tabs would unmount the conversation mid-way.
      */}
      {chatOpen ? null : (
      <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 10) }]}>
        {TABS.map((tab) => {
          const selected = tab.key === active;
          return (
            <Pressable
              key={tab.key}
              onPress={() => setActive(tab.key)}
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              accessibilityLabel={tab.label}
              style={styles.tab}
            >
              <Text style={[styles.tabText, selected && styles.tabTextActive]}>
                {tab.label}
              </Text>
              <View style={[styles.indicator, selected && styles.indicatorActive]} />
            </Pressable>
          );
        })}
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screen: {
    flex: 1,
  },
  bar: {
    flexDirection: 'row',
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E2E8F0',
  },
  tab: {
    flex: 1,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#94A3B8',
  },
  tabTextActive: {
    color: '#0F172A',
    fontWeight: '700',
  },
  indicator: {
    width: 22,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  indicatorActive: {
    backgroundColor: '#3074E2',
  },
});
