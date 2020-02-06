
import { basicItems } from './BasicItem';
import Recipe from './Recipe';

const ie = require('../assets/images/InfinityEdge.png');
const gunblade = require('../assets/images/HextechGunblade.png');
const shojin = require('../assets/images/SpearOfShojin.png');
const ga = require('../assets/images/GuardianAngel.png');
const bt = require('../assets/images/Bloodthirster.png');
const zeke = require('../assets/images/ZekesHerald.png');
const youmuu = require('../assets/images/YoumuusGhostblade.png');
const fh = require('../assets/images/FrozenHeart.png');
const locket = require('../assets/images/LocketOfTheIronSolari.png');
const sb = require('../assets/images/SwordBreaker.png');
const rb = require('../assets/images/RedBuff.png');
const ba = require('../assets/images/BerserkerAxe.png');
const th = require('../assets/images/TitanicHydra.png');
const Morellonomicon = require('../assets/images/Morellonomicon.png');
const Redemption = require('../assets/images/Redemption.png');
const Zephyr = require('../assets/images/Zephyr.png');
const warmog = require('../assets/images/WarmogsArmor.png');
const fm = require('../assets/images/FrozenMallet.png');
const guinsoo = require('../assets/images/GuinsoosRageblade.png');
const rabadon = require('../assets/images/RabadonsDeathcap.png');
const wm = require('../assets/images/WardensMail.png');
const ionic = require('../assets/images/IonicSpark.png');
const luden = require('../assets/images/LudensEcho.png');
const Hush = require('../assets/images/Hush.png');
const mc = require('../assets/images/MagesCap.png');
const runaan = require('../assets/images/RunaansHurricane.png');
const claw = require('../assets/images/DragonsClaw.png');
const rfc = require('../assets/images/RapidFirecannon.png');
const botrk = require('../assets/images/BladeOfTheRuinedKing.png');
const fon = require('../assets/images/ForceOfNature.png');
const ic = require('../assets/images/InfernosCinder.png');
const seraph = require('../assets/images/SeraphsEmbrace.png');
const statikk = require('../assets/images/StatikkShiv.png');
const jg = require('../assets/images/JeweledGauntlet.png');
const ig = require('../assets/images/IcebornGauntlet.png');
const quicksilver = require('../assets/images/Quicksilver.png');
const trapClaw = require('../assets/images/TrapClaw.png');
const tg = require('../assets/images/ThiefsGloves.png');
const tol = require('../assets/images/TalismanofLight.png');
const deathblade = require('../assets/images/Deathblade.png');
const gs = require('../assets/images/GiantSlayer.png');
const hoj = require('../assets/images/HandOfJustice.png');
const bv = require('../assets/images/BrambleVest.png');
const tr = require('../assets/images/TitansResolve.png');
const lw = require('../assets/images/LastWhisper.png');

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
  IE: new ItemDto('Infinity edge', 'Critical Strikes deal +100% damage.', new Recipe(basicItems.Gloves, basicItems.BF), ie),
  Gunblade: new ItemDto('Hextech Gunblade', ' Heal for 33% of all damage dealt.', new Recipe(basicItems.BF, basicItems.Rod), gunblade),
  Shojin: new ItemDto('Spear of Shojin', 'After casting, gain 18% of max mana per attack.', new Recipe(basicItems.BF, basicItems.Tear), shojin),
  GA: new ItemDto('Guardian Angel', 'Wearer revives with 400 Health after a 2 sec delay.', new Recipe(basicItems.BF, basicItems.Vest), ga),
  BT: new ItemDto('Bloodthirster', 'Attacks heal for 50% of damage.', new Recipe(basicItems.BF, basicItems.Cloak), bt),
  Zeke: new ItemDto('Zeke\'s Herald', 'On start of combat, allies two spaces to the left and right gain +20% Attack Speed.', new Recipe(basicItems.BF, basicItems.Belt), zeke),
  youmuu: new ItemDto('Youmuu\'s Ghostblade', 'Wearer is also an Assassin.', new Recipe(basicItems.BF, basicItems.Spatula), youmuu),
  FH: new ItemDto('Frozen Heart', 'Adjacent enemies lose 40% Attack Speed for 1 second. (stacking increases the radius of this effect, not the amount of the slow)', new Recipe(basicItems.Vest, basicItems.Tear), fh),
  locket: new ItemDto('Locket of the Iron Solari', 'On start of combat, allies two spaces to the left and right gain a shield of 250/275/350 for 8 seconds. Scales with wearer’s Star Level.', new Recipe(basicItems.Vest, basicItems.Rod), locket),
  thornmail: new ItemDto('Bramble Vest', 'Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 100/140/200 magic damage to all nearby enemies (once every 1 second maximum). Scales with wearer’s Star Level.', new Recipe(basicItems.Vest, basicItems.Vest), bv),
  pd: new ItemDto('Titan’s Resolve', 'When the wearer is hit or inflicts a critical strike, they gain a 2% stacking damage bonus, up to 100%. At 50 stacks, the wearer gains 25 Armor and MR; and increases in size. Resets every round.', new Recipe(basicItems.Vest, basicItems.Recurve), tr),
  sb: new ItemDto('Sword Breaker', 'Attacks have a 33% chance to disarm for 3 seconds.', new Recipe(basicItems.Vest, basicItems.Cloak), sb),
  wm: new ItemDto('Warden\'s Mail', 'Wearer is also a Warden.', new Recipe(basicItems.Vest, basicItems.Spatula), wm),
  rb: new ItemDto('Red Buff', 'Attacks burn and deal 2% of the target max hp.', new Recipe(basicItems.Vest, basicItems.Belt), rb),
  th: new ItemDto('Titanic Hydra', 'Attacks deal 3% of the wearer\'s max HP to the target and the adjacent enemies behind him.', new Recipe(basicItems.Belt, basicItems.Recurve), th),
  Morellonomicon: new ItemDto('Morellonomicon', 'Spells deal burn damage equal to 20% of enemy’s max hp over 10s & reduce healing by 80%.', new Recipe(basicItems.Belt, basicItems.Rod), Morellonomicon),
  Redemption: new ItemDto('Redemption', 'At 30% health heal all nearby allies for 1200 HP.', new Recipe(basicItems.Belt, basicItems.Tear), Redemption),
  Zephyr: new ItemDto('Zephyr', 'On start of combat, banish an enemy for 6 seconds.', new Recipe(basicItems.Belt, basicItems.Cloak), Zephyr),
  warmog: new ItemDto('Warmog\'s Armor', 'Wearer regenerates 6% of max health per second.', new Recipe(basicItems.Belt, basicItems.Belt), warmog),
  fm: new ItemDto('Frozen Mallet', 'Wearer is also a Glacial', new Recipe(basicItems.Belt, basicItems.Spatula), fm),
  guinsoo: new ItemDto('Guinsoo\'s Rageblade', 'Attacks grant 5% Attack Speed. Stacks infinitely.', new Recipe(basicItems.Rod, basicItems.Recurve), guinsoo),
  rabadon: new ItemDto('Rabadon\'s Deathcap', 'Wearer\'s Ability Damage increased by 75%.', new Recipe(basicItems.Rod, basicItems.Rod), rabadon),
  ic: new ItemDto('Inferno\'s Cinder', 'Wearer is also an Inferno.', new Recipe(basicItems.Rod, basicItems.Spatula), ic),
  ionic: new ItemDto('Ionic Spark', 'Enemies within 3 hexes that cast a spell are zapped, taking magic damage qual to 225% of their maximum mana.', new Recipe(basicItems.Rod, basicItems.Cloak), ionic),
  luden: new ItemDto('Luden\'s Echo', 'Deal 150/175/225 splash damage on ability hit. Scales with wearer’s Star Level.', new Recipe(basicItems.Rod, basicItems.Tear), luden),
  Hush: new ItemDto('Hush', '20% chance on hit to prevent the enemy champion from gaining mana for 4 seconds.', new Recipe(basicItems.Cloak, basicItems.Tear), Hush),
  tol: new ItemDto('Talisman of light', 'Wearer is also a Light', new Recipe(basicItems.Cloak, basicItems.Spatula), tol),
  runaan: new ItemDto('Runaan\'s Hurricane', 'Summon a spirit that mirrors your attacks, dealing 60% damage.', new Recipe(basicItems.Cloak, basicItems.Recurve), runaan),
  claw: new ItemDto('Dragon’s Claw', '50% resistance to magic damage.', new Recipe(basicItems.Cloak, basicItems.Cloak), claw),
  statikk: new ItemDto('Stattik Shiv', 'Every 3rd attack deals 85 splash magical damage to 3/4/5 enemies. Scales with wearer’s Star Level.', new Recipe(basicItems.Recurve, basicItems.Tear), statikk),
  rfc: new ItemDto('Rapid Fire Cannon', 'Attack Range is doubled.', new Recipe(basicItems.Recurve, basicItems.Recurve), rfc),
  botrk: new ItemDto('Blade of the Ruined King', 'Wearer is also a Blademaster.', new Recipe(basicItems.Recurve, basicItems.Spatula), botrk),
  fon: new ItemDto('Force of Nature', 'Gain +1 team size.', new Recipe(basicItems.Spatula, basicItems.Spatula), fon),
  mc: new ItemDto('Mage\'s cape', 'Wearer is also a Mage.', new Recipe(basicItems.Spatula, basicItems.Tear), mc),
  seraph: new ItemDto('Seraph\'s Embrace', 'Regain 20 mana after spellcast.', new Recipe(basicItems.Tear, basicItems.Tear), seraph),
  crossBow: new ItemDto('Last Whisper', 'Critical hits reduce the target’s Armor by 90% for 3 seconds. This effect does not stack.', new Recipe(basicItems.Gloves, basicItems.Recurve), lw),
  jg: new ItemDto('Jeweled Gauntlet', 'Your spells can crit', new Recipe(basicItems.Gloves, basicItems.Rod), jg),
  ig: new ItemDto('Iceborn Gauntlet', 'After casting a spell, the wearer\'s next basic attack freezes the target for 2.5 secondes', new Recipe(basicItems.Gloves, basicItems.Vest), ig),
  quicksilver: new ItemDto('Quicksilver', 'Negates the next crowd control applied to you. Refreshes every 3 secondes.', new Recipe(basicItems.Gloves, basicItems.Cloak), quicksilver),
  trapClaw: new ItemDto('Trap Claw', 'On combat begin, gain a spell shield. When it breaks, stun the champion who broke the shield for 4 seconds.', new Recipe(basicItems.Gloves, basicItems.Belt), trapClaw),
  tg: new ItemDto('Thief\'s Gloves', 'Each planning phase, fetch two temporary items, quality based upon the player level. (consumes 3 items slots)', new Recipe(basicItems.Gloves, basicItems.Gloves), tg),
  ba: new ItemDto('Berserker Axe', 'Wearer is also a Berserker', new Recipe(basicItems.Gloves, basicItems.Spatula), ba),
  deathblade: new ItemDto('Deathblade', 'On a kill or assist, gain an additional 15 Attack Damage until end of combat (Stacks infinitely).', new Recipe(basicItems.BF, basicItems.BF), deathblade),
  gs: new ItemDto('Giant Slayer', 'Attacks deal an additional 9% enemy current Health as Physical Damage.', new Recipe(basicItems.BF, basicItems.Recurve), gs),
  hoj: new ItemDto('Hand of Justice', 'Each planning phase gain one: 50% more damage / Gain 50 hp on hit.', new Recipe(basicItems.Tear, basicItems.Gloves), hoj),
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
