import React from 'react';
import {
  View, Button, SafeAreaView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import DumbLoader from '../base/DumbLoader';
import ItemTable from './ItemTable';
import ItemAdditioner from './ItemAdditioner';
import Result from '../Results/Result';
import WinCounterGradient from '../Results/WinCounterGradient';

import * as itemService from '../../services/items';
import TftItemText from '../base/TftItemText';
import { winningNumber } from '../../constant';
import TftButton from '../base/TftButton';
import { styles } from '../../genericStyles';

class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.guessEnum = {
      notYet: 0,
      fail: 1,
      success: 2
    };
    this.state = {
      item: itemService.getRandomItem(),
      guess: this.guessEnum.notYet,
      winCounter: 0
    };
  }

  newItem() {
    const { item } = this.state;
    if (item) {
      this.setState({ item: itemService.getRandomItem(item), guess: this.guessEnum.notYet });
    } else {
      this.setState({ item: itemService.getRandomItem(), guess: this.guessEnum.notYet });
    }
  }

  render() {
    const { item, guess, winCounter } = this.state;
    if (!item) {
      return (
        <View style={[styles.container, styles.centered]}>
          <DumbLoader />
          <View style={styles.container}>
            <Button
              onPress={() => this.newItem(item)}
              title="New item"
              color="#841584"
              accessibilityLabel="Bien"
            />
          </View>
        </View>
      );
    }
    return (
      <View style={[styles.centered, styles.container]}>
        <SafeAreaView style={[styles.centered, styles.container]}>
          <View style={[styles.centered, styles.container, style.mainContainer]}>
            <View style={[styles.centered]}>
              <View style={[styles.centered, style.headerTitle]}>
                <TftItemText style={style.headerText}>
                  {
                    guess === this.guessEnum.fail
                      ? 'Nope, the combination was in fact:'
                      : guess === this.guessEnum.success
                        ? 'The item combination was indeed:'
                        : 'What item results of the following combination?'
                  }
                </TftItemText>
              </View>
              <ItemAdditioner item={item} onlyRecipe={guess === this.guessEnum.notYet} />
            </View>
            {
              guess === this.guessEnum.notYet
                ? (
                  <ItemTable
                    onPress={
                      (itemName) => {
                        this.setState(
                          {
                            guess: itemName === item.displayName
                              ? this.guessEnum.success
                              : this.guessEnum.fail,
                            winCounter: itemName === item.displayName
                              ? (winCounter >= winningNumber ? winCounter : winCounter + 1)
                              : (winCounter <= -winningNumber ? winCounter : winCounter - 1),
                          }
                        );
                      }
                    }
                  />
                )
                : <Result success={guess === this.guessEnum.success} />
            }
            {/* <DefaultButton onPressFn={this.newItem} label="New item" disabled={false} /> */}

          </View>
        </SafeAreaView>
        {
          guess === this.guessEnum.notYet
            ? <View />
            : (

              <WinCounterGradient styleFromParent={style.tryAgain} winNumber={winCounter}>
                <TftButton
                  label="New Item"
                  onPressFn={() => this.newItem(item)}
                  disabled={false}
                  style={style.tryAgain}
                />
              </WinCounterGradient>
            )
        }
      </View>
    );
  }
}

const style = EStyleSheet.create({
  globalContainer: {
    width: '100%',
    // flex: 1
  },
  headerTitle: {
    paddingBottom: '20rem',
  },
  headerText: {
    fontSize: '20rem',
    textAlign: 'center',
    '@media (min-width: 550)': {
      fontSize: 30
    },
  },
  middleContainer: {
    paddingTop: '20rem',
    paddingBottom: '10rem'
  },
  mainContainer: {
    paddingLeft: '3%',
    paddingRight: '3%',
    width: '100%'
  },
  tryAgain: {
    position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0.2)',
    bottom: 0,
    width: '100%',
    height: '60rem',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MainScreen;
