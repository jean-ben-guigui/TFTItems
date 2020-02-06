import React from 'react';
import { basicItems } from '../../model/BasicItem';
import { itemsDto } from '../../model/itemsDto';
import Item from './Item';

export default function InfoTab() {
  const basicItemsToDisplay = [];
  const matrixToDisplay = [];
  Object.values(basicItems).forEach((item) => {
    const { imageSource } = item;
    basicItemsToDisplay.push(
      <Item source={imageSource} />
    );
  });
  matrixToDisplay.push(basicItemsToDisplay);
  const currentRow = [];
  Object.values(basicItems).forEach((itemLeft) => {
    const { imageSource } = itemLeft;
    currentRow.push(<Item source={imageSource} />);
    Object.values(basicItems).forEach((itemTop) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const complexItem of Object.values(itemsDto)) {
        if ((complexItem.recipe.item1 === itemLeft && complexItem.recipe.item2 === itemTop)
          || (complexItem.recipe.item2 === itemLeft && complexItem.recipe.item1 === itemTop)) {
          currentRow.push(<Item source={complexItem.imageSource} />);
          break;
        }
      }
    });
    matrixToDisplay.push(currentRow);
  });
  return matrixToDisplay;
}
