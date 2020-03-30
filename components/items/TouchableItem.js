import React from 'react';
import { View } from 'react-native';
import Item from './Item';

import { styles } from '../../genericStyles';
import ItemsDetailsModal from './ItemsDetailsModal';
import ItemDetails from './ItemDetails';

const TouchableItem = (props) => {
  const { item, styleInfoTab } = props;
  return (
    <ItemsDetailsModal
      style={styleInfoTab.image}
      imageSource={item.imageSource}
      visible={false}
    >
      <View style={[styles.container, styles.centered]}>
        <ItemDetails item={item}>
          <Item source={item.imageSource} />
        </ItemDetails>
      </View>
    </ItemsDetailsModal>
  );
};

export default TouchableItem;
