import React from 'react';
import {
  View
} from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Item from './Item';

import ItemDetails from './ItemDetails';
import ItemDto from '../../model/itemsDto';
import { styles } from '../../genericStyles';


const propTypes = {
  item: PropTypes.instanceOf(ItemDto).isRequired,
  onlyRecipe: PropTypes.bool,
  vertical: PropTypes.bool,
};


export default class ItemAdditioner extends React.PureComponent {
  render() {
    const { item, onlyRecipe, vertical } = this.props;
    const { item1, item2 } = item.recipe;
    let mainContainerStyle = [styles.centered, styles.lightyBackground, styles.container0];
    if (!vertical) {
      mainContainerStyle = [...mainContainerStyle, styles.grow];
    }

    return (
      <View style={mainContainerStyle}>
        <View style={[styles.centered, styles.horizontal, styles.container0]}>
          <View style={[styles.centered, style.itemContainer]}>
            <Item source={item1.imageSource} />
          </View>
          <MaterialCommunityIcons name="plus" size={22} color="white" />
          <View style={[styles.centered, style.itemContainer]}>
            <Item source={item2.imageSource} />
          </View>
        </View>
        {onlyRecipe
          ? <View />
          : (
            <View style={[styles.centered, styles.horizontal]}>
              <View style={[style.detail]}>
                <ItemDetails item={item}>
                  <Item source={item.imageSource} />
                </ItemDetails>
              </View>
            </View>
          )}
      </View>
    );
  }
}

ItemAdditioner.propTypes = propTypes;
ItemAdditioner.defaultProps = {
  onlyRecipe: true,
  vertical: true
};

const style = EStyleSheet.create({
  detail: {

  },
  itemContainer: {
    marginHorizontal: '10%',
    '@media (min-width: 640)': {
      width: 100,
      height: 100,
    },
  }
});
