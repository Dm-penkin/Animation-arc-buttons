import { StyleSheet } from 'react-native';

const DEFAULT_BUTTON_HEIGHT = 48;

export default StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerText: {
    width: 310,
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: DEFAULT_BUTTON_HEIGHT / 2,
  },
  block: {
    paddingVertical: 20,
    width: 200,
  },
  text: {
    position: 'absolute',
    fontWeight: '800',
  },
  circle: {
    padding: 20,
    width: 20,
    height: 20,
    borderRadius: 40 / 2,
  },
  containerCircle: {
    paddingRight: 20,
    paddingVertical: 20,
  },
  heart: {
    position: 'absolute',
    width: 23,
    height: 23,
    marginLeft: 8,
    marginTop: 7,
    fontSize: 24
  },
  heartContainer: {
    width: 33,
    height: 33,
    marginLeft: -12,
    marginTop: -12,
    fontSize: 24
  },
  ring: {
    position: "absolute",
    width: 70,
    height: 70,
    marginLeft: -15,
    marginTop: -15,
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 10,
  },
  animatedTwo: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row',
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
  textArg: {
    transform: [{translateY: -10}],
    fontSize: 40,
  },
});