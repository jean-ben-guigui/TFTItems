import React from 'react';
import { View, SafeAreaView, Button } from 'react-native';
import DumbLoader from './DumbLoader';
import { styles } from '../../genericStyles';

export default class ReloadScreen extends React.PureComponent {

  render() {
    const { reload } = this.props;
    return (
      <View style={[styles.container, styles.centered]}>
        <SafeAreaView style={[styles.centered, styles.container]}>
          <DumbLoader />
          <View style={styles.container}>
            <Button
              onPress={() => reload()}
              title="New item"
              color="#841584"
              accessibilityLabel="Bien"
            />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
