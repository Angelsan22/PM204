import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RegistroScreen from './screens/RegistroScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <RegistroScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}