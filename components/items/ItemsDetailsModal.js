import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity, View, Modal, Text, TouchableWithoutFeedback
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import EStyleSheet from 'react-native-extended-stylesheet';
import Item from './Item';
import FadeIn from '../base/FadeIn';

import { styles } from '../../genericStyles';

const ItemsDetailsModal = (props) => {
  const { visible, children } = props;
  const [modalVisible, setModalVisible] = useState(visible);
  const [dismissMessageVisible, setDismissMessageVisible] = useState(false);

  useEffect(() => {
    let timeout = null;
    if (modalVisible && !dismissMessageVisible) {
      timeout = setTimeout(() => {
        setDismissMessageVisible(true);
      }, 2000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      if (dismissMessageVisible) {
        setDismissMessageVisible(false);
      }
    };
  });

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={[styles.container, style.container, style.modalBackground]}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}
            style={[styles.container, style.container, style.modalBackground]}
          >
            <View style={{ flex: 1 }}>
              {children}
              {
                dismissMessageVisible && (
                <View style={style.bottomMiddleContainer}>
                  <FadeIn duration={500}>
                    <Text style={[styles.text, style.bottomText]}>tap anywhere to dismiss</Text>
                  </FadeIn>
                </View>
                )
              }
            </View>
          </TouchableWithoutFeedback>

        </View>

      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Item customStyle={props.style} source={props.imageSource} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemsDetailsModal;

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
    margin: 20,
    backgroundColor: '#c73cde',
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  bottomMiddleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomText: {
    fontSize: moderateScale(17, 0.5)
  }
});
