import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { basicItems } from '../../model/BasicItem';
import { itemsDto } from '../../model/itemsDto';
import Item from './Item';

export default function InfoTab(props) {
  const basicItemsToDisplay = [];
  const matrixToDisplay = [];
  const itemToDisplay = useState(null);
  const { imageSize } = props;


  const style = StyleSheet.create({
    image: {
      width: imageSize,
      height: imageSize
    }
  });

  Object.values(basicItems).forEach((item) => {
    const { imageSource, displayName } = item;
    basicItemsToDisplay.push(
      // <View style={{ flex: 1, flexDirection: 'row', width: '500' }}>
      <Item customStyle={style.image} key={displayName} source={imageSource} />
      // </View>
    );
  });

  matrixToDisplay.push(
    <View key={basicItemsToDisplay[0].key} style={{ flexDirection: 'row' }}>{basicItemsToDisplay}</View>
  );
  let currentRow = [];
  Object.values(basicItems).forEach((itemLeft) => {
    const { imageSource, displayName } = itemLeft;
    currentRow.push(
      // <View style={{ flex: 1, flexDirection: 'row', width: 500 }}>
      <Item key={`${displayName}1`} customStyle={style.image} source={imageSource} />
      // {/* </View> */ }
    );
    Object.values(basicItems).forEach((itemTop) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const complexItem of Object.values(itemsDto)) {
        if (complexItem.recipe.item1 === itemLeft && complexItem.recipe.item2 === itemTop) {
          currentRow.push(
            // <View style={{ flex: 1, flexDirection: 'row', width: 500 }}>
            <Item key={`${complexItem.displayName} + ${itemTop.displayName}`} customStyle={style.image} source={complexItem.imageSource} />
            // </View>
          );
          break;
        }
        if (complexItem.recipe.item2 === itemLeft && complexItem.recipe.item1 === itemTop) {
          currentRow.push(
            // <View style={{ flex: 1, flexDirection: 'row', width: 500 }}>
            <Item key={`${complexItem.displayName} + ${itemTop.displayName}`} customStyle={style.image} source={complexItem.imageSource} />
            // </View>
          );
          break;
        }
      }
    });
    // console.log('currentRow', currentRow);
    matrixToDisplay.push(
      <View style={{ flex: 1, flexDirection: 'row', padding: 0, margin: 0, height: imageSize }}>
        {currentRow}
      </View>
    );
    currentRow = [];
  });
  console.log('matrix to display', matrixToDisplay);
  return matrixToDisplay;
}
