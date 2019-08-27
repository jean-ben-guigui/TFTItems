
import * as types from '../components/types/bonusTypes';

const recurve = require('../images/recurve.png');
const tear = require('../images/Tear Of The Goddess.png');
const bf = require('../images/B.F. Sword.png');
const rod = require('../images/Needlessly Large Rod.png');
const belt = require('../images/Giant\'s Belt.png');
const cloak = require('../images/Negatron Cloak.png');
const spatula = require('../images/Spatula.png');
const vest = require('../images/Chain Vest.png');

/**
 *
 * @param {string} displayName
 * @param {symbol} bonusType
 * @param {int} bonusQuantity
 * @param {Node} imageSource
 */
export default class BasicItem {
  constructor(displayName, bonusType, bonusQuantity, imageSource) {
    this.displayName = displayName;
    this.bonusType = bonusType;
    this.bonusQuantity = bonusQuantity;
    this.imageSource = imageSource;
  }
}

export const basicItems = {
  Recurve: new BasicItem('Recurve bow', types.ATTAQUE_SPEED, 20, recurve),
  Tear: new BasicItem('Tear of the goddess', types.MANA, 20, tear),
  BF: new BasicItem('B.F Sword', types.ATTAQUE_DAMAGE, 20, bf),
  Rod: new BasicItem('Needlessly large rod', types.ABILITY_POWER, 20, rod),
  Belt: new BasicItem('Giant\'s belt', types.HEALTH, 200, belt),
  Cloak: new BasicItem('Negatron cloak', types.MAGIC_RESIST, 20, cloak),
  Spatula: new BasicItem('Spatule', null, null, spatula),
  Vest: new BasicItem('Chain vest', types.ARMOR, 20, vest)
};
