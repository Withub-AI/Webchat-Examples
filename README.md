# Webchat Withub.ai: exemplos de integração

Apps de exemplo que mostram como colocar o atendimento do
[Withub.ai](https://withub.ai/docs#webchat) dentro do seu aplicativo, usando o SDK oficial
de cada plataforma.

Cada exemplo é um app de atendimento completo, com a integração pronta para você copiar:
o balão flutuante, o contador de mensagens não lidas, o chat em tela cheia e a abertura do
atendimento a partir de um botão do próprio app.

## Plataformas

| Plataforma | Exemplo | SDK |
| --- | --- | --- |
| React Native / Expo | [`react-native/`](react-native/) | [`@withub-ai/webchat-react-native`](https://www.npmjs.com/package/@withub-ai/webchat-react-native) |

Cada pasta é um projeto independente, com as próprias dependências e um README com os
detalhes da integração.

## Antes de começar

Você vai precisar do **`chatKey`** do seu canal de atendimento. Ele identifica o canal e é
entregue pelo time de Customer Success da Mundiale.

Para o exemplo React Native:

- Node.js LTS e [pnpm](https://pnpm.io)
- Android Studio (para Android) ou Xcode (para iOS, apenas no macOS)

## Rodando o exemplo React Native

```bash
cd react-native
pnpm install
cp .env.example .env.local        # preencha o EXPO_PUBLIC_WEBCHAT_CHAT_KEY
npx expo prebuild
pnpm android                      # ou pnpm ios
```

É necessário um dev build: o SDK inclui um config plugin que ajusta o comportamento do
teclado, e isso é configuração nativa.

O app abre em três abas:

- **Sobre**: o que o exemplo demonstra e onde olhar no código.
- **Padrão**: o SDK sem nenhuma customização. Balão, cores e nome vêm do canal.
- **Customizado**: sem o balão flutuante, com o atendimento aberto pelo botão de ajuda do
  app e as cores da sua marca.

Os trechos de integração estão em [`react-native/src/screens/`](react-native/src/screens/).

## Licença

O código dos exemplos é distribuído sob a [licença MIT-0](LICENSE): pode ser copiado e
adaptado livremente para o seu app, sem necessidade de atribuição. Os SDKs usados pelos
exemplos, como o `@withub-ai/webchat-react-native`, têm termos próprios.
