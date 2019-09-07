import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import TftItemText from '../base/TftItemText';
import { winningQuotesArray, loosingQuotesArray } from '../../constant';
import { winningColor, styles, loosingColor } from '../../genericStyles';


const propTypes = {
  success: PropTypes.bool,
};

export default class Result extends React.PureComponent {
  render() {
    const { success } = this.props;

    const arrayOfQuotes = success ? winningQuotesArray : loosingQuotesArray;
    const firstLine = success
      ? <Ionicons name="ios-thumbs-up" size={32} color={winningColor} />
      : <Ionicons name="ios-thumbs-down" size={32} color={loosingColor} />;
    const secondLine = success
      ? arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)]
      : loosingQuotesArray[Math.floor(Math.random() * loosingQuotesArray.length)];
    const styleQuote = success ? style.winningQuote : style.loosingQuote;
    return (
      <View style={[styles.container, styles.centered]}>
        <View style={[styles.half, styles.centered]}>
          <View style={[styles.container, styles.centered]}>
            {firstLine}
            <TftItemText style={[style.friendlyText, styleQuote]}>{secondLine}</TftItemText>
          </View>
        </View>
      </View>
    );
  }
}

Result.propTypes = propTypes;
Result.defaultProps = {
  success: true
};

const style = StyleSheet.create({
  friendlyText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  winningQuote: {
    color: winningColor
  },
  loosingQuote: {
    color: loosingColor
  },
});
