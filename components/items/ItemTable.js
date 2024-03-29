import React from 'react';
import {
  TouchableOpacity, View, ScrollView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { itemsDto } from '../../model/itemsDto';
import Item from './Item';
import { styles } from '../../genericStyles';

const propTypes = {
  onPress: PropTypes.func.isRequired
};

class ItemTable extends React.PureComponent {
  render() {
    const { onPress, children } = this.props;
    const itemsToDisplay = [];
    Object.values(itemsDto).forEach((item) => {
      const { imageSource } = item;
      itemsToDisplay.push(
        <TouchableOpacity
          key={item.displayName}
          onPress={() => onPress(item.displayName)}
          style={style.item}
        >
          <Item source={imageSource} />
        </TouchableOpacity>
      );
    });
    return (
      // <View style={[styles.centered, style.tableContainer]}>
      <ScrollView tyle={[styles.container, styles.centered, style.tableContainer]}>
        <View style={[style.itemsWrapper, styles.centered]}>
          {itemsToDisplay}
        </View>
        {children}
      </ScrollView>
      // </View>
    );
  }
}

ItemTable.propTypes = propTypes;

const style = EStyleSheet.create({
  itemsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tableContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  item: {
    margin: '3rem'
  }
});

export default ItemTable;
