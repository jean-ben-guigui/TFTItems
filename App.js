import React from 'react';
import { View, SafeAreaView } from 'react-native';
import ItemMultiplier from './components/items/ItemMultiplier';
import styles from './genericStyles';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <ItemMultiplier />
      </View>
    </SafeAreaView>
  );
}
