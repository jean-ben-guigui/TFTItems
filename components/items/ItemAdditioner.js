import React from 'react';
import {
  View
} from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Item from './Item';

import ItemDetails from './itemDetails';
import ItemDto from '../../model/itemsDto';
import { styles } from '../../genericStyles';


const propTypes = {
  item: PropTypes.instanceOf(ItemDto).isRequired,
  onlyRecipe: PropTypes.bool,
};

export default class ItemAdditioner extends React.PureComponent {
  render() {
    const { item, onlyRecipe } = this.props;
    const { item1, item2 } = item.recipe;
    return (
      <View style={[styles.centered, style.itemEquation, styles.container0]}>
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
              {/* <MaterialCommunityIcons name="equal" size={22} color="white" /> */}
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
  onlyRecipe: true
};

const style = EStyleSheet.create({
  // itemAddition: {
  // paddingBottom: '1000%'
  // },
  itemEquation: {
    // marginLeft: 40,
    // marginRight: 40,
    padding: '15rem',
    marginBottom: 15,
    // paddingBottom: 15,
    // borderColor: 'white',
    borderRadius: 10,
    // borderWidth: 2,
    // overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    // height: 'auto'
  },
  detail: {

  },
  itemContainer: {
    marginHorizontal: '10%'
  }
});
