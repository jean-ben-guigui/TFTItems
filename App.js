import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BF from './components/items/BF';
import styles from './genericStyles'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.centered]}>
      <View style={[styles.centered, mainScreenStyle.headerTitle]}>
            <Text style={{fontFamily:'Papyrus'}}>What item does result of the following item combination?</Text>
          </View>
        <View style={[styles.centered, styles.horizontal, mainScreenStyle.itemAddition]}>
          <View style={[styles.centered, styles.container]}>
            <BF></BF>
          </View>
          <Text>+</Text>
          <View style={[styles.centered, styles.container]}>
            <BF></BF>
          </View>
        </View>
        
      </View>
      <View style={[styles.centered, styles.double]}>
        <Text>Bien!</Text>
      </View>
    </View>
  );
}


const mainScreenStyle = StyleSheet.create({
  headerTitle: {
    padding:30
  },
  itemAddition: {
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: "#eba31e",
    borderRadius: 50,
    borderWidth: 2,
    overflow: 'hidden'
  }
});

