import React from 'react';
import {
  TouchableOpacity, View, Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';
import { AsyncStorage } from 'react-native';

import { styles } from '../../genericStyles';

export default class ExplanationModal extends React.PureComponent {
  constructor(props) {
    super(props);
    const { visible } = this.props;
    this.firstTime = visible;
    this.state = {
      modalVisible: visible
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    if (this.firstTime) {
      AsyncStorage.setItem('notFirstTime', JSON.stringify(false)).then(() => {
        this.firstTime = false;
      });
    }
  }

  render() {
    const { modalVisible } = this.state;
    const { children } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <View style={[styles.container, style.container]}>
            <View style={{ flex: 1 }}>
              {children}
            </View>
            <Button style={style.okayButton} titleStyle={style.okayButtonTitle} title="okay" onPress={() => this.setModalVisible(!modalVisible)} />
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View>
            <Ionicons name="ios-information-circle-outline" size={moderateScale(20, 0.5)} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = EStyleSheet.create({
  tryAgain: {
    height: '60rem',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 640)': {
      height: 80,
    },
  },
  container: {
    backgroundColor: 'black'
  },
  okayButtonTitle: {
    fontSize: '15rem',
    '@media (min-width: 640)': {
      fontSize: 30,
    },
  },
  okayButton: {
    margin: 20
  }
});
