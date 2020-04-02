import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Dimensions, Easing } from 'react-native';

const AppearFromRight = (props) => {
  const { height, width } = Dimensions.get('window');
  const [viewPosition] = useState(new Animated.Value(-width)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      viewPosition,
      {
        toValue: 0,
        duration: 800,
        // easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        flex: 0,
        padding: 0,
        margin: 0,
        transform: [{ translateX: viewPosition }]
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default AppearFromRight;
