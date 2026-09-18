import { useRef } from "react";
import { View, StyleSheet } from "react-native";
import {
  WebchatLauncher,
  type WebchatLauncherHandle,
} from "@withub-ai/webchat-react-native";

import { WEBCHAT_CONFIG } from "../config";
import type { ScreenProps } from "../navigation/Tabs";
import { SupportHome, type Palette } from "../ui/SupportHome";

export function DefaultScreen({ onChatOpenChange }: ScreenProps) {
  const chat = useRef<WebchatLauncherHandle>(null);

  return (
    <View style={styles.root}>
      <SupportHome
        palette={PALETTE}
        onTopic={(context) => chat.current?.open(context)}
        note="Atendimento padrão do SDK: cores e nome vêm do canal."
      />

      <WebchatLauncher
        ref={chat}
        chatKey={WEBCHAT_CONFIG.chatKey}
        onOpenChange={onChatOpenChange}
      />
    </View>
  );
}

const PALETTE: Palette = {
  background: "#F5F7FB",
  surface: "#FFFFFF",
  border: "#E2E8F0",
  text: "#0F172A",
  muted: "#64748B",
  accent: "#3074E2",
  positive: "#8ED12E",
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});
