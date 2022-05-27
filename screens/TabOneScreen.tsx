import React from 'react';
import { View } from 'react-native';

import ButtonSwitch from '../components/ButtonReanimationSwitch';
import Progress from '../components/Progress';


export default function TabOneScreen() {

  return (
    <View>
      <ButtonSwitch />
      <Progress />
    </View>
  );
}
