import React, { useState } from 'react';
import { Animated, Easing } from 'react-native';

const FadeIn = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const { duration } = props;

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: duration ?? 700,
        easing: Easing.out(Easing.ease)
      }
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeIn;
