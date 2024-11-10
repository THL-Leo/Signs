import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Main() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to your React Native Paper app!</Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
}