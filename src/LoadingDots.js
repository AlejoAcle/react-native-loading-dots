// src/LoadingDots.js

import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const LoadingDots = ({ dotColor = '#333', dotSize = 10, dotSpacing = 8 }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(animation, {
        toValue: 3,
        duration: 1200,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [animation]);

  const renderDot = (index) => {
    const inputRange = [index - 1, index, index + 1];
    const scale = animation.interpolate({
      inputRange,
      outputRange: [1, 1.4, 1],
      extrapolate: 'clamp',
    });
    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        key={index}
        style={[
          styles.dot,
          {
            backgroundColor: dotColor,
            width: dotSize,
            height: dotSize,
            marginHorizontal: dotSpacing / 2,
            borderRadius: dotSize / 2,
            transform: [{ scale }],
            opacity,
          },
        ]}
      />
    );
  };

  return <View style={styles.container}>{[0, 1, 2].map(renderDot)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {},
});

export default LoadingDots;
