
import React from 'react';
import { View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import ItemDto from '../../model/itemsDto';
import TftItemText from '../base/TftItemText';
import { styles, bigFontSize } from '../../genericStyles';

const propTypes = {
  item: PropTypes.instanceOf(ItemDto).isRequired,
};

export default class ItemDetails extends React.PureComponent {

  constructor(props) {
    super(props);
    const { height, width } = Dimensions.get('window');
    this.state = {
      height,
      width
    };
  }

  componentDidMount() {
    this.dimensionListener = Dimensions.addEventListener('change', (event) => {
      const { width, height } = event.window;
      this.setState({
        width,
        height
      });
    });
  }

  render() {
    const { height, width } = this.state;
    const { children, item } = this.props;
    if (height < width) {
      return (
        <View style={[styles.centered]}>
          <View style={[styles.container0, styles.rowReverse]}>
            <View style={[style.textContainer, styles.centered, styles.shrink]}>
              <TftItemText style={style.title}>{item.displayName}</TftItemText>
            </View>
            <View style={[style.textContainer, styles.centered]}>
              {children}
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexShrink: 1
          }}
          >
            <View style={[style.textContainer, styles.centered, styles.shrink]}>
              <TftItemText>{item.description}</TftItemText>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View style={[styles.centered]}>
        <View style={[style.textContainer, styles.centered]}>
          <TftItemText style={style.title}>{item.displayName}</TftItemText>
        </View>
        <View style={[style.textContainer, styles.centered]}>
          {children}
        </View>
        <View style={{
          flexWrap: 'wrap',
          flexShrink: 1
        }}
        >
          <View style={[style.textContainer, styles.centered, styles.shrink]}>
            <TftItemText>{item.description}</TftItemText>
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
    padding: 12,
  },
  details: {
    fontSize: '18rem',
  }
});
