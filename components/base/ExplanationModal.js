import React from 'react';
import {
  TouchableHighlight, View, Modal, Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';

import { styles } from '../../genericStyles';
import TftButton from './TftButton';
import TftItemText from './TftItemText';

export default class ExplanationModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
          onRequestClose={() => {

          }}
        >
          <View style={[styles.container, style.container]}>
            {children}
            <View style={style.tryAgain}>
              <TftButton
                label="Close"
                onPressFn={() => this.setModalVisible(!modalVisible)}
                disabled={false}
                style={[style.tryAgain, { width: Dimensions.get('window').width + 200 }]}
              />
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View>
            <Ionicons name="ios-information-circle-outline" size={moderateScale(20, 0.5)} color="white" />
          </View>
        </TouchableHighlight>
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
    backgroundColor: '#27282e'
  }
});
