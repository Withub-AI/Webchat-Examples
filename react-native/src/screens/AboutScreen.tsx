import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

import { HEADSET_ICON, SIGNAL_ICON } from '../ui/icons';

export function AboutScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 28 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>WEBCHAT MUNDIALE</Text>
        <Text style={styles.title}>Atendimento dentro do seu app</Text>
        <Text style={styles.lead}>
          O mesmo canal que atende no site, agora em React Native.
        </Text>

        <View style={styles.codeCard}>
          <View style={styles.codeDots}>
            <View style={[styles.codeDot, { backgroundColor: '#FF5F57' }]} />
            <View style={[styles.codeDot, { backgroundColor: '#FEBC2E' }]} />
            <View style={[styles.codeDot, { backgroundColor: '#28C840' }]} />
          </View>
          <Text style={styles.code}>
            <Text style={styles.codePunct}>{'<'}</Text>
            <Text style={styles.codeTag}>WebchatLauncher</Text>
            <Text style={styles.codeAttr}> chatKey</Text>
            <Text style={styles.codePunct}>=</Text>
            <Text style={styles.codeString}>"..."</Text>
            <Text style={styles.codePunct}>{' />'}</Text>
          </Text>
          <Text style={styles.codeCaption}>A instalação é uma linha.</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>O que cada aba mostra</Text>

      {DEMOS.map((demo) => (
        <View key={demo.title} style={styles.card}>
          <View style={styles.cardHead}>
            <View style={[styles.cardIcon, { backgroundColor: demo.tint }]}>
              <SvgXml xml={demo.icon} width={22} height={22} color={demo.color} />
            </View>
            <Text style={styles.cardTitle}>{demo.title}</Text>
          </View>
          <Text style={styles.cardText}>{demo.text}</Text>
          <View style={styles.filePill}>
            <Text style={styles.fileText}>{demo.file}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Para apontar para o seu canal</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Preencha o <Text style={styles.inline}>chatKey</Text> que o time de Customer
          Success entrega. Use o .env.example como modelo.
        </Text>
        <View style={styles.filePill}>
          <Text style={styles.fileText}>.env.local</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const DEMOS = [
  {
    title: 'Padrão',
    icon: SIGNAL_ICON,
    color: '#3074E2',
    tint: '#EAF1FD',
    text:
      'O launcher sem nenhuma customização. Os balões, o contador de não lidas e o chat em tela cheia já vêm prontos, e o nome e as cores são os do canal.',
    file: 'src/screens/DefaultScreen.tsx',
  },
  {
    title: 'Customizado',
    icon: HEADSET_ICON,
    color: '#7C3AED',
    tint: '#F1EBFE',
    text:
      'Sem o balão flutuante: o atendimento abre pelo botão de Ajuda no cabeçalho, que também mostra as não lidas. As cores do app vencem as do canal.',
    file: 'src/screens/CustomScreen.tsx',
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  content: {
    paddingHorizontal: 20,
    gap: 14,
  },
  hero: {
    gap: 10,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#94A3B8',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.8,
    lineHeight: 35,
    color: '#0F172A',
  },
  lead: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748B',
  },
  codeCard: {
    marginTop: 6,
    backgroundColor: '#0F172A',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 12,
  },
  codeDots: {
    flexDirection: 'row',
    gap: 6,
  },
  codeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 20,
  },
  codeTag: {
    color: '#7DD3FC',
  },
  codeAttr: {
    color: '#C4B5FD',
  },
  codeString: {
    color: '#86EFAC',
  },
  codePunct: {
    color: '#64748B',
  },
  codeCaption: {
    fontSize: 12,
    color: '#64748B',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
    color: '#0F172A',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    gap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E2E8F0',
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  cardIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  cardText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#64748B',
  },
  filePill: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  fileText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#475569',
  },
  inline: {
    fontFamily: 'monospace',
    color: '#0F172A',
  },
});
