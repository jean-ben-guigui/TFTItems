import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  loader: {
    backgroundColor: 'transparent',
    minHeight: 50,
  },
});

DumbLoader.propTypes = propTypes;
DumbLoader.defaultProps = { isLoading: true };

export default DumbLoader;
