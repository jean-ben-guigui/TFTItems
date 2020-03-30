import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';

export const mainColor = '#eba31e';
export const mainFont = 'open-sans';
export const fantasyFont = 'Papyrus';
export const bigFontSize = '22rem';
export const winningColor = '#8ec778';
export const loosingColor = '#fed268';
export const imageSize = moderateScale(50, 0.5);
export const explainImageSize = moderateScale(35, 0.5);

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
  end: {
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
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
  },
  text: {
    fontFamily: mainFont,
    color: 'white',
  },
  lightyBackground: {
    padding: '15rem',
    '@media (min-width: 640)': {
      padding: 20,
    },
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
});
