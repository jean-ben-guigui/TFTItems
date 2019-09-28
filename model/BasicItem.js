/* eslint-disable max-classes-per-file */

import * as types from '../components/types/bonusTypes';

const recurve = require('../assets/images/recurve.png');
const tear = require('../assets/images/TearOfTheGoddess.png');
const bf = require('../assets/images/BFSword.png');
const rod = require('../assets/images/NeedlesslyLargeRod.png');
const belt = require('../assets/images/GiantsBelt.png');
const cloak = require('../assets/images/NegatronCloak.png');
const spatula = require('../assets/images/Spatula.png');
const vest = require('../assets/images/ChainVest.png');
const gloves = require('../assets/images/SparringGloves.png');

/**
 *
 * @param {string} displayName
 * @param {symbol} bonusType
 * @param {int} bonusQuantity
 * @param {Node} imageSource
 */
export default class BasicItem {
  constructor(displayName, bonuses, imageSource) {
    this.displayName = displayName;
    this.bonus = bonuses;
    this.imageSource = imageSource;
  }
}

class Bonus {
  constructor(bonusType, bonusQuantity) {
    this.bonusType = bonusType;
    this.bonusQuantity = bonusQuantity;
  }
}

export const basicItems = {
  Recurve: new BasicItem('Recurve bow', [new Bonus(types.ATTAQUE_SPEED, 20)], recurve),
  Tear: new BasicItem('Tear of the goddess', [new Bonus(types.MANA, 20)], tear),
  BF: new BasicItem('B.F Sword', [new Bonus(types.ATTAQUE_DAMAGE, 20)], bf),
  Rod: new BasicItem('Needlessly large rod', [new Bonus(types.ABILITY_POWER, 20)], rod),
  Belt: new BasicItem('Giant\'s belt', [new Bonus(types.HEALTH, 200)], belt),
  Cloak: new BasicItem('Negatron cloak', [new Bonus(types.MAGIC_RESIST, 20)], cloak),
  Spatula: new BasicItem('Spatule', [null], spatula),
  Vest: new BasicItem('Chain vest', [new Bonus(types.ARMOR, 20)], vest),
  Gloves: new BasicItem(
    'Sparring Gloves',
    [new Bonus(types.CRITICAL_STRIKE_CHANCE, 10), new Bonus(types.DODGE_CHANCE, 10)],
    gloves
  ),
};
