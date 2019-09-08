import React from 'react';
import { View, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

import MainScreen from './components/items/MainScreen';
import { styles } from './genericStyles';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const { height, width } = Dimensions.get('window');
    const entireScreenWidth = Math.sqrt(height ** 2 + width ** 2);
    EStyleSheet.build({ $rem: entireScreenWidth / 380, $imageSize: '1rem' });
  }

  render() {
    return (
      <LinearGradient
        colors={
          [
            '#175d73',
            '#6c1374',
            // '#c166d8',
          ]}
        style={[styles.centered, styles.container]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <SafeAreaView style={[styles.centered, styles.container]}>
          <View style={styles.container}>
            {/* <ScrollView tyle={[styles.centered]}> */}
            <MainScreen />
            {/* </ScrollView> */}
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }

}
