
import { basicItems } from './BasicItem';
import Recipe from './Recipe';

const ie = require('../assets/images/InfinityEdge.png');
const divine = require('../assets/images/SwordOfTheDivine.png');
const gunblade = require('../assets/images/HextechGunblade.png');
const shojin = require('../assets/images/SpearOfShojin.png');
const ga = require('../assets/images/GuardianAngel.png');
const bt = require('../assets/images/Bloodthirster.png');
const zeke = require('../assets/images/ZekesHerald.png');
const youmuu = require('../assets/images/YoumuusGhostblade.png');

/**
 *
 * @param {string} displayName
 * @param {string} description
 * @param {Recipe} ItemRecipe
 * @param {Node} imageSource
 */
class Item {
  constructor(displayName, description, ItemRecipe, imageSource) {
    this.displayName = displayName;
    this.description = description;
    this.recipe = ItemRecipe;
    this.imageSource = imageSource;
  }
}

export const items = {
  IE: new Item('Infinity edge', 'Grants 150% bonus critical strike damage', new Recipe(basicItems.BF, basicItems.BF), ie),
  DivineSword: new Item('Sword of the divine', 'Every second, has a 5% chance to gain 100% critical strike chance until the end of combat', new Recipe(basicItems.BF, basicItems.Recurve), divine),
  Gunblade: new Item('Hextech Gunblade', 'Heal for 33% of damage dealt. Does not heal for damage dealt by items', new Recipe(basicItems.BF, basicItems.Rod), gunblade),
  Shojin: new Item('Spear of Shojin', 'After casting Special Ability for the first time, basic attacks restore an additional 15% of maximum mana on-hit', new Recipe(basicItems.BF, basicItems.Tear), shojin),
  GA: new Item('Guardian Angel', 'Upon death, clears Grievous Wounds and revives after 2 seconds with 1000 health.', [new Recipe(basicItems.BF, basicItems.Vest)], ga),
  BT: new Item('Bloodthirster', 'Heal for 50% of damage dealt by basic attacks', new Recipe(basicItems.BF, basicItems.Cloak), bt),
  Zeke: new Item('Zeke\'s Herald', 'At the beginning of combat, the wearer and the champions two spaces to the left and right of the wearer gain 15% attack speed', new Recipe(basicItems.BF, basicItems.Belt), zeke),
  youmuu: new Item('Youmuu\'s Ghostblade', 'Becomes an Assassin.', new Recipe(basicItems.BF, basicItems.Spatula), youmuu),
};


/**
 * returns a random Item from the Items const.
 */
export function getRandomItem() {
  const keys = Object.keys(items);
  const randomKeyIndex = Math.round(Math.random() * keys.length);
  return items[keys[randomKeyIndex]];
}
