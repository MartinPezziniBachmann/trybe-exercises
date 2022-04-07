// Crie HOFs que simulam um turno de batalha em um jogo

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

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength -15)) + 15;

const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;

const mageDamage = () => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  }
  return {
    damage: Math.floor(Math.random() * mage.intelligence) + mage.intelligence,
    manaUsed: 15
  }
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (getDamage) => {
    const damage = getDamage();
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (getDamage) => {
    const damage = getDamage();
    mage.damage = damage.damage;
    dragon.healthPoints -= damage.damage;
    mage.mana -= damage.manaUsed;
  },
  dragonTurn: (getDamage) => {
    const damage = getDamage();
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },
  getBattleMembers: () => {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);
    console.log(battleMembers);
    return battleMembers;
  }
};

console.log(battleMembers);
gameActions.getBattleMembers();