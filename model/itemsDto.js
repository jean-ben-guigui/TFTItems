
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
const fh = require('../assets/images/FrozenHeart.png');
const locket = require('../assets/images/LocketOfTheIronSolari.png');
const thornmail = require('../assets/images/Thornmail.png');
const pd = require('../assets/images/PhantomDancer.png');
const sb = require('../assets/images/SwordBreaker.png');
const rb = require('../assets/images/RedBuff.png');
const kv = require('../assets/images/KnightsVow.png');
const th = require('../assets/images/TitanicHydra.png');
const Morellonomicon = require('../assets/images/Morellonomicon.png');
const Redemption = require('../assets/images/Redemption.png');
const Zephyr = require('../assets/images/Zephyr.png');
const warmog = require('../assets/images/WarmogsArmor.png');
const fm = require('../assets/images/FrozenMallet.png');
const guinsoo = require('../assets/images/GuinsoosRageblade.png');
const rabadon = require('../assets/images/RabadonsDeathcap.png');
const Yuumi = require('../assets/images/Yuumi.png');
const ionic = require('../assets/images/IonicSpark.png');
const luden = require('../assets/images/LudensEcho.png');
const Hush = require('../assets/images/Hush.png');
const cb = require('../assets/images/CursedBlade.png');
const runaan = require('../assets/images/RunaansHurricane.png');
const claw = require('../assets/images/DragonsClaw.png');
const rfc = require('../assets/images/RapidFirecannon.png');
const botrk = require('../assets/images/BladeOfTheRuinedKing.png');
const fon = require('../assets/images/ForceOfNature.png');
const Darkin = require('../assets/images/Darkin.png');
const seraph = require('../assets/images/SeraphsEmbrace.png');
const statikk = require('../assets/images/StatikkShiv.png');


/**
 *
 * @param {string} displayName
 * @param {string} description
 * @param {Recipe} ItemRecipe
 * @param {Node} imageSource
 */
export default class ItemDto {
  constructor(displayName, description, ItemRecipe, imageSource) {
    this.displayName = displayName;
    this.description = description;
    this.recipe = ItemRecipe;
    this.imageSource = imageSource;
  }
}

