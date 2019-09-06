import { StyleSheet } from 'react-native';

export const mainColor = '#eba31e';
export const mainFont = 'Papyrus';
export const bigFontSize = 22;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row'
  },
  half: {
    flex: 0.5,
  },
  double: {
    flex: 2,
  },
});
