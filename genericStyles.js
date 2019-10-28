import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';

export const mainColor = '#eba31e';
export const mainFont = 'open-sans';
export const fantasyFont = 'Papyrus';
export const bigFontSize = '22rem';
export const winningColor = '#8ec778';
export const loosingColor = '#fed268';
export const imageSize = moderateScale(50, 0.5);

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  container0: {
    flex: 0,
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  column: {
    flexDirection: 'column',
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
  shrink: {
    flexShrink: 1
  },
  grow: {
    flexGrow: 1
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  spaceEven: {
    justifyContent: 'space-evenly',
  },
  wrap: {
    flexWrap: 'wrap'
  },
  centeredText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});
