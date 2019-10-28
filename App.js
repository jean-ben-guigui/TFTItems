/* eslint-disable global-require */
import React from 'react';
import {
  View, Dimensions, Image,
  SafeAreaView, PixelRatio
} from 'react-native';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AsyncStorage } from 'react-native';

import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import MainScreen from './screens/MainScreen';
import { styles } from './genericStyles';
import WeightedItems from './model/WeightedItems';

let firstTime = true;

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

async function _loadAssetsAsync() {
  const imageAssets = cacheImages([
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
  const fontAssets = Font.loadAsync({ 'open-sans': require('./assets/fonts/OpenSans-Regular.ttf') });

  const getFirstTime = AsyncStorage.getItem('notFirstTime');
  const result = await Promise.all([imageAssets, fontAssets, getFirstTime]);
  if (result[2]) {
    firstTime = false;
  }
}

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const { width, height } = Dimensions.get('screen');
    const pixelRatio = PixelRatio.get();
    // const entireScreenWidth = Math.sqrt(height ** 2 + width ** 2);
    if (height > width) {
      if ((pixelRatio >= 2 && width > 400) || pixelRatio > 2) {
        EStyleSheet.build({ $rem: (width * height) / 310000 });
      }
      // note to myself: don't ever use EstyleSheet again
      // => perform differently depending on the phone orientation when the app is launched.
      // use size matter instead
      // The following lines are a hack to get past that
      EStyleSheet.build({ $rem: (width * height) / 250000 });
    } else if (height > 640) {
      EStyleSheet.build({ $rem: (width * height) / 300000 });
    } else {
      EStyleSheet.build({ $rem: (width * height) / 500000 });
    }
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
            '#dc2f6a',
            '#9123b5',
            '#4b61cc',
          ]
        }
        style={[styles.centered, styles.container]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={[styles.centered, styles.container]}>
          <SafeAreaView style={[styles.centered, styles.container]}>
            <MainScreen items={this.items} firstTime={firstTime} />
          </SafeAreaView>
        </View>
      </LinearGradient>
    );
  }
}
