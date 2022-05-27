import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  animatedTwo: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  containerArg: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  absolute: {
    position: 'absolute',
  },
  containerArcBase: {
    marginBottom: 30,
  },
  textArg: {
    transform: [{translateY: 10}],
    fontSize: 40,
    color: 'red',
  },
  textSlider: {
    fontSize: 15,
    color: 'black',
    position: 'absolute',
    paddingTop: 270,
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 44,
  },
});