import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ItemMultiplier from './components/items/ItemMultiplier';
import { styles } from './genericStyles';

export default function App() {
  return (
    <LinearGradient
      colors={['#c166d8', '#175d73', '#6c1374']}
      style={{ flex: 1 }}
      start={[0, 0]}
      end={[1, 1]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ItemMultiplier />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
