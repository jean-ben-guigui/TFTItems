import React, { useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';
import FadeIn from '../base/FadeIn';

export default function InfoTab(props) {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    // setTimeout is there to prevent a behavior
    // where the InteractionManager doesn't work since expo 36.0.0
    setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        if (!showImages) {
          setShowImages(true);
        }
      });
    }, 0);
  }, []);

  const { data } = props;

  return (showImages && <FadeIn>{data}</FadeIn>
  );
}
