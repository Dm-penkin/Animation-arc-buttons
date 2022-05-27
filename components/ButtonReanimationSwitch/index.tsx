import React, { useState, useEffect, memo } from 'react';
import { View, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,
  withTiming,
  useSharedValue,
  interpolate,
  withDelay,
} from 'react-native-reanimated';
import { Ionicons as Icon } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import styles from './styles';

const BLUR_LEFT_VALUE = 200;
const BLUR_TOP_VALUE = 55;
const BLUR_SIZE_VALUE = 1;
const FOCUS_LEFT_VALUE = 24;
const FOCUS_SIZE_VALUE = 15;
const FOCUS_TOP_VALUE = 20;

const ICON_HEART = 'heart';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const ADD_TO_FAVORITE_TEXT = 'ADD TO FAVORITES ON NFT MARKETPLACE';
const ADDED_TO_FAVORITES_TEXT = 'ADDED TO MY FAVORITES ON NFT MARKETPLACE';

const ButtonSwitch = () => {
  const [theme, setTheme] = useState('light');
  const [isFavorites, setIsFavorites] = useState(false);
  const [clicked, setClicked] = useState(false);

  const addText = useSharedValue(ADD_TO_FAVORITE_TEXT);
  const addedText = useSharedValue(ADDED_TO_FAVORITES_TEXT);

  const sizeAddText = useSharedValue(FOCUS_SIZE_VALUE);
  const leftAddText = useSharedValue(FOCUS_LEFT_VALUE);
  const topAddText = useSharedValue(FOCUS_TOP_VALUE);

  const sizeAddedText = useSharedValue(BLUR_SIZE_VALUE);
  const leftAddedText = useSharedValue(BLUR_LEFT_VALUE);
  const topAddedText = useSharedValue(BLUR_TOP_VALUE);

  const removeFromFavorite = () => {
    sizeAddText.value = BLUR_SIZE_VALUE;
    leftAddText.value = BLUR_LEFT_VALUE;
    topAddText.value = BLUR_TOP_VALUE;

    sizeAddedText.value = FOCUS_SIZE_VALUE;
    leftAddedText.value = FOCUS_LEFT_VALUE;
    topAddedText.value = FOCUS_TOP_VALUE;
  };

  const toAddFavorite = () => {
    sizeAddText.value = FOCUS_SIZE_VALUE;
    leftAddText.value = FOCUS_LEFT_VALUE;
    topAddText.value = FOCUS_TOP_VALUE;

    sizeAddedText.value = BLUR_SIZE_VALUE;
    leftAddedText.value = BLUR_LEFT_VALUE;
    topAddedText.value = BLUR_TOP_VALUE;
  };

  useEffect(() => {
    if (!clicked) return;
    if (isFavorites) {
      removeFromFavorite();
    } else {
      toAddFavorite();
    }
  }, [isFavorites, clicked]);

  const progress = useDerivedValue(() => (theme === 'dark' ? withTiming(1, { duration: 500 }) : withTiming(0)), [theme]);

  const animatedAddTextStyle = useAnimatedStyle(() => ({
    top: withTiming(topAddText.value),
    left: withTiming(leftAddText.value),
    fontSize: withTiming(sizeAddText.value),
    color: interpolateColor(progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]),
    opacity: interpolateColor(progress.value,
      [0, 1],
      [1, 0]),
  }), [topAddText, leftAddText, sizeAddText, progress]);

  const animatedAddedTextStyle = useAnimatedStyle(() => ({
    top: withTiming(topAddedText.value),
    left: withTiming(leftAddedText.value),
    fontSize: withTiming(sizeAddedText.value),
    color: interpolateColor(progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]),
    opacity: interpolateColor(progress.value ? 0 : 1,
      [0, 1],
      [1, 0]),
  }), [topAddedText, leftAddedText, sizeAddedText, progress]);

  const rContainerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle],
    );

    return { backgroundColor };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.black, Colors.light.lightRed],
    );

    return { backgroundColor };
  });

  const IconWave = ({ delay }: any) => {
    const ring = useSharedValue(0);

    const ringStyle = useAnimatedStyle(() => {
      return {
        opacity: 0.8 - ring.value,
        transform: [
          {
            scale: interpolate(ring.value, [0, 1], [0, 3]),
          },
        ],
      };
    });
    ring.value = withDelay(
      delay,
      withTiming(1, {
        duration: 500,
      }),
    );
    return <AnimatedIcon name={ICON_HEART} style={[styles.heart, ringStyle]} color={Colors.light.white} />;
  };

  const onButtonPress = () => {
    if (!clicked) setClicked(true);
    setTheme(isFavorites ? 'light' : 'dark');
    setIsFavorites(!isFavorites);
  };

  return (
    <View>
      <Pressable onPress={onButtonPress}>
        <View style={styles.container}>
          <Animated.View style={[styles.containerText, rContainerStyle]}>
            <View style={styles.block}>
              <Animated.Text
                style={[styles.text, animatedAddedTextStyle]}
              >
                {addedText.value}
              </Animated.Text>
              <Animated.Text
                style={[styles.text, animatedAddTextStyle]}
              >
                {addText.value}
              </Animated.Text>
            </View>
            <View style={styles.containerCircle}>
              <Animated.View style={[styles.circle, rCircleStyle]}>
                <AnimatedIcon name={ICON_HEART} style={[styles.heartContainer]} color={Colors.light.white} />
                <IconWave delay={0} />
              </Animated.View>
            </View>
          </Animated.View>
        </View>
      </Pressable>
    </View>
  );
}

export default memo(ButtonSwitch);