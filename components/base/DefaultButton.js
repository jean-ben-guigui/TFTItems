import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../../genericStyles';

const propTypes = {
  onPressFn: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  style: PropTypes.style,
  label: PropTypes.string,
};

class DefaultButton extends React.PureComponent {
  constructor(props) {
    super(props);
    // Init du state
    this.state = {
      fadeAnim: props.disabled ? new Animated.Value(0.5) : new Animated.Value(1),
    };
  }

  componentDidUpdate() {
    const { disabled } = this.props;
    const { fadeAnim } = this.state;
    Animated.timing(
      fadeAnim, // The animated value to drive
      {
        toValue: disabled, // Animate to opacity:
        duration: 250 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    const {
      style, label, onPressFn, disabled
    } = this.props;
    const { fadeAnim } = this.state;

    return (
      <Animated.View style={[{ opacity: fadeAnim }, styleSheet.view, style]}>
        <TouchableOpacity
          style={styleSheet.defaultValidateButton}
          onPress={onPressFn}
          activeOpacity={0.8}
          underlayColor="#9dca76"
          disabled={disabled}
        >
          <Text style={styleSheet.defaultValidateButtonText}>{label}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styleSheet = StyleSheet.create({
  defaultValidateButton: {
    backgroundColor: styles.color,
    borderRadius: 50,
    alignItems: 'center',
    padding: 15,
    minWidth: 120,
  },
  defaultValidateButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});


DefaultButton.propTypes = propTypes;
DefaultButton.defaultProps = {
  label: '',
  style: ''
};

export default DefaultButton;
