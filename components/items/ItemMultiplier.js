import React from 'react';
import {
  View, StyleSheet, Button
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DumbLoader from '../base/DumbLoader';
import Item from './Item';
import ItemTable from './ItemTable';

import * as itemService from '../../services/items';
import TftItemText from '../base/TftItemText';
import ItemDetails from './itemDetails';
import { winningQuotesArray, loosingQuotesArray } from '../../constant';
import { winningColor, styles, loosingColor } from '../../genericStyles';

const itemPadding = 0;

class ItemMultiplier extends React.PureComponent {
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
    };
  }

  componentDidMount() {
    this.newItem();
  }

  newItem() {
    this.setState({ item: itemService.getRandomItem(), guess: this.guessEnum.notYet });
  }


  renderFindItem(item) {
    const { guess } = this.state;
    let firstLine = '';
    let secondLine = '';
    let styleQuote = style.loosingQuote;

    switch (guess) {
      case this.guessEnum.success:
        firstLine = <Ionicons name="ios-thumbs-up" size={32} color={winningColor} />;
        secondLine = winningQuotesArray[Math.floor(Math.random() * winningQuotesArray.length)];
        styleQuote = style.winningQuote;
        break;
      case this.guessEnum.fail:
        firstLine = <Ionicons name="ios-thumbs-down" size={32} color={loosingColor} />;
        secondLine = loosingQuotesArray[Math.floor(Math.random() * loosingQuotesArray.length)];
        break;
      default:
        return (
          <ItemTable
            style={{ flex: 1 }}
            onPress={
              (itemName) => {
                this.setState(
                  {
                    guess: itemName === item.displayName
                      ? this.guessEnum.success
                      : this.guessEnum.fail
                  }
                );
              }
            }
          />
        );
    }
    return (
      <View style={[styles.container, styles.centered]}>
        <View style={[styles.half, styles.centered]}>
          <View style={[styles.container, styles.centered]}>
            {firstLine}
            <TftItemText style={[style.friendlyText, styleQuote]}>{secondLine}</TftItemText>
          </View>
        </View>
        <View style={[styles.container, styles.centered, style.item]}>
          <ItemDetails item={item}>
            <View style={styles.centered}>
              <Item source={item.imageSource} />
            </View>
          </ItemDetails>
        </View>
      </View>
    );
  }


  render() {
    const { item } = this.state;
    if (!item) {
      return (
        <View style={[styles.container, styles.centered]}>
          <DumbLoader />
          <Button
            onPress={() => this.newItem()}
            title="New item"
            color="#841584"
            accessibilityLabel="Bien"
          />
        </View>
      );
    }

    const { item1, item2 } = item.recipe;
    return (
      <View style={styles.container}>
        <View style={[styles.centered]}>
          <View style={[styles.centered, style.headerTitle]}>
            <TftItemText style={style.headerText}>
              What item results of the following item combination?
            </TftItemText>
          </View>
          <View style={[styles.centered, styles.horizontal, style.itemAddition]}>
            <View style={[styles.centered, styles.container, style.itemToGuessLeft]}>
              <Item source={item1.imageSource} />
            </View>
            <MaterialCommunityIcons name="plus" size={22} color="white" />
            <View style={[styles.centered, styles.container, style.itemToGuessRight]}>
              <Item source={item2.imageSource} />
            </View>
          </View>
        </View>
        <View style={[style.middleContainer, styles.container, style.centered]}>
          {this.renderFindItem(item)}
        </View>
        {/* <DefaultButton onPressFn={this.newItem} label="New item" disabled={false} /> */}
        {/* <View style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <Button
            onPress={() => this.newItem()}
            title="New item"
            color="#fff"
          />
        </View> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  headerTitle: {
    padding: 30,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  itemAddition: {
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    // borderColor: 'white',
    borderRadius: 10,
    // borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  friendlyText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  middleContainer: {
    paddingTop: 20,
    paddingBottom: 10
  },
  winningQuote: {
    color: winningColor
  },
  loosingQuote: {
    color: loosingColor
  },
  itemToGuessLeft: {
    paddingLeft: itemPadding
  },
  itemToGuessRight: {
    paddingRight: itemPadding
  }
});

export default ItemMultiplier;
