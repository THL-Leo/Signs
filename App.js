import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './frontend/Main'; // This will be your main application component

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </SafeAreaProvider>
  );
}