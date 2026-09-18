import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

import { DOCUMENT_ICON, HEADSET_ICON, SIGNAL_ICON, TRUCK_ICON } from './icons';

export type Palette = {
  background: string;
  surface: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  /** Secondary accent color (the "connection active" dot). */
  positive: string;
};

export type SupportHomeProps = {
  palette: Palette;
  onTopic: (context: string) => void;
  note: string;
  headerSlot?: ReactNode;
};

export function SupportHome({ palette, onTopic, note, headerSlot }: SupportHomeProps) {
  const insets = useSafeAreaInsets();
  const s = makeStyles(palette);

  return (
    <ScrollView
      style={s.root}
      contentContainerStyle={[
        s.content,
        // Bottom space so the floating bubble does not cover content.
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 190 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={s.header}>
        <View>
          <Text style={s.greeting}>Olá, Renê</Text>
          <Text style={s.brand}>Vendedor Online</Text>
        </View>
        {headerSlot ?? (
          <View style={s.avatar}>
            <Text style={s.avatarText}>R</Text>
          </View>
        )}
      </View>

      <View style={s.statusCard}>
        <View style={s.statusRow}>
          <View style={s.statusDot} />
          <Text style={s.statusLabel}>Conexão ativa</Text>
        </View>
        <Text style={s.planName}>Fibra 600 Mega</Text>
        <Text style={s.planMeta}>Contrato 4471‑9 · Rua das Palmeiras, 128</Text>
      </View>

      <View style={s.invoiceCard}>
        <View style={s.invoiceHead}>
          <Text style={s.invoiceLabel}>Fatura de setembro</Text>
          <View style={s.invoiceTag}>
            <Text style={s.invoiceTagText}>EM ABERTO</Text>
          </View>
        </View>

        <View style={s.invoiceRow}>
          <View>
            <Text style={s.invoiceValue}>R$ 109,90</Text>
            <Text style={s.invoiceDue}>Vence em 15/09</Text>
          </View>
          <Pressable
            onPress={() => onTopic('Preciso da segunda via da fatura de setembro')}
            accessibilityRole="button"
            accessibilityLabel="Pedir a segunda via da fatura"
            style={({ pressed }) => [s.invoiceCta, pressed && s.pressed]}
          >
            <Text style={s.invoiceCtaText}>Segunda via</Text>
          </Pressable>
        </View>
      </View>

      <Text style={s.sectionTitle}>Como podemos ajudar?</Text>

      <View style={s.grid}>
        {TOPICS.map((topic) => (
          <Pressable
            key={topic.title}
            onPress={() => onTopic(topic.context)}
            accessibilityRole="button"
            accessibilityLabel={topic.title}
            style={({ pressed }) => [s.topic, pressed && s.pressed]}
          >
            <View style={s.topicIcon}>
              <SvgXml xml={topic.icon} width={24} height={24} color={palette.accent} />
            </View>
            <Text style={s.topicTitle}>{topic.title}</Text>
            <Text style={s.topicHint}>{topic.hint}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={s.note}>{note}</Text>
    </ScrollView>
  );
}

const TOPICS = [
  {
    icon: SIGNAL_ICON,
    title: 'Internet lenta',
    hint: 'Testar conexão',
    context: 'Minha internet está lenta',
  },
  {
    icon: HEADSET_ICON,
    title: 'Suporte técnico',
    hint: 'Abrir chamado',
    context: 'Preciso de suporte técnico',
  },
  {
    icon: TRUCK_ICON,
    title: 'Mudar de endereço',
    hint: 'Agendar mudança',
    context: 'Quero mudar meu plano de endereço',
  },
  {
    icon: DOCUMENT_ICON,
    title: 'Meu contrato',
    hint: 'Plano e fidelidade',
    context: 'Quero informações sobre meu contrato',
  },
];

const makeStyles = (p: Palette) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: p.background,
    },
    content: {
      paddingHorizontal: 20,
      gap: 16,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    greeting: {
      fontSize: 24,
      fontWeight: '800',
      letterSpacing: -0.4,
      color: p.text,
    },
    brand: {
      fontSize: 13,
      color: p.muted,
      marginTop: 1,
    },
    avatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: p.accent,
    },
    avatarText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '800',
    },
    statusCard: {
      backgroundColor: p.accent,
      borderRadius: 18,
      padding: 20,
      gap: 6,
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
    },
    statusDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: p.positive,
    },
    statusLabel: {
      fontSize: 12,
      fontWeight: '700',
      letterSpacing: 0.6,
      color: 'rgba(255,255,255,0.85)',
    },
    planName: {
      fontSize: 26,
      fontWeight: '800',
      letterSpacing: -0.5,
      color: '#FFFFFF',
    },
    planMeta: {
      fontSize: 13,
      lineHeight: 19,
      color: 'rgba(255,255,255,0.75)',
    },
    invoiceCard: {
      backgroundColor: p.surface,
      borderRadius: 18,
      padding: 20,
      gap: 14,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.border,
    },
    invoiceHead: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    invoiceLabel: {
      fontSize: 15,
      fontWeight: '700',
      color: p.text,
    },
    invoiceTag: {
      paddingHorizontal: 9,
      paddingVertical: 4,
      borderRadius: 999,
      backgroundColor: '#FEF3C7',
    },
    invoiceTagText: {
      fontSize: 10,
      fontWeight: '800',
      letterSpacing: 0.6,
      color: '#92400E',
    },
    invoiceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    invoiceValue: {
      fontSize: 28,
      fontWeight: '800',
      letterSpacing: -0.6,
      color: p.text,
    },
    invoiceDue: {
      fontSize: 13,
      color: p.muted,
      marginTop: 2,
    },
    invoiceCta: {
      height: 48,
      paddingHorizontal: 18,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: p.accent,
    },
    invoiceCtaText: {
      fontSize: 14,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    sectionTitle: {
      fontSize: 19,
      fontWeight: '800',
      letterSpacing: -0.3,
      color: p.text,
      marginTop: 4,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    topic: {
      width: '47.5%',
      flexGrow: 1,
      minHeight: 128,
      backgroundColor: p.surface,
      borderRadius: 16,
      padding: 16,
      gap: 3,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.border,
    },
    topicIcon: {
      width: 40,
      height: 40,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: p.background,
      marginBottom: 6,
    },
    topicTitle: {
      fontSize: 15,
      fontWeight: '700',
      color: p.text,
    },
    topicHint: {
      fontSize: 12,
      color: p.muted,
    },
    pressed: {
      opacity: 0.85,
    },
    note: {
      fontSize: 12,
      lineHeight: 18,
      color: p.muted,
      textAlign: 'center',
      marginTop: 4,
    },
  });
