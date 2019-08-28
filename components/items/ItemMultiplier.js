import React from 'react';
import {
  Text, View, ScrollView, StyleSheet, Button
} from 'react-native';
import Item from './Item';
import ItemTable from './ItemTable';
import DumbLoader from '../base/DumbLoader';

import styles from '../../genericStyles';
import * as itemService from '../../services/items';
import DefaultButton from '../base/DefaultButton';

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
    switch (guess) {
      case this.guessEnum.success:
        return (
          <View style={[styles.centered, styles.double]}>
            <Text>BIIIIIEN</Text>
            <Text>{item.displayName}</Text>
            <Item source={item.imageSource} />
            <Text>{item.description}</Text>
          </View>
        );
      case this.guessEnum.fail:
        return (
          <View style={[styles.centered, styles.double]}>
            <Text>C&apos;est non.</Text>
            <Text>{item.displayName}</Text>
            <Item source={item.imageSource} />
            <Text>{item.description}</Text>
          </View>
        );
      default:
        return (
          <ItemTable
            style={{ flex: 1 }}
            onPress={
              (itemName) => {
                this.setState(
                  { guess: itemName === item.displayName ? this.guessEnum.success : this.guessEnum.fail }
                );
                // console.log(itemName);
              }
            }
          />
        );
    }
  }

  render() {
    const { item } = this.state;
    if (!item) {
      return (
        <DumbLoader />
      );
    }

    const { item1, item2 } = item.recipe;
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.centered]}>
          <View style={[styles.centered, mainScreenStyle.headerTitle]}>
            <Text style={{ fontFamily: 'Papyrus' }}>What item does result of the following item combination?</Text>
          </View>
          <View style={[styles.centered, styles.horizontal, mainScreenStyle.itemAddition]}>
            <View style={[styles.centered, styles.container]}>
              <Item source={item1.imageSource} />
            </View>
            <Text>+</Text>
            <View style={[styles.centered, styles.container]}>
              <Item source={item2.imageSource} />
            </View>
          </View>
        </View>
        {this.renderFindItem(item)}
        {/* <DefaultButton onPressFn={this.newItem} label="New item" disabled={false} /> */}
        <Button
          onPress={() => this.newItem()}
          title="New item"
          color="#841584"
          accessibilityLabel="Bien"
        />
      </View>
    );
  }
}

const mainScreenStyle = StyleSheet.create({
  headerTitle: {
    padding: 30
  },
  itemAddition: {
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#eba31e',
    borderRadius: 50,
    borderWidth: 2,
    overflow: 'hidden'
  }
});

export default ItemMultiplier;
