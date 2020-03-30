import React, { useState, useEffect } from 'react';
import { View, InteractionManager } from 'react-native';
import FadeIn from '../base/FadeIn';

export default function InfoTab(props) {
  const [showImages, setShowImages] = useState(false);
  // const showImages = false;

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (!showImages) {
        setShowImages(true);
      }
    });
  }, []);

  const { data, imageSize } = props;

  return showImages
    ? <FadeIn duration={700}>{data}</FadeIn>
    : <View style={{ height: 9 * imageSize + 40 }} />;
}
