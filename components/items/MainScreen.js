import React from 'react';
import {
  View, StyleSheet, Button
} from 'react-native';
import DumbLoader from '../base/DumbLoader';
import ItemTable from './ItemTable';
import ItemAdditioner from './ItemAdditioner';
import Result from '../Results/Result';

import * as itemService from '../../services/items';
import TftItemText from '../base/TftItemText';
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
    const { item, guess } = this.state;
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
      <View style={styles.container}>
        <View style={[styles.centered]}>
          <View style={[styles.centered, style.headerTitle]}>
            <TftItemText style={style.headerText}>
              {
                guess === this.guessEnum.fail
                  ? 'Nope, the combination was in fact:'
                  : guess === this.guessEnum.success
                    ? 'The item combination was indeed:'
                    : 'What item results of the following item combination?'
              }
            </TftItemText>
          </View>
          <ItemAdditioner item={item} onlyRecipe={guess === this.guessEnum.notYet} />
        </View>
        {
          guess === this.guessEnum.notYet
            ? (
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
            )
            : <Result success={guess === this.guessEnum.success} />
        }
        {/* <DefaultButton onPressFn={this.newItem} label="New item" disabled={false} /> */}
        {
          guess === this.guessEnum.notYet
            ? <View />
            : (
              <View style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <Button
                  onPress={() => this.newItem()}
                  title="Try Again"
                  color="#fff"
                />
              </View>
            )
        }
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
  middleContainer: {
    paddingTop: 20,
    paddingBottom: 10
  },
});

export default MainScreen;
