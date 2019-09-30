import React from 'react';
import {
  View, Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import propTypes from 'prop-types';

import LoaderScreen from '../components/base/ReloadScreen';
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
    const { height, width } = Dimensions.get('window');
    this.state = {
      height,
      width,
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

  componentDidMount() {
    this.dimensionListener = Dimensions.addEventListener('change', (event) => {
      const { width, height } = event.window;
      this.setState({
        width,
        height
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

  // componentDidMount(){
  //   Dimensions.on
  // }

  render() {
    // const item = undefined;
    const {
      item, guess, winCounter, height, width
    } = this.state;
    const { items } = this.props;
    const landscape = height < width;
    if (!item) {
      return (
        <LoaderScreen reload={() => this.newItem()} />
      );
    }
    if (landscape && guess !== this.guessEnum.notYet) {
      return (
        <View style={[styles.centered, styles.container]}>
          <View style={[
            styles.spaceAround,
            styles.centered,
            styles.container,
            style.mainContainer,
            styles.spaceEven]}
          >
            <View style={[styles.container0, styles.centered, style.headerTitle]}>
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
            <View style={[styles.container, styles.row]}>
              <View style={[styles.container, styles.wrap, styles.row, style.centered]}>
                <ItemAdditioner
                  item={item}
                  onlyRecipe={guess === this.guessEnum.notYet}
                  vertical={false}
                />
              </View>
              <View style={[styles.container, styles.centered, style.horizontalResult, styles.half]}>
                <Result success={guess === this.guessEnum.success} />
              </View>
            </View>
          </View>
          {
            guess === this.guessEnum.notYet ? null
              : (
                <WinCounterGradient styleFromParent={style.tryAgain} winNumber={winCounter}>
                  <TftButton
                    label="New Item"
                    onPressFn={() => this.newItem(item)}
                    disabled={false}
                    style={[style.tryAgain, { width: Dimensions.get('window').width + 200 }]}
                  />
                </WinCounterGradient>
              )
          }
        </View>
      );
    }
    return (
      <View style={[styles.centered, styles.container]}>
        <View style={[
          styles.spaceAround,
          styles.centered,
          styles.container,
          style.mainContainer,
          styles.spaceEven]}
        >
          <View style={[styles.container0, styles.centered, style.headerTitle]}>
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
          <View style={[styles.container0, styles.spaceEven]}>
            <ItemAdditioner item={item} onlyRecipe={guess === this.guessEnum.notYet} />
          </View>

          {
            guess === this.guessEnum.notYet
              ? (
                <View style={[styles.container, styles.centered, styles.grow]}>
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
                </View>
              )
              : <Result success={guess === this.guessEnum.success} />
          }
        </View>
        {
          guess === this.guessEnum.notYet ? null
            : (
              <WinCounterGradient styleFromParent={style.tryAgain} winNumber={winCounter}>
                <TftButton
                  label="New Item"
                  onPressFn={() => this.newItem(item)}
                  disabled={false}
                  style={[style.tryAgain, { width: Dimensions.get('window').width + 200 }]}
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
    // maxPaddingBottom: '20'
  },
  headerText: {
    fontSize: '20rem',
    textAlign: 'center',
    // '@media (min-width: 550)': {
    //   fontSize: 30
    // },
    // fontFamily: fantasyFont
  },
  middleContainer: {
    paddingTop: '20rem',
    paddingBottom: '10rem'
  },
  mainContainer: {
    paddingTop: '10rem',
    paddingHorizontal: '3%',
    width: '100%',
  },
  tryAgain: {
    // position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0.2)',
    bottom: 0,

    height: '60rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalResult: {
    margin: '12rem'
  }
});
