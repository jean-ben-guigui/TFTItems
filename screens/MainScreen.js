import React from 'react';
import {
  View, Dimensions, Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import propTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';

import LoaderScreen from '../components/base/ReloadScreen';
import ItemTable from '../components/items/ItemTable';
import ItemAdditioner from '../components/items/ItemAdditioner';
import Result from '../components/Results/Result';
import WinCounterGradient from '../components/Results/WinCounterGradient';

import ExplanationModal from '../components/base/ExplanationModal';
import WeightedItems from '../model/WeightedItems';
import { itemsDto } from '../model/itemsDto';
import TftItemText from '../components/base/TftItemText';
import { winningNumber } from '../constants';
import TftButton from '../components/base/TftButton';
import { styles } from '../genericStyles';
import { getKeyByValue } from '../helpers/objectHelper';

const allItemsImage = require('../assets/images/allItems.png');

const modalPadding = 20;

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
    const {
      item, guess, winCounter, height, width
    } = this.state;
    const { items } = this.props;
    const landscape = height < width;
    const imageSize = landscape ? height : width;
    if (!item) {
      return (
        <LoaderScreen reload={() => this.newItem()} />
      );
    }
    if (landscape && guess !== this.guessEnum.notYet) {
      return (
        <View style={[styles.centered, styles.container0]}>
          <View style={[styles.container, styles.centered, style.headerTitle]}>
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
          <View style={[
            styles.spaceAround,
            styles.centered,
            styles.container0,
            style.mainContainer,
            styles.spaceEven]}
          >
            <View style={[styles.container0, styles.row]}>
              <View style={[
                styles.container,
                styles.centered,
                styles.wrap,
                styles.row,
                styles.shrink
              ]}
              >
                <ItemAdditioner
                  item={item}
                  onlyRecipe={guess === this.guessEnum.notYet}
                  vertical={false}
                />
              </View>
              <View style={[
                styles.container0,
                styles.centered,
                style.horizontalResult,
                styles.half,
                styles.shrink
              ]}
              >
                <Result success={guess === this.guessEnum.success} />
              </View>
            </View>
          </View>
          {
            guess === this.guessEnum.notYet ? null
              : (
                <View style={style.winCounterContainer}>
                  <WinCounterGradient styleFromParent={style.tryAgain} winNumber={winCounter}>
                    <TftButton
                      label="New Item"
                      onPressFn={() => this.newItem(item)}
                      disabled={false}
                      style={[style.tryAgain, { width: Dimensions.get('window').width + 200 }]}
                    />
                  </WinCounterGradient>
                </View>
              )
          }
        </View>
      );
    }
    return (
      <View style={[styles.container]}>
        <View style={{
          position: 'absolute', top: 2, left: 5, zIndex: 1
        }}
        >
          <ExplanationModal>
            <View style={[styles.container, styles.centered, style.modalContainer]}>
              <View style={[styles.container0, styles.centered, styles.grow, styles.wrap, styles.column]}>
                <View style={[{ width }, styles.centered]}>
                  <TftItemText>
                    In this game, you are going to improve your knowledge
                    of items in TeamFight Tacticts.
                    the following table is a reminder of the combination of items.
                  </TftItemText>
                </View>

              </View>
              <View style={[styles.container0, styles.centered]}>
                <Image
                  style={
                    {
                      width: imageSize - modalPadding,
                      height: imageSize - modalPadding,
                    }
                  }
                  resizeMode="contain"
                  source={allItemsImage}
                />
              </View>
              <View style={[
                styles.container0,
                styles.centered,
                styles.grow,
                styles.wrap,
                styles.column
              ]}
              >
                <TftItemText>You can come back to this screen by tapping the</TftItemText>
                <Ionicons name="ios-information-circle-outline" size={moderateScale(20, 0.5)} color="white" />
                <TftItemText>in the top left corner</TftItemText>
              </View>
            </View>
          </ExplanationModal>
        </View>
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
            <View style={[styles.container0, styles.spaceEven, styles.centered]}>
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
                    style={[style.tryAgain, { width: Dimensions.get('window').width }]}
                  />
                </WinCounterGradient>
              )
          }
        </View>
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
    paddingHorizontal: '22rem',
    paddingBottom: '20rem',
    '@media (min-width: 640)': {
      paddingBottom: 25,
    },
    // maxPaddingBottom: '20'
  },
  headerText: {
    fontSize: '20rem',
    textAlign: 'center',
    '@media (min-width: 640)': {
      fontSize: 30
    },
    // fontFamily: fantasyFont
  },
  middleContainer: {
    paddingTop: '20rem',
    paddingBottom: '10rem',
    '@media (min-width: 640)': {
      paddingTop: 30,
      paddingBottom: 15
    },
  },
  mainContainer: {
    paddingTop: '10rem',
    '@media (min-width: 640)': {
      paddingTop: 20,
    },
    paddingHorizontal: '3%',
    width: '100%',
  },
  tryAgain: {
    // position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // bottom: '10%',
    height: '60rem',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 640)': {
      height: 80,
    },
  },
  horizontalResult: {
    margin: '12rem'
  },
  winCounterContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalContainer: {
    padding: modalPadding
  }
});
