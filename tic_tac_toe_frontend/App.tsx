import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Platform } from 'react-native';
import GameScreen from './src/screens/GameScreen';
import { Colors } from './src/theme/colors';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar style={Platform.select({ ios: 'dark', android: 'auto', default: 'auto' })} />
      <GameScreen />
    </SafeAreaView>
  );
}
