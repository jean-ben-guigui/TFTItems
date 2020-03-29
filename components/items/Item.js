import React from 'react';
import { Image, Platform } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { imageSize } from '../../genericStyles';

const propTypes = {
  source: PropTypes.node.isRequired
};

// export default class Item extends React.Component {
//   render() {
//     const { children, source } = this.props;
//     return (
//       <Image
//         style={
//           style.image
//         }
//         resizeMode="contain"
//         source={source}
//       >
//         {children}
//       </Image>
//     );
//   }
// }

export default function Item(props) {
  const { children, source, customStyle } = props;
  return (
    <Image
      style={
        [style.image, customStyle]
      }
      resizeMode="contain"
      source={source}
    >
      {children}
    </Image>
  );
}

Item.propTypes = propTypes;

const style = EStyleSheet.create({
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: Platform.OS === 'android' ? 3 : 10,
    '@media (min-width: 640)': {
      width: 80,
      height: 80,
    },
  }
});
