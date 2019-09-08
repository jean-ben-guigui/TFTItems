import React from 'react';
import { View, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

import MainScreen from './components/items/MainScreen';
import { styles } from './genericStyles';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const { width } = Dimensions.get('window');
    // const entireScreenWidth = Math.sqrt(height ** 2 + width ** 2);
    EStyleSheet.build({ $rem: width / 380, $imageSize: '1rem' });
  }

  render() {
    return (
      <LinearGradient
        colors={
          [
            '#6c1374',
            '#175d73',
            // '#c166d8',
          ]
        }
        style={[styles.centered, styles.container]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={[styles.centered, styles.container]}>
          {/* <ScrollView tyle={[styles.centered]}> */}
          <MainScreen />
          {/* </ScrollView> */}
        </View>
        {/* </SafeAreaView> */}
      </LinearGradient >
    );
  }

}
