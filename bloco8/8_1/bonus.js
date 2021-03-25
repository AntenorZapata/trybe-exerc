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

// return Math.floor(Math.random() * (max - min + 1)) + min;

const damageDragon = (obj) => {
  const damage = Math.floor(Math.random() * (obj.dragon.strength - 15)) + 15;

  return damage;
};

const manaMage = (obj) => {
  const { intelligence, mana } = obj.mage;
  const newObj = {};

  if (mana < 15) {
    newObj.mana = 0;
    newObj.damage = 'Não possui mana suficiente';
  } else {
    newObj.damage =
      Math.floor(Math.random() * (intelligence * 2 - intelligence + 1)) +
      intelligence;
    newObj.mana = 15;
  }
  return newObj;
};

const damageWarior = (obj) => {
  const damage =
    Math.floor(
      Math.random() *
        (obj.warrior.strength * obj.warrior.weaponDmg -
          obj.warrior.strength +
          1)
    ) + obj.warrior.strength;

  return damage;
};
// part II

const gameActions = {
  warriorTurn: (damageWar) => {
    const damage = damageWar(battleMembers);
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageTurn: (mageDam) => {
    const damage = mageDam(battleMembers).damage;
    dragon.healthPoints -= damage;
    mage.mana -= 15;
    mage.damage = damage;
  },
  dragonTurn: (dragonDam) => {
    const damage = dragonDam(battleMembers);
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },
  battleMembers: () => {
    return battleMembers;
  },
};

gameActions.warriorTurn(damageWarior);
gameActions.mageTurn(manaMage);
gameActions.dragonTurn(damageWarior);

console.log(gameActions.battleMembers());