export const itemsDto = {
  IE: new ItemDto('Infinity edge', 'Critical Strikes deal +200% damage.', new Recipe(basicItems.BF, basicItems.BF), ie),
  DivineSword: new ItemDto('Sword of the divine', 'Every 1s gain a 7% chance to gain 100% Critical Strike.', new Recipe(basicItems.BF, basicItems.Recurve), divine),
  Gunblade: new ItemDto('Hextech Gunblade', ' Heal for 25% of all damage dealt.', new Recipe(basicItems.BF, basicItems.Rod), gunblade),
  Shojin: new ItemDto('Spear of Shojin', 'After casting, gain 15% of max mana per attack.', new Recipe(basicItems.BF, basicItems.Tear), shojin),
  GA: new ItemDto('Guardian Angel', 'Wearer revives with 500 Health after a 2 sec delay.', new Recipe(basicItems.BF, basicItems.Vest), ga),
  BT: new ItemDto('Bloodthirster', 'Attacks heal for 40% of damage.', new Recipe(basicItems.BF, basicItems.Cloak), bt),
  Zeke: new ItemDto('Zeke\'s Herald', 'On start of combat, allies 2 spaces to the left and right gain +15% Attack Speed.', new Recipe(basicItems.BF, basicItems.Belt), zeke),
  youmuu: new ItemDto('Youmuu\'s Ghostblade', 'Wearer is also an Assassin.', new Recipe(basicItems.BF, basicItems.Spatula), youmuu),
  FH: new ItemDto('Frozen Heart', 'Adjacent enemies Attack Speed is 25% Slower.', new Recipe(basicItems.Vest, basicItems.Tear), fh),
  locket: new ItemDto('Locket of the Iron Solari', 'On start of combat, allies two spaces to the left and right gain a shield of 250 for 6 seconds.', new Recipe(basicItems.Vest, basicItems.Rod), locket),
  thornmail: new ItemDto('Thornmail', 'Reflect 100% of mitigated damage taken from attacks as magic damage.', new Recipe(basicItems.Vest, basicItems.Vest), thornmail),
  pd: new ItemDto('Phantom Dancer', 'Wearer dodges all Critical Strikes.', new Recipe(basicItems.Vest, basicItems.Recurve), pd),
  sb: new ItemDto('Sword Breaker', 'Attacks have a 25% chance to disarm.', new Recipe(basicItems.Vest, basicItems.Cloak), sb),
  kv: new ItemDto('Knight’s Vow', 'Wearer is also a Knight.', new Recipe(basicItems.Vest, basicItems.Spatula), kv),
  rb: new ItemDto('Red Buff', ' Attacks burn for 20% of max HP over 10s and reduce healing by 80%.', new Recipe(basicItems.Vest, basicItems.Belt), rb),
  th: new ItemDto('Titanic Hydra', 'Attacks deal 10% of the wearer\'s max HP as splash.', new Recipe(basicItems.Belt, basicItems.Recurve), th),
  Morellonomicon: new ItemDto('Morellonomicon', 'Spells deal burn damage equal to 20% of enemy’s max hp over 10s & reduce healing by 80%.', new Recipe(basicItems.Belt, basicItems.Rod), Morellonomicon),
  Redemption: new ItemDto('Redemption', 'At 25% health heal all nearby allies for 1200 HP.', new Recipe(basicItems.Belt, basicItems.Tear), Redemption),
  Zephyr: new ItemDto('Zephyr', 'On start of combat, banish an enemy for 5 seconds.', new Recipe(basicItems.Belt, basicItems.Cloak), Zephyr),
  warmog: new ItemDto('Warmog\'s Armor', 'Wearer regenerates 6% of missing health per second.', new Recipe(basicItems.Belt, basicItems.Belt), warmog),
  fm: new ItemDto('Frozen Mallet', 'Wearer is also a Glacial', new Recipe(basicItems.Belt, basicItems.Spatula), fm),
  guinsoo: new ItemDto('Guinsoo\'s Rageblade', 'Attacks grant 5% Attack Speed. Stacks infinitely.', new Recipe(basicItems.Rod, basicItems.Recurve), guinsoo),
  rabadon: new ItemDto('Rabadon\'s Deathcap', 'Wearer\'s Ability Damage increased by 50%.', new Recipe(basicItems.Rod, basicItems.Rod), rabadon),
  Yuumi: new ItemDto('Yuumi', 'Wearer is also a Sorcerer.', new Recipe(basicItems.Rod, basicItems.Spatula), Yuumi),
  ionic: new ItemDto('Ionic Spark', 'Whenever an enemy casts a spell, they take 125 true damage.', new Recipe(basicItems.Rod, basicItems.Cloak), ionic),
  luden: new ItemDto('Luden\'s Echo', 'Deal 180 splash damage on ability hit.', new Recipe(basicItems.Rod, basicItems.Tear), luden),
  Hush: new ItemDto('Hush', '33% chance on hit to prevent the enemy champion from gaining mana for 4 seconds.', new Recipe(basicItems.Cloak, basicItems.Tear), Hush),
  cb: new ItemDto('Cursed Blade', 'Attacks have a 20% chance to Shrink (Reduce enemy\'s star level by 1).', new Recipe(basicItems.Cloak, basicItems.Recurve), cb),
  runaan: new ItemDto('Runaan\'s Hurricane', 'Attacks hit 1 additional enemy. This extra hit does 75% damage and applies on-hit effects.', new Recipe(basicItems.Cloak, basicItems.Spatula), runaan),
  claw: new ItemDto('Dragon’s Claw', '83% resistance to magic damage.', new Recipe(basicItems.Cloak, basicItems.Cloak), claw),
  statikk: new ItemDto('Stattik Shiv', 'Every 3rd attack deals 100 splash magical damage to 2 additional targets.', new Recipe(basicItems.Recurve, basicItems.Tear), statikk),
  rfc: new ItemDto('Rapid Fire Cannon', 'Attacks cannot be dodged. Attack Range is doubled.', new Recipe(basicItems.Recurve, basicItems.Recurve), rfc),
  botrk: new ItemDto('Blade of the Ruined King', 'Wearer is also a Blademaster.', new Recipe(basicItems.Recurve, basicItems.Spatula), botrk),
  fon: new ItemDto('Force of Nature', 'Gain +1 team size.', new Recipe(basicItems.Spatula, basicItems.Spatula), fon),
  Darkin: new ItemDto('Darkin', 'Wearer is also a Demon.', new Recipe(basicItems.Spatula, basicItems.Tear), Darkin),
  seraph: new ItemDto('Seraph\'s Embrace', 'Regain 20 mana each time a spell is cast.', new Recipe(basicItems.Tear, basicItems.Tear), seraph)
};


/**
 * returns a random Item from the Items const.
 */
export function getRandomItemDto(item) {
  const keys = Object.keys(itemsDto);
  const randomKeyIndex = Math.round(Math.random() * (keys.length - 1));
  if (keys.length < 2) {
    return itemsDto[keys[randomKeyIndex]];
  }
  if (item && item.displayName === itemsDto[keys[randomKeyIndex]].displayName) {
    return getRandomItemDto(item);
  }
  return itemsDto[keys[randomKeyIndex]];
}