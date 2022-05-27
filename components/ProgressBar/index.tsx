import React, { useEffect, useRef } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Animated, { EasingNode } from 'react-native-reanimated';

import styles from './styles';

interface Props {
  total: number
  progress: number
  color?: string
  backgroundColor?: string
  height?: number
  style?: StyleProp<ViewStyle>
  animDelay?: number
  animDuration?: number
  testID?: string
  borderRadius?: number
  containerHeight?: number
  onAnimationDidEnd?: () => void
}

const ProgressBarInternal = ({
  color,
  backgroundColor,
  style,
  height,
  animDuration,
  total,
  progress,
  testID = 'progress-bar',
  borderRadius,
  containerHeight,
  onAnimationDidEnd,
}: Props): JSX.Element => {
  const translateX = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(translateX.current, {
       toValue: progress / total,
       duration: animDuration || 950,
       easing: EasingNode.inOut(EasingNode.ease),
     }).start(() => onAnimationDidEnd)
 }, [progress]);

  return (
    <View
      testID={testID}
      style={[
        styles.container,
        { borderRadius: borderRadius, height: containerHeight },
        height ? { height } : undefined,
        backgroundColor ? { backgroundColor } : undefined,        
        style,
      ]}>
      <Animated.View
        style={[
          styles.bar,
          { borderRadius: borderRadius },          
          {
            backgroundColor: color,
            width: translateX.current.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%']}),
          },
          
        ]}
      />
    </View>
  )
}

export default ProgressBarInternal