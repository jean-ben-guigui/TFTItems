import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

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
            width: 50,
            height: 50,
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
