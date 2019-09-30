
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import ItemDto from '../../model/itemsDto';
import TftItemText from '../base/TftItemText';
import { styles, bigFontSize } from '../../genericStyles';

const propTypes = {
  item: PropTypes.instanceOf(ItemDto).isRequired,
};

export default class ItemDetails extends React.PureComponent {
  render() {
    const { children, item } = this.props;
    return (
      <View style={[styles.centered]}>
        <View style={[style.textContainer, styles.centered]}>
          <TftItemText style={style.title}>{item.displayName}</TftItemText>
        </View>
        <View style={[style.textContainer, styles.centered]}>
          {children}
        </View>
        {/* <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap', flexShrink: 1 }}> */}
        <View style={[style.textContainer, styles.centered]}>
          <TftItemText>{item.description}</TftItemText>
        </View>
        {/* </View> */}
      </View>
    );
  }
}

ItemDetails.propTypes = propTypes;

const style = EStyleSheet.create({
  title: {
    fontSize: bigFontSize,
    textAlign: 'center'
  },
  textContainer: {
    padding: 12,
  },
  details: {
    fontSize: '18rem',
  }
});
