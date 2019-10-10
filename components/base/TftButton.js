import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { styles } from '../../genericStyles';
import TftItemText from './TftItemText';

const propTypes = {
  onPressFn: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
  label: PropTypes.string,
};

class TftButton extends React.PureComponent {
  render() {
    const {
      style, label, onPressFn, disabled
    } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, styles.centered, style]}
        onPress={onPressFn}
        activeOpacity={0.8}
        underlayColor="#9dca76"
        disabled={disabled}
      >
        <TftItemText style={myButtonStyle.defaultValidateButtonText}>{label}</TftItemText>
      </TouchableOpacity>

    );
  }
}

const myButtonStyle = EStyleSheet.create({
  defaultValidateButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#175d73',
    fontSize: '20rem',
    '@media (min-width: 640)': {
      fontSize: 35,
    },
    fontWeight: '600',
  }
});


TftButton.propTypes = propTypes;
TftButton.defaultProps = {
  label: '',
  style: ''
};

export default TftButton;
