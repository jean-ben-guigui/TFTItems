import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { items } from '../../services/items';
import Item from './Item';
import * as genericStyles from '../../genericStyles';

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
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexWrap: 1, flexDirection: 'row' }}>
          {itemsToDisplay}
        </View>
        {children}
      </ScrollView>
    );
  }
}

ItemTable.propTypes = propTypes;

export default ItemTable;
