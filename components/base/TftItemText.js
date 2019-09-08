import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { mainFont } from '../../genericStyles';

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
  style: { width: '100%' }
};

const textStyle = EStyleSheet.create({
  text: {
    fontFamily: mainFont,
    color: 'white'
  }
});
