
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import ItemDto from '../../services/items';
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
        {children}
        <View style={style.textContainer}>
          <View style={[style.textContainer, styles.centered]}>
            <TftItemText style={style.details}>{item.description}</TftItemText>
          </View>
        </View>
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
    padding: 12
  },
  details: {
    fontSize: '18rem',
  }
});
