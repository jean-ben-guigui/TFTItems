import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Item from './Item';

import ItemDetails from './itemDetails';
import ItemDto from '../../services/items';
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
      <View style={[styles.centered, style.container, style.itemEquation]}>
        <View style={[styles.centered, styles.horizontal, style.itemAddition]}>
          <View style={[styles.centered, styles.container]}>
            <Item source={item1.imageSource} />
          </View>
          <MaterialCommunityIcons name="plus" size={22} color="white" />
          <View style={[styles.centered, styles.container]}>
            <Item source={item2.imageSource} />
          </View>
        </View>
        {onlyRecipe
          ? <View />
          : (
            <View style={[styles.centered, styles.horizontal]} >
              {/* <MaterialCommunityIcons name="equal" size={22} color="white" /> */}
              <View style={[style.detail]}>
                <ItemDetails item={item}>
                  <View style={styles.centered}>
                    <Item source={item.imageSource} />
                  </View>
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

const style = StyleSheet.create({
  itemAddition: {
    padding: 10
  },
  itemEquation: {
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    // borderColor: 'white',
    borderRadius: 10,
    // borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  detail: {

  }
});
