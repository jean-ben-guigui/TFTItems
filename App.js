import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import ItemMultiplier from './components/items/ItemMultiplier';
import styles from './genericStyles';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text>BIEN</Text>
        <ItemMultiplier />
      </View>
    </SafeAreaView>
  );
}
