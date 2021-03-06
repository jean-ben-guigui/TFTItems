import React from 'react';
import {
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';

import TftItemText from '../base/TftItemText';
import { winningQuotesArray, loosingQuotesArray } from '../../constants';
import { winningColor, styles, loosingColor } from '../../genericStyles';


const propTypes = {
  success: PropTypes.bool,
};

export default class Result extends React.PureComponent {
  render() {
    const { success } = this.props;

    const arrayOfQuotes = success ? winningQuotesArray : loosingQuotesArray;
    const firstLine = success
      ? <Ionicons name="ios-thumbs-up" size={moderateScale(40, 0.5)} color={winningColor} />
      : <MaterialCommunityIcons name="emoticon-poop" size={moderateScale(40, 0.5)} color={loosingColor} />;
    const secondLine = success
      ? arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)]
      : loosingQuotesArray[Math.floor(Math.random() * loosingQuotesArray.length)];
    const styleQuote = success ? style.winningQuote : style.loosingQuote;
    return (
      <View style={[styles.centered]}>
        <View style={[styles.centered]}>
          {firstLine}
          <TftItemText style={[style.friendlyText, styleQuote]}>{secondLine}</TftItemText>
        </View>
      </View>
    );
  }
}

Result.propTypes = propTypes;
Result.defaultProps = {
  success: true
};

const style = EStyleSheet.create({
  friendlyText: {
    fontSize: '18rem',
    fontWeight: 'bold',
    '@media (min-width: 640)': {
      fontSize: 30,
    },
  },
  winningQuote: {
    color: winningColor
  },
  loosingQuote: {
    color: loosingColor
  },
});
