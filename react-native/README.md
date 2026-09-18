# Webchat Mundiale: exemplo React Native / Expo

App de exemplo do SDK [`@withub-ai/webchat-react-native`](https://www.npmjs.com/package/@withub-ai/webchat-react-native):
o atendimento do Withub.ai dentro de um app mobile.

```bash
pnpm install
npx expo prebuild
pnpm android      # ou pnpm ios
```

É necessário usar um dev build: o SDK traz um config plugin que ajusta o teclado, e isso
é configuração nativa.

## As três abas

| Aba | O que mostra | Arquivo |
| --- | --- | --- |
| **Sobre** | O que o exemplo demonstra e onde olhar | `src/screens/AboutScreen.tsx` |
| **Padrão** | O launcher sem nenhuma customização | `src/screens/DefaultScreen.tsx` |
| **Customizado** | Sem balão: abre pelo botão do app | `src/screens/CustomScreen.tsx` |

As duas últimas usam a mesma home (`src/ui/SupportHome.tsx`), a de um provedor de
internet: status da conexão, fatura em aberto e assuntos de suporte. A única diferença
é como o atendimento é montado, que é justamente o ponto.

### Padrão

```tsx
<WebchatLauncher chatKey={WEBCHAT_CONFIG.chatKey} />
```

Balão, contador de não lidas e chat em tela cheia já vêm prontos. As cores vêm do
canal; não há nada de visual escrito na tela.

### Customizado

Sem balão flutuante: quem abre é o botão "Ajuda" do cabeçalho, que também mostra as
não lidas.

```tsx
<WebchatLauncher
  ref={chat}
  chatKey={WEBCHAT_CONFIG.chatKey}
  showBubble={false}
  onUnreadChange={setUnread}
  appearance={{ chatColor: '#7C3AED' }}
/>
```

Tudo em `appearance` vence o que vem do canal.

### Abrir com contexto

Nas duas, cada assunto abre o atendimento já dizendo do que se trata:

```tsx
chat.current?.open('Preciso da segunda via da fatura de setembro');
```

O contexto chega ao atendimento sem aparecer como mensagem do usuário: é o que evita
começar perguntando o que a pessoa já disse ao tocar no card.

## Configuração

Copie o `.env.example` para `.env.local` e preencha o `chatKey` que o time de Customer
Success entrega:

```bash
EXPO_PUBLIC_WEBCHAT_CHAT_KEY=<seu chatKey>
```

O `.env.local` não é versionado. Depois de alterar, reinicie o Metro com `pnpm start --clear`.

## Estrutura

```
App.tsx                       SafeAreaProvider + abas
src/
  config.ts                   lê o chatKey do .env.local
  navigation/Tabs.tsx         abas, feitas à mão
  screens/                    as três telas
  ui/SupportHome.tsx          a home compartilhada pelas demonstrações
  ui/icons.ts                 ícones da interface do app
```

A navegação é uma barra de abas simples: são três telas e nenhuma rota profunda, então
uma biblioteca de navegação só acrescentaria ruído. Num app de verdade use `expo-router`
ou `@react-navigation`.
