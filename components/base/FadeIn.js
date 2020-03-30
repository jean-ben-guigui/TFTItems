import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Easing } from 'react-native';

const FadeIn = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.ease)
      }
    ).start();
  }, []);

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeIn;
