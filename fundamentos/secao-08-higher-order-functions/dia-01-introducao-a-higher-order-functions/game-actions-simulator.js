const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15)) + 15;

const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;

const mageDamageAndMana = () => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente'
  }
  const data = { damage: (Math.floor(Math.random() * (mage.intelligence * 2) - mage.intelligence) + mage.intelligence), manaSpent: 15}
  return data;
};

// console.log(dragonDamage(), warriorDamage(), mageDamageAndMana());

const gameActions = {
  warriorsTurn: (warriorDamage) => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warrior.damage;
  },
  magesTurn: (mageDamageAndMana) => {
    mage.damage = mageDamageAndMana().damage;
    mage.mana -= mageDamageAndMana().manaSpent;
    dragon.healthPoints -= mage.damage;
  },
  dragonsTurn: (dragonDamage) => {
    dragon.damage = dragonDamage();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  battleMembers: () => {
    gameActions.warriorsTurn;
    gameActions.magesTurn;
    gameActions.dragonsTurn;
  }
}

console.log(warrior.damage, dragon.healthPoints);