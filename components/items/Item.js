import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { imageSize } from '../../genericStyles';

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
    borderRadius: 10
  }
});
