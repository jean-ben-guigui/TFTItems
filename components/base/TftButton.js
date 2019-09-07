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
      <Animated.View style={[{ opacity: fadeAnim }, styles.container, style]}>
        <TouchableOpacity
          style={styles.container}
          onPress={onPressFn}
          activeOpacity={0.8}
          underlayColor="#9dca76"
          disabled={disabled}
        >
          <Text style={myButtonStyle.defaultValidateButtonText}>{label}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const myButtonStyle = StyleSheet.create({
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
