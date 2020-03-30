import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../../genericStyles';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any
};

export default class TftItemText extends React.PureComponent {
  render() {
    const { children, style } = this.props;
    return (
      <Text style={[styles.text, style]}>{children}</Text>
    );
  }
}

TftItemText.propTypes = propTypes;

TftItemText.defaultProps = {
  style: { width: '100%' }
};
