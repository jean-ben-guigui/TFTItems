import React, { useState } from 'react';
import { View, Text, StyleSheet, InteractionManager } from 'react-native';
import { basicItems } from '../../model/BasicItem';
import { itemsDto } from '../../model/itemsDto';
import Item from './Item';
import AppearFromRight from '../base/AppearFromRight';
import FadeIn from '../base/FadeIn';

export default function InfoTab(props) {
  const [showImages, setShowImages] = useState(false);
  // const showImages = false;

  useState(() => {
    InteractionManager.runAfterInteractions(() => {
      if (!showImages) {
        setShowImages(true);
      }
    });
  });

  const { data, imageSize } = props;

  return showImages ? <FadeIn>{data}</FadeIn> : <View style={{ height: 9 * imageSize + 40 }} />;
}
