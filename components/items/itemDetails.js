
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

  // TODO clear this and use height and width as props.
  componentDidMount() {
    this.dimensionListener = Dimensions.addEventListener('change', this.onChangeDimension);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onChangeDimension);
  }

  onChangeDimension = (event) => {
    const { width, height } = event.window;
    this.setState({
      width,
      height
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
              <TftItemText style={style.details}>{item.description}</TftItemText>
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
        {children}
        <View style={[style.textContainer, styles.centered]}>
          <TftItemText style={style.details}>{item.description}</TftItemText>
        </View>
      </View>
    );
  }
}

ItemDetails.propTypes = propTypes;

const style = EStyleSheet.create({
  title: {
    fontSize: bigFontSize,
    textAlign: 'center',
    '@media (min-width: 640)': {
      fontSize: 38,
    },
  },
  description: {
    fontSize: bigFontSize,
    textAlign: 'center',
    '@media (min-width: 640)': {
      fontSize: 30,
    },
  },
  textContainer: {
    padding: 12,
  },
  details: {
    fontSize: '18rem',
    '@media (min-width: 640)': {
      fontSize: 28,
    },
  }
});
