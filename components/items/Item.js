import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles, imageSize } from '../../genericStyles';

const propTypes = {
  source: PropTypes.node.isRequired
};

export default class Item extends React.PureComponent {
  render() {
    const { children, source } = this.props;
    return (
      <Image
        style={
          {
            width: imageSize,
            height: imageSize,
            borderRadius: 10
          }
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
