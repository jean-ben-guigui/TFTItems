import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any
};

export default class TftItemText extends React.PureComponent {
  render() {
    const { children, style } = this.props;
    return (
      <Text style={[textStyle.text, style]}>{children}</Text>
    );
  }
}

TftItemText.propTypes = propTypes;

TftItemText.defaultProps = {
  style: {}
};

const textStyle = StyleSheet.create({
  text: {
    fontFamily: 'Papyrus',
  }
});
