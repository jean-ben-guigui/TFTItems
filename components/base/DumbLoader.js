import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const propTypes = {
  isLoading: PropTypes.bool,
};

class DumbLoader extends React.PureComponent {
  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.loader}>
        {
          isLoading
            ? <ActivityIndicator style={styles.loader} size="large" color="#0000ff" animating={isLoading} />
            : null
        }
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  loader: {
    backgroundColor: 'transparent',
    minHeight: 50,
  },
});

DumbLoader.propTypes = propTypes;
DumbLoader.defaultProps = { isLoading: true };

export default DumbLoader;
