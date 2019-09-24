/* eslint-disable global-require */
import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import MainScreen from './screens/MainScreen';
import { styles } from './genericStyles';
import WeightedItems from './model/WeightedItems';

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

async function _loadAssetsAsync() {
  await cacheImages([
    require('./assets/images/recurve.png'),
    require('./assets/images/TearOfTheGoddess.png'),
    require('./assets/images/BFSword.png'),
    require('./assets/images/NeedlesslyLargeRod.png'),
    require('./assets/images/GiantsBelt.png'),
    require('./assets/images/NegatronCloak.png'),
    require('./assets/images/Spatula.png'),
    require('./assets/images/ChainVest.png'),
    require('./assets/images/Bloodthirster.png'),
    require('./assets/images/InfinityEdge.png'),
    require('./assets/images/SwordOfTheDivine.png'),
    require('./assets/images/HextechGunblade.png'),
    require('./assets/images/SpearOfShojin.png'),
    require('./assets/images/GuardianAngel.png'),
    require('./assets/images/Bloodthirster.png'),
    require('./assets/images/ZekesHerald.png'),
    require('./assets/images/YoumuusGhostblade.png'),
    require('./assets/images/FrozenHeart.png'),
    require('./assets/images/LocketOfTheIronSolari.png'),
    require('./assets/images/Thornmail.png'),
    require('./assets/images/PhantomDancer.png'),
    require('./assets/images/SwordBreaker.png'),
    require('./assets/images/RedBuff.png'),
    require('./assets/images/KnightsVow.png'),
    require('./assets/images/TitanicHydra.png'),
    require('./assets/images/Morellonomicon.png'),
    require('./assets/images/Redemption.png'),
    require('./assets/images/Zephyr.png'),
    require('./assets/images/WarmogsArmor.png'),
    require('./assets/images/FrozenMallet.png'),
    require('./assets/images/GuinsoosRageblade.png'),
    require('./assets/images/RabadonsDeathcap.png'),
    require('./assets/images/Yuumi.png'),
    require('./assets/images/IonicSpark.png'),
    require('./assets/images/LudensEcho.png'),
    require('./assets/images/Hush.png'),
    require('./assets/images/CursedBlade.png'),
    require('./assets/images/RunaansHurricane.png'),
    require('./assets/images/DragonsClaw.png'),
    require('./assets/images/RapidFirecannon.png'),
    require('./assets/images/BladeOfTheRuinedKing.png'),
    require('./assets/images/ForceOfNature.png'),
    require('./assets/images/Darkin.png'),
    require('./assets/images/SeraphsEmbrace.png'),
    require('./assets/images/StatikkShiv.png')
  ]);

  // const fontAssets = cacheFonts(['Papyrus']);
}

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const { width } = Dimensions.get('window');
    // const entireScreenWidth = Math.sqrt(height ** 2 + width ** 2);
    EStyleSheet.build({ $rem: width / 380, $imageSize: '1rem' });
    this.items = new WeightedItems();
    this.state = {
      isReady: false,
    };
  }

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <LinearGradient
        colors={
          [
            '#6c1374',
            '#175d73',
            // '#c166d8',
          ]
        }
        style={[styles.centered, styles.container]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={[styles.centered, styles.container]}>
          <MainScreen items={this.items} />
        </View>
      </LinearGradient>
    );
  }
}
