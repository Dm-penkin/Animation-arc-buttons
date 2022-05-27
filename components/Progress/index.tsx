import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { View, Text } from 'react-native';
import { Button } from "native-base";
import { ReanimatedArcBase } from '@callstack/reanimated-arc';
import Reanimated, { EasingNode } from 'react-native-reanimated';

import {
  LIGHT_GREY,
  YELLOW,
  VIOLET,
  RED,
  BLUE,
  GREEN,
  GREY,
  WHITE,
} from '../../constants/Colors';
import {
  ARC_SWEEP_ANGLE_LIGHT_GREY,
  ARC_SWEEP_ANGLE_YELLOW,
  ARC_SWEEP_ANGLE_VIOLET,
  ARC_SWEEP_ANGLE_RED,
  ARC_SWEEP_ANGLE_BLUE,
  ARC_SWEEP_ANGLE_GREY,
  ARC_SWEEP_ANGLE_WHITE,
} from '../../constants/Variables';
import Colors from '../../constants/Colors';
import ProgressBarInternal from '../../components/ProgressBar';

import styles from './styles';

const TOTAL_SLIDER = 30;
const LINE_GAP = 'round';
const ROTATION = 240;
const WIDTH = 20;
const DIAMETER = 200;

const NAME_BUTTON = 'Click Me';

export default function Progress() {
  const [text, setText] = useState('0');
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState(Colors.light.yellow);;

  const arcAngle = useRef(new Reanimated.Value(Math.random() * 240));

  useEffect(() => {
    if (progress < 100) {
      setColor(Colors.light.yellow)
    } if (progress < 95) {
      setColor(Colors.light.purple)
    } if (progress < 85) {
      setColor(Colors.light.red)
    } if (progress < 76) {
      setColor(Colors.light.blue)
    } if (progress < 68) {
      setColor(Colors.light.green)
    } if (progress < 60) {
      setColor(Colors.light.grey)
    } if (progress < 51) {
      setColor(Colors.light.white)
    }
  }, [progress])

  const randomizeProgress = useCallback(() => {
    Reanimated.timing(arcAngle.current, {
      toValue: Math.random() * 240,
      easing: EasingNode.inOut(EasingNode.quad),
      duration: 2000,
    }).start();
  }, []);

  return (
    <View style={styles.animatedTwo}>
      <View style={styles.containerArcBase}>
        <View style={styles.containerArg}>
          <Reanimated.Code
            exec={Reanimated.call([arcAngle.current], ([value]) => {
              setText(`${Math.round((value / 240) * 100)}`);
              setProgress(Math.round((value / 240) * 100));
            })}
          />
          <ReanimatedArcBase
            color={LIGHT_GREY}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={ARC_SWEEP_ANGLE_LIGHT_GREY}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={YELLOW}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={ARC_SWEEP_ANGLE_YELLOW}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={VIOLET}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={ARC_SWEEP_ANGLE_VIOLET}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={RED}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={ARC_SWEEP_ANGLE_RED}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={BLUE}
            diameter={DIAMETER}
            width={20}
            arcSweepAngle={ARC_SWEEP_ANGLE_BLUE}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={GREEN}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={ARC_SWEEP_ANGLE_GREY}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={GREY}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={140}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={WHITE}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={ARC_SWEEP_ANGLE_WHITE}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <ReanimatedArcBase
            color={color}
            diameter={DIAMETER}
            width={WIDTH}
            arcSweepAngle={arcAngle.current}
            lineCap={LINE_GAP}
            rotation={ROTATION}
            style={styles.absolute}
          />
          <Text style={styles.textArg}>{text}</Text>
        </View>
        <Button onPress={randomizeProgress}>{NAME_BUTTON}</Button>
      </View>
      <ProgressBarInternal
        borderRadius={44}
        animDuration={1000}
        progress={progress}
        total={TOTAL_SLIDER}
        color={Colors.light.purpleLight}
        backgroundColor={Colors.light.greyLight}
      />
      <Text style={styles.textSlider}>{text}</Text>
    </View>
  );
}
