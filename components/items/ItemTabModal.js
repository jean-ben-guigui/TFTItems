import React from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';

import ExplanationModal from '../base/ExplanationModal';
import { styles } from '../../genericStyles';
import TftItemText from '../base/TftItemText';

const modalPadding = 40;
const allItemsImage = require('../../assets/images/allItems.png');


export default class ItemTabModal extends React.PureComponent {
  render() {
    const { firstTime, imageSize, width } = this.props;

    const iSize = moderateScale(20, 0.3);
    return (
      <View style={style.modal}>
        <ExplanationModal visible={firstTime}>
          <View style={[
            styles.container,
            styles.centered,
            style.modalContainer,
            styles.spaceEven
          ]}
          >
            <View style={[styles.container0, styles.centered, styles.wrap, styles.column]}>
              <View style={[{ width: width - modalPadding }, styles.centered]}>
                <TftItemText style={[styles.centeredText, style.modalText]}>
                  In this game, you are going to improve your knowledge
                  of TeamFight Tactic items.
                  the following table is a reminder of the item combinations.
                </TftItemText>
              </View>

            </View>
            <View style={[styles.container0, styles.centered]}>
              <Image
                style={
                  {
                    width: imageSize - modalPadding,
                    height: imageSize - modalPadding,
                  }
                }
                resizeMode="contain"
                source={allItemsImage}
              />
            </View>
            <View style={[
              styles.container0,
              styles.centered,
              styles.wrap,
              { width: width - modalPadding }
            ]}
            >
              <TftItemText style={[styles.centeredText, style.modalText]}>
                You can come back to this screen by tapping the
              </TftItemText>
              <TftItemText style={[styles.centeredText, style.modalText]}>
                <Ionicons name="ios-information-circle-outline" size={iSize} color="white" />
                <TftItemText> </TftItemText>
                in the top left corner
              </TftItemText>
            </View>
          </View>
        </ExplanationModal>
      </View>
    );
  }
}

const style = EStyleSheet.create({
  horizontalResult: {
    margin: '12rem'
  },
  winCounterContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalContainer: {
    paddingHorizontal: modalPadding,
  },
  modalText: {
    fontSize: '18rem',
    '@media (min-width: 640)': {
      fontSize: 23,
    },
  },
  modal: {
    position: 'absolute', top: '2rem', left: '5rem', zIndex: 1
  }
});
