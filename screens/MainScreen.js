import React from 'react';
import {
  View, Button, SafeAreaView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import propTypes from 'prop-types';

import DumbLoader from '../components/base/DumbLoader';
import ItemTable from '../components/items/ItemTable';
import ItemAdditioner from '../components/items/ItemAdditioner';
import Result from '../components/Results/Result';
import WinCounterGradient from '../components/Results/WinCounterGradient';

import WeightedItems from '../model/WeightedItems';
import { itemsDto } from '../model/itemsDto';
import TftItemText from '../components/base/TftItemText';
import { winningNumber } from '../constants';
import TftButton from '../components/base/TftButton';
import { styles } from '../genericStyles';
import { getKeyByValue } from '../helper';

export default class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.guessEnum = {
      notYet: 0,
      fail: 1,
      success: 2
    };
    const { items } = this.props;
    this.state = {
      item: false,
      guess: this.guessEnum.notYet,
      winCounter: 0
    };
    items.initialize().then(() => {
      items.getRandomWeightedItem().then((randomItem) => {
        this.setState(() => ({
          item: randomItem,
          guess: this.guessEnum.notYet,
        }));
      });
    });
  }

  newItem() {
    const { item } = this.state;
    const { items } = this.props;
    if (item) {
      items.getRandomWeightedItem(item).then((randomItem) => {
        this.setState({
          item: randomItem,
          guess: this.guessEnum.notYet
        });
      });
    } else {
      items.getRandomWeightedItem().then((randomItem) => {
        this.setState({
          item: randomItem,
          guess: this.guessEnum.notYet
        });
      });
    }
  }

  render() {
    // const item = undefined;
    const { item, guess, winCounter } = this.state;
    const { items } = this.props;
    if (!item) {
      return (
        <View style={[styles.container, styles.centered]}>
          <SafeAreaView style={[styles.centered, styles.container]}>
            <DumbLoader />
            <View style={styles.container}>
              <Button
                onPress={() => this.newItem()}
                title="New item"
                color="#841584"
                accessibilityLabel="Bien"
              />
            </View>
          </SafeAreaView>
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
                        const itemKey = getKeyByValue(itemsDto, item);
                        if (itemName === item.displayName) {
                          items.onFoundItem(itemKey);
                          this.setState(
                            {
                              guess: this.guessEnum.success,
                              winCounter: winCounter >= winningNumber ? winCounter : winCounter + 1
                            }
                          );
                        } else {
                          items.onFailedItem(itemKey);
                          this.setState(
                            {
                              guess: this.guessEnum.fail,
                              winCounter: winCounter <= -winningNumber ? winCounter : winCounter - 1
                            }
                          );
                        }
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

MainScreen.propTypes = {
  items: propTypes.instanceOf(WeightedItems).isRequired
};

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
