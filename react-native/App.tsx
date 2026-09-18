import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Tabs } from './src/navigation/Tabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Tabs />
    </SafeAreaProvider>
  );
}
