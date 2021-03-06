import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { basicItems } from '../../model/BasicItem';
import { itemsDto } from '../../model/itemsDto';
import Item from './Item';

import ExplanationModal from '../base/ExplanationModal';
import { styles } from '../../genericStyles';
import TftItemText from '../base/TftItemText';
import InfoTab from './InfoTab';
import TouchableItem from './TouchableItem';

const modalPadding = 40;

export default function ItemTabModal(props) {
  const { firstTime, imageSize, width } = props;

  const iSize = moderateScale(20, 0.3);

  const [infoTabData, setInfoTabData] = useState(null);

  useEffect(() => {
    setInfoTabData(infoTab(props));
  }, [imageSize]);

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
          <View style={[styles.container0, styles.end]}>
            <View style={{ height: imageSize * 9 + moderateScale(40, 0.5) }}>
              <InfoTab imageSize={imageSize} data={infoTabData} />
            </View>
          </View>
          <View style={[styles.container0, styles.centered, styles.wrap, styles.column]}>
            <View style={[{ width: width - modalPadding }, styles.centered]}>
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
        </View>
      </ExplanationModal>
    </View>
  );
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
    fontSize: '16rem',
    '@media (min-width: 640)': {
      fontSize: 23,
    },
  },
  modal: {
    position: 'absolute', top: '2rem', left: '5rem', zIndex: 1
  }
});

function infoTab(props) {
  const basicItemsToDisplay = [];
  const matrixToDisplay = [];
  const { imageSize } = props;


  const styleInfoTab = StyleSheet.create({
    image: {
      width: imageSize,
      height: imageSize,
    },
    row: {
      flex: 0,
      flexDirection: 'row',
      padding: 0,
      margin: 0
    }
  });

  Object.values(basicItems).forEach((item) => {
    const { imageSource, displayName } = item;
    basicItemsToDisplay.push(
      <Item customStyle={styleInfoTab.image} key={displayName} source={imageSource} />
    );
  });

  matrixToDisplay.push(
    <View key="basicItems" style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>{basicItemsToDisplay}</View>
  );
  let currentRow = [];
  Object.values(basicItems).forEach((itemLeft) => {
    const { imageSource, displayName } = itemLeft;
    currentRow.push(
      <Item key={`${displayName}1`} customStyle={styleInfoTab.image} source={imageSource} />
    );
    Object.values(basicItems).forEach((itemTop) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const complexItem of Object.values(itemsDto)) {
        if (complexItem.recipe.item1 === itemLeft && complexItem.recipe.item2 === itemTop) {
          currentRow.push(
            <View key={`${complexItem.displayName} ${itemLeft.displayName}`}>
              <View key={`${complexItem.displayName} ${itemLeft.displayName}`}>
                <TouchableItem item={complexItem} styleInfoTab={styleInfoTab} />
              </View>
            </View>
          );
          break;
        }
        if (complexItem.recipe.item2 === itemLeft && complexItem.recipe.item1 === itemTop) {
          currentRow.push(
            <View key={`${complexItem.displayName} ${itemTop.displayName}`}>
              <TouchableItem item={complexItem} styleInfoTab={styleInfoTab} />
            </View>
          );
          break;
        }
      }
    });
    matrixToDisplay.push(
      <View key={currentRow[0].key} style={[styles.centered0, styles.row]}>
        {currentRow}
      </View>
    );
    currentRow = [];
  });
  return matrixToDisplay;
}
