import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';

class BasicItem extends React.PureComponent {
  constructor() {
    super();
    this.PropTypes = {
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      showName: PropTypes.bool,
      showDescription: PropTypes.bool,
      image: PropTypes.PureComponent,
      bonuses: PropTypes.array // array of bonusType and bonusQuantity
    }
  }

  description;


  render() {
    return (
      <View style={styles.imageContainer}>
            <Image source={require('../../images/recurve.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BasicItem;
