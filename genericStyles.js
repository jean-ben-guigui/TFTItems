import EStyleSheet from 'react-native-extended-stylesheet';

export const mainColor = '#eba31e';
export const mainFont = 'Papyrus';
export const bigFontSize = '22rem';
export const winningColor = 'gold';
export const loosingColor = '#b77b51';
export const imageSize = '50rem';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    backgroundColor: 'transparent',
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
