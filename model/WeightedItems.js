import { AsyncStorage } from 'react-native';
import { itemsDto } from './itemsDto';
import * as constants from '../constants';
import { isObjectEmpty } from '../helpers/objectHelper';

/**
 * A  class that stocks weightedItems in asyncStorage
 * and provide random item to the UI
 */
export default class WeightedItems {
  /**
   * the weight of the items is a positif int
   */
  constructor() {
    this._weightedItems = {};
  }

  /**
 * Fill the item @Items in asyncStorage with a dictionnary that links itemKeys and a weight of 0.
 * If some itemKey already exist, it doesn't modify them.
 * Set the weightedItems variable.
 * returns the modified @Items from asyncStorage.
 */
  async initialize() {
    let weightedAsyncItems = {};
    try {
      weightedAsyncItems = await WeightedItems.get();
      if (isObjectEmpty(weightedAsyncItems)) {
        Object.keys(itemsDto).forEach((itemKey) => {
          weightedAsyncItems[itemKey] = constants.startingWeight;
        });
      }
      // If there are bad data in the asyncStorage, we wipe them
      Object.values(weightedAsyncItems).forEach((val) => {
        if (val > constants.maxWeight || val < constants.minWeight) {
          Object.keys(itemsDto).forEach((itemKey) => {
            weightedAsyncItems[itemKey] = constants.startingWeight;
          });
        }
      });
      // Finally, if there are missing data in AsyncStorage, we add them
      Object.keys(itemsDto).forEach((itemKey) => {
        if (!Object.prototype.isPrototypeOf.hasOwnProperty.call(weightedAsyncItems, itemKey)) {
          weightedAsyncItems[itemKey] = constants.startingWeight;
        }
      });
      return this.set(weightedAsyncItems);
    } catch (error) {
      console.log(error);
      return Promise.reject();
    }
  }

  /**
   * return a dictionary of all items with their weights
   * (keys are the same as items from ./itemsDto)
   */
  static get = async () => {
    const asyncItems = await AsyncStorage.getItem('@Items');
    if (asyncItems) {
      return JSON.parse(asyncItems);
    }
    return {};
  }

  set = async (weightedItems) => AsyncStorage.setItem('@Items', JSON.stringify(weightedItems)).then(() => {
    this._weightedItems = weightedItems;
    return Promise.resolve();
  }).catch((error) => Promise.reject(error));


  setItem = async (key, weight) => {
    try {
      const okayWeight = this.boundedWeight(weight);
      const asyncItems = await WeightedItems.get()
      if (asyncItems) {
        if (Object.prototype.isPrototypeOf.hasOwnProperty.call(asyncItems, key)
          && !(asyncItems[key] === okayWeight)) {
          asyncItems[key] = okayWeight;
          await this.set(asyncItems);
          this._weightedItems[key] = okayWeight;
        }
      } else {
        console.log('error getting items from db');
      }
    } catch (error) {
      console.log(error);
    }
  }

  deleteItem = async (key) => {
    try {
      const asyncItems = await WeightedItems.get();
      delete asyncItems[key];
      await this.set(asyncItems);
      delete this._weightedItems[key];
    } catch (error) {
      console.log(error);
    }
  }

  boundedWeight = (weight) => {
    let okayWeight = weight;
    if (okayWeight > constants.maxWeight) {
      okayWeight = constants.maxWeight;
    }
    if (okayWeight < constants.minWeight) {
      okayWeight = constants.minWeight;
    }
    return okayWeight;
  }

  async onFoundItem(itemKey) {
    const itemWeight = this._weightedItems[itemKey];
    this.setItem(itemKey, itemWeight - constants.weightDiff);
  }

  async onFailedItem(itemKey) {
    const itemWeight = this._weightedItems[itemKey];
    this.setItem(itemKey, itemWeight + constants.weightDiff);
  }

  static async getItemWeight(itemKey) {
    const asyncItems = JSON.parse(await AsyncStorage.getItem('@Items'));
    return asyncItems(itemKey);
  }

  async getRandomWeightedItem(item) {
    const keys = Object.keys(this._weightedItems);
    const values = Object.values(this._weightedItems);
    let sum = 0;
    let weightCount = 0;
    weightCount = values.reduce((total, num) => total + num);
    const randomKeyIndex = Math.round(Math.random() * (weightCount));

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const weight = this._weightedItems[key];
      sum += weight;
      if (randomKeyIndex <= sum) {
        const randomItem = itemsDto[key];
        if (randomItem) {
          if (randomItem !== item) {
            return randomItem;
          }
          this.getRandomWeightedItem(item);
        } else {
          // eslint-disable-next-line no-await-in-loop
          this.deleteItem(key).then(() => {
            this.getRandomWeightedItem(item);
          });
        }
      }
    }

    return 'bien';
  }
}
