import React from 'react';
import {
  TouchableOpacity, View, StyleSheet
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { items } from '../../services/items';
import Item from './Item';
import { styles } from '../../genericStyles';

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
          style={{ margin: 3 }}
        >
          <Item source={imageSource} />
        </TouchableOpacity>
      );
    });
    return (
      <View style={[styles.centered, style.tableContainer]}>
        {/* <ScrollView tyle={[styles.centered]}> */}
        <View style={[style.itemsWrapper, styles.centered]}>
          {itemsToDisplay}
        </View>
        {children}
        {/* </ScrollView> */}
      </View>
    );
  }
}

ItemTable.propTypes = propTypes;

const style = StyleSheet.create({
  itemsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    // margin: 15,
    borderColor: 'white',
    overflow: 'scroll',
    backgroundColor: 'white',
  },
  tableContainer: {
  }
});

export default ItemTable;
