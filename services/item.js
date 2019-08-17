import * as types from '../components/types/bonusTypes'

function basicItem(displayName, bonusType, bonusQuantity) {
    this.displayName = displayName;
    this.bonusType = bonusType;
    this.bonusQuantity = bonusQuantity;
}

function item(displayName, description, recipe) {
    this.displayName = displayName;
    this.description = description;
    this.recipe = recipe;
}

function recipe(item1, item2) {
    this.item1 = item1;
    this.item2 = item2;
}

export const basicItems = {
    Recurve: new basicItem('Recurve bow', types.ATTAQUE_SPEED, 20),
    Tear: new basicItem('Tear of the godess', types.MANA, 20),
    BF: new basicItem('B.F Sword', types.ATTAQUE_DAMAGE, 20),
    Rod: new basicItem('Needlessly large rod', types.ABILITY_POWER, 20),
    Belt: new basicItem('Giant\'s belt', types.HEALTH, 200),
    Cloak: new basicItem('Negatron cloak', types.MAGIC_RESIST, 20),
    Spatula: new basicItem('Spatule', null, null),
    Vest: new basicItem('Chain vest', types.ARMOR, 20)
};

export const items = {
    IE: new item('Infinity edge', 'Grants 150% bonus critical strike damage', new recipe(basicItems.BF, basicItems.BF)),
    DivineSword: new item('Sword of the divine', 'Every second, has a 5% chance to gain 100% critical strike chance until the end of combat', new recipe(basicItems.BF, basicItems.Recurve)),
    Gunblade: new item('Hextech Gunblade', 'Heal for 33% of damage dealt. Does not heal for damage dealt by items', new recipe(basicItems.BF, basicItems.Rod)),
    Shojin: new item('Spear of Shojin', 'After casting Special Ability for the first time, basic attacks restore an additional 15% of maximum mana on-hit', new recipe(basicItems.BF, basicItems.Tear)),
    GA: new item('Guardian Angel', 'Upon death, clears Grievous Wounds and revives after 2 seconds with 1000 health.', [new recipe(basicItems.BF, basicItems.Vest)]),
    BT: new item('Bloodthirster', 'Heal for 50% of damage dealt by basic attacks', new recipe(basicItems.BF, basicItems.Cloak)),
    Zeke: new item('Zeke\'s Herald', 'At the beginning of combat, the wearer and the champions two spaces to the left and right of the wearer gain 15% attack speed', new recipe(basicItems.BF, basicItems.Belt)),
    youmuu: new item('Youmuu\'s Ghostblade', 'Becomes an Assassin.'),
}