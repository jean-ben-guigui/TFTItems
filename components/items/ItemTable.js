import React from 'react';
import {
  ScrollView, TouchableOpacity, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { items } from '../../services/items';
import Item from './Item';
import styles from '../../genericStyles';

const propTypes = {
  onPress: PropTypes.func.isRequired
};

class ItemTable extends React.PureComponent {
  render() {
    const { onPress, children } = this.props;
    const itemsToDisplay = [];
    Object.values(items).forEach((item) => {
      const { imageSource } = item;
      itemsToDisplay.push(
        <TouchableOpacity
          key={item.displayName}
          onPress={() => onPress(item.displayName)}
          style={{ width: 50, height: 50 }}
        >
          <Item source={imageSource} />
        </TouchableOpacity>
      );
    });
    return (
      <View style={[styles.container, styles.centered]}>
        <ScrollView tyle={[styles.centered]}>
          <View style={[itemTableStyle.itemsWrapper, styles.centered]}>
            {itemsToDisplay}
          </View>
          {children}
        </ScrollView>
      </View>
    );
  }
}

ItemTable.propTypes = propTypes;

const itemTableStyle = StyleSheet.create({
  itemsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 15
  }
});

export default ItemTable;
