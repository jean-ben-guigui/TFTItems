import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { items } from '../../services/items';
import Item from './Item';

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
        <TouchableOpacity key={item.displayName} onPress={() => onPress(item.displayName)}>
          <Item source={imageSource} />
        </TouchableOpacity>
      );
    });
    return (
      <View>
        {itemsToDisplay}
        {children}
      </View>
    );
  }
}

ItemTable.propTypes = propTypes;

export default ItemTable;
