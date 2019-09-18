/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

import { winningNumber } from '../../constants';
import { winningColor, loosingColor } from '../../genericStyles';


const propTypes = {
  winNumber: PropTypes.number,
  styleFromParent: PropTypes.any
};

export default class WinCounterGradient extends React.PureComponent {
  render() {
    let { winNumber } = this.props;
    const { children, styleFromParent } = this.props;
    let winningGradiant = 0;
    let loosingGradiant = 1;
    if (winNumber > winningNumber) { winNumber = winningNumber; }
    if (winNumber < -winningNumber) { winNumber = -winningNumber; }
    if (winNumber > 0) {
      winningGradiant = winNumber / winningNumber;
      winningGradiant = roundRange(winningGradiant);
    } else {
      loosingGradiant = 1 + winNumber / winningNumber;
      loosingGradiant = roundRange(loosingGradiant);
    }
    return (
      <LinearGradient
        colors={
          [
            winningColor,
            loosingColor,
            // '#c166d8',
          ]
        }
        style={styleFromParent}
        start={[winningGradiant, 0]}
        end={[loosingGradiant, 0]}
      >
        {children}
      </LinearGradient>
    );
  }
}

function roundRange(number) {
  let toReturn = number;
  if (number > 1) {
    toReturn = 1;
  } else if (number < 0) {
    toReturn = 0;
  }
  return toReturn;
}

WinCounterGradient.propTypes = propTypes;
WinCounterGradient.defaultProps = {
  winNumber: 0,
  styleFromParent: {}
};
