import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { imageSize } from '../../genericStyles';
import { maxWeight } from '../../constants';

const propTypes = {
  source: PropTypes.node.isRequired
};

export default class Item extends React.PureComponent {
  render() {
    const { children, source } = this.props;
    return (
      <Image
        style={
          style.image
        }
        resizeMode="contain"
        source={source}
      >
        {children}
      </Image>
    );
  }
}

Item.propTypes = propTypes;

const style = EStyleSheet.create({
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 10,
    '@media (min-width: 640)': {
      width: 80,
      height: 80,
    },
  }
});
